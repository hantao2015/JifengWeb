<%@ Page Title="" Language="C#" MasterPageFile="~/Web.Master" AutoEventWireup="true" CodeBehind="IntegralNote2.aspx.cs" Inherits="MaoChong.Web.IntegralNote2" %>
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
                        积分规则
                    </dt>
                </dl>
            </div>
            <div class="jfdh">
                <div class="jfdh_top">
                    积分规则
                </div>
                <div class="news_show">
                    <b>"正金币、刮刮卡"规则：</b><br />
                    1、刮开防伪涂层，获取10位防伪识别码。<br />
                    2、可通过网上或短信验证并获得相应金币、最高可得5000金币；<br />
                    <br />
                    <b>（一）网上验证获取：</b><br />
                    登录www. cpbeauty.com.cn注册正大美人会员后登录"我的账户"，左侧点击"正金币 刮刮卡"输入XXXXX-XXXXX防伪识别码。提交后即可得到相应积分；<br />
                    <br />
                    <b>（二）短信验证：</b><br />
                    编辑短信"JB+10位防伪识别码" 例：JBXXXXXXXXXX<br />
                    发送到中国移动：1065756604025071，中国电信：1065902569955071, 中国联通：1065507738855071，进行验证；稍后短信将告知所得相应积分；<br />
                </div>
                <div class="jfdh_bottom"><img src="images/jfdh-bottom.gif" /></div>
            </div>
        </div>
    </div>
</asp:Content>
