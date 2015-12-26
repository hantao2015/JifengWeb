<%@ Page Title="" Language="C#" MasterPageFile="~/Web.Master" AutoEventWireup="true" CodeBehind="ShopSubmit.aspx.cs" Inherits="MaoChong.Web.ShopSubmit" %>
<%@ Register src="UCLeftmenu2.ascx" tagname="UCLeftmenu2" tagprefix="uc1" %>
<%@ MasterType VirtualPath="~/Web.Master" %>

<asp:Content ID="Content1" ContentPlaceHolderID="head" runat="server">
<script type="text/javascript" language="javascript">
    //省份城市二级联动
    $(function() {
        var hiddenProvinceCity = $(":hidden[id*='HiddenProvinceCity']");
        var selectProv = $("#select_Province");
        var selectCity = $("#select_City");
        var iniProvince = "";
        var iniCity = "";
        if (hiddenProvinceCity.val() != "") {
            var valueList = hiddenProvinceCity.val().split("-");
            if (valueList.length >= 2) {
                iniProvince = valueList[0];
                iniCity = valueList[1];
            }
        }

        //全国省份与城市二维数组
        var cityInfo = [
            { "n": "北京市", "c": ["北京市", "密云县", "延庆县", "东城区", "西城区", "崇文区", "宣武区", "朝阳区", "丰台区", "石景山区", "海淀区", "门头沟区", "房山区", "通州区", "顺义区", "昌平区", "大兴区", "怀柔区", "平谷区"] },
            { "n": "天津市", "c": ["天津市", "宁河县", "静海县", "蓟　县", "和平区", "河东区", "河西区", "南开区", "河北区", "红桥区", "塘沽区", "汉沽区", "大港区", "东丽区", "西青区", "津南区", "北辰区", "武清区", "宝坻区"] },
            { "n": "上海市", "c": ["上海市", "崇明县", "黄浦区", "卢湾区", "徐汇区", "长宁区", "静安区", "普陀区", "闸北区", "虹口区", "杨浦区", "闵行区", "宝山区", "嘉定区", "浦东新区", "金山区", "松江区", "青浦区", "南汇区", "奉贤区"] },
            { "n": "重庆市", "c": ["重庆市", "江津市", "合川市", "永川市", "南川市"] },
            { "n": "河北省", "c": ["石家庄市", "唐山市", "秦皇岛市", "邯郸市", "邢台市", "保定市", "张家口市", "承德市", "沧州市", "廊坊市", "衡水市"] },
            { "n": "山西省", "c": ["太原市", "大同市", "阳泉市", "长治市", "晋城市", "朔州市", "晋中市", "运城市", "忻州市", "临汾市", "吕梁市"] },
            { "n": "台湾省", "c": ["台北市", "高雄市", "基隆市", "台中市", "台南市", "新竹市", "嘉义市", "台北县", "宜兰县", "桃园县", "新竹县", "苗栗县", "台中县", "彰化县", "南投县", "云林县", "嘉义县", "台南县", "高雄县", "屏东县", "澎湖县", "台东县", "花莲县"] },
            { "n": "辽宁省", "c": ["沈阳市", "大连市", "鞍山市", "抚顺市", "本溪市", "丹东市", "锦州市", "营口市", "阜新市", "辽阳市", "盘锦市", "铁岭市", "朝阳市", "葫芦岛市"] },
            { "n": "吉林省", "c": ["长春市", "吉林市", "四平市", "辽源市", "通化市", "白山市", "松原市", "白城市", "延边朝鲜族自治州"] },
            { "n": "黑龙江省", "c": ["哈尔滨市", "齐齐哈尔市", "鹤岗市", "双鸭山市", "鸡西市", "大庆市", "伊春市", "牡丹江市", "佳木斯市", "七台河市", "黑河市", "绥化市", "大兴安岭地区"] },
            { "n": "江苏省", "c": ["南京市", "无锡市", "徐州市", "常州市", "苏州市", "南通市", "连云港市", "淮安市", "盐城市", "扬州市", "镇江市", "泰州市", "宿迁市"] },
            { "n": "浙江省", "c": ["杭州市", "宁波市", "温州市", "嘉兴市", "湖州市", "绍兴市", "金华市", "衢州市", "舟山市", "台州市", "丽水市"] },
            { "n": "安徽省", "c": ["合肥市", "芜湖市", "蚌埠市", "淮南市", "马鞍山市", "淮北市", "铜陵市", "安庆市", "黄山市", "滁州市", "阜阳市", "宿州市", "巢湖市", "六安市", "亳州市", "池州市", "宣城市"] },
            { "n": "福建省", "c": ["福州市", "厦门市", "莆田市", "三明市", "泉州市", "漳州市", "南平市", "龙岩市", "宁德市"] },
            { "n": "江西省", "c": ["南昌市", "景德镇市", "萍乡市", "九江市", "新余市", "鹰潭市", "赣州市", "吉安市", "宜春市", "抚州市", "上饶市"] },
            { "n": "山东省", "c": ["济南市", "青岛市", "淄博市", "枣庄市", "东营市", "烟台市", "潍坊市", "济宁市", "泰安市", "威海市", "日照市", "莱芜市", "临沂市", "德州市", "聊城市", "滨州市", "荷泽市"] },
            { "n": "河南省", "c": ["郑州市", "开封市", "洛阳市", "平顶山市", "安阳市", "鹤壁市", "新乡市", "焦作市", "濮阳市", "许昌市", "漯河市", "三门峡市", "南阳市", "商丘市", "信阳市", "周口市", "驻马店市"] },
            { "n": "湖北省", "c": ["武汉市", "黄石市", "十堰市", "宜昌市", "襄樊市", "鄂州市", "荆门市", "孝感市", "荆州市", "黄冈市", "咸宁市", "随州市", "恩施土家族苗族自治州", "仙桃市", "潜江市", "天门市", "神农架林区"] },
            { "n": "湖南省", "c": ["长沙市", "株洲市", "湘潭市", "衡阳市", "邵阳市", "岳阳市", "常德市", "张家界市", "益阳市", "郴州市", "永州市", "怀化市", "娄底市", "湘西土家族苗族自治州"] },
            { "n": "广东省", "c": ["广州市", "深圳市", "珠海市", "汕头市", "韶关市", "佛山市", "江门市", "湛江市", "茂名市", "肇庆市", "惠州市", "梅州市", "汕尾市", "河源市", "阳江市", "清远市", "东莞市", "中山市", "潮州市", "揭阳市", "云浮市"] },
            { "n": "甘肃省", "c": ["兰州市", "金昌市", "白银市", "天水市", "嘉峪关市", "武威市", "张掖市", "平凉市", "酒泉市", "庆阳市", "定西市", "陇南市", "临夏回族自治州", "甘南藏族自治州"] },
            { "n": "四川省", "c": ["成都市", "自贡市", "攀枝花市", "泸州市", "德阳市", "绵阳市", "广元市", "遂宁市", "内江市", "乐山市", "南充市", "眉山市", "宜宾市", "广安市", "达州市", "雅安市", "巴中市", "资阳市", "阿坝藏族羌族自治州", "甘孜藏族自治州", "凉山彝族自治州"] },
            { "n": "贵州省", "c": ["贵阳市", "六盘水市", "遵义市", "安顺市", "铜仁地区", "毕节地区", "黔西南布依族苗族自治州", "黔东南苗族侗族自治州", "黔南布依族苗族自治州"] },
            { "n": "海南省", "c": ["海口市", "三亚市", "五指山市", "琼海市", "儋州市", "文昌市", "万宁市", "东方市", "澄迈县", "定安县", "屯昌县", "临高县", "白沙黎族自治县", "昌江黎族自治县", "乐东黎族自治县", "陵水黎族自治县", "保亭黎族苗族自治县", "琼中黎族苗族自治县"] },
            { "n": "云南省", "c": ["昆明市", "曲靖市", "玉溪市", "保山市", "昭通市", "丽江市", "思茅市", "临沧市", "楚雄彝族自治州", "红河哈尼族彝族自治州", "文山壮族苗族自治州", "西双版纳傣族自治州", "大理白族自治州", "德宏傣族景颇族自治州", "怒江傈僳族自治州", "迪庆藏族自治州"] },
            { "n": "青海省", "c": ["西宁市", "海东地区", "海北藏族自治州", "黄南藏族自治州", "海南藏族自治州", "果洛藏族自治州", "玉树藏族自治州", "海西蒙古族藏族自治州"] },
            { "n": "陕西省", "c": ["西安市", "铜川市", "宝鸡市", "咸阳市", "渭南市", "延安市", "汉中市", "榆林市", "安康市", "商洛市"] },
            { "n": "广西壮族自治区", "c": ["南宁市", "柳州市", "桂林市", "梧州市", "北海市", "防城港市", "钦州市", "贵港市", "玉林市", "百色市", "贺州市", "河池市", "来宾市", "崇左市"] },
            { "n": "西藏自治区", "c": ["拉萨市", "昌都地区", "山南地区", "日喀则地区", "那曲地区", "阿里地区", "林芝地区"] },
            { "n": "宁夏回族自治区", "c": ["银川市", "石嘴山市", "吴忠市", "固原市", "中卫市"]}];

        function iniProvinceAndCity() {
            var provEl = selectProv;
            var cityEl = selectCity;
            var hasDefaultProv = (iniProvince != "");
            var hasDefaultCity = (iniCity != "");

            //初始化省份
            var provHtml = '';
            provHtml += '<option value="-1">请选择所在省份</option>';
            for (var i = 0; i < cityInfo.length; i++) {
                provHtml += '<option value="' + i + '"' + ((hasDefaultProv && cityInfo[i].n == iniProvince) ? ' selected="selected"' : '') + '>' + cityInfo[i].n + '</option>';
            }
            provEl.html(provHtml);

            //初始化城市
            if (provEl.val() != '' && parseInt(provEl.val()) >= 0) {
                var cities = cityInfo[parseInt(provEl.val())].c;
                var cityHtml = '';
                cityHtml += '<option value="-1">请选择所在城市</option>';
                for (var i = 0; i < cities.length; i++) {
                    cityHtml += '<option value="' + i + '"' + ((hasDefaultCity && cities[i] == iniCity) ? ' selected="selected"' : '') + '>' + cities[i] + '</option>';
                }
                cityEl.html(cityHtml);
            } else {
                cityEl.html('<option value="-1">请选择所在城市</option>');
            };
        };
        //设置更改事件
        $("#select_Province").change(function() {
            SetCity();
            SaveSelectProCity();
        });
        $("#select_City").change(function() {
            SaveSelectProCity();
        });

        //重设置城市下拉框
        function SetCity() {
            var proSelectVal = $("#select_Province").val();
            if (proSelectVal != '' && parseInt(proSelectVal) >= 0) {
                var cities = cityInfo[parseInt(proSelectVal)].c;
                var cityHtml = '';
                cityHtml += '<option value="-1" selected="selected">请选择所在城市</option>';
                for (var i = 0; i < cities.length; i++) {
                    cityHtml += '<option value="' + i + '">' + cities[i] + '</option>';
                }
                $("#select_City").html(cityHtml);
            } else {
                $("#select_City").html('<option value="-1" selected="selected">请选择所在城市</option>');
            };
        }

        //省市选项值赋给隐藏域域
        function SaveSelectProCity() {
            var selectProVal = $("#select_Province option:selected").text();
            var selectCityVal = $("#select_City option:selected").text();
            if (selectProVal != "" && selectCityVal != "" && selectProVal != "请选择所在省份" && selectCityVal != "请选择所在城市") {
                $(":hidden[id*='HiddenProvinceCity']").val(selectProVal + "-" + selectCityVal);
            }
            else {
                $(":hidden[id*='HiddenProvinceCity']").val("");
            }
        }

        //初始化
        iniProvinceAndCity();
    });
</script>
<script type="text/javascript">
    $(document).ready(function() {//处理常用地址
        //设置选中项，根据隐藏域值
        var $AddressID = $(":input[id*='HiddenField_AddressID']");
        var $selectedAddress = $("#tableAddress td :radio[value='" + $AddressID.val() + "']");
        if ($selectedAddress.size() == 0) {
            $("#tableAddress td :radio").eq(0).attr("checked", "checked");
        }
        else {
            $selectedAddress.attr("checked", "checked");
        }

        $("#tableAddress :radio").click(function() {
            $AddressID.val($(this).val());
        });
    });
    
    
</script>
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="ContentPlaceHolder1" runat="server">
    <!--会员-->
    <div id="member">
        <div class="member">
            <!-- 左侧菜单 -->
            <uc1:UCLeftmenu2 ID="UCLeftmenu21" runat="server" />
            <div class="member_content right">
                <div class="member_content_title">
                    我的购物车
                    <asp:HiddenField ID="HiddenProvinceCity" runat="server"  Value=""/><!--省份－城市-->
                    <asp:HiddenField ID="HiddenField_AddressID" runat="server"  Value="0" /><!--常用地址选择值-->
                </div>
                <!--我的购物车-->
                <div class="exchange">
                    <div class="exchange_list">
                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                            <tr class="exchange_list_title">
                                <td>
                                    奖品名称
                                </td>
                                <td align="center" width="70">
                                    单位
                                </td>
                                <td align="center" width="70">
                                    数量
                                </td>
                                <td align="center" width="70">
                                    所需积分
                                </td>
                                <td align="center" width="70">
                                    操作
                                </td>
                            </tr>
                            <asp:Repeater ID="Repeater_Product" runat="server">
                                <ItemTemplate>
                                    <tr>
                                        <td>
                                            <%#Eval("ProductName")%>
                                        </td>
                                        <td align="center">
                                            <%#Eval("Unit")%>
                                        </td>
                                        <td align="center">
                                            <asp:TextBox ajax="1" productID='<%#Eval("ID")%>' ID="txt_num" Width="40" CssClass="srk_x" MaxLength="4" runat="server" Text='<%#Eval("ProductNum")%>' onkeyup="if(isNaN(value))execCommand('undo')" onafterpaste="if(isNaN(value))execCommand('undo')"></asp:TextBox>
                                        </td>
                                        <td align="center">
                                            <%#Eval("Integral")%>
                                        </td>
                                        <td align="center">
                                            <asp:ImageButton ID="Ibtn_Delete" CommandArgument='<%#Eval("ID")%>' runat="server" OnClick="Ibtn_Delete_Click" OnClientClick=" return confirm('您确定要删除不？');" ImageUrl="images/Delete.gif" />
                                        </td>
                                    </tr>
                                </ItemTemplate>
                                <FooterTemplate>
                                    <%# Repeater_Product.Items.Count>0 ? "":"<tr><td colspan='5' align='center'><span  style=' color:Red;'>您还没有购物记录哦!</span></td></tr>" %>
                                </FooterTemplate>
                            </asp:Repeater>
                        </table>
                    </div>
                    <div class="exchange_news" style="font-size: 14px;">
                        <div class="exchange_anniu" style="text-align: right; padding: 0;">
                            <asp:Button ID="btn_update" runat="server" CssClass="exchange_anniu_h" Text="更新数量" onclick="btn_update_Click" />
                        </div>
                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                            <tr>
                                <td width="165" align="right">
                                    <font style="font-size: 14px;">消费积分总计：</font>
                                </td>
                                <td>
                                    <span><asp:Literal ID="Literal_totalIntegral" runat="server"></asp:Literal></span>
                                </td>
                            </tr>
                            <tr>
                                <td width="165" align="right">
                                    <font style="font-size: 14px;">当前可用积分：</font>
                                </td>
                                <td>
                                    <span><asp:Literal ID="Literal_usedIntegral" runat="server"></asp:Literal></span>
                                </td>
                            </tr>
                        </table>
                    </div>
                    <div class="exchange_list">
                        <table width="100%" border="0" cellspacing="0" cellpadding="0">
                            <tr class="exchange_list_title">
                                <td>
                                    收件人信息
                                </td>
                            </tr>
                        </table>
                        <div class="exchange_sxrxx">
                            <div class="exchange_sxrxx_t">
                                <table id="tableAddress" width="100%" border="0" cellspacing="0" cellpadding="0">
                                    <tr>
                                        <td colspan="3">
                                            <b>常用地址：</b>
                                        </td>
                                    </tr>
                                    <asp:Repeater ID="Repeater_address" runat="server">
                                        <ItemTemplate>
                                            <tr>
                                                <td width="20">
                                                    <input name="AddressID" type="radio" value='<%#Eval("ID") %>'/>
                                                </td>
                                                <td>
                                                    <b><%#Eval("Name") %></b>&nbsp;&nbsp;<%#Eval("Province")%><%#Eval("City")%><%#Eval("MailingAddress")%>
                                                </td>
                                                <td width="40" align="right">
                                                    <asp:ImageButton ID="Ibtn_DelAddress" CommandArgument='<%#Eval("ID")%>' runat="server" OnClick="Ibtn_DelAddress_Click"  OnClientClick=" return confirm('您确定要删除不？');"  ImageUrl="images/DelAddress.jpg" Visible='<%#Repeater_address.Items.Count==0? false : true %>' />
                                                </td>
                                            </tr>
                                        </ItemTemplate>
                                    </asp:Repeater>
                                </table>
                            </div>
                            <div class="exchange_sxrxx_b">
                                <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                    <tr>
                                        <td align="right" width="90">
                                            <span>*</span><b>收货人姓名：</b>
                                        </td>
                                        <td width="220">
                                            <asp:TextBox ID="txt_userName" runat="server" CssClass="srk" MaxLength="20"></asp:TextBox>
                                        </td>
                                        <td>
                                            &nbsp;
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="right">
                                            <span>*</span><b>省份：</b>
                                        </td>
                                        <td>
                                            <table width="100%" border="0" cellspacing="0" cellpadding="0">
                                                <tr>
                                                    <td width="125">
                                                        <select name="select_Province" id="select_Province" width="120">
                                                        </select>
                                                    </td>
                                                    <td width="150">
                                                        <select name="select_City" id="select_City" width="120">
                                                        </select>
                                                    </td>
                                                </tr>
                                            </table>
                                        </td>
                                        <td>
                                            &nbsp;
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="right">
                                            <span>*</span><b>地址：</b>
                                        </td>
                                        <td colspan="2">
                                            <asp:TextBox ID="txt_Address" runat="server" CssClass="srk" MaxLength="200" style="width: 520px;"></asp:TextBox>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="right">
                                            <span>*</span><b>手机号：</b>
                                        </td>
                                        <td>
                                            <asp:TextBox ID="txt_mobile" runat="server" CssClass="srk" MaxLength="20"></asp:TextBox>
                                        </td>
                                        <td>
                                            用于接收发送货通知短信及送货前确认
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="right">
                                            <b>电子邮件：</b>
                                        </td>
                                        <td>
                                            <asp:TextBox ID="txt_email" runat="server" CssClass="srk" MaxLength="30"></asp:TextBox>
                                        </td>
                                        <td>
                                            用来接收订单提醒邮件，便于您及时了解订单状态
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="right">
                                            <b>邮编：</b>
                                        </td>
                                        <td>
                                            <asp:TextBox ID="txt_zipCode" runat="server" CssClass="srk" MaxLength="30" Width="100"></asp:TextBox>
                                        </td>
                                        <td>
                                            有助于快速确定地址
                                        </td>
                                    </tr>
                                    <tr>
                                        <td align="right">
                                            &nbsp;
                                        </td>
                                        <td>
                                            <asp:ImageButton ID="Ibtn_Add" runat="server" ImageUrl="~/images/AddPostAddress.jpg" onclick="Ibtn_Add_Click" />
                                        </td>
                                        <td>
                                            &nbsp;
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div class="exchange_anniu">
                        <asp:Button ID="Button1" runat="server" Text="确认兑换" CssClass="exchange_anniu_f" onclick="Button1_Click" />
                        <input type="button" class="exchange_anniu_h" value="继续兑换" name="" onclick=" window.location = 'ShopList.aspx';" />
                    </div>
                </div>
            </div>
            <div class="clear"></div>
        </div>
        <div><img src="images/reg_bottom.gif" alt=""/></div>
    </div>
</asp:Content>
