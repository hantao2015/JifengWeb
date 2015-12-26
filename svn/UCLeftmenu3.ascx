<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="UCLeftmenu3.ascx.cs" Inherits="MaoChong.Web.UCLeftmenu3" %>
<div class="zuo left"><!--左侧菜单：产品相关 -->
    <!--积分-->
    <div class="zuo_box">
        <div class="zuo_title">
            您的积分
        </div>
        <div class="zuo_jifen">
            <b>尊敬的会员：<asp:Literal ID="Literal_userName" runat="server" Text="XX"></asp:Literal>,您好！</b>
            <p>
                您现在拥有的积分&nbsp;<span><a style='color:#fd8ab3;' href='Integral.aspx'><asp:Literal ID="Literal_Integral" runat="server" Text="0"></asp:Literal></a></span>
            </p>
            <div>
                <asp:Literal ID="Literal_ShopCartNum" runat="server" Text="<span>0</span>)去购物车兑换"></asp:Literal>
            </div>
        </div>
        <div><img src="images/left_bottom.gif" alt="" /></div>
    </div>
    <!--商品分类-->
    <div class="zuo_box">
        <div class="zuo_title">
            积分商品分类
        </div>
        <div class="zuo_class">
            <ul>
                <asp:Repeater ID="Repeater_type" runat="server">
                    <ItemTemplate>
                        <li>
                            <a href='ShopList.aspx?TypeID=<%#Eval("ID") %>'>
                                <img width="34" height="34" src='ProductTypeImg.ashx?id=<%#Eval("ID") %>' alt=""><%# Eval("Name") %>
                            </a>
                        </li>
                    </ItemTemplate>
                </asp:Repeater>
            </ul>
        </div>
        <div><img src="images/left_bottom.gif" alt="" /></div>
    </div>
    
    <!--规则-->
    <div class="zuo_box">
        <div class="zuo_title">
            积分规则
        </div>
        <div class="zuo_guize">
            <ul>
                <li>
                    ·<a href="IntegralNote1.aspx">如何获得积分</a>
                </li>
                <li>
                    ·<a href="IntegralNote2.aspx">积分规则</a>
                </li>
                <li>
                    ·<a href="IntegralNote3.aspx">积分能做什么</a>
                </li>
            </ul>
        </div>
        <div><img src="images/left_bottom.gif" alt="" /></div>
    </div>
</div>
