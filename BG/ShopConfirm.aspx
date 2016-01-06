<%@ Page Title="" Language="C#" MasterPageFile="~/Web.Master" AutoEventWireup="true" CodeBehind="ShopConfirm.aspx.cs" Inherits="MaoChong.Web.ShopConfirm" %>
<%@ Register src="UCLeftmenu2.ascx" tagname="UCLeftmenu2" tagprefix="uc1" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
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
                    <div class="exchange_chenggong">
                        <img src="images/dingdanchenggong.gif" />
                    </div>
                    <div class="exchange_anniu">
                        <input name="" type="button" value="确认" class="exchange_anniu_f" />
                    </div>
                </div>
            </div>
            <div class="clear"></div>
        </div>
        <div>
            <img src="images/reg_bottom.gif" />
        </div>
    </div>
</asp:Content>
