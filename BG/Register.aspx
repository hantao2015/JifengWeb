<%@ Page Title="" Language="C#" MasterPageFile="~/Web.Master" AutoEventWireup="true" CodeBehind="Register.aspx.cs" Inherits="MaoChong.Web.Register" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">

    <script type="text/javascript">
        $(document).ready(function() {
            //更换验证码
            //$("#changeCode").click(function() {
            //    $("#imgCode").attr("src", "CheckCode/CodeImage.aspx?ID=" + Math.random()); //6位随机码，防缓存
            //    return false;
            //});
        });
    </script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <!--注册-->
    <div id="reg">
        <div class="reg_title">
            <dl>
                <dt>
                    注册新会员
                </dt>
                <dd>
                    加入员工积分的过程很简单。您只需点击"立刻注册"，即可进入注册过程，尊享会员专属权益。
                </dd>
            </dl>
        </div>
        <div class="reg">
            <table width="100%" border="0" cellspacing="12" cellpadding="0">
                <tr>
                    <td colspan="3">
                        <b>请认真填写以下个人信息</b>
                    </td>
                </tr>
                <tr>
                    <td width="90" align="right">
                        手机号码
                    </td>
                    <td width="210">
                        <asp:TextBox ID="txt_mobie" runat="server" CssClass="srk" MaxLength="15"></asp:TextBox>
                    </td>
                    <td>
                        <span>*</span>
                    </td>
                </tr>
                <tr>
                    <td align="right">
                        邮箱
                    </td>
                    <td>
                        <asp:TextBox ID="txt_email" runat="server" CssClass="srk" MaxLength="30"></asp:TextBox>
                    </td>
                    <td>
                        <span>*</span>
                    </td>
                </tr>
                <tr>
                    <td align="right">
                        密码
                    </td>
                    <td>
                        <asp:TextBox ID="txt_Pwd" runat="server" CssClass="srk" MaxLength="20" TextMode="Password"></asp:TextBox>
                    </td>
                    <td>
                        <span>*</span><font>6个字符以上</font>
                    </td>
                </tr>
                <tr>
                    <td align="right">
                        确认密码
                    </td>
                    <td>
                        <asp:TextBox ID="txt_confirmPwd" runat="server" CssClass="srk" MaxLength="20" TextMode="Password"></asp:TextBox>
                    </td>
                    <td>
                        <span>*</span>
                    </td>
                </tr>
                <%--<tr>
                    <td align="right">
                        验证码
                    </td>
                    <td>
                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                            <tr>
                                <td width="24%">
                                    <asp:TextBox ID="txt_code" runat="server" CssClass="srk" MaxLength="4" style="width: 35px;"></asp:TextBox>
                                </td>
                                <td width="26%" align="right">
                                    &nbsp;<img id="imgCode" src="CheckCode/CodeImage.aspx" alt="" />
                                </td>
                                <td width="50%" align="right">
                                    看不清，<a id="changeCode" href="#">换一张</a>
                                </td>
                            </tr>
                        </table>
                    </td>
                    <td>
                    </td>
                </tr>--%>
                <tr>
                    <td>
                        &nbsp;
                    </td>
                    <td align="center">
                        <asp:Button ID="btn_addUser" runat="server" Text="创建新会员" CssClass="reg_an" onclick="btn_addUser_Click" />
                    </td>
                    <td>
                        &nbsp;
                    </td>
                </tr>
            </table>
        </div>
        <div><img src="images/reg_bottom.gif" alt="" /></div>
    </div>
</asp:Content>
