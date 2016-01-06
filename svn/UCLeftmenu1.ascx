<%@ Control Language="C#" AutoEventWireup="true" CodeBehind="UCLeftmenu1.ascx.cs" Inherits="MaoChong.Web.UCLeftmenu1" %>
<div class="member_nav left"><!--左侧菜单： 不展开‘兑换管理’ -->
    <ul id="LeftMenuUL">
        <li>
            <a href="AccountInfo.aspx">
                账户信息
            </a>
        </li>
        <li class="member_nav_this">
            <a href="Integral.aspx">
                我的积分
            </a>
        </li>
        <li>
            <a href="ShopCart.aspx">
                兑换管理
            </a>
        </li>
        <li>
            <div class="member_nav_t" style="visibility:hidden">
                <a href="Exchange.aspx"> 刮刮卡<br/><p style="font-size:12px; padding-left:25px;">(兑换积分) </p></a>
            </div>
        </li>
    </ul>
</div>
