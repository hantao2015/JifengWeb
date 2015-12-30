<%@ Page Title="" Language="C#" MasterPageFile="~/Web.Master" AutoEventWireup="true" CodeBehind="Exchange.aspx.cs" Inherits="MaoChong.Web.Exchange" %>
<%@ Register src="UCLeftmenu1.ascx" tagname="UCLeftmenu1" tagprefix="uc1" %>
<%@ MasterType VirtualPath="~/Web.Master" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <script type="text/javascript">
        $(document).ready(function() {
            //左侧菜单:菜单伪类在母版页定义
            LeftMenu.ExchangeCard();
            
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
                    "正金币、刮刮卡" 兑换积分
                </div>
                <!--"正金币、刮刮卡"积分兑换-->
                <div class="exchange">
                    <div class="query">
                        <table width="100%" border="0" cellspacing="10" cellpadding="0">
                            <tr>
                                <td width="80">
                                    兑换识别码
                                </td>
                                <td width="230">
                                    <asp:TextBox ID="txt_securityCode" runat="server" CssClass="srk" MaxLength="25"></asp:TextBox>
                                </td>
                                <td>
                                    <asp:Button ID="Button1" runat="server" Text="兑换" CssClass="query_an zhankai" onclick="Button1_Click" />
                                </td>
                            </tr>
                            <tr>
                                <td width="80">
                                    &nbsp; 
                                </td>
                                <td width="230">
                                    &nbsp;
                                </td>
                                <td>
                                   &nbsp; 
                                </td>
                            </tr>
                            <tr>
                                <td width="80">
                                    &nbsp;
                                </td>
                                <td width="230">
                                    <%--<a href="ShopList.aspx" style=" color:#E9598D; font-size:12px;">立即兑换礼品</a>--%>
                                    <asp:Button ID="Button2" runat="server" Text="立即兑换礼品" CssClass="query_an2 zhankai" OnClientClick="window.location = 'ShopList.aspx'; return false;" />
                                </td>
                                <td>
                                    &nbsp;
                                </td>
                            </tr>
                        </table>
                    </div>
                    <div class="exchange_tishi">
                        <span>提示：</span>登录员工积分系统"我的账户"，左侧点击"正金币 刮刮卡"输入JB加XXXXX-XXXXX防伪识别码。例：JB12345-123456
                    </div>
                </div>
            </div>
            <div class="clear">
            </div>
        </div>
        <div>
            <img src="images/reg_bottom.gif" alt="" />
        </div>
    </div>
    <!--弹出窗口层-->
    <div id="wrapper"></div>
    <div class="wrapper">
        <div class="wrapper_title"><img src="images/tanchu_guanbi.gif" class="wrapper_guanbi" /></div>
        <div class="wrapper_content">
            <dl>
                <dt>
                    恭喜你获得<span><asp:Literal ID="Literal_score" runat="server" Text="0"></asp:Literal></span>积分!
                </dt>
                <dd>
                    <input name="" type="button" value="确定" class="query_an wrapper_guanbi" />
                </dd>
            </dl>
        </div>
    </div>
    
    <script type="text/javascript" language="javascript">
        //====弹出开始
        function widthsize() {
            var width = $(window).width();
            var height = $(window).height();
            $('.wrapper').css({ 'margin-top': (height - 157) / 2 + 'px' });
            if (width <= 879) {
                $('body, #wrapper').css({ 'width': 879 + 'px' });
                $('#wrapper').css({ 'height': height + 'px' });
            }
            else {
                $('body, #wrapper').css({ 'width': width + 'px' });
                $('#wrapper').css({ 'height': height + 'px' });
            }
        }
        $('.wrapper_guanbi').click(function() {
            $('#wrapper').hide();
            $('.wrapper').hide();
        })
        widthsize();
        $(window).resize(function() {
            widthsize();
        });

        function showWin() {
            $('#wrapper').show();
            $('.wrapper').show();
        }
        //showWin();
        //====弹出结束
    </script>
    </asp:Content>
    