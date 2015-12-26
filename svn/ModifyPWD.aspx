<%@ Page Title="" Language="C#" MasterPageFile="~/Web.Master" AutoEventWireup="true" CodeBehind="ModifyPWD.aspx.cs" Inherits="MaoChong.Web.ModifyPWD" %>
<%@ Register src="UCLeftmenu1.ascx" tagname="UCLeftmenu1" tagprefix="uc1" %>
<%@ MasterType VirtualPath="~/Web.Master" %>


<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <script type="text/javascript">
        $(document).ready(function() {
            //左侧菜单:菜单伪类在母版页定义
            LeftMenu.Account();
        });
    </script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <!--会员-->
    <div id="member">
        <div class="member">
            <!-- 左侧菜单 -->
            <uc1:UCLeftmenu1 ID="UCLeftmenu11" runat="server" />
            
            <div class="member_content right">
                <div class="member_content_title">
                    修改密码
                </div>
                <!--账户信息-->
                <div class="account">
                    <table width="100%" border="0" cellspacing="10" cellpadding="0">
                        <tr>
                            <td align="right" valign="middle">
                                <span>*</span>旧密码
                            </td>
                            <td>
                                <asp:TextBox ID="txt_oldPwd" runat="server" CssClass="srk_x" MaxLength="20" TextMode="Password"></asp:TextBox>
                            </td>
                        </tr>
                        <tr>
                            <td align="right" valign="middle">
                                <span>*</span>新密码
                            </td>
                            <td>
                                <asp:TextBox ID="txt_newPwd" runat="server" CssClass="srk_x" MaxLength="20" TextMode="Password"></asp:TextBox>
                            </td>
                        </tr>
                        <tr>
                            <td align="right" valign="middle">
                                <span>*</span>确认密码
                            </td>
                            <td>
                                <asp:TextBox ID="txt_confirmPwd" runat="server" CssClass="srk_x" MaxLength="20" TextMode="Password"></asp:TextBox>
                            </td>
                        </tr>
                        <tr>
                            <td>
                                &nbsp;
                            </td>
                            <td>
                                <asp:Button ID="btn_save" runat="server" Text="保存" CssClass="reg_an" onclick="btn_save_Click" />
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
            <div class="clear">
            </div>
        </div>
        <div>
            <img src="images/reg_bottom.gif" />
            </div>
    </div>
</asp:Content>
