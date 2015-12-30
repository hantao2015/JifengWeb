<%@ Page Title="" Language="C#" MasterPageFile="~/Web.Master" AutoEventWireup="true" CodeBehind="Shopshow.aspx.cs" Inherits="MaoChong.Web.Shopshow" %>
<%@ Register src="UCLeftmenu3.ascx" tagname="UCLeftmenu3" tagprefix="uc1" %>
<%@ MasterType VirtualPath="~/Web.Master" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
<script type="text/javascript">
    //积分范围点击
    $(document).ready(function() {
        var typeID = $("#HiddenFieldDIV :input[id*='HiddenField_TypeID']").val();
        var integralID = $("#HiddenFieldDIV :input[id*='HiddenField_IntegralID']").val();
        $("#Integral dd a").removeClass("jfdh_title_this");
        $("#Integral dd a:eq(" + (parseInt(integralID)-1) + ")").addClass("jfdh_title_this");
        //设置积分范围默认项

        $("#Integral dd a").click(function() {
            $(this).attr("href", $(this).attr("href") + "&TypeID=" + typeID);
            return true;
        });
    });
</script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <!--内容-->
    <div id="content">
        <!-- 左侧菜单 -->
        <uc1:UCLeftmenu3 ID="UCLeftmenu31" runat="server" />
         <div id="HiddenFieldDIV" style=" height:0px;display:none;">
         <asp:HiddenField ID="HiddenField_TypeID" runat="server" /><!--类别ID-->
            <asp:HiddenField ID="HiddenField_IntegralID" runat="server" Value="2" /><!--积分范围类别ID-->
        </div>
        <div class="you right">
            <div class="jfdh_title">
                <dl id="Integral">
                    <dt>
                        积分分值分类
                    </dt>
                    <dd>
                        <a href="ShopList.aspx?IntegralID=1" class="jfdh_title_this">100分以下</a>
                    </dd>
                    <dd>
                        <a href="ShopList.aspx?IntegralID=2">100分-200分</a>
                    </dd>
                    <dd>
                        <a href="ShopList.aspx?IntegralID=3">200分-500分</a>
                    </dd>
                    <dd class="jfdh_title_b">
                        <a href="ShopList.aspx?IntegralID=4">500分以上</a>
                    </dd>
                </dl>
            </div>
            <div class="jfdh">
                <div class="jfdh_top">
                    <asp:Literal ID="Literal_top_name" runat="server"></asp:Literal>
                </div>
                <div class="shop_show">
                    <dl>
                        <dt>
                            <asp:Literal ID="Literal_image" runat="server"></asp:Literal>
                        </dt>
                        <dd>
                            <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                <tr>
                                    <td width="70">
                                        <b>礼品描述：</b>
                                    </td>
                                    <td>
                                        <asp:Literal ID="Literal_title_Note" runat="server"></asp:Literal>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <b>礼品编码：</b>
                                    </td>
                                    <td>
                                        <asp:Literal ID="Literal_title_SKU" runat="server"></asp:Literal>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <b>礼品单位：</b>
                                    </td>
                                    <td>
                                        <asp:Literal ID="Literal_title_Unit" runat="server"></asp:Literal>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <b>所需积分：</b>
                                    </td>
                                    <td>
                                        <span><asp:Literal ID="Literal_title_Integral" runat="server"></asp:Literal></span>分
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <b>兑换数量：</b>
                                    </td>
                                    <td>
                                        <asp:TextBox ID="txt_exChangeNum" runat="server" MaxLength="4"  onkeyup="this.value=this.value.replace(/\D/g,'')" onafterpaste="this.value=this.value.replace(/\D/g,'')" Width="40" Text="1"></asp:TextBox>
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        &nbsp;
                                    </td>
                                    <td>
                                        &nbsp;
                                    </td>
                                </tr>
                                <tr>
                                    <td colspan="2">
                                        <asp:Button ID="Button1" runat="server" Text="兑换礼品" CssClass="reg_an" onclick="Button1_Click" />&nbsp;
                                    </td>
                                </tr>
                            </table>
                        </dd>
                    </dl>
                </div>
                <div class="shop_show_about">
                    <p>
                        <b>产品描述：</b><asp:Literal ID="Literal_Note" runat="server"></asp:Literal>
                    </p>
                    <p>
                        <b>产品名：</b><asp:Literal ID="Literal_Name" runat="server"></asp:Literal>
                    </p>
                    <p>
                        <b>型号：</b><asp:Literal ID="Literal_ModelNo" runat="server"></asp:Literal>
                    </p>
                    <p>
                        <b>香型：</b><asp:Literal ID="Literal_Scent" runat="server"></asp:Literal>
                    </p>
                    <p>
                        <b>规格：</b><asp:Literal ID="Literal_Standard" runat="server"></asp:Literal>
                    </p>
                    <p>
                        <b>单位：</b><asp:Literal ID="Literal_Unit" runat="server"></asp:Literal>
                    </p>
                    <p></p>
                    <p>
                        <b>详情：</b>
                    </p>
                    <div>
                        <asp:Literal ID="Literal_Content" runat="server"></asp:Literal>
                    </div>
                </div>
                
                <div class="jfdh_bottom"><img src="images/jfdh-bottom.gif" /></div>
            </div>
        </div>
    </div>
</asp:Content>
