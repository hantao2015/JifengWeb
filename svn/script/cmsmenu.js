

// 保存1条记录至F3软件的自定义表（二维表或文档表）
// 参数：
//      strResID：待保存记录的资源ID
//      strRecWhere：定位记录的查询条件，空值表示“添加记录”。
//      arrayColName：字段名称的数组
//      arrayColValue：字段值的数组
//      intRunInnerFormula： 1:运行表内计算；其他值：不运行
//      intRunOuterFormula： 1:运行表间计算；其他值：不运行
//      intEnableSelfLock： 1:校验本表锁定；其他值：不校验
//      intEnableRelationLock： 1:校验关联锁定；其他值：不校验
//      intEnableTimeLock： 1:校验时间锁定；其他值：不校验
//      intEnableVerifyFormula： 1:启用校验公式
//      intEnableReminderFormula： 1:启用提醒公式
//      intEnableDataSync： 1:启用数据同步
//      intEnableBitianVerify： 1:启用必填项校验
//      intEnableRecursiveCalculation： 1:启用递归计算
// 返回：
//      保存的记录ID；返回0表示保存失败。
function AjaxSaveRecordA(strResID, strRecWhere, arrayColName, arrayColValue, intRunInnerFormula, intRunOuterFormula, intEnableSelfLock, intEnableRelationLock, intEnableTimeLock, intEnableVerifyFormula, intEnableReminderFormula, intEnableDataSync, intEnableBitianVerify, intEnableRecursiveCalculation, async, Callback, CallbackError) {
    try {

        if (!strResID) return 0;
        if (!arrayColName || arrayColName.length <= 0) return 0;
        if (!arrayColValue || arrayColValue.length <= 0) return 0;
        if (arrayColName.length != arrayColValue.length) return 0;

        //发送Ajax请求
        var strUrl = "/rispweb/rispservice/HSServiceSaveRecord.aspx";
        var strPostBody = "f3svc_resid=" + escape(strResID);
        if (strRecWhere) strPostBody += "&f3svc_sqlwhere=" + escape(strRecWhere);
        if (intRunInnerFormula) strPostBody += "&f3svc_innerformula=" + intRunInnerFormula;
        if (intRunOuterFormula) strPostBody += "&f3svc_outerformula=" + intRunOuterFormula;
        if (intEnableSelfLock) strPostBody += "&f3svc_selflock=" + intEnableSelfLock;
        if (intEnableRelationLock) strPostBody += "&f3svc_rellock=" + intEnableRelationLock;
        if (intEnableTimeLock) strPostBody += "&f3svc_timelock=" + intEnableTimeLock;
        if (intEnableVerifyFormula) strPostBody += "&f3svc_formula_verify=" + intEnableVerifyFormula;
        if (intEnableReminderFormula) strPostBody += "&f3svc_formula_reminder=" + intEnableReminderFormula;
        if (intEnableDataSync) strPostBody += "&f3svc_datasync=" + intEnableDataSync;
        if (intEnableBitianVerify) strPostBody += "&f3svc_bitian=" + intEnableBitianVerify;
        if (intEnableRecursiveCalculation) strPostBody += "&f3svc_recursive_cal=" + intEnableRecursiveCalculation;
        var data = [{ arrayColName: arrayColName, arrayColValue: arrayColValue }];
        //加多个字段和值对
        var json = mini.encode(data);

        var x = $.ajax({
            url: "/rispweb/rispservice/HSServiceSaveRecord.aspx?method=AjaxSaveRecord",
            data: { data: json, f3svc_resid: strResID, f3svc_sqlwhere: strRecWhere, f3svc_innerformula: intRunInnerFormula, f3svc_outerformula: intRunOuterFormula, f3svc_selflock: intEnableSelfLock, f3svc_rellock: intEnableRelationLock, f3svc_timelock: intEnableTimeLock, f3svc_formula_verify: intEnableVerifyFormula, f3svc_formula_reminder: intEnableReminderFormula, f3svc_datasync: intEnableDataSync, f3svc_bitian: intEnableBitianVerify, f3svc_recursive_cal: intEnableRecursiveCalculation },
            type: "post",
            async: async,
            success: Callback,
            error: CallbackError
        });

        

    } catch (ex) {

        return 0;
    }
}
////function (jqXHR, textStatus, errorThrown) {
//alert(jqXHR.responseText);
//}
function AjaxSaveRecord(strResID, strRecWhere, arrayColName, arrayColValue, intRunInnerFormula, intRunOuterFormula, intEnableSelfLock, intEnableRelationLock, intEnableTimeLock, intEnableVerifyFormula, intEnableReminderFormula, intEnableDataSync, intEnableBitianVerify, intEnableRecursiveCalculation) {
    try {
     
        if (!strResID) return 0;
        if (!arrayColName || arrayColName.length <= 0) return 0;
        if (!arrayColValue || arrayColValue.length <= 0) return 0;
        if (arrayColName.length != arrayColValue.length) return 0;

        //发送Ajax请求
        var strUrl = "/rispweb/rispservice/HSServiceSaveRecord.aspx";
        var strPostBody = "f3svc_resid=" + escape(strResID);
        if (strRecWhere) strPostBody += "&f3svc_sqlwhere=" + escape(strRecWhere);
        if (intRunInnerFormula) strPostBody += "&f3svc_innerformula=" + intRunInnerFormula;
        if (intRunOuterFormula) strPostBody += "&f3svc_outerformula=" + intRunOuterFormula;
        if (intEnableSelfLock) strPostBody += "&f3svc_selflock=" + intEnableSelfLock;
        if (intEnableRelationLock) strPostBody += "&f3svc_rellock=" + intEnableRelationLock;
        if (intEnableTimeLock) strPostBody += "&f3svc_timelock=" + intEnableTimeLock;
        if (intEnableVerifyFormula) strPostBody += "&f3svc_formula_verify=" + intEnableVerifyFormula;
        if (intEnableReminderFormula) strPostBody += "&f3svc_formula_reminder=" + intEnableReminderFormula;
        if (intEnableDataSync) strPostBody += "&f3svc_datasync=" + intEnableDataSync;
        if (intEnableBitianVerify) strPostBody += "&f3svc_bitian=" + intEnableBitianVerify;
        if (intEnableRecursiveCalculation) strPostBody += "&f3svc_recursive_cal=" + intEnableRecursiveCalculation;
        var data = [{arrayColName: arrayColName, arrayColValue: arrayColValue }];
        //加多个字段和值对
        var json = mini.encode(data);
         
        var x= $.ajax({
            url: "/rispweb/rispservice/HSServiceSaveRecord.aspx?method=AjaxSaveRecord",
            data: { data: json, f3svc_resid: strResID, f3svc_sqlwhere: strRecWhere, f3svc_innerformula: intRunInnerFormula, f3svc_outerformula: intRunOuterFormula, f3svc_selflock: intEnableSelfLock, f3svc_rellock: intEnableRelationLock, f3svc_timelock: intEnableTimeLock, f3svc_formula_verify: intEnableVerifyFormula, f3svc_formula_reminder: intEnableReminderFormula, f3svc_datasync: intEnableDataSync, f3svc_bitian: intEnableBitianVerify, f3svc_recursive_cal: intEnableRecursiveCalculation },
            type: "post",
            async:false,
            success: function (text) {
                
                var data = mini.decode(text);
                
               
                if (text !== "") {
                    var data = mini.decode(text);
                   
                    if (data.error == -1) {
                        alert(data.message);
                        return 0;
                    }
                    else {
                         
                       
                        return data.REC_ID;
                      
                    }
                }
            },
            error: function (jqXHR, textStatus, errorThrown) {
                alert(jqXHR.responseText);
            }
        });
       
        if (x.responseText !== "") {
            var responsedata = mini.decode(x.responseText);
            if (responsedata.error == -1) {
                alert(responsedata.message);
                    return 0;
                }
                else {
                   
              
                return responsedata.REC_ID.toString();

                }
            
        }

    } catch (ex) {
       
        return 0;
    }
}

// 
/*
* 菜单点击事件入口。菜单包括：A) 基本功能按钮(添加、修改、删除等)； B)资源按钮(导入、导出、定制1、定制2 等)； C)xml文件定义的菜单和链接
* 返回： 
*   不能返回true或false，否则下拉菜单的点击会出错。因为下拉菜单js控件要求“无返回”。
*   如果是F3页面直接调用此函数的，无返回就作为返回false。
*/
function RSMenuClick_RSMultiSave(MenuType, strModuleKey, mnusection, mnukey, cmscmd, strBiID, custBtnType, url, ResID, strSpecResID, mnufrom, mnuselnum, frmname, confirmMsg, mnutarget, NoUrlParam, strUserNameInRptUrl, strUserID, strUserName, strUserEnPass, mnuallottitle, DepCode1, strAlone, strTableBackPage, strBodyBackPage, strMsgSelectRec, strMsgSelectOneRec, center, left, top, width, height, menubar, toolbar, location, resizable, scrollbars, titlebar, fullscreen) {
    try {
        //获取主表选中的记录唯一值
      
        var strHostResID = document.getElementById("mnuhostresid").value;
       
        if (strHostResID == "0") strHostResID = "";
        
        var strHostRecID = F3Trim(document.getElementById("hfRightSelectedIDS").value, ",");
       
        if (strHostRecID == "0") strHostRecID = "";
        var strHostRecID = strHostRecID.replace("[", "");
        strHostRecID = strHostRecID.replace("]", "");
       
        try {
            while (true) {
                strHostRecID=strHostRecID.replace('"', "");
                if (strHostRecID.indexOf('"') == -1)
                {
                    break;
                }
            }
          
        }
        catch (ex) { }
       
       
       
         
        //获取选中的记录唯一值
        var strRecID = "";
        if (mnufrom == "1") { //来自主表
            strRecID = strHostRecID;
        } else if (mnufrom == "2") { //来自子表
            strRecID = document.getElementById("RECID2").value;
            if ((mnuselnum == "1" || mnuselnum == "2") && (!strHostResID || !strHostRecID)) {
                alert(strMsgSelectRec); //请先选择主表记录
                return;
            }
            if ((mnuselnum == "1" || mnuselnum == "2") && strHostRecID.indexOf(",") >= 0) {
                alert(strMsgSelectRec); //子表操作必须且仅能选中1条主表记录
                return;
            }
        } else {
            strRecID = "";
        }

        //处理记录唯一值
        if (strRecID == "0") strRecID = "";
        strRecID = F3Trim(strRecID, ",");

        //校验：先选择记录
        if ((mnuselnum == "1" || mnuselnum == "2") && !strRecID) {
            alert(strMsgSelectRec);
            return;
        }
        //校验：当前操作必须且只能选择1条记录
        if (mnuselnum == "1" && strRecID.indexOf(",") >= 0) {
            alert(strMsgSelectOneRec);
            return;
        }

        //操作确认
        if (confirmMsg) {
            if (!confirm(confirmMsg)) return; //点击了“取消”
        }

        //处理编辑窗体的客户自定义函数
        try {
            var blnRtn = F3MenuClickCustomize(ResID, strRecID, MenuType, cmscmd, frmname, mnusection, mnukey, strUserID, DepCode1);
            if (!blnRtn) return;
        } catch (ex) {
        }

        if (MenuType == "POST") {
            document.getElementById("mnusection").value = mnusection;
            document.getElementById("mnukey").value = mnukey;
            document.getElementById("specresid").value = strSpecResID;
            if (strSpecResID && strSpecResID != "0") {
                document.getElementById("mnuresid").value = strSpecResID;
            } else {
                document.getElementById("mnuhostresid").value = strHostResID;
                document.getElementById("mnuhostrecid").value = strHostRecID;
                document.getElementById("mnuresid").value = ResID;
            }
            document.getElementById("mnurecid").value = strRecID;
            document.getElementById("mnuformname").value = frmname;
            document.getElementById("cmsaction").value = cmscmd;
            document.getElementById("mnufrom").value = mnufrom;
            document.getElementById("page_iewidth").value = self.document.body.offsetWidth;
            document.getElementById("page_ieheight").value = self.document.body.offsetHeight;
            document.getElementById("mnuallottitle").value = mnuallottitle;
            document.getElementById("bihostid").value = strBiID;
            document.getElementById("Form1").submit();
            return;
        } else if (MenuType == "GET" || MenuType == "POPUP" || MenuType == "POPUPDOC" || MenuType == "DIALOG" || MenuType == "MODALDIALOG" || MenuType == "DIALOGREFRESH") {
            //组装URL
            var strUrl = "";
            if (NoUrlParam == '1') { //URL不附加任何参数
                strUrl = url;
            } else {
                //定制页面或报表等都必须加参数: timeid
                if (url.indexOf("?") > 0) {
                    strUrl = url + "&timeid=" + Math.round(Math.random() * 10000000000);
                } else {
                    strUrl = url + "?timeid=" + Math.round(Math.random() * 10000000000);
                }

                if (url.indexOf("/reportserver?/") >= 0) { //是报表
                    if (mnuselnum == "1" || mnuselnum == "2") strUrl += "&mnurecid=" + strRecID; //URL需要有记录唯一值
                    if (DepCode1) strUrl += "&depcode1=" + DepCode1;
                    if (strUserNameInRptUrl == "1") strUrl += "&user=" + escape(strUserName);
                } else { //非报表
                    if (strModuleKey) strUrl += "&modkey=" + strModuleKey;
                    if (mnusection) strUrl += "&mnusection=" + mnusection;
                    if (mnukey) strUrl += "&mnukey=" + mnukey;
                    if (mnufrom) strUrl += "&mnufrom=" + mnufrom;
                    if (cmscmd) strUrl += "&cmsaction=" + cmscmd;
                    if (strSpecResID && strSpecResID != "0") {
                        strUrl += "&mnuresid=" + strSpecResID;
                        strUrl += "&specresid=" + strSpecResID;
                    } else {
                        if (ResID) strUrl += "&mnuresid=" + ResID;
                        if (strHostResID) strUrl += "&mnuhostresid=" + strHostResID;
                        if (strHostRecID) strUrl += "&mnuhostrecid=" + strHostRecID;
                    }
                    if (frmname) strUrl += "&mnuformname=" + escape(frmname);
                    if (mnuallottitle) strUrl += "&mnuallottitle=" + escape(mnuallottitle);
                    if (DepCode1) strUrl += "&depcode1=" + DepCode1;
                    if (strRecID) strUrl += "&mnurecid=" + strRecID;
                    if (strBiID) strUrl += "&bihostid=" + strBiID;

                    //加入用户登录帐号和加密后的密码
                    if (strUserID) strUrl += "&strUserID=" + escape(strUserID);
                    if (strUserEnPass) strUrl += "&strUserEnPass=" + escape(strUserEnPass);
                }
            }

            if (MenuType == "GET") {
                if (strUrl.indexOf("/reportserver?/") >= 0) {
                    window.location = strUrl; //报表也可以用GET请求
                } else if (mnutarget == "" || mnutarget == "content" || mnutarget == "_self") {
                    strUrl += "&backpage=" + strTableBackPage;
                    window.location = strUrl;
                } else if (mnutarget == "_parent") {
                    strUrl += "&backpage=" + strBodyBackPage;
                    window.open(strUrl, mnutarget);
                } else {
                    strUrl += "&backpage=" + strTableBackPage;
                    window.open(strUrl, mnutarget);
                }
            } else if (MenuType == "POPUP") {
                var strFeatures = "left=" + left + ",top=" + top + ",height=" + height + ",width=" + width + ",status=yes,";
                strFeatures += "toolbar=" + toolbar + ",menubar=" + menubar + ",location=" + location + ",resizable=" + resizable + ",";
                strFeatures += "scrollbars=" + scrollbars + ",titlebar=" + titlebar + ",fullscreen=" + fullscreen;
                window.open(strUrl, mnutarget, strFeatures);
            } else if (MenuType == "POPUPDOC") {
                try {
                    document.getElementById("formDownFile").action = strUrl;
                    document.getElementById("formDownFile").submit();
                } catch (e) {
                }
            } else if (MenuType == "DIALOG" || MenuType == "DIALOGREFRESH") {
                var strFeatures = "";
                if (center = "yes") {
                    strFeatures = ";center:yes;";
                } else {
                    strFeatures = ";dialogTop:" + top + ";dialogLeft:" + left;
                }
                strFeatures += "dialogHeight:" + height + "px; dialogWidth:" + width + "px; resizable:" + resizable + ";scroll:" + scrollbars;
                window.showModalDialog(strUrl, "", strFeatures);

                if (MenuType == "DIALOGREFRESH") { //模式窗体关闭后刷新当前页面
                    document.getElementById("cmsaction").value = "MenuRecordRefresh";
                    document.getElementById("Form1").submit();
                }
            } else if (MenuType == "MODALDIALOG") {
                window.showModalDialog(strUrl, window, "dialogHeight:486px; dialogWidth:566px; help:no; edge:sunken; center:yes; resizable:no; scroll:no; status:no;");
            }

            return;
        }
    } catch (ex) {
        alert("操作错误：" + ex.message);
        return;
    }
}

function F3MenuClick(MenuType, strModuleKey, mnusection, mnukey, cmscmd, strBiID, custBtnType, url, ResID, strSpecResID, mnufrom, mnuselnum, frmname, confirmMsg, mnutarget, NoUrlParam, strUserNameInRptUrl, strUserID, strUserName, strUserEnPass, mnuallottitle, DepCode1, strAlone, strTableBackPage, strBodyBackPage, strMsgSelectRec, strMsgSelectOneRec, center, left, top, width, height, menubar, toolbar, location, resizable, scrollbars, titlebar, fullscreen){
    try {
        
	    //获取主表选中的记录唯一值
        var strHostResID = document.getElementById("mnuhostresid").value;
        var strHostTableScrollTop = document.getElementById("HostTableScrollTop").value;
        var strCmspassid = document.getElementById("cmspassid").value;
       // var strmnusrc = document.getElementById("mnusrc").value;
        if (strHostResID=="0") strHostResID = "";
        var strHostRecID = F3Trim(document.getElementById("RECID").value, ",");
        if (strHostRecID=="0") strHostRecID = "";
        //alert(strHostRecID);
        //获取选中的记录唯一值
        var strRecID = "";
	    if (mnufrom=="1"){ //来自主表
            strRecID = strHostRecID;
        }else if (mnufrom=="2"){ //来自子表
            strRecID = document.getElementById("RECID2").value;
            if ((mnuselnum=="1" || mnuselnum=="2") && (!strHostResID || !strHostRecID)){
	            alert(strMsgSelectRec); //请先选择主表记录
	            return;
            }
            if ((mnuselnum=="1" || mnuselnum=="2") && strHostRecID.indexOf(",") >= 0){
	            alert(strMsgSelectRec); //子表操作必须且仅能选中1条主表记录
	            return;
            }
        }else{
            strRecID = "";
        }

        //处理记录唯一值
        if (strRecID=="0") strRecID = "";
        strRecID = F3Trim(strRecID, ",");

        //校验：先选择记录
        if ((mnuselnum=="1" || mnuselnum=="2") && !strRecID ){
            alert(strMsgSelectRec); 
            return;
        }
        //校验：当前操作必须且只能选择1条记录
        if (mnuselnum=="1" && strRecID.indexOf(",") >= 0){
            alert(strMsgSelectOneRec);
            return;
        }

        //操作确认
        if (confirmMsg){
            if (!confirm(confirmMsg)) return; //点击了“取消”
        }

        //处理编辑窗体的客户自定义函数
        try{
            var blnRtn = F3MenuClickCustomize(ResID, strRecID, MenuType, cmscmd, frmname, mnusection, mnukey, strUserID, DepCode1);
            if (!blnRtn) {
             
                return false;
            }
        }catch(ex){
        }

        if (MenuType=="POST"){
            document.getElementById("mnusection").value = mnusection;
            document.getElementById("mnukey").value = mnukey;
            document.getElementById("specresid").value = strSpecResID;
            if (strSpecResID && strSpecResID!="0"){
                document.getElementById("mnuresid").value = strSpecResID;
            }else{
                document.getElementById("mnuhostresid").value = strHostResID;
                document.getElementById("mnuhostrecid").value = strHostRecID;
                document.getElementById("mnuresid").value = ResID;
            }
            document.getElementById("mnurecid").value = strRecID;
            document.getElementById("mnuformname").value = frmname;
            document.getElementById("cmsaction").value = cmscmd;
            document.getElementById("mnufrom").value = mnufrom;
            document.getElementById("page_iewidth").value = self.document.body.offsetWidth;
            document.getElementById("page_ieheight").value = self.document.body.offsetHeight;
            document.getElementById("mnuallottitle").value = mnuallottitle;
            document.getElementById("bihostid").value = strBiID;
            document.getElementById("cmspassid").value = strCmspassid;
            if (mnufrom == "1") {
                if ( cmscmd == "MenucmdEditDEST")
                {
                    var resid = strHostResID;
                    var strBackPage = "";
                    var mnurecid = document.getElementById("RECID").value;
                    var cmswhere =""// document.getElementById("cmswhere").value;
                    $.ajax({
                        url: "/rispweb/risphost/data/AjaxService.aspx?method=DealTableMenuCommand_ajax",
                        data: {
                            resid: resid, strCommand: cmscmd, mnurecid: mnurecid,
                            strBackPage: strBackPage, mnuresid: document.getElementById("mnuresid").value,
                            mnusection: mnusection, mnukey: mnukey,
                            specresid: strSpecResID, mnuhostresid: strHostResID, mnuhostrecid: strHostRecID,
                            mnuformname: frmname, cmsaction: cmscmd, mnufrom: mnufrom, page_iewidth: self.document.body.offsetWidth,
                            page_ieheight: self.document.body.offsetHeight, mnuallottitle: mnuallottitle, bihostid: strBiID, cmspassid: strCmspassid, cmswhere: cmswhere
                        },
                        type: "post",
                        success: function (text) {
                            if (text !== "") {
                                var data = mini.decode(text);
                                if (data.url !== "") {
                                    // alert(data.url);
                                    var win = mini.open({
                                        title: data.wintitle,
                                        url: data.url,
                                        showModal: true,
                                        width: 800,
                                        height: 600
                                    });
                                    win.on("beforebuttonclick", function (e) {
                                        if (e.name == 'close') {   }
                                    });


                                }
                                else {
                                    if (data.error == -1) {
                                        // alert(data.message);
                                        dgridHostTable.unmask();
                                        document.getElementById("Form1").submit();
                                    }
                                    else {
                                        alert(data.message);
                                        var resid = document.getElementById("mnuhostresid").value;
                                        
                                        try {
                                            AfterHostSaveData();
                                        }
                                        catch (ex) {

                                        }
                                    }
                                }
                            }
                        },
                        error: function (jqXHR, textStatus, errorThrown) {
                            alert(jqXHR.responseText);
                        }
                    });
                    return false;
                }
                if (cmscmd == "MenuRecordCustEdit1" || cmscmd == "MenuRecordCustEdit2" || cmscmd == "MenuRecordCustEdit3" || cmscmd == "MenuRecordCustEdit4" || cmscmd == "MenuRecordCustEdit5" ) {
                    var resid = strHostResID;
                    var strBackPage = "";
                    try {
                      
                        try { getselectrows(); }
                        catch (ex)
                        { }

                        var mnurecid = document.getElementById("RECID").value;
                        var cmswhere = document.getElementById("cmswhere").value;
                    dgridHostTable.loading("请稍后......");
                    $.ajax({
                        url: "/rispweb/risphost/data/AjaxService.aspx?method=DealTableMenuCommand_ajax",
                        data: { resid: resid, strCommand: cmscmd, mnurecid: mnurecid,  
                            strBackPage: strBackPage, mnuresid: document.getElementById("mnuresid").value,
                            mnusection: mnusection, mnukey: mnukey,    
                            specresid: strSpecResID, mnuhostresid: strHostResID, mnuhostrecid: strHostRecID,
                            mnuformname: frmname, cmsaction: cmscmd, mnufrom: mnufrom, page_iewidth: self.document.body.offsetWidth,
                            page_ieheight: self.document.body.offsetHeight, mnuallottitle: mnuallottitle, bihostid: strBiID, cmspassid: strCmspassid, cmswhere: cmswhere
                        },
                        type: "post",
                        success: function (text) {
                            if (text !== "") {
                                var data = mini.decode(text);
                                if (data.url !== "") {
                                    // alert(data.url);
                                    var win = mini.open({
                                        title: data.wintitle,
                                        url: data.url,
                                        showModal: true,
                                        width: 800,
                                        height: 600
                                    });
                                    win.on("beforebuttonclick", function (e) {
                                        if (e.name == 'close') { dgridHostTable.reload();}
                                    });


                                }
                                else {
                                    if (data.error == -1) {
                                        // alert(data.message);
                                        dgridHostTable.unmask();
                                        document.getElementById("Form1").submit();
                                    }
                                    else {
                                        alert(data.message);
                                        var resid = document.getElementById("mnuhostresid").value;
                                        dgridHostTable.reload({ resid: resid });
                                        try {
                                            AfterHostSaveData();
                                        }
                                        catch (ex) {

                                        }
                                    }
                                }
                            }
                        },
                        error: function (jqXHR, textStatus, errorThrown) {
                            alert(jqXHR.responseText);
                        }
                    });
                    }
                    catch (ex) {
                        document.getElementById("Form1").submit();
                    }
                }
                else { document.getElementById("Form1").submit(); }
            }
            else
            { document.getElementById("Form1").submit(); }
            return false;
        }else if (MenuType=="GET" || MenuType=="POPUP" || MenuType=="POPUPDOC" || MenuType=="DIALOG" || MenuType=="MODALDIALOG" || MenuType=="DIALOGREFRESH"){
	        //组装URL
	        var strUrl = "";
	        if (NoUrlParam=='1'){ //URL不附加任何参数
		        strUrl = url;
	        }else{
	            //定制页面或报表等都必须加参数: timeid
                if (url.indexOf("?") > 0){
	                strUrl = url + "&timeid=" + Math.round(Math.random() * 10000000000);
                }else{
	                strUrl = url + "?timeid=" + Math.round(Math.random() * 10000000000);
                }
	            
	            if (url.indexOf("/reportserver?/") >= 0){ //是报表
	                if (mnuselnum=="1" || mnuselnum=="2") strUrl += "&mnurecid=" + strRecID+"&HostTableScrollTop=" + strHostTableScrollTop; //URL需要有记录唯一值
                    if (DepCode1) strUrl += "&depcode1=" + DepCode1;
                    if (strUserNameInRptUrl=="1") strUrl += "&user=" + escape(strUserName);
	            }else{ //非报表
	                if (strModuleKey) strUrl += "&modkey=" + strModuleKey;
		            if (mnusection) strUrl += "&mnusection=" + mnusection;
		            if (mnukey) strUrl += "&mnukey=" + mnukey;
		            if (mnufrom) strUrl += "&mnufrom=" + mnufrom;
		            if (cmscmd) strUrl += "&cmsaction=" + cmscmd;
		            if (strSpecResID && strSpecResID!="0"){
		                strUrl += "&mnuresid=" + strSpecResID;
		                strUrl += "&specresid=" + strSpecResID;
		            }else{
		                if (ResID) strUrl += "&mnuresid=" + ResID;
		                if (strHostResID) strUrl += "&mnuhostresid=" + strHostResID;
		                if (strHostRecID) strUrl += "&mnuhostrecid=" + strHostRecID;
		            }
		            if (frmname) strUrl += "&mnuformname=" + escape(frmname);
		            if (mnuallottitle) strUrl += "&mnuallottitle=" + escape(mnuallottitle);
		            if (DepCode1) strUrl += "&depcode1=" + DepCode1;
		            if (strRecID) strUrl += "&mnurecid=" + strRecID;
		            if(strBiID) strUrl += "&bihostid=" + strBiID;
		            if (strHostTableScrollTop) strUrl += "&HostTableScrollTop=" + strHostTableScrollTop;
                    //加入用户登录帐号和加密后的密码
                    if (strUserID) strUrl += "&strUserID=" + escape(strUserID);
                    if (strUserEnPass) strUrl += "&strUserEnPass=" + escape(strUserEnPass);
                    //if (strCmspassid) strUrl += "&cmspassid=" + escape(strCmspassid);
                   // if (strmnusrc) strUrl += "&mnusrc=" + escape(strmnusrc);
	            }
	        }
           
	        if (MenuType == "GET") {
	            if (strCmspassid) strUrl += "&cmspassid=" + escape(strCmspassid);
	           // if (strmnusrc) strUrl += "&mnusrc=" + escape(strmnusrc);
	            if (strUrl.indexOf("/reportserver?/") >= 0){
	                window.location = strUrl; //报表也可以用GET请求
	            }else if (mnutarget=="" || mnutarget=="content" || mnutarget=="_self"){
	                strUrl += "&backpage=" + strTableBackPage;
	                window.location = strUrl;
	            }else if (mnutarget=="_parent"){
	                strUrl += "&backpage=" + strBodyBackPage;
	                window.open(strUrl, mnutarget);
	            }else{
	                strUrl += "&backpage=" + strTableBackPage;
	                window.open(strUrl, mnutarget);
	            }
	        }else if (MenuType=="POPUP"){
	            var strFeatures = "left=" + left + ",top=" + top + ",height=" + height + ",width=" + width + ",status=yes,";
	            strFeatures += "toolbar=" + toolbar + ",menubar=" + menubar + ",location=" + location + ",resizable=" + resizable + ",";
	            strFeatures += "scrollbars=" + scrollbars + ",titlebar=" + titlebar + ",fullscreen=" + fullscreen;
	            window.open(strUrl, mnutarget, strFeatures);
	        }else if (MenuType=="POPUPDOC"){
		        try{
			        document.getElementById("formDownFile").action=strUrl;
			        document.getElementById("formDownFile").submit();
		        }catch(e){
		        }
	        }else if (MenuType=="DIALOG" || MenuType=="DIALOGREFRESH"){
	            var strFeatures = "";
	            if (center="yes"){
	                strFeatures = ";center:yes;";
	            }else{
	                strFeatures = ";dialogTop:" + top + ";dialogLeft:" + left;
	            }
	            strFeatures += "dialogHeight:" + height + "px; dialogWidth:" + width + "px; resizable:" + resizable + ";scroll:" + scrollbars;
	            window.showModalDialog(strUrl, "", strFeatures);
	            
	            if (MenuType=="DIALOGREFRESH"){ //模式窗体关闭后刷新当前页面
		            document.getElementById("cmsaction").value = "MenuRecordRefresh";
		            document.getElementById("Form1").submit();
	            }
	        }else if (MenuType=="MODALDIALOG"){
                window.showModalDialog(strUrl, window, "dialogHeight:486px; dialogWidth:566px; help:no; edge:sunken; center:yes; resizable:no; scroll:no; status:no;");
	        }
	        
            return;
        }
    }catch(ex){
        alert("操作错误,可能是此功能按钮只支持Mini界面：" + ex.message);
        return;
    }
}
function FineUiMenuClick(MenuType, strModuleKey, mnusection, mnukey, cmscmd, strBiID, custBtnType, url, ResID, strSpecResID, mnufrom, mnuselnum, frmname, confirmMsg, mnutarget, NoUrlParam, strUserNameInRptUrl, strUserID, strUserName, strUserEnPass, mnuallottitle, DepCode1, strAlone, strTableBackPage, strBodyBackPage, strMsgSelectRec, strMsgSelectOneRec, center, left, top, width, height, menubar, toolbar, location, resizable, scrollbars, titlebar, fullscreen) {
    try {
        //获取主表选中的记录唯一值
        var strHostResID = document.getElementById("mnuhostresid").value;
        var strHostTableScrollTop = document.getElementById("HostTableScrollTop").value;
        if (strHostResID == "0") strHostResID = "";
        var strHostRecID = F3Trim(document.getElementById("RECID").value, ",");
        if (strHostRecID == "0") strHostRecID = "";

        //获取选中的记录唯一值
        var strRecID = "";
        if (mnufrom == "1") { //来自主表
            strRecID = strHostRecID;
        } else if (mnufrom == "2") { //来自子表
            strRecID = document.getElementById("RECID2").value;
            if ((mnuselnum == "1" || mnuselnum == "2") && (!strHostResID || !strHostRecID)) {
                alert(strMsgSelectRec); //请先选择主表记录
                return;
            }
            if ((mnuselnum == "1" || mnuselnum == "2") && strHostRecID.indexOf(",") >= 0) {
                alert(strMsgSelectRec); //子表操作必须且仅能选中1条主表记录
                return;
            }
        } else {
            strRecID = "";
        }

        //处理记录唯一值
        if (strRecID == "0") strRecID = "";
        strRecID = F3Trim(strRecID, ",");

        //校验：先选择记录
        if ((mnuselnum == "1" || mnuselnum == "2") && !strRecID) {
            alert(strMsgSelectRec);
            return;
        }
        //校验：当前操作必须且只能选择1条记录
        if (mnuselnum == "1" && strRecID.indexOf(",") >= 0) {
            alert(strMsgSelectOneRec);
            return;
        }

        //操作确认
        if (confirmMsg) {
            if (!confirm(confirmMsg)) return; //点击了“取消”
        }

        //处理编辑窗体的客户自定义函数
        try {
            var blnRtn = F3MenuClickCustomize(ResID, strRecID, MenuType, cmscmd, frmname, mnusection, mnukey, strUserID, DepCode1);
            if (!blnRtn) return;
        } catch (ex) {
        }

        if (MenuType == "POST") {
            document.getElementById("mnusection").value = mnusection;
            document.getElementById("mnukey").value = mnukey;
            document.getElementById("specresid").value = strSpecResID;
            if (strSpecResID && strSpecResID != "0") {
                document.getElementById("mnuresid").value = strSpecResID;
            } else {
                document.getElementById("mnuhostresid").value = strHostResID;
                document.getElementById("mnuhostrecid").value = strHostRecID;
                document.getElementById("mnuresid").value = ResID;
            }
            document.getElementById("mnurecid").value = strRecID;
            document.getElementById("mnuformname").value = frmname;
            document.getElementById("cmsaction").value = cmscmd;
            document.getElementById("mnufrom").value = mnufrom;
            document.getElementById("page_iewidth").value = self.document.body.offsetWidth;
            document.getElementById("page_ieheight").value = self.document.body.offsetHeight;
            document.getElementById("mnuallottitle").value = mnuallottitle;
            document.getElementById("bihostid").value = strBiID;
            document.getElementById("Form1").submit();
            return;
        } else if (MenuType == "GET" || MenuType == "POPUP" || MenuType == "POPUPDOC" || MenuType == "DIALOG" || MenuType == "MODALDIALOG" || MenuType == "DIALOGREFRESH") {
            //组装URL
            var strUrl = "";
            if (NoUrlParam == '1') { //URL不附加任何参数
                strUrl = url;
            } else {
                //定制页面或报表等都必须加参数: timeid
                if (url.indexOf("?") > 0) {
                    strUrl = url + "&timeid=" + Math.round(Math.random() * 10000000000);
                } else {
                    strUrl = url + "?timeid=" + Math.round(Math.random() * 10000000000);
                }

                if (url.indexOf("/reportserver?/") >= 0) { //是报表
                    if (mnuselnum == "1" || mnuselnum == "2") strUrl += "&mnurecid=" + strRecID + "&HostTableScrollTop=" + strHostTableScrollTop; //URL需要有记录唯一值
                    if (DepCode1) strUrl += "&depcode1=" + DepCode1;
                    if (strUserNameInRptUrl == "1") strUrl += "&user=" + escape(strUserName);
                } else { //非报表
                    if (strModuleKey) strUrl += "&modkey=" + strModuleKey;
                    if (mnusection) strUrl += "&mnusection=" + mnusection;
                    if (mnukey) strUrl += "&mnukey=" + mnukey;
                    if (mnufrom) strUrl += "&mnufrom=" + mnufrom;
                    if (cmscmd) strUrl += "&cmsaction=" + cmscmd;
                    if (strSpecResID && strSpecResID != "0") {
                        strUrl += "&mnuresid=" + strSpecResID;
                        strUrl += "&specresid=" + strSpecResID;
                    } else {
                        if (ResID) strUrl += "&mnuresid=" + ResID;
                        if (strHostResID) strUrl += "&mnuhostresid=" + strHostResID;
                        if (strHostRecID) strUrl += "&mnuhostrecid=" + strHostRecID;

                    }
                    if (frmname) strUrl += "&mnuformname=" + escape(frmname);
                    if (mnuallottitle) strUrl += "&mnuallottitle=" + escape(mnuallottitle);
                    if (DepCode1) strUrl += "&depcode1=" + DepCode1;
                    if (strRecID) strUrl += "&mnurecid=" + strRecID;
                    if (strBiID) strUrl += "&bihostid=" + strBiID;
                    if (strHostTableScrollTop) strUrl += "&HostTableScrollTop=" + strHostTableScrollTop;

                    //加入用户登录帐号和加密后的密码
                    if (strUserID) strUrl += "&strUserID=" + escape(strUserID);
                    if (strUserEnPass) strUrl += "&strUserEnPass=" + escape(strUserEnPass);
                }
            }

            if (MenuType == "GET") {
                if (strUrl.indexOf("/reportserver?/") >= 0) {
                    window.location = strUrl; //报表也可以用GET请求
                } else if (mnutarget == "" || mnutarget == "content" || mnutarget == "_self") {
                    strUrl += "&backpage=" + strTableBackPage;
                    window.location = strUrl;
                } else if (mnutarget == "_parent") {
                    strUrl += "&backpage=" + strBodyBackPage;
                    window.open(strUrl, mnutarget);
                } else {
                    strUrl += "&backpage=" + strTableBackPage;
                    window.open(strUrl, mnutarget);
                }
            } else if (MenuType == "POPUP") {
                var strFeatures = "left=" + left + ",top=" + top + ",height=" + height + ",width=" + width + ",status=yes,";
                strFeatures += "toolbar=" + toolbar + ",menubar=" + menubar + ",location=" + location + ",resizable=" + resizable + ",";
                strFeatures += "scrollbars=" + scrollbars + ",titlebar=" + titlebar + ",fullscreen=" + fullscreen;
                window.open(strUrl, mnutarget, strFeatures);
            } else if (MenuType == "POPUPDOC") {
                try {
                    document.getElementById("formDownFile").action = strUrl;
                    document.getElementById("formDownFile").submit();
                } catch (e) {
                }
            } else if (MenuType == "DIALOG" || MenuType == "DIALOGREFRESH") {
                var strFeatures = "";
                if (center = "yes") {
                    strFeatures = ";center:yes;";
                } else {
                    strFeatures = ";dialogTop:" + top + ";dialogLeft:" + left;
                }
                strFeatures += "dialogHeight:" + height + "px; dialogWidth:" + width + "px; resizable:" + resizable + ";scroll:" + scrollbars;
                window.showModalDialog(strUrl, "", strFeatures);

                if (MenuType == "DIALOGREFRESH") { //模式窗体关闭后刷新当前页面
                    document.getElementById("cmsaction").value = "MenuRecordRefresh";
                    document.getElementById("Form1").submit();
                }
            } else if (MenuType == "MODALDIALOG") {
                window.showModalDialog(strUrl, window, "dialogHeight:486px; dialogWidth:566px; help:no; edge:sunken; center:yes; resizable:no; scroll:no; status:no;");
            }

            return;
        }
    } catch (ex) {
        alert("操作错误：" + ex.message);
        return;
    }
}

function MiniMenuClick(MenuType, strModuleKey, mnusection, mnukey, cmscmd, strBiID, custBtnType, url, ResID, strSpecResID, mnufrom, mnuselnum, frmname, confirmMsg, mnutarget, NoUrlParam, strUserNameInRptUrl, strUserID, strUserName, strUserEnPass, mnuallottitle, DepCode1, strAlone, strTableBackPage, strBodyBackPage, strMsgSelectRec, strMsgSelectOneRec, center, left, top, width, height, menubar, toolbar, location, resizable, scrollbars, titlebar, fullscreen) {
    try {

        //获取主表选中的记录唯一值
        var strHostResID = document.getElementById("mnuhostresid").value;
        var strHostTableScrollTop = document.getElementById("HostTableScrollTop").value;
        var strCmspassid = document.getElementById("cmspassid").value;
        // var strmnusrc = document.getElementById("mnusrc").value;
        if (strHostResID == "0") strHostResID = "";
        var strHostRecID = F3Trim(document.getElementById("RECID").value, ",");
        var dgridHostTable = mini.get("dgridHostTable");
        var dgridSubTable = mini.get("dgridSubTable");
        var rows = dgridHostTable.getSelecteds();
        for (i = 0; i < rows.length; i++)
        {
            strHostRecID = strHostRecID+rows[i].REC_ID+",";
        }
        var strHostRecID = F3Trim(document.getElementById("RECID").value, ",");
        if (strHostRecID == "0") strHostRecID = "";
        //alert(strHostRecID);
        //获取选中的记录唯一值
        var strRecID = "";
        if (mnufrom == "1") { //来自主表
            strRecID = strHostRecID;
        } else if (mnufrom == "2") { //来自子表
            strRecID = document.getElementById("RECID2").value;
            if ((mnuselnum == "1" || mnuselnum == "2") && (!strHostResID || !strHostRecID)) {
                alert(strMsgSelectRec); //请先选择主表记录
                return;
            }
            if ((mnuselnum == "1" || mnuselnum == "2") && strHostRecID.indexOf(",") >= 0) {
                alert(strMsgSelectRec); //子表操作必须且仅能选中1条主表记录
                return;
            }
        } else {
            strRecID = "";
        }

        //处理记录唯一值
        if (strRecID == "0") strRecID = "";
        strRecID = F3Trim(strRecID, ",");

        //校验：先选择记录
        if ((mnuselnum == "1" || mnuselnum == "2") && !strRecID) {
            alert(strMsgSelectRec);
            return;
        }
        //校验：当前操作必须且只能选择1条记录
        if (mnuselnum == "1" && strRecID.indexOf(",") >= 0) {
            alert(strMsgSelectOneRec);
            return;
        }

        //操作确认
        if (confirmMsg) {
            if (!confirm(confirmMsg)) return; //点击了“取消”
        }

        //处理编辑窗体的客户自定义函数
        try {
            var blnRtn = F3MenuClickCustomize(ResID, strRecID, MenuType, cmscmd, frmname, mnusection, mnukey, strUserID, DepCode1);
            if (!blnRtn) return;
        } catch (ex) {
        }
        //

        if (cmscmd == "MenuRecordDelete")
        {
          //  alert(cmscmd);
            RowDelete(mnufrom);
            return false;
        }
        if (cmscmd == "MenuRecordEdit")
        {
           // alert(cmscmd);
            RowEdit(mnufrom);
            return false;
        }
        if (cmscmd == "MenuRecordAdd")
        {
           // alert(cmscmd);
            RowInsert(mnufrom);
            return false;
        }
        if (cmscmd == "MenuRecordSave")
        {
           //alert(cmscmd);
            SaveData(mnufrom);
            return false;
        }

        if (cmscmd == "MenuTableEditCancel")
        {
             
            CancelEdit(mnufrom);
            return false;
        }
        if (cmscmd == "MenuTableExit") {
           // alert(strModuleKey);
            TableExit(strModuleKey);
            return false;
        }
        if (MenuType == "POST") {
            document.getElementById("mnusection").value = mnusection;
            document.getElementById("mnukey").value = mnukey;
            document.getElementById("specresid").value = strSpecResID;
            if (strSpecResID && strSpecResID != "0") {
                document.getElementById("mnuresid").value = strSpecResID;
            } else {
                document.getElementById("mnuhostresid").value = strHostResID;
                document.getElementById("mnuhostrecid").value = strHostRecID;
                document.getElementById("mnuresid").value = ResID;
            }
            document.getElementById("mnurecid").value = strRecID;
            document.getElementById("mnuformname").value = frmname;
            document.getElementById("cmsaction").value = cmscmd;
            document.getElementById("mnufrom").value = mnufrom;
            document.getElementById("page_iewidth").value = self.document.body.offsetWidth;
            document.getElementById("page_ieheight").value = self.document.body.offsetHeight;
            document.getElementById("mnuallottitle").value = mnuallottitle;
            document.getElementById("bihostid").value = strBiID;
            document.getElementById("cmspassid").value = strCmspassid;
            if (mnufrom == "1") {
                if (cmscmd == "MenuRecordCustEdit1" || cmscmd == "MenuRecordCustEdit2" || cmscmd == "MenuRecordCustEdit3" || cmscmd == "MenuRecordCustEdit4" || cmscmd == "MenuRecordCustEdit5" || cmscmd == "MenuRecordShenhe" || cmscmd == "MenuRecordZuofei" || cmscmd == "MenucmdEditDEST") {
                    var resid = strHostResID;
                    var strBackPage = "";
                    try
                    {
                        try { getselectrows(); }
                        catch (ex)
                        { }
                       
                  
                
                        var mnurecid = document.getElementById("RECID").value;
                        var cmswhere = document.getElementById("cmswhere").value;
                    dgridHostTable.loading("请稍后......");
                    $.ajax({
                        url: "/rispweb/risphost/data/AjaxService.aspx?method=DealTableMenuCommand_ajax",
                      
                        data: {
                            resid: resid, strCommand: cmscmd, mnurecid: mnurecid,
                            strBackPage: strBackPage, mnuresid: document.getElementById("mnuresid").value,
                            mnusection: mnusection, mnukey: mnukey,
                            specresid: strSpecResID, mnuhostresid: strHostResID, mnuhostrecid: strHostRecID,
                            mnuformname: frmname, cmsaction: cmscmd, mnufrom: mnufrom, page_iewidth: self.document.body.offsetWidth,
                            page_ieheight: self.document.body.offsetHeight, mnuallottitle: mnuallottitle, bihostid: strBiID, cmspassid: strCmspassid, cmswhere: cmswhere
                        },
                        type: "post",
                        success: function (text) {
                            if (text !== "") {
                                var data = mini.decode(text);
                                if (data.url !== "") {
                                    // alert(data.url);
                                    var win = mini.open({
                                        title: data.wintitle,
                                        url: data.url,
                                        showModal: true,
                                        width: 800,
                                        height: 600
                                    });
                                    win.on("beforebuttonclick", function (e) {
                                        if (e.name == 'close') { dgridHostTable.reload(); }
                                    });


                                }
                                else {
                                    if (data.error == -1) {
                                        // alert(data.message);
                                        dgridHostTable.unmask();
                                        document.getElementById("Form1").submit();
                                    }
                                    else {
                                        alert(data.message);
                                        var resid = document.getElementById("mnuhostresid").value;
                                        dgridHostTable.reload({ resid: resid });
                                        try {
                                            AfterHostSaveData();
                                        }
                                        catch (ex) {

                                        }
                                    }
                                }
                            }
                        },
                        error: function (jqXHR, textStatus, errorThrown) {
                            alert(jqXHR.responseText);
                        }
                    });
                    }
                    catch (ex) {
                        document.getElementById("Form1").submit();
                    }
                }
                else { document.getElementById("Form1").submit(); }
            }
            else { document.getElementById("Form1").submit(); }
            return false;
        }
        if (MenuType == "GET" || MenuType == "POPUP" || MenuType == "POPUPDOC" || MenuType == "DIALOG" || MenuType == "MODALDIALOG" || MenuType == "DIALOGREFRESH") {
            //组装URL
            var strUrl = "";
            if (NoUrlParam == '1') { //URL不附加任何参数
                strUrl = url;
            } else {
                //定制页面或报表等都必须加参数: timeid
                if (url.indexOf("?") > 0) {
                    strUrl = url + "&timeid=" + Math.round(Math.random() * 10000000000);
                } else {
                    strUrl = url + "?timeid=" + Math.round(Math.random() * 10000000000);
                }

                if (url.indexOf("/reportserver?/") >= 0) { //是报表
                    if (mnuselnum == "1" || mnuselnum == "2") strUrl += "&mnurecid=" + strRecID + "&HostTableScrollTop=" + strHostTableScrollTop; //URL需要有记录唯一值
                    if (DepCode1) strUrl += "&depcode1=" + DepCode1;
                    if (strUserNameInRptUrl == "1") strUrl += "&user=" + escape(strUserName);
                } else { //非报表
                    if (strModuleKey) strUrl += "&modkey=" + strModuleKey;
                    if (mnusection) strUrl += "&mnusection=" + mnusection;
                    if (mnukey) strUrl += "&mnukey=" + mnukey;
                    if (mnufrom) strUrl += "&mnufrom=" + mnufrom;
                    if (cmscmd) strUrl += "&cmsaction=" + cmscmd;
                    if (strSpecResID && strSpecResID != "0") {
                        strUrl += "&mnuresid=" + strSpecResID;
                        strUrl += "&specresid=" + strSpecResID;
                    } else {
                        if (ResID) strUrl += "&mnuresid=" + ResID;
                        if (strHostResID) strUrl += "&mnuhostresid=" + strHostResID;
                        if (strHostRecID) strUrl += "&mnuhostrecid=" + strHostRecID;
                    }
                    if (frmname) strUrl += "&mnuformname=" + escape(frmname);
                    if (mnuallottitle) strUrl += "&mnuallottitle=" + escape(mnuallottitle);
                    if (DepCode1) strUrl += "&depcode1=" + DepCode1;
                    if (strRecID) strUrl += "&mnurecid=" + strRecID;
                    if (strBiID) strUrl += "&bihostid=" + strBiID;
                    if (strHostTableScrollTop) strUrl += "&HostTableScrollTop=" + strHostTableScrollTop;
                    //加入用户登录帐号和加密后的密码
                    if (strUserID) strUrl += "&strUserID=" + escape(strUserID);
                    if (strUserEnPass) strUrl += "&strUserEnPass=" + escape(strUserEnPass);
                    //if (strCmspassid) strUrl += "&cmspassid=" + escape(strCmspassid);
                    // if (strmnusrc) strUrl += "&mnusrc=" + escape(strmnusrc);
                }
            }

            if (MenuType == "GET") {
                if (strCmspassid) strUrl += "&cmspassid=" + escape(strCmspassid);
                // if (strmnusrc) strUrl += "&mnusrc=" + escape(strmnusrc);
                if (strUrl.indexOf("/reportserver?/") >= 0) {
                    window.location = strUrl; //报表也可以用GET请求
                } else if (mnutarget == "" || mnutarget == "content" || mnutarget == "_self") {
                    strUrl += "&backpage=" + strTableBackPage;
                    window.location = strUrl;
                } else if (mnutarget == "_parent") {
                    strUrl += "&backpage=" + strBodyBackPage;
                    window.open(strUrl, mnutarget);
                } else {
                    strUrl += "&backpage=" + strTableBackPage;
                    window.open(strUrl, mnutarget);
                }
            } else if (MenuType == "POPUP") {
                var strFeatures = "left=" + left + ",top=" + top + ",height=" + height + ",width=" + width + ",status=yes,";
                strFeatures += "toolbar=" + toolbar + ",menubar=" + menubar + ",location=" + location + ",resizable=" + resizable + ",";
                strFeatures += "scrollbars=" + scrollbars + ",titlebar=" + titlebar + ",fullscreen=" + fullscreen;
                window.open(strUrl, mnutarget, strFeatures);
            } else if (MenuType == "POPUPDOC") {
                try {
                    document.getElementById("formDownFile").action = strUrl;
                    document.getElementById("formDownFile").submit();
                } catch (e) {
                }
            } else if (MenuType == "DIALOG" || MenuType == "DIALOGREFRESH") {
                var strFeatures = "";
                if (center = "yes") {
                    strFeatures = ";center:yes;";
                } else {
                    strFeatures = ";dialogTop:" + top + ";dialogLeft:" + left;
                }
                strFeatures += "dialogHeight:" + height + "px; dialogWidth:" + width + "px; resizable:" + resizable + ";scroll:" + scrollbars;
                window.showModalDialog(strUrl, "", strFeatures);

                if (MenuType == "DIALOGREFRESH") { //模式窗体关闭后刷新当前页面
                    document.getElementById("cmsaction").value = "MenuRecordRefresh";
                    document.getElementById("Form1").submit();
                }
            } else if (MenuType == "MODALDIALOG") {
                window.showModalDialog(strUrl, window, "dialogHeight:486px; dialogWidth:566px; help:no; edge:sunken; center:yes; resizable:no; scroll:no; status:no;");
            }

            return;
        }
            return;
       
    } catch (ex) {
        alert("操作错误：" + ex.message);
        return;
    }
}
