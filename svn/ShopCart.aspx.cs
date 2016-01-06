using Maochong.BLL;
using Maochong.Model;
using System;
using System.Collections.Generic;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace MaoChong.Web
{
    public partial class ShopCart : System.Web.UI.Page
    {
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
            if ((modelList == null) || (modelList.Count == 0))
            {
                this.btn_exChange.Visible = false;
            }
            else
            {
                this.btn_exChange.Visible = true;
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
            }
        }

    }
}