<%@ Page Title="" Language="C#" MasterPageFile="~/Web.Master" AutoEventWireup="true" CodeBehind="Query.aspx.cs" Inherits="MaoChong.Web.Query" %>
<%@ Register src="UCLeftmenu2.ascx" tagname="UCLeftmenu2" tagprefix="uc1" %>
<%@ MasterType VirtualPath="~/Web.Master" %>
<%@ Register Assembly="AspNetPager" Namespace="Wuqi.Webdiyer" TagPrefix="webdiyer" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <script type="text/javascript">
        $(document).ready(function() {
            //左侧菜单:菜单伪类在母版页定义
            LeftMenu.ExchangeOrderQuery();
        });
    </script>
    <script language="javascript" type="text/javascript" src="My97DatePicker/WdatePicker.js"></script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <!--会员-->
    <div id="member">
        <div class="member">
            <!-- 左侧菜单 -->
            <uc1:UCLeftmenu2 ID="UCLeftmenu21" runat="server" />
            
            <div class="member_content right">
                <div class="member_content_title">
                    订单查询
                </div>
                <!--订单查询-->
                <div class="exchange">
                    <div class="query">
                        <table width="100%" border="0" cellspacing="10" cellpadding="0">
                            <tr>
                                <td width="100">
                                    按日期查询
                                </td>
                                <td width="230">
                                    <asp:TextBox ID="txt_startDate" CssClass="srk" runat="server" Text="开始日期" onclick="WdatePicker()" ></asp:TextBox>
                                </td>
                                <td rowspan="2" valign="middle">
                                    &nbsp;
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    &nbsp;
                                </td>
                                <td>
                                    <asp:TextBox ID="txt_endDate" CssClass="srk" runat="server" Text="结束日期" onclick="WdatePicker()" ></asp:TextBox>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    按订单状态查询
                                </td>
                                <td class="xlcd">
                                    <asp:DropDownList ID="ddl_state" runat="server">
                                        <asp:ListItem Text="全部状态" Value=""></asp:ListItem>
                                    </asp:DropDownList>
                                </td>
                                <td>
                                    <asp:Button ID="btn_Query" runat="server" CssClass="query_an" Text="查询" onclick="btn_Query_Click" />
                                </td>
                            </tr>
                        </table>
                    </div>
                    <div class="exchange_list">
                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                            <tr class="exchange_list_title">
                                <td>
                                    奖品名称
                                </td>
                                <td align="center" width="35">
                                    单位
                                </td>
                                <td align="center" width="35">
                                    数量
                                </td>
                                <td align="center" width="53">
                                    所需积分
                                </td>
                                <td align="center" width="53">
                                    兑换时间
                                </td>
                                <td align="center" width="53">
                                    订单状态
                                </td>
                                <%--<td align="center" width="30">
                                    操作
                                </td>--%>
                            </tr>
                            <asp:Repeater ID="Repeater_List" runat="server">
                                <ItemTemplate>
                                    <tr>
                                        <td>
                                            <%#Eval("ProductName")%>
                                        </td>
                                        <td align="center">
                                            <%#Eval("ProductUnit")%>
                                        </td>
                                        <td align="center">
                                            <%#Eval("ExChangeNum")%>
                                        </td>
                                        <td align="center">
                                            <%#Eval("Integral")%>
                                        </td>
                                        <td align="center">
                                            <%# Master.ObjectToShortDate(Eval("OrderTime"),"") %>
                                        </td>
                                        <td align="center">
                                            <span><%#Eval("OrderState")%></span>
                                        </td>
                                        <%--<td align="center">
                                            <asp:ImageButton ID="Ibtn_Delete" CommandArgument='<%#Eval("ID")%>' runat="server" OnClick="Ibtn_Delete_Click" OnClientClick=" return confirm('您确定要删除不？');" ImageUrl="images/Delete.gif" Visible='<%#SetDelete(Eval("OrderState")) %>' />
                                        </td>--%>
                                    </tr>
                                </ItemTemplate>
                                <FooterTemplate>
                                    <%# Repeater_List.Items.Count == 0 ? "<tr><td align='center' colspan='6'><span style='color:Red;'>没有符合条件的订单哦！</span></td></tr>" : ""%>
                                </FooterTemplate>
                            </asp:Repeater>
                        </table>
                    </div>
                </div>
                <webdiyer:AspNetPager ID="AspNetPager1" runat="server" CssClass="jfdh_page" CurrentPageButtonClass="jfdh_page_a" AlwaysShow="True" FirstPageText="首页" LastPageText="尾页" NextPageText="下一页" PrevPageText="上一页" ShowCustomInfoSection="Never" ShowNavigationToolTip="True" Width="99%" HorizontalAlign="Center" CustomInfoTextAlign="NotSet" PageSize="10" PageIndexBoxType="DropDownList" ShowPageIndexBox="Auto" OnPageChanged="AspNetPager1_PageChanged" Font-Italic="False" SubmitButtonText="Go" TextAfterPageIndexBox="" TextBeforePageIndexBox="">
                </webdiyer:AspNetPager>
            </div>
            <div class="clear">
            </div>
        </div>
        <div>
            <img src="images/reg_bottom.gif" /></div>
    </div>
</asp:Content>
