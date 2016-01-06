<%@ Page Title="" Language="C#" MasterPageFile="~/Web.Master" AutoEventWireup="true" CodeBehind="IntegralNote3.aspx.cs" Inherits="MaoChong.Web.IntegralNote3" %>
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
                        如何兑换
                    </dt>
                </dl>
            </div>
            <div class="jfdh">
                <div class="jfdh_top">
                   
                    提货、签收
                </div>
                <div class="news_show">
                  1.员工积分兑换订单支付成功后，公司所在地的人力资源部会通知领取时间。提货时效为5个工作日。</br>
                  2.员工提取货物后，本人或带领人签字后即视为领取完成。</br>
                   

                </div>
                 
                 
                <div class="jfdh_bottom"><img src="images/jfdh-bottom.gif" /></div>
           
            </div>
       
               
            
        </div>
    </div>
</asp:Content>
