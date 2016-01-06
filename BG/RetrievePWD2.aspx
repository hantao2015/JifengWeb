<%@ Page Title="" Language="C#" MasterPageFile="~/Web.Master" AutoEventWireup="true" CodeBehind="RetrievePWD2.aspx.cs" Inherits="MaoChong.Web.RetrievePWD2" %>
<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <script type="text/javascript">
    $(document).ready(function() {
        $(".reg_an:eq(0)").click(function() {
            window.location = "Login.aspx";
        });
    });
</script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <!--忘记密码-->
    <div id="reg">
        <div class="reg_title">
            <dl>
                <dt>
                    获取密码
                </dt>
            </dl>
        </div>
        <div class="wjml">
            <dl>
                <dt>
                    新密码已经发送到您的邮箱，请查收。
                </dt>
                <dd>
                    <input id="back" type="button" class="reg_an" value="返回登录" />
                </dd>
            </dl>
        </div>
        <div>
            <img src="images/reg_bottom.gif" alt="" />
        </div>
    </div>
</asp:Content>
