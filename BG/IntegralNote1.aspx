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
                    <dt>参加资格</dt>
                </dl>
                <div class="jfdh_top">
有效期：自 2016年1月1日开始计算积分，积分在员工离职日之前有效。</div>
                <div class="news_show">
                    <b>参加资格：</b><br />（一）菲尼萨光电通讯（上海）有限公司及菲尼萨光电通讯科技（无锡）有限公司M3、E1及以上正式员工，参加有积分的公司活动，就可以累积积分并选择兑换相应的商品。<br />（二）员工如有下述任一情形：违反《员工手册》或公司其他相关规定的，公司有权取消其参加积分奖励活动资格。<br />
                </div>
                <div class="jfdh_bottom">
                    <img src="images/jfdh-bottom.gif" />
                </div>
            </div>
        </div>
    </div>
</asp:Content>
