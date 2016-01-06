<%@ Page Title="" Language="C#" MasterPageFile="~/Web.Master" AutoEventWireup="true" CodeBehind="ShopCart.aspx.cs" Inherits="MaoChong.Web.ShopCart" %>
<%@ Register src="UCLeftmenu2.ascx" tagname="UCLeftmenu2" tagprefix="uc1" %>
<%@ MasterType VirtualPath="~/Web.Master" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <script type="text/javascript">
        $(document).ready(function() {
            //左侧菜单:菜单伪类在母版页定义
            LeftMenu.ExchangeShopCart();
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
                    我的购物车
                </div>
                <!--我的购物车-->
                <div class="exchange">
                    <div class="exchange_list">
                        <table id="list" width="100%" border="0" cellspacing="0" cellpadding="0">
                            <tr class="exchange_list_title">
                                <td>
                                    奖品名称
                                </td>
                                <td align="center" width="70">
                                    单位
                                </td>
                                <td align="center" width="70">
                                    数量
                                </td>
                                <td align="center" width="70">
                                    所需积分
                                </td>
                                <td align="center" width="70">
                                    操作
                                </td>
                            </tr>
                            <asp:Repeater ID="Repeater_Product" runat="server">
                                <ItemTemplate>
                                    <tr ajax="1">
                                        <td>
                                            <%#Eval("ProductName")%>
                                        </td>
                                        <td align="center">
                                            <%#Eval("Unit")%>
                                        </td>
                                        <td align="center">
                                            <%#Eval("ProductNum")%>
                                        </td>
                                        <td align="center">
                                            <%#Eval("Integral")%>
                                        </td>
                                        <td align="center">
                                            <asp:ImageButton ID="Ibtn_Delete" CommandArgument='<%#Eval("ID")%>' runat="server" OnClick="Ibtn_Delete_Click" OnClientClick=" return confirm('您确定要删除不？');" ImageUrl="images/Delete.gif" />
                                        </td>
                                    </tr>
                                </ItemTemplate>
                                <FooterTemplate>
                                    <%# Repeater_Product.Items.Count>0 ? "":"<tr><td colspan='5' align='center'><span  style=' color:Red;'>您还没有购物记录哦!</span></td></tr>" %>
                                </FooterTemplate>
                            </asp:Repeater>
                            
                        </table>
                    </div>
                    <div class="exchange_news" style="font-size: 14px;">
                        <table id="TotalIntegral" width="100%" border="0" cellspacing="0" cellpadding="0">
                            <tr>
                                <td width="165" align="right">
                                    <font style="font-size: 14px;">消费积分总计：</font>
                                </td>
                                <td>
                                    <span id="SpanIntegral"><asp:Literal ID="Literal_totalIntegral" runat="server"></asp:Literal></span>
                                </td>
                            </tr>
                        </table>
                    </div>
                    <div class="exchange_anniu" style="text-align: right; padding: 0;">
                        <input name="" type="button" value="继续兑换" class="exchange_anniu_h"  onclick="location.href='ShopList.aspx'" />
                        <asp:Button ID="btn_exChange" runat="server" Text="申请兑换" CssClass="exchange_anniu_f"  OnClientClick="location.href='ShopSubmit.aspx';return false;"/>
                    </div>
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
