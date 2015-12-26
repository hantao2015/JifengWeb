using Maochong.BLL;
using Maochong.Lib;
using Maochong.Model;
using System;
using System.Text.RegularExpressions;
using System.Web.UI;
using System.Web.UI.WebControls;

namespace MaoChong.Web
{
    public partial class RetrievePWD : System.Web.UI.Page
    {

        protected void Button1_Click(object sender, EventArgs e)
        {
            //if (this.CheckInpu())
            //{
            //    string mobile = this.txt_mobile.Text.Trim();
            //    string toEmail = this.txt_email.Text.Trim();
            //    Random random = new Random();
            //    string str3 = random.Next(0xf4240, 0x989680).ToString();
            //    string titel = "员工积分找回密码";
            //    string body = "尊敬的会员，您好。您的密码已修改为 " + str3 + " 请妥善保管。";
            //    string outInfo = "";
            //    EmailHelper helper = new EmailHelper();
            //    if (helper.SendEmail(toEmail, titel, body, out outInfo))
            //    {
            //        UserBLL rbll = new UserBLL();
            //        UserModel modelByMobile = rbll.GetModelByMobile(mobile);
            //        modelByMobile.Password = str3;
            //        rbll.EidtRow(modelByMobile);
            //        base.Response.Redirect("~/RetrievePWD2.aspx");
            //    }
            //    else
            //    {
            //        base.ClientScript.RegisterStartupScript(base.GetType(), "", "<script>alert('发送邮件失败，检查邮箱是否存在!');</script>");
            //    }
            //}
        }

        public bool CheckInpu()
        {
            //string str = this.txt_mobile.Text.Trim();
            //string str2 = this.txt_email.Text.Trim();
            //if (string.IsNullOrEmpty(str))
            //{
            //    base.ClientScript.RegisterStartupScript(base.GetType(), "", "<script>alert('手机必填!');</script>");
            //    return false;
            //}
            //Regex regex = new Regex(@"^[1]+[3,5,6,7,8]+\d{9}");
            //if (!regex.IsMatch(str))
            //{
            //    base.ClientScript.RegisterStartupScript(base.GetType(), "", "<script>alert('请输入正确的手机号码!');</script>");
            //    return false;
            //}
            //if (string.IsNullOrEmpty(str2))
            //{
            //    base.ClientScript.RegisterStartupScript(base.GetType(), "", "<script>alert('邮箱必填!');</script>");
            //    return false;
            //}
            //Regex regex2 = new Regex(@"\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*");
            //if (!regex2.IsMatch(str2))
            //{
            //    base.ClientScript.RegisterStartupScript(base.GetType(), "", "<script>alert('请输入正确的邮箱地址!');</script>");
            //    return false;
            //}
            //UserModel modelByMobile = new UserBLL().GetModelByMobile(str);
            //if (modelByMobile == null)
            //{
            //    base.ClientScript.RegisterStartupScript(base.GetType(), "", "<script>alert('你输入的信息与原注册不符，请重新输入!如遗忘，变更失败，联络客服');</script>");
            //    return false;
            //}
            //if (modelByMobile.Email != str2)
            //{
            //    base.ClientScript.RegisterStartupScript(base.GetType(), "", "<script>alert('你输入的信息与原注册不符，请重新输入!如遗忘，变更失败，联络客服');</script>");
            //    return false;
            //}
            return true;
        }

        protected void Page_Load(object sender, EventArgs e)
        {

        }
    }
}