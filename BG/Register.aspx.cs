using Maochong.BLL;
using Maochong.Model;
using System;
using System.Text.RegularExpressions;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace MaoChong.Web
{
    public partial class Register : System.Web.UI.Page
    {

        protected void btn_addUser_Click(object sender, EventArgs e)
        {
            if (this.CheckInpu())
            {
                UserBLL rbll = new UserBLL();
                UserModel modelByMobile = new UserModel();
                modelByMobile.Mobile = this.txt_mobie.Text.Trim();
                modelByMobile.Email = this.txt_email.Text.Trim();
                modelByMobile.Password = this.txt_Pwd.Text.Trim();
                if (rbll.AddRow(modelByMobile))
                {
                    modelByMobile = rbll.GetModelByMobile(modelByMobile.Mobile);
                    this.Session["webUser"] = modelByMobile;
                    base.Response.Redirect("AccountInfo.aspx");
                }
                else
                {
                    base.ClientScript.RegisterStartupScript(base.GetType(), "", "<script>alert('添加失败，请重试!');</script>");
                }
            }
        }

        public bool CheckInpu()
        {
            string str = this.txt_mobie.Text.Trim();
            string str2 = this.txt_email.Text.Trim();
            string str3 = this.txt_Pwd.Text.Trim();
            string str4 = this.txt_confirmPwd.Text.Trim();
            if (string.IsNullOrEmpty(str))
            {
                base.ClientScript.RegisterStartupScript(base.GetType(), "", "<script>alert('手机必填!');</script>");
                return false;
            }
            Regex regex = new Regex(@"^[1]+[3,5,6,7,8]+\d{9}");
            if (!regex.IsMatch(str))
            {
                base.ClientScript.RegisterStartupScript(base.GetType(), "", "<script>alert('请输入正确的手机号码!');</script>");
                return false;
            }
            if (string.IsNullOrEmpty(str2))
            {
                base.ClientScript.RegisterStartupScript(base.GetType(), "", "<script>alert('邮箱必填!');</script>");
                return false;
            }
            Regex regex2 = new Regex(@"\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*");
            if (!regex2.IsMatch(str2))
            {
                base.ClientScript.RegisterStartupScript(base.GetType(), "", "<script>alert('邮箱格式错误!');</script>");
                return false;
            }
            if (string.IsNullOrEmpty(str3))
            {
                base.ClientScript.RegisterStartupScript(base.GetType(), "", "<script>alert('密码必填!');</script>");
                return false;
            }
            Regex regex3 = new Regex(@"^\w{6,20}$");
            if (!regex3.IsMatch(str3))
            {
                base.ClientScript.RegisterStartupScript(base.GetType(), "", "<script>alert('密码格式错误!');</script>");
                return false;
            }
            if (string.IsNullOrEmpty(str4))
            {
                base.ClientScript.RegisterStartupScript(base.GetType(), "", "<script>alert('确认密码必填!');</script>");
                return false;
            }
            Regex regex4 = new Regex(@"^\w{6,20}$");
            if (!regex4.IsMatch(str4))
            {
                base.ClientScript.RegisterStartupScript(base.GetType(), "", "<script>alert('确认密码格式错误!');</script>");
                return false;
            }
            if (str3 != str4)
            {
                base.ClientScript.RegisterStartupScript(base.GetType(), "", "<script>alert('两次密码不一致!');</script>");
                return false;
            }
            UserBLL rbll = new UserBLL();
            if (rbll.ExistsMobie(str))
            {
                base.ClientScript.RegisterStartupScript(base.GetType(), "", "<script>alert('手机号已存在，请更换!');</script>");
                return false;
            }
            if (rbll.ExistsEmail(str2))
            {
                base.ClientScript.RegisterStartupScript(base.GetType(), "", "<script>alert('邮箱已存在，请更换!');</script>");
                return false;
            }
            return true;
        }
        protected void Page_Load(object sender, EventArgs e)
        {

        }
    }
}