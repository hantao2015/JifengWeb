using Maochong.Model;
using System;
using System.Web.UI;
using System.Web.UI.WebControls;
namespace MaoChong.Web
{
    public partial class Integral : System.Web.UI.Page
    {
        protected void Page_Load(object sender, EventArgs e)
        {
            this.Master.CheckLogin();
            if (!base.IsPostBack)
            {
                this.Master.UpdateLoginUser();
                UserModel model = this.Session["webUser"] as UserModel;
                this.Literal_integral.Text = model.UsableScore.ToString();
            }
        }
 
    }
}