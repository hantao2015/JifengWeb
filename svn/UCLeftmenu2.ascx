<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="UCLeftmenu2.ascx.cs" Inherits="MaoChong.Web.UCLeftmenu2" %>
<div class="member_nav left"><!--左侧菜单： 展开‘兑换管理’ -->
    <ul id="LeftMenuUL">
        <li>
            <a href="AccountInfo.aspx">
                账户信息
            </a>
        </li>
        <li>
            <a href="Integral.aspx">
                我的积分
            </a>
        </li>
        <li class="member_nav_this">
            <a href="ShopCart.aspx">
                兑换管理
            </a>
            <dl>
                <dt>
                    <a href="ShopCart.aspx">
                        我的购物车
                    </a>
                </dt>
                <dt>
                    <a href="Query.aspx" class="leftMenuselect">
                        订单查询
                    </a>
                </dt>
                <dt>
                    <a href="PurchaseHistory.aspx">
                        消费记录
                    </a>
                </dt>
            </dl>
        </li>
        <li>
             <div class="member_nav_t" >
                <a href="Exchange.aspx">刮刮卡<br/><p style="font-size:12px; padding-left:25px;">(兑换积分) </p></a>
            </div>
        </li>
    </ul>
</div>
