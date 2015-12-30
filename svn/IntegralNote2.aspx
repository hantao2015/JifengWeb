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
                    <b>获得积分</b><br />
                    1、季度星级员工- 800分；<br />
                    2、季度优秀员工-500分；<br />
                    3、季刊发表文章 -80~100分；<br />
                    4、内训师 50-800分；<br />
                    5、辅导员 50-100分；<br />
                    6、准时参加培训10~20分；<br />
                    7、拾金不昧 10分<br />
                    <br />
                    <b>扣积分</b><br />
                      迟到、请假或缺席培训 -10分<br />
                    <br />
                     
                </div>
                <div class="jfdh_bottom"><img src="images/jfdh-bottom.gif" /></div>
            </div>
        </div>
    </div>
</asp:Content>
