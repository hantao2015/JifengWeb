using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using Maochong.BLL;
using Maochong.Model;

namespace MaoChong.Web
{
    public partial class Login : System.Web.UI.Page
    {
    
        protected void Page_Load(object sender, EventArgs e)
        {

        }
        public bool CheckInpu()
        {
            
            string str = this.txt_loginName.Text.Trim();
            string str2 = this.txt_password.Text.Trim();
            string str3 = this.txt_code.Text.Trim();
            bool flag = true;
            if (string.IsNullOrEmpty(str))
            {
                base.ClientScript.RegisterStartupScript(base.GetType(), "", "<script>alert('用户名不能为空!');</script>");
                flag = false;
            }
            if (string.IsNullOrEmpty(str2))
            {
                base.ClientScript.RegisterStartupScript(base.GetType(), "", "<script>alert('密码不能为空!');</script>");
                flag = false;
            }
            if (string.IsNullOrEmpty(str3))
            {
                base.ClientScript.RegisterStartupScript(base.GetType(), "", "<script>alert('验证码不能为空!');</script>");
                return false;
            }
            if (this.Session["CheckCode"] == null)
            {
                base.ClientScript.RegisterStartupScript(base.GetType(), "", "<script>alert('请刷新验证码!');</script>");
                flag = false;
            }
            if (str3.ToLower() != this.Session["CheckCode"].ToString().ToLower())
            {
                this.txt_code.Text = "";
                base.ClientScript.RegisterStartupScript(base.GetType(), "", "<script>alert('验证码错误!');</script>");
                flag = false;
            }
            return flag;
        }
        protected void btn_login_Click(object sender, EventArgs e)
        {
            if (!this.CheckInpu())
            {
                this.txt_code.Text = "";
            }
            else
            {
                string mobile = this.txt_loginName.Text.Trim();
                string str2 = this.txt_password.Text.Trim();
                string str3 = this.txt_code.Text.Trim();
                UserBLL rbll = new UserBLL();
                UserModel modelByMobile = rbll.GetModelByMobile(mobile);
                if (modelByMobile == null)
                {
                    modelByMobile = rbll.GetModelByEmail(mobile);
                }
                if (modelByMobile == null)
                {
                    base.ClientScript.RegisterStartupScript(base.GetType(), "", "<script>alert('会员未注册,请点击免费注册!');</script>");
                }
                else if (modelByMobile.Password != str2)
                {
                    base.ClientScript.RegisterStartupScript(base.GetType(), "", "<script>alert('密码错误，请重新输入!');</script>");
                }
                else
                {
                    this.Session["webUser"] = modelByMobile;
                    if (modelByMobile.InfoComplete == 0)
                    {
                        base.Response.Redirect("~/AccountInfo.aspx");
                    }
                    else
                    {
                        base.Response.Redirect("~/Integral.aspx");
                    }
                }
            }
        }

    }
}