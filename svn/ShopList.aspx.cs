using Maochong.BLL;
using Maochong.Model;
using System;
using System.Collections.Generic;
using System.Web.UI;
using System.Web.UI.WebControls;
using Wuqi.Webdiyer;
namespace MaoChong.Web
{
    public partial class ShopList : System.Web.UI.Page
    {
        private int pageSize = 9;
        protected void AspNetPager1_PageChanged(object sender, EventArgs e)
        {
            int typeID = int.Parse(this.HiddenField_TypeID.Value);
            int integralID = int.Parse(this.HiddenField_IntegralID.Value);
            this.BandProduct(this.AspNetPager1.CurrentPageIndex, typeID, integralID);
        }

        public void BandProduct(int pageIndex, int typeID, int integralID)
        {
            int totalRowNum = 0;
            List<ProductModel> list = new ProductBLL().GetModelListByPage(typeID, integralID, pageIndex, this.pageSize, string.Empty, string.Empty, out totalRowNum);
            this.AspNetPager1.PageSize=this.pageSize;
            this.AspNetPager1.CurrentPageIndex=pageIndex;
            this.AspNetPager1.RecordCount=totalRowNum;
            this.Repeater_product.DataSource = list;
            this.Repeater_product.DataBind();
        }

        protected void btn_exChange_Click(object sender, EventArgs e)
        {
            Button button = sender as Button;
            int num = int.Parse(button.CommandArgument);
            base.Response.Redirect("Shopshow.aspx?TypeID=" + this.HiddenField_TypeID.Value + "&IntegralID=" + this.HiddenField_IntegralID.Value + "&ProductID=" + num.ToString());
        }

        protected void Page_Load(object sender, EventArgs e)
        {
            this.Master.CheckLogin();
            if (!base.IsPostBack)
            {
                string str = base.Request.QueryString["TypeID"];
                int result = 0;
                string str2 = base.Request.QueryString["IntegralID"];
                int num2 = 1;
                if (string.IsNullOrEmpty(str))
                {
                    result = new ProductTypeBLL().GetFirstIDByOrderBy(string.Empty);
                }
                else if (!int.TryParse(str, out result))
                {
                    base.ClientScript.RegisterStartupScript(base.GetType(), "", "<script>alert('传参错误!');window.history.back();</script>");
                    return;
                }
                if (!string.IsNullOrEmpty(str2) && !int.TryParse(str2, out num2))
                {
                    base.ClientScript.RegisterStartupScript(base.GetType(), "", "<script>alert('传参错误!');window.history.back();</script>");
                }
                else
                {
                    this.HiddenField_TypeID.Value = result.ToString();
                    this.HiddenField_IntegralID.Value = num2.ToString();
                    this.BandProduct(1, result, num2);
                }
            }
        }

    }
}