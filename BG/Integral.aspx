<%@ Page Title="" Language="C#" MasterPageFile="~/Web.Master" AutoEventWireup="true" CodeBehind="Integral.aspx.cs" Inherits="MaoChong.Web.Integral" %>
<%@ Register src="UCLeftmenu1.ascx" tagname="UCLeftmenu1" tagprefix="uc1" %>
<%@ MasterType VirtualPath="~/Web.Master" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <script type="text/javascript">
        $(document).ready(function() {
            //左侧菜单:菜单伪类在母版页定义
            LeftMenu.Integral();
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
                    我的积分
                </div>
                <!--我的积分-->
                <div class="integral">
                    <h2>
                        您的账户积分为<span><asp:Literal ID="Literal_integral" runat="server" Text="0"></asp:Literal></span>分
                    </h2>
                    <a href="ShopList.aspx">礼品兑换</a>
                </div>
            </div>
            <div class="clear"></div>
        </div>
        <div>
            <img src="images/reg_bottom.gif" alt="" />
        </div>
    </div>
</asp:Content>
