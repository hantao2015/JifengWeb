using Maochong.BLL;
using Maochong.Model;
using System;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace MaoChong.Web
{
    public partial class Shopshow : System.Web.UI.Page
    {
        protected void Button1_Click(object sender, EventArgs e)
        {
            string str = this.txt_exChangeNum.Text.Trim();
            int result = 0;
            if (string.IsNullOrEmpty(str))
            {
                base.ClientScript.RegisterStartupScript(base.GetType(), "", "<script>alert('请填写兑换数量!');window.history.back();</script>");
            }
            else if (!int.TryParse(str, out result))
            {
                base.ClientScript.RegisterStartupScript(base.GetType(), "", "<script>alert('请正确填写兑换数量!');window.history.back();</script>");
            }
            else if (this.Session["webUser"] == null)
            {
                base.Response.Redirect("Login.aspx");
            }
            else
            {
                UserModel model = this.Session["webUser"] as UserModel;
                ProductBLL tbll = new ProductBLL();
                ShopCartBLL tbll2 = new ShopCartBLL();
                ProductModel model2 = tbll.GetModel((int)this.ViewState["ProductID"]);
                ShopCartModel model3 = new ShopCartModel();
                model3.Mobile = model.Mobile;
                model3.ProductID = model2.ID;
                model3.ProductName = model2.Name;
                model3.ProductNum = result;
                model3.Unit = model2.Unit;
                model3.Integral = result * model2.Integral;
                if (tbll2.AddRow(model3))
                {
                    base.Response.Redirect("ShopCart.aspx");
                }
                else
                {
                    base.ClientScript.RegisterStartupScript(base.GetType(), "", "<script>alert('操作失败，请重试!');window.history.back();</script>");
                }
            }
        }

        protected void Page_Load(object sender, EventArgs e)
        {
            this.Master.CheckLogin();
            if (!base.IsPostBack)
            {
                string str = base.Request.QueryString["ProductID"];
                int result = 0;
                string str2 = base.Request.QueryString["TypeID"];
                int firstIDByOrderBy = 0;
                string str3 = base.Request.QueryString["IntegralID"];
                int num3 = 1;
                if (string.IsNullOrEmpty(str))
                {
                    base.ClientScript.RegisterStartupScript(base.GetType(), "", "<script>alert('传参错误!');window.history.back();</script>");
                }
                else if (!int.TryParse(str, out result))
                {
                    base.ClientScript.RegisterStartupScript(base.GetType(), "", "<script>alert('传参错误!');window.history.back();</script>");
                }
                else
                {
                    if (string.IsNullOrEmpty(str2))
                    {
                        firstIDByOrderBy = new ProductTypeBLL().GetFirstIDByOrderBy(string.Empty);
                    }
                    else if (!int.TryParse(str2, out firstIDByOrderBy))
                    {
                        base.ClientScript.RegisterStartupScript(base.GetType(), "", "<script>alert('传参错误!');window.history.back();</script>");
                        return;
                    }
                    if (!string.IsNullOrEmpty(str3) && !int.TryParse(str3, out num3))
                    {
                        base.ClientScript.RegisterStartupScript(base.GetType(), "", "<script>alert('传参错误!');window.history.back();</script>");
                    }
                    else
                    {
                        this.HiddenField_TypeID.Value = firstIDByOrderBy.ToString();
                        this.HiddenField_IntegralID.Value = num3.ToString();
                        this.ViewState["ProductID"] = result;
                        this.ShowInfo(result);
                    }
                }
            }
        }

        public void ShowInfo(int productID)
        {
            ProductModel model = new ProductBLL().GetModel(productID);
            this.Literal_top_name.Text = model.Name;
            this.Literal_image.Text = "<img src='ProductImg.ashx?ID=" + model.ID + "' width='267' height='251' />";
            this.Literal_title_Note.Text = model.Note;
            this.Literal_title_SKU.Text = model.SKU;
            this.Literal_title_Unit.Text = model.Unit;
            this.Literal_title_Integral.Text = model.Integral.ToString();
            this.Literal_Note.Text = model.Note;
            this.Literal_Name.Text = model.Name;
            this.Literal_ModelNo.Text = model.ModelNo;
            this.Literal_Scent.Text = model.Scent;
            this.Literal_Standard.Text = model.Standard;
            this.Literal_Unit.Text = model.Unit;
            this.Literal_Content.Text = model.Content;
        }
    }
}