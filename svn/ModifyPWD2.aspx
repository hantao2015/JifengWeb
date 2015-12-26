<%@ Page Title="" Language="C#" MasterPageFile="~/Web.Master" AutoEventWireup="true" CodeBehind="ModifyPWD2.aspx.cs" Inherits="MaoChong.Web.ModifyPWD2" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
    <script type="text/javascript">
        $(document).ready(function() {
            //返回
            $(".reg_an").click(function() {
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
                    修改密码
                </dt>
            </dl>
        </div>
        <div class="wjml">
            <dl>
                <dt>
                    恭喜您密码修改成功
                </dt>
                <dd>
                    <input name="" type="button" class="reg_an" value="重新登录" />
                </dd>
            </dl>
        </div>
        <div>
            <img src="images/reg_bottom.gif" alt="" />
        </div>
    </div>
</asp:Content>
