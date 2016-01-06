<%@ Page Title="" Language="C#" MasterPageFile="~/Web.Master" AutoEventWireup="true" CodeBehind="RetrievePWD.aspx.cs" Inherits="MaoChong.Web.RetrievePWD" %>
<%@ MasterType VirtualPath="~/Web.Master" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <!--忘记密码-->
    <div id="reg">
        <div class="reg_title">
            <dl>
                <dt>
                    获取密码
                </dt>
            </dl>
        </div>
        <div class="reg">
            <table width="100%" border="0" cellspacing="12" cellpadding="0">
                <tr>
                    <td colspan="3">
                        <b>请填写您的工号：</b>
                    </td>
                </tr>
                <tr>
                    <td width="40" align="left">
                        <span>*工号</span>
                    </td>
                    <td width="208">
                       <%-- <asp:TextBox ID="txt_mobile" runat="server" CssClass="srk" MaxLength="15"></asp:TextBox>--%>
                       <input name="user" type="text" MaxLength="15" class="srk">
                    </td>
                    <td width="204">
                    </td>
                </tr>
                <tr>
                    <td width="40" align="left">
                      <%--  <span>*</span>邮箱--%>
                    </td>
                    <td width="208" >
                       <%--<asp:TextBox ID="txt_email" runat="server" CssClass="srk" MaxLength="30" Visible="false"></asp:TextBox>--%>
                    </td>
                    <td width="204">
                    </td>
                </tr>
                <tr>
                    <td width="40" align="left">
                    </td>
                    <td width="208">
                        <asp:Button ID="Button1"  runat="server" Text="确定" CssClass="query_an"  OnClientClick="javascript:Forgetpass();" />
                    </td>
                    <td width="204">
                    </td>
                </tr>
                <tr>
                    <td width="40" align="left">
                        &nbsp;
                    </td>
                    <td colspan="2">
                        注：如未能找回密码!请联系HR部门。</td>
                </tr>
                <tr>
                    <td height="60" colspan="3" align="left">
                        &nbsp;
                    </td>
                </tr>
            </table>
        </div>
        <div>
            <img src="images/reg_bottom.gif" alt="" />
        </div>
    </div>
</asp:Content>
