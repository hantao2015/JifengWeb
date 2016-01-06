using Maochong.BLL;
using Maochong.Model;
using System;
using System.Collections.Generic;
using System.Text.RegularExpressions;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace MaoChong.Web
{
    public partial class ShopSubmitCopy : System.Web.UI.Page
    {

        private List<PostAddressModel> AddDefaultItem(List<PostAddressModel> sourceList)
        {
            UserModel loginUser = this.Master.GetLoginUser();
            PostAddressModel item = new PostAddressModel();
            item.ID = 0;
            item.Province = loginUser.Province;
            item.City = loginUser.City;
            item.Email = loginUser.Email;
            item.MailingAddress = loginUser.MailingAddress;
            item.Mobile = loginUser.Mobile;
            item.Name = loginUser.Name;
            item.Phone = loginUser.Phone;
            item.ZipCode = loginUser.ZipCode;
            sourceList.Insert(0, item);
            return sourceList;
        }

        public void BandEmailArddress()
        {
            UserModel loginUser = this.Master.GetLoginUser();
            List<PostAddressModel> modelList = new PostAddressBLL().GetModelList(loginUser.Mobile);
            modelList = this.AddDefaultItem(modelList);
            this.Repeater_address.DataSource = modelList;
            this.Repeater_address.DataBind();
        }

        public void BandProduct()
        {
            int num = 0;
            UserModel loginUser = this.Master.GetLoginUser();
            List<ShopCartModel> modelList = new ShopCartBLL().GetModelList(loginUser.Mobile,loginUser );
            foreach (ShopCartModel model2 in modelList)
            {
                num += model2.Integral;
            }
            this.Repeater_Product.DataSource = modelList;
            this.Repeater_Product.DataBind();
            this.Literal_totalIntegral.Text = num.ToString();
            this.Literal_usedIntegral.Text = loginUser.UsableScore.ToString();
        }

        protected void Button1_Click(object sender, EventArgs e)
        {
            int num = 0;
            UserModel loginUser = this.Master.GetLoginUser();
            ShopCartBLL tbll = new ShopCartBLL();
            List<ShopCartModel> modelList = tbll.GetModelList(loginUser.Mobile,loginUser );
            foreach (ShopCartModel model2 in modelList)
            {
                num += model2.Integral;
            }
            if (loginUser.UsableScore < num)
            {
                base.ClientScript.RegisterStartupScript(base.GetType(), "", "<script>alert('可用积分不足!请兑换积分或删除已购物品！');</script>");
            }
            else
            {
                OrderBLL rbll = new OrderBLL();
                foreach (ShopCartModel model2 in modelList)
                {
                    OrderModel model = new OrderModel();
                    model.Mobile = loginUser.Mobile;
                    model.UserName = loginUser.Name;
                    model.UserNick = loginUser.Nick;
                    model.Phone = loginUser.Phone;
                    model.OrderTime = DateTime.Now;
                    model.ProductID = model2.ProductID;
                    model.ProductName = model2.ProductName;
                    model.ProductUnit = model2.Unit;
                    model.Integral = model2.Integral;
                    model.ExChangeNum = model2.ProductNum;
                    model.AddressID = int.Parse(this.HiddenField_AddressID.Value);
                    rbll.AddRow(model);
                    tbll.DeleteRow(model2.ID);
                }
                this.Master.UpdateLoginUser();
                this.BandProduct();
                base.ClientScript.RegisterStartupScript(base.GetType(), "", "<script>alert('兑换成功！');</script>");
            }
        }

        public bool CheckInput()
        {
            string str = this.txt_userName.Text.Trim();
            string str2 = this.txt_mobile.Text.Trim();
            string str3 = this.txt_email.Text.Trim();
            string str4 = this.txt_zipCode.Text.Trim();
            if (string.IsNullOrEmpty(str))
            {
                base.ClientScript.RegisterStartupScript(base.GetType(), "", "<script>alert('收货人姓名必填!');</script>");
                return false;
            }
            if (string.IsNullOrEmpty(this.HiddenProvinceCity.Value))
            {
                base.ClientScript.RegisterStartupScript(base.GetType(), "", "<script>alert('请选择省份与城市!');</script>");
                return false;
            }
            if (this.HiddenProvinceCity.Value.Split(new char[] { '-' }).Length < 2)
            {
                base.ClientScript.RegisterStartupScript(base.GetType(), "", "<script>alert('请选择省份与城市!');</script>");
                return false;
            }
            if (string.IsNullOrEmpty(this.txt_Address.Text.Trim()))
            {
                base.ClientScript.RegisterStartupScript(base.GetType(), "", "<script>alert('请邮寄地址!');</script>");
                return false;
            }
            if (string.IsNullOrEmpty(str2))
            {
                base.ClientScript.RegisterStartupScript(base.GetType(), "", "<script>alert('手机必填!');</script>");
                return false;
            }
            Regex regex = new Regex(@"^[1]+[3,5,6,7,8]+\d{9}");
            if (!regex.IsMatch(str2))
            {
                base.ClientScript.RegisterStartupScript(base.GetType(), "", "<script>alert('请输入正确的手机号码!');</script>");
                return false;
            }
            if (!string.IsNullOrEmpty(str3))
            {
                Regex regex2 = new Regex(@"\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*");
                if (!regex2.IsMatch(str3))
                {
                    base.ClientScript.RegisterStartupScript(base.GetType(), "", "<script>alert('邮箱格式错误!');</script>");
                    return false;
                }
            }
            if (!string.IsNullOrEmpty(str4))
            {
                Regex regex3 = new Regex(@"^\d{6}$");
                if (!regex3.IsMatch(str4))
                {
                    base.ClientScript.RegisterStartupScript(base.GetType(), "", "<script>alert('邮编格式错误!');</script>");
                    return false;
                }
            }
            if (string.IsNullOrEmpty(this.HiddenField_AddressID.Value))
            {
                base.ClientScript.RegisterStartupScript(base.GetType(), "", "<script>alert('请选择邮送地址!');</script>");
                return false;
            }
            int result = 0;
            if (!int.TryParse(this.HiddenField_AddressID.Value, out result))
            {
                base.ClientScript.RegisterStartupScript(base.GetType(), "", "<script>alert('邮送地址不正确!');</script>");
                return false;
            }
            return true;
        }

        protected void Ibtn_Add_Click(object sender, ImageClickEventArgs e)
        {
            if (this.CheckInput())
            {
                UserModel loginUser = this.Master.GetLoginUser();
                PostAddressBLL sbll = new PostAddressBLL();
                PostAddressModel model = new PostAddressModel();
                model.Name = this.txt_userName.Text.Trim();
                model.Mobile = loginUser.Mobile;
                string[] strArray = this.HiddenProvinceCity.Value.Split(new char[] { '-' });
                if (strArray.Length >= 2)
                {
                    model.Province = strArray[0];
                    model.City = strArray[1];
                }
                model.MailingAddress = this.txt_Address.Text.Trim();
                model.Phone = this.txt_mobile.Text.Trim();
                model.ZipCode = this.txt_zipCode.Text.Trim();
                model.Email = this.txt_email.Text.Trim();
                if (sbll.AddRow(model))
                {
                    this.BandEmailArddress();
                    base.ClientScript.RegisterStartupScript(base.GetType(), "", "<script>alert('添加成功!');</script>");
                }
                else
                {
                    base.ClientScript.RegisterStartupScript(base.GetType(), "", "<script>alert('添加失败!');</script>");
                }
            }
        }

        protected void Ibtn_DelAddress_Click(object sender, EventArgs e)
        {
            ImageButton button = sender as ImageButton;
            int id = int.Parse(button.CommandArgument);
            PostAddressBLL sbll = new PostAddressBLL();
            if (sbll.DeleteRow(id))
            {
                this.BandEmailArddress();
                base.ClientScript.RegisterStartupScript(base.GetType(), "", "<script>alert('删除成功!');</script>");
            }
            else
            {
                base.ClientScript.RegisterStartupScript(base.GetType(), "", "<script>alert('删除失败!');</script>");
            }
        }

        protected void Ibtn_Delete_Click(object sender, EventArgs e)
        {
            ImageButton button = sender as ImageButton;
            int id = int.Parse(button.CommandArgument);
            ShopCartBLL tbll = new ShopCartBLL();
            if (tbll.DeleteRow(id))
            {
                this.BandProduct();
                base.ClientScript.RegisterStartupScript(base.GetType(), "", "<script>alert('删除成功!');</script>");
            }
            else
            {
                base.ClientScript.RegisterStartupScript(base.GetType(), "", "<script>alert('删除失败!');</script>");
            }
        }

        protected void Page_Load(object sender, EventArgs e)
        {
            this.Master.CheckLogin();
            if (!base.IsPostBack)
            {
                this.Master.UpdateLoginUser();
                this.BandProduct();
                this.BandEmailArddress();
            }
        }

    }
}