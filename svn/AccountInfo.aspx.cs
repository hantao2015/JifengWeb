using Maochong.BLL;
using Maochong.Model;
using System;
using System.Text.RegularExpressions;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace MaoChong.Web
{
    public partial class AccountInfo : System.Web.UI.Page
    {
        protected void btn_save_Click(object sender, EventArgs e)
        {
            if (this.CheckInpu())
            {
                UserModel model = this.Session["webUser"] as UserModel;
                model.Call = this.rbt_call.SelectedValue;
                model.Name = this.txt_name.Text.Trim();
                if (!string.IsNullOrEmpty(this.GFDateValue.Value))
                {
                    model.Birthday = DateTime.Parse(this.GFDateValue.Value);
                }
                string[] strArray = this.HiddenProvinceCity.Value.Split(new char[] { '-' });
                if (strArray.Length >= 2)
                {
                    model.Province = strArray[0];
                    model.City = strArray[1];
                }
                model.MailingAddress = this.txt_address.Text.Trim();
                if (!string.IsNullOrEmpty(this.txt_phone.Text.Trim()))
                {
                    model.Phone = this.txt_phone.Text.Trim();
                }
                else
                {
                    model.Phone = string.Empty;
                }
                if (!string.IsNullOrEmpty(this.txt_zipCode.Text.Trim()))
                {
                    model.ZipCode = this.txt_zipCode.Text.Trim();
                }
                else
                {
                    model.ZipCode = string.Empty;
                }
                if (!string.IsNullOrEmpty(this.txt_nike.Text.Trim()))
                {
                    model.Nick = this.txt_nike.Text.Trim();
                }
                else
                {
                    model.Nick = string.Empty;
                }
                model.InfoComplete = 1;
                UserBLL rbll = new UserBLL();
                if (rbll.EidtRow(model))
                {
                    base.ClientScript.RegisterStartupScript(base.GetType(), "", "<script>alert('修改成功!');window.location='AccountInfo.aspx';</script>");
                }
                else
                {
                    base.ClientScript.RegisterStartupScript(base.GetType(), "", "<script>alert('修改失败!');</script>");
                }
            }
        }

        public bool CheckInpu()
        {
            string str = this.txt_phone.Text.Trim();
            string str2 = this.txt_zipCode.Text.Trim();
            string str3 = this.txt_name.Text.Trim();
            string str4 = this.txt_address.Text.Trim();
            if ((((this.rbt_call.Items == null) || (this.rbt_call.Items.Count <= 0)) || (this.rbt_call.SelectedValue == "")) || (this.rbt_call.SelectedValue == "0"))
            {
                base.ClientScript.RegisterStartupScript(base.GetType(), "", "<script>alert('请选择称谓!');</script>");
                return false;
            }
            if (string.IsNullOrEmpty(str3))
            {
                base.ClientScript.RegisterStartupScript(base.GetType(), "", "<script>alert('名称必填!');</script>");
                return false;
            }
            if (string.IsNullOrEmpty(this.GFDateValue.Value))
            {
                base.ClientScript.RegisterStartupScript(base.GetType(), "", "<script>alert('请选择生日!');</script>");
                return false;
            }
            DateTime now = DateTime.Now;
            if (!DateTime.TryParse(this.GFDateValue.Value, out now))
            {
                base.ClientScript.RegisterStartupScript(base.GetType(), "", "<script>alert('生日选择错误!');</script>");
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
            if (string.IsNullOrEmpty(this.txt_address.Text.Trim()))
            {
                base.ClientScript.RegisterStartupScript(base.GetType(), "", "<script>alert('请邮寄地址!');</script>");
                return false;
            }
            if (!string.IsNullOrEmpty(str))
            {
                Regex regex = new Regex(@"^(\d{3,4}-)?\d{6,8}$");
                if (!regex.IsMatch(str))
                {
                    base.ClientScript.RegisterStartupScript(base.GetType(), "", "<script>alert('请输入正确的固定电话!');</script>");
                    return false;
                }
            }
            if (!string.IsNullOrEmpty(str2))
            {
                Regex regex2 = new Regex(@"^\d{6}$");
                if (!regex2.IsMatch(str2))
                {
                    base.ClientScript.RegisterStartupScript(base.GetType(), "", "<script>alert('邮编格式错误!');</script>");
                    return false;
                }
            }
            return true;
        }

        protected void Page_Load(object sender, EventArgs e)
        {
            this.Master.CheckLogin();
            if (!base.IsPostBack)
            {
                UserModel model = this.Session["webUser"] as UserModel;
                this.Literal_mobie.Text = model.Mobile;
                this.Literal_email.Text = model.Email;
                if (this.rbt_call.Items.FindByValue(model.Call) != null)
                {
                    this.rbt_call.Items.FindByValue(model.Call).Selected = true;
                }
                this.txt_name.Text = model.Name;
                this.GFDateValue.Value = model.Birthday.ToString("yyyy-MM-dd");
                if ((model.Province.Length > 0) && (model.City.Length > 0))
                {
                    this.HiddenProvinceCity.Value = model.Province + "-" + model.City;
                }
                this.txt_address.Text = model.MailingAddress;
                this.txt_phone.Text = model.Phone;
                this.txt_zipCode.Text = model.ZipCode;
                this.txt_nike.Text = model.Nick;
            }
        }
    }
    }