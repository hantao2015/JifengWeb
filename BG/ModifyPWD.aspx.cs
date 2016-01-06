using Maochong.BLL;
using Maochong.Model;
using System;
using System.Text.RegularExpressions;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace MaoChong.Web
{
    public partial class ModifyPWD : System.Web.UI.Page
    {

        protected void btn_save_Click(object sender, EventArgs e)
        {
            if (this.CheckInpu())
            {
                string str = this.txt_newPwd.Text.Trim();
                UserBLL rbll = new UserBLL();
                UserModel model = this.Session["webUser"] as UserModel;
                model.Password = str;
                if (rbll.EidtRow(model))
                {
                    this.Session["webUser"] = null;
                    base.Response.Redirect("ModifyPWD2.aspx");
                }
                else
                {
                    base.ClientScript.RegisterStartupScript(base.GetType(), "", "<script>alert('修改失败!');</script>");
                }
            }
        }

        public bool CheckInpu()
        {
            string str = this.txt_oldPwd.Text.Trim();
            string str2 = this.txt_newPwd.Text.Trim();
            string str3 = this.txt_confirmPwd.Text.Trim();
            Regex regex = new Regex(@"^\w{6,20}$");
            if (string.IsNullOrEmpty(str))
            {
                base.ClientScript.RegisterStartupScript(base.GetType(), "", "<script>alert('原密码必填!');</script>");
                return false;
            }
            if (string.IsNullOrEmpty(str2))
            {
                base.ClientScript.RegisterStartupScript(base.GetType(), "", "<script>alert('新密码必填!');</script>");
                return false;
            }
            if (string.IsNullOrEmpty(str3))
            {
                base.ClientScript.RegisterStartupScript(base.GetType(), "", "<script>alert('确认密码必填!');</script>");
                return false;
            }
            if (!(regex.IsMatch(str2) && regex.IsMatch(str3)))
            {
                base.ClientScript.RegisterStartupScript(base.GetType(), "", "<script>alert('密码位数不符!');</script>");
                return false;
            }
            if (str2 != str3)
            {
                base.ClientScript.RegisterStartupScript(base.GetType(), "", "<script>alert('确认密码不符!');</script>");
                return false;
            }
            if (!regex.IsMatch(str))
            {
                base.ClientScript.RegisterStartupScript(base.GetType(), "", "<script>alert('密码位数不符或密码有误!');</script>");
                return false;
            }
            UserModel model = this.Session["webUser"] as UserModel;
            if (model.Password != str)
            {
                base.ClientScript.RegisterStartupScript(base.GetType(), "", "<script>alert('密码位数不符或密码有误!');</script>");
                return false;
            }
            return true;
        }

        protected void Page_Load(object sender, EventArgs e)
        {
            this.Master.CheckLogin();
        }

    }
}