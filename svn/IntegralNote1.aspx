<%@ Page Title="" Language="C#" MasterPageFile="~/Web.Master" AutoEventWireup="true" CodeBehind="IntegralNote1.aspx.cs" Inherits="MaoChong.Web.IntegralNote1" %>
<%@ Register src="UCLeftmenu3.ascx" tagname="UCLeftmenu3" tagprefix="uc1" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <!--内容-->
    <div id="content">
        <!-- 左侧菜单 -->
        <uc1:UCLeftmenu3 ID="UCLeftmenu31" runat="server" />
        <div class="you right">
            <div class="jfdh_title">
                <dl>
                    <dt>
                        如何获得积分
                    </dt>
                </dl>
            </div>
            <div class="jfdh">
                <div class="jfdh_top">
                    如何获得积分
                </div>
                <div class="news_show">
                    <b>1、"正金币、刮刮卡"</b><br />
                    正大美人胶原蛋白每盒中有一张"正金币、刮刮卡"刮开后输入识别码即可获赠积分！<br />
                    <br />
                    <b>2. 额外赠送</b><br />
                    正大美人经常进行各种促销活动，向您赠送积分，详细情况以网上公布信息为准。
                </div>
                <div class="jfdh_bottom">
                    <img src="images/jfdh-bottom.gif" />
                </div>
            </div>
        </div>
    </div>
</asp:Content>
