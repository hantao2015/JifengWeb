<%@ Page Title="" Language="C#" MasterPageFile="~/Web.Master" AutoEventWireup="true" CodeBehind="ShopList.aspx.cs" Inherits="MaoChong.Web.ShopList" %>
<%@ Register src="UCLeftmenu3.ascx" tagname="UCLeftmenu3" tagprefix="uc1" %>
<%@ MasterType VirtualPath="~/Web.Master" %>
<%@ Register Assembly="AspNetPager" Namespace="Wuqi.Webdiyer" TagPrefix="webdiyer" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
<script type="text/javascript">
    //积分范围点击
    $(document).ready(function() {
        var typeID = $("#HiddenFieldDIV :input[id*='HiddenField_TypeID']").val();
        var integralID = $("#HiddenFieldDIV :input[id*='HiddenField_IntegralID']").val();
        $("#Integral dd a").removeClass("jfdh_title_this");
        $("#Integral dd a:eq(" + (parseInt(integralID)-1) + ")").addClass("jfdh_title_this");
        //设置积分范围默认项

        $("#Integral dd a").click(function() {
            $(this).attr("href", $(this).attr("href") + "&TypeID=" + typeID);
            return true;
        });
    });
</script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <!--内容-->
    <div id="content">
        <!-- 左侧菜单 -->
        <uc1:UCLeftmenu3 ID="UCLeftmenu31" runat="server" />
        <div id="HiddenFieldDIV" style=" height:0px;display:none;">
            <asp:HiddenField ID="HiddenField_TypeID" runat="server"/><!--类别ID-->
            <asp:HiddenField ID="HiddenField_IntegralID" runat="server" Value="2" /><!--积分范围类别ID-->
        </div>
        <div class="you right">
            <div class="jfdh_title">
                <dl id="Integral">
                    <dt>
                        积分分值分类
                    </dt>
                    <dd>
                        <a href="ShopList.aspx?IntegralID=1" class="jfdh_title_this">1万分以下</a>
                    </dd>
                    <dd>
                        <a href="ShopList.aspx?IntegralID=2">1万分-5万分</a>
                    </dd>
                    <dd>
                        <a href="ShopList.aspx?IntegralID=3">5万分-10万分</a>
                    </dd>
                    <dd class="jfdh_title_b">
                        <a href="ShopList.aspx?IntegralID=4">10万分以上</a>
                    </dd>
                </dl>
            </div>
            <div class="jfdh">
                <div class="jfdh_top">
                    积分产品
                </div>
                <div class="jfdh_list">
                    <ul>
                        <asp:Repeater ID="Repeater_product" runat="server">
                            <ItemTemplate>
                                <li>
                                    <img src='ProductImg.ashx?ID=<%#Eval("ID") %>' width="200" height="188" />
                                    <p>
                                        <%#Eval("Name") %>
                                    </p>
                                    <b><%#Eval("Integral")%>积分</b>
                                    <asp:Button ID="btn_exChange" CommandArgument='<%#Eval("ID") %>' runat="server" Text="立即兑换" OnClick="btn_exChange_Click" />
                                </li>
                            </ItemTemplate>
                            <FooterTemplate>
                                <%# Repeater_product.Items.Count > 0 ? "" : "<li><p>暂无产品</p></li>"%>
                            </FooterTemplate>
                        </asp:Repeater>
                    </ul>
                </div>
                <webdiyer:AspNetPager ID="AspNetPager1" runat="server" CssClass="jfdh_page" CurrentPageButtonClass="jfdh_page_a" AlwaysShow="True" FirstPageText="首页" LastPageText="尾页" NextPageText="下一页" PrevPageText="上一页" ShowCustomInfoSection="Never" ShowNavigationToolTip="True" Width="99%" HorizontalAlign="Center" CustomInfoTextAlign="NotSet" PageSize="20" PageIndexBoxType="DropDownList" ShowPageIndexBox="Auto" OnPageChanged="AspNetPager1_PageChanged" Font-Italic="False" SubmitButtonText="Go" TextAfterPageIndexBox="" TextBeforePageIndexBox="">
                </webdiyer:AspNetPager>
                <div class="jfdh_bottom"><img src="images/jfdh-bottom.gif" alt="" /></div>
            </div>
        </div>
    </div>
</asp:Content>
