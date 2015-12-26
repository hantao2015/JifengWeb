using Maochong.BLL;
using Maochong.Model;
using System;
using System.Collections.Generic;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace MaoChong.Web
{
    public partial class PurchaseHistory : Page
    {


        protected void Page_Load(object sender, EventArgs e)
        {
            this.Master.CheckLogin();
            if (!base.IsPostBack)
            {
                UserModel model = this.Session["webUser"] as UserModel;
                List<IntegralConsumeModel> modelList = new IntegralConsumeBLL().GetModelList(" and C3_409148801781='" + model.Mobile + "' ");
                this.Repeater1.DataSource = modelList;
                this.Repeater1.DataBind();
            }
        }

        public string ShowScore(object score)
        {
            if ((score == null) || (score == DBNull.Value))
            {
                return "";
            }
            int result = 0;
            if (!int.TryParse(score.ToString(), out result))
            {
                return "错误";
            }
            if (result < 0)
            {
                return ("<span style='color:Red'>" + result.ToString() + "</span>");
            }
            return result.ToString();
        }



    }
}