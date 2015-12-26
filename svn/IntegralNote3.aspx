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
                        如何兑换奖品
                    </dt>
                </dl>
            </div>
            <div class="jfdh">
                <div class="jfdh_top">
                    如何兑换奖品
                </div>
                <div class="news_show">
                    1. 兑换时间：我们将在十五个工作日内将符合兑换条件的用户的礼品发送到订购地址。<br />
                    2. 兑换方式：您可直接将奖品放入购物车中进行兑换。<br />
                    3. 当兑换奖品的订单生效后，积分数量会自动进行相应的扣除。<br />
                    4. 您兑换的积分礼品会在1－2周内快递到您的送货地址，请注意查收。<br />
                    5. 当您取消积分订单或拒收货物时，我们会在5-10个工作日内，将您累积的积分数量恢复至该订单发生前的状态；在此期间您无法兑换奖品，如遇到特殊情况（如国定假期）回复工作可能会延迟，请您谅解。
                </div>
                <div class="jfdh_bottom"><img src="images/jfdh-bottom.gif" /></div>
            </div>
        </div>
    </div>
</asp:Content>
