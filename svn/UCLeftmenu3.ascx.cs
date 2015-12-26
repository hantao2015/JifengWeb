using Maochong.BLL;
using Maochong.Model;
using System;
using System.Collections.Generic;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace MaoChong.Web
{
    public partial class UCLeftmenu3 : System.Web.UI.UserControl
    {
        public void BandPorductType()
        {
            List<ProductTypeModel> modelList = new ProductTypeBLL().GetModelList();
            this.Repeater_type.DataSource = modelList;
            this.Repeater_type.DataBind();
        }
        protected void Page_Load(object sender, EventArgs e)
        {
            if (!base.IsPostBack)
            {
                this.ShowIntegral();
                this.BandPorductType();
            }
        }
        public void ShowIntegral()
        {
            if (base.Session["webUser"] != null)
            {
                UserModel model = base.Session["webUser"] as UserModel;
                if (!string.IsNullOrEmpty(model.Name))
                {
                    this.Literal_userName.Text = model.Name;
                }
                else if (!string.IsNullOrEmpty(model.Nick))
                {
                    this.Literal_userName.Text = model.Nick;
                }
                else
                {
                    this.Literal_userName.Text = model.Mobile;
                }
                this.Literal_Integral.Text = model.UsableScore.ToString();
                int numByMobile = new ShopCartBLL().GetNumByMobile(model.Mobile);
                if (numByMobile > 0)
                {
                    this.Literal_ShopCartNum.Text = "<a href='ShopCart.aspx'>(<span>" + numByMobile.ToString() + "</span>)去购物车兑换</a>";
                }
                else
                {
                    this.Literal_ShopCartNum.Text = "(<span>0</span>)购物车尚无商品!</a>";
                }
            }
            else
            {
                base.Response.Redirect("login.aspx");
            }
        }

    }
}