using Maochong.BLL;
using Maochong.Model;
using System;
using System.Text.RegularExpressions;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace MaoChong.Web
{
    public partial class Exchange : System.Web.UI.Page
    {
        protected void Button1_Click(object sender, EventArgs e)
        {
            string input = this.txt_securityCode.Text.Trim();
            Regex regex = new Regex(@"\w{6,30}");
            if (!regex.IsMatch(input))
            {
                base.ClientScript.RegisterStartupScript(base.GetType(), "", "<script>alert('你输入的识别码错误，请重新输入!');</script>");
            }
            UserModel model = this.Session["webUser"] as UserModel;
            SecurityCodeBLL ebll = new SecurityCodeBLL();
            int exChangeScore = 0;
            switch (ebll.ExChangeBySecurityCode(input, DateTime.Now, model.Mobile, out exChangeScore))
            {
                case -2:
                    base.ClientScript.RegisterStartupScript(base.GetType(), "", "<script>alert('你输入的识别码错误，请重新输入!');</script>");
                    break;

                case -1:
                    base.ClientScript.RegisterStartupScript(base.GetType(), "", "<script>alert('你输入的识别码错误，请重新输入!');</script>");
                    break;

                case 0:
                    base.ClientScript.RegisterStartupScript(base.GetType(), "", "<script>alert('你输入的识别码错误，请重新输入!');</script>");
                    break;

                case 1:
                    base.ClientScript.RegisterStartupScript(base.GetType(), "", "<script>alert('你输入的识别码错误，请重新输入!');</script>");
                    break;

                case 2:
                    base.ClientScript.RegisterStartupScript(base.GetType(), "", "<script>alert('你输入的识别码错误，请重新输入!');</script>");
                    break;

                case 3:
                    this.Literal_score.Text = exChangeScore.ToString();
                   // this.Literal_tips.Text = "<script>showWin();</script>";
                    break;
            }
        }

        protected void Page_Load(object sender, EventArgs e)
        {
            this.Master.CheckLogin();
        }
    }
}