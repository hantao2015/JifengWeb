<%@ Page Title="" Language="C#" MasterPageFile="~/Web.Master" AutoEventWireup="true" CodeBehind="Login.aspx.cs" Inherits="MaoChong.Web.Login" %>

 

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <script type="text/javascript">
        $(document).ready(function() {
            //更换验证码
            $("#changeCode").click(function() {
                $("#imgCode").attr("src", "CheckCode/CodeImage.aspx?ID=" + Math.random()); //6位随机码，防缓存
                return false;
            });
        });
    </script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <!--注册-->
    <div id="sign">
        <div class="sign">
            <div class="sign_title">
                会员登录
            </div>
            <div class="sign_box">
                <table width="100%" border="0" cellspacing="10" cellpadding="0">
                    <tr>
                        <td width="95" align="right">
                            手机/邮箱
                        </td>
                        <td colspan="2">
                            <asp:TextBox ID="txt_loginName" runat="server" CssClass="srk"></asp:TextBox>
                        </td>
                        <td>
                            <span>*</span>
                        </td>
                    </tr>
                    <tr>
                        <td align="right">
                            密码
                        </td>
                        <td colspan="2">
                            <asp:TextBox ID="txt_password" runat="server" CssClass="srk" TextMode="Password"></asp:TextBox>
                        </td>
                        <td>
                            <span>*</span>
                        </td>
                    </tr>
                    <tr>
                        <td align="right">
                            验证码
                        </td>
                        <td>
                            <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                <tr>
                                    <td>
                                        <asp:TextBox ID="txt_code" runat="server" CssClass="srk" MaxLength="4" style="width: 35px;"></asp:TextBox>
                                    </td>
                                    <td align="right">
                                        <img id="imgCode" src="CheckCode/CodeImage.aspx" alt=""  />
                                    </td>
                                </tr>
                            </table>
                        </td>
                        <td colspan="2">
                             看不清，<a id="changeCode" href="#">换一张</a>
                        </td>
                        
                    </tr>
                    <tr>
                        <td align="right">
                            &nbsp;
                        </td>
                        <td width="95" align="left">
                            <asp:Button ID="btn_login" runat="server" CssClass="reg_an" Text="登录" onclick="btn_login_Click" />
                        </td>
                        <td width="95" align="left">
                            <a href="RetrievePWD.aspx">
                                忘记密码？
                            </a>
                        </td>
                        <td>
                            &nbsp;
                        </td>
                    </tr>
                    <tr>
                        <td colspan="4">
                            <font><b>提示：</b>还不是VANCL会员？点击这里 <b><a href="Register.aspx">免费注册</a></b></font>
                        </td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</asp:Content>
