<%@ Page Title="" Language="C#" MasterPageFile="~/Web.Master" AutoEventWireup="true" CodeBehind="PurchaseHistory.aspx.cs" Inherits="MaoChong.Web.PurchaseHistory" %>
<%@ Register src="UCLeftmenu2.ascx" tagname="UCLeftmenu2" tagprefix="uc1" %>
<%@ MasterType VirtualPath="~/Web.Master" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <script type="text/javascript">
        $(document).ready(function() {
            //左侧菜单:菜单伪类在母版页定义
            LeftMenu.PurchaseHistory();
        });
    </script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <!--会员-->
    <div id="member">
        <div class="member">
            <!-- 左侧菜单 -->
            <uc1:UCLeftmenu2 ID="UCLeftmenu21" runat="server" />
            
            <div class="member_content right">
                <div class="member_content_title">
                    消费记录
                </div>
                <!--我的购物车-->
                <div class="exchange">
                    <div class="exchange_list">
                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                            <tr class="exchange_list_title">
                                <td width="30%">
                                    类型
                                </td>
                                <td align="center" width="30%">
                                    积分
                                </td>
                                <td align="center">
                                    时间
                                </td>
                            </tr>
                            <asp:Repeater ID="Repeater1" runat="server">
                                <ItemTemplate>
                                    <tr>
                                        <td >
                                            <%#Eval("UsedType")%>
                                        </td>
                                        <td align="center">
                                            <%# ShowScore(Eval("Score"))%>
                                        </td>
                                        <td align="center">
                                            <%# Master.ObjectToShortDate(Eval("ExchangeTime"), "") %>
                                        </td>
                                    </tr>
                                </ItemTemplate>
                            </asp:Repeater>
                        </table>
                    </div>
                </div>
            </div>
            <div class="clear"></div>
        </div>
        <div>
            <img src="images/reg_bottom.gif" alt=""/>
        </div>
    </div>
</asp:Content>
