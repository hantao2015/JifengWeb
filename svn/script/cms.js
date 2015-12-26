// 获取指定资源和指定查询条件的1条记录
// 参数：
//      strResID：资源ID。
//      strRecWhere：定位记录的查询条件，必填项。
//      strRecOrderby：定位记录的排序，可选项。
//      arrayReturnColName：字段名称的数组，仅返回数组中指定名称的字段值。可选项，无参数表示返回该记录的所有字段值。
// 返回：
//      包含字段值的xmlDoc对象

var WinAlerts = window.alert;
window.alert = function (e) {
    try
    { 
        if (e != null && e.indexOf("试用") > -1) {
            //和谐了
      
    
            alert("//Realsun Corperations");
            return;
        }
      
        else {
            if (e != null && e.indexOf("json") > -1) {
                //和谐了


                alert("//json");
                return;
            }
            else {
                WinAlerts(e);
                return;
            }
            WinAlerts(e);
            return;
        }
       
    }
    catch (ex)
    {
         
    }

}
function F3AjaxGetRecord(strResID, strRecWhere, strRecOrderby, arrayReturnColName){
    try{
        //校验参数
        if (!strResID || !strRecWhere){
            return null;
        }

        //组装请求URL
        var strUrl = "/rispweb/rispservice/HSServiceGetRecord.aspx?";
        var strPostBody = "f3svc_resid=" + strResID;
        if (strRecWhere) strUrl += "&f3svc_sqlwhere=" + escape(strRecWhere);
        if (strRecOrderby) strUrl += "&f3svc_sqlorder=" + escape(strRecOrderby);
	    
        //加多个字段和值对
        if (arrayReturnColName && arrayReturnColName.length > 0){
            var intLen = arrayReturnColName.length;
            for (var i=0; i<intLen; i++){
                strUrl += "&f3svc_colname" + i + "=" + escape(arrayReturnColName[i]);
            }
        }

        //发送请求
        var xmlReq = F3AjaxSendHttpRequest("POST", strUrl, false, strPostBody);
        return xmlReq.responseXML;
    }catch(ex){
        return null;
    }
}

// 获取SQL语句运行返回的1个值
// 参数：
//      strResID：此资源ID是SQL语句中的主资源ID
//      strSql：SQL语句
//      strOutDbName：外部数据库的连接名称，仅用于连接第三方软件时用
// 返回：
//      SQL语句返回的值
function F3AjaxGetColValue(strResID, strSql, strOutDbName){
    try{
        if (!strSql) return "";
        
        //发送Ajax请求
        var strUrl = "/rispweb/rispservice/HSServiceGetSqlValue.aspx";
        strSql = escape(strSql);
        strSql = strSql.replace("+", "x__plus");
        var strPostBody = "f3svc_sql=" + strSql;
        if (strResID) strPostBody += "&f3svc_resid=" + strResID;
        if (strOutDbName) strPostBody += "&f3svc_outdbc=" + escape(strOutDbName);
        var xmlReq = F3AjaxSendHttpRequest("POST", strUrl, false, strPostBody);
        var xmlDoc = xmlReq.responseXML;
        return xmlDoc.selectSingleNode("//VALUE").text;
    }catch(ex){
        return "";
    }
}

// 获取SQL语句返回的多条记录的指定2个字段的值，一般用于下拉框值的设置
// 返回格式：
// <F3AJAX_DATA>
//   <RTNDATA VALUE='值字段值'>显示字段值</RTNDATA>
// </HSAJAX_DATA>
// 参数：
//      strResID：此资源ID是SQL语句中的主资源ID
//      strSql：SQL语句
//      strValueColName：值字段的内部名称
//      strTextColName：显示字段的内部名称
// 返回：
//      包含字段值的xmlDoc对象
function F3AjaxGetRowsForDropdownList(strResID, strSql, strValueColName, strTextColName){
    try{
        if (!strSql || !strValueColName || !strTextColName){
            return null;
        }
        
        //发送Ajax请求
        var strUrl = "/rispweb/rispservice/HSServiceGetRowsForDdlist.aspx";
        strSql = escape(strSql);
        strSql = strSql.replace("+", "x__plus");
        var strPostBody = "f3svc_sql=" + strSql;
        if (strValueColName) strPostBody += "&f3svc_valcol=" + escape(strValueColName);
        if (strTextColName) strPostBody += "&f3svc_textcol=" + escape(strTextColName);
        if (strResID) strPostBody += "&f3svc_resid=" + strResID;
        var xmlReq = F3AjaxSendHttpRequest("POST", strUrl, false, strPostBody);
        return xmlReq.responseXML;
    }catch(ex){
        return null;
    }
}

// 获取SQL语句返回的多条记录的多个字段的值，返回格式：
//      <F3AJAX_DATA>
//          <ROWn>   //n是从1开始的记录序号
//              <COLNAME>COLVALUE</COLNAME>   //COLNAME是字段名称，COLVALUE是字段值
//          </ROWn>
//      </HSAJAX_DATA>
//      获取返回数据的方法： F3XmlGetNodeValue(xmlDoc, "//ROWn/COLNAME");
// 参数：
//      strResID：此资源ID是SQL语句中的主资源ID，如果SQL语句有多个资源，只需提供最主要的资源ID
//      strSql：SQL语句
// 返回：
//      包含字段值的xmlDoc对象
function F3AjaxGetRowsBySql(strResID, strSql){
    try{
        if (!strSql){
            return null;
        }

        var strUrl = "/rispweb/rispservice/HSServiceGetRowsBySql.aspx";
        strSql = escape(strSql);
        strSql = strSql.replace("+", "x__plus");
        var strPostBody = "f3svc_sql=" + strSql;
        if (strResID) strPostBody += "&f3svc_resid=" + strResID;

		//发送Ajax请求
        var xmlReq = F3AjaxSendHttpRequest("POST", strUrl, false, strPostBody);
        return xmlReq.responseXML;
    }catch(ex){
        return null;
    }
}

// 从服务器端获取唯一ID
// 返回：
//      系统唯一ID
function F3AjaxGetTimeid(){
    try{
        //发送Ajax请求
        var strUrl = "/rispweb/rispservice/HSServiceGetTimeid.aspx";
        var xmlReq = F3AjaxSendHttpRequest("GET", strUrl, false);
        var xmlDoc = xmlReq.responseXML;
        return xmlDoc.selectSingleNode("//VALUE").text;
    }catch(ex){
        return "";
    }
}

//从Ajax函数返回的xmlDoc中获取指定字段的值
// 参数：
//      xmlDoc：从Ajax服务返回的xmlDoc
//      strColName：字段内部名称
// 返回：
//      字段值
function F3XmlGetColValue(xmlDoc, strColName){
    try{
        if (!xmlDoc) return "";
        
        return xmlDoc.selectSingleNode("//" + strColName).text;
    }catch(ex){
        return "";
    }
}

//从xmlDoc对象中获取指定节点值
// 参数：
//      xmlDoc：从Ajax服务返回的xmlDoc
//      strPathName：xml节点路径名称，
//          格式1： C3_123123123123     (此字段名必须在整个xmlDoc的节点名称中是唯一的)
//          格式2： //C3_123123123123   (此字段名必须在整个xmlDoc的节点名称中是唯一的)
//          格式3： //ROW7/C3_123123123123
//          格式4： //HSAJAX_DATA/ROW2/C3_123123123123
// 返回：
//      xmlDoc对象的指定节点值
function F3XmlGetNodeValue(xmlDoc, strPathName){
    try{
        if (!xmlDoc) return "";
        if (!strPathName) return "";
        var strTemp = new String(strPathName);
        if (strTemp.substring(0, 2) != "//") strPathName = "//" + strPathName; //自动加路径前缀
        return xmlDoc.selectSingleNode(strPathName).text;
    }catch(ex){
        return "";
    }
}

// 将Ajax返回的xmlDoc对象中的值赋值到界面上，可以指定赋值字段。
// 参数：
//      xmlDoc：从Ajax服务返回的xmlDoc
//      strSetSpecifiedColOnly： 1表示仅使用指定字段
//      strSrcName1, strDestName1：将源控件strSrcName1的值赋值到界面控件strDestName1上。可选项，如果1个字段都不设置，则设置xmlDoc对象中的所有字段值。
// 返回：
//      true: 赋值成功
//      false: 赋值失败
function F3SetUiColumnValues(xmlDoc, strSetSpecifiedColOnly, strSrcName1, strDestName1, strSrcName2, strDestName2, strSrcName3, strDestName3, strSrcName4, strDestName4, strSrcName5, strDestName5, strSrcName6, strDestName6, strSrcName7, strDestName7, strSrcName8, strDestName8, strSrcName9, strDestName9, strSrcName10, strDestName10){
    try{
        if (!xmlDoc) return false;
    
        var intNodNum = F3GetXmlDocLength(xmlDoc, "F3AJAX_DATA");
        if (intNodNum <= 0){ //没有返回信息
            return false;
        }
        
        //提取字段信息，写入页面
        var xmlNod = xmlDoc.getElementsByTagName("F3AJAX_DATA");
        for (var i=0; i<intNodNum; i++) {
            try{
                var strNodName = xmlNod.item(0).childNodes.item(i).nodeName;
                var strNodValue = xmlNod.item(0).childNodes.item(i).text;
                if (!strNodName) continue;
                
                var blnChanged = 0;
                if (strSrcName1){
                    if (strSrcName1==strNodName){
                        strNodName = strDestName1;
                        blnChanged = 1;
                    }else{
                        if (strSrcName2){
                            if (strSrcName2==strNodName){
                                strNodName = strDestName2;
                                blnChanged = 1;
                            }else{
                                if (strSrcName3){
                                    if (strSrcName3==strNodName){
                                        strNodName = strDestName3;
                                        blnChanged = 1;
                                    }else{
                                        if (strSrcName4){
                                            if (strSrcName4==strNodName){
                                                strNodName = strDestName4;
                                                blnChanged = 1;
                                            }else{
                                                if (strSrcName5){
                                                    if (strSrcName5==strNodName){
                                                        strNodName = strDestName5;
                                                        blnChanged = 1;
                                                    }else{
                                                        if (strSrcName6){
                                                            if (strSrcName6==strNodName){
                                                                strNodName = strDestName6;
                                                                blnChanged = 1;
                                                            }else{
                                                                if (strSrcName7){
                                                                    if (strSrcName7==strNodName){
                                                                        strNodName = strDestName7;
                                                                        blnChanged = 1;
                                                                    }else{
                                                                        if (strSrcName8){
                                                                            if (strSrcName8==strNodName){
                                                                                strNodName = strDestName8;
                                                                                blnChanged = 1;
                                                                            }else{
                                                                                if (strSrcName9){
                                                                                    if (strSrcName9==strNodName){
                                                                                        strNodName = strDestName9;
                                                                                        blnChanged = 1;
                                                                                    }else{
                                                                                        if (strSrcName10){
                                                                                            if (strSrcName10==strNodName){
                                                                                                strNodName = strDestName10;
                                                                                                blnChanged = 1;
                                                                                            }else{
                                                                                            }
                                                                                        }
                                                                                    }
                                                                                }
                                                                            }
                                                                        }
                                                                    }
                                                                }
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                
                if (strSetSpecifiedColOnly=="1" && blnChanged==0){
                    continue; //必须使用替换名，但当前字段不在替换列表中，则继续循环
                }
                
                var objField = document.getElementById(strNodName);
                if (objField){
                    objField.value = strNodValue;
                }
            }catch(ex){}
        }
        return false;
    }catch(ex){
        return false;
    }
}

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
function F3AjaxSaveRecord(strResID, strRecWhere, arrayColName, arrayColValue, intRunInnerFormula, intRunOuterFormula, intEnableSelfLock, intEnableRelationLock, intEnableTimeLock, intEnableVerifyFormula, intEnableReminderFormula, intEnableDataSync, intEnableBitianVerify, intEnableRecursiveCalculation){
    try{
        if (!strResID) return 0;
        if (!arrayColName || arrayColName.length<=0) return 0;
        if (!arrayColValue || arrayColValue.length<=0) return 0;
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

        //加多个字段和值对
        var intLen = arrayColName.length;
        for (var i=0; i<intLen; i++){
            var j = i+1;
            strPostBody += "&colname" + j + "=" + escape(arrayColName[i]) + "&colvalue" + j + "=" + escape(arrayColValue[i]); //必须用escape()函数进行编码转换
        }
       
        var xmlReq = F3AjaxSendHttpRequest("POST", strUrl, false, strPostBody);
         
        var xmlDoc = xmlReq.responseXML;
        return F3ParseFloat(xmlDoc.selectSingleNode("//VALUE").text); //返回记录ID
    }catch(ex){
        return 0;
    }
}

//保存1条记录至任何数据库表格
// 参数：
//      strTable：表格名称
//      strRecWhere：定位记录的查询条件，空值表示“添加记录”。
//      strColValues：多个字段和值对，格式： colname1=xxx&colvalue1=yyy&colname2=xxx&colvalue2=yyy&...     字段值xxx必须先用escape()函数进行编码转换
//      strAllowInsert=1：允许新建记录
//      intAllowUpdate=1：允许修改记录
// 返回：
//      true: 保存成功
//      false: 保存失败
function F3AjaxSaveDbRecord(strTable, strRecWhere, strColValues, intAllowInsert, intAllowUpdate){
    try{
        if (!strTable || !strColValues){
            return false;
        }
        
        //发送Ajax请求
        var strUrl = "/rispweb/rispservice/HSServiceSaveDbRecord.aspx";
        var strPostBody = strColValues;
        if (strTable) strPostBody += "&f3svc_table=" + escape(strTable);
        if (strRecWhere) strPostBody += "&f3svc_sqlwhere=" + escape(strRecWhere);
        if (intAllowInsert) strPostBody += "&f3svc_allowinsert=" + intAllowInsert;
        if (intAllowUpdate) strPostBody += "&f3svc_allowupdate=" + intAllowUpdate;
        var xmlReq = F3AjaxSendHttpRequest("POST", strUrl, false, strPostBody);
        var xmlDoc = xmlReq.responseXML;
        var strValue = xmlDoc.selectSingleNode("//VALUE").text;
        if (strValue == "1"){
            return true;
        }else{
            return false;
        }
    }catch(ex){
        return false;
    }
}

// 运行SQL语句
//      strResID：此资源ID是SQL语句中的主资源ID
//      strSql：SQL语句
//      strOutDbName：外部数据库的连接名称，仅用于连接第三方软件时用
// 返回：
//      受影响的记录数
function F3AjaxRunSql(strResID, strSql, strOutDbName){
    try{
        if (!strSql){
            return false;
        }
        
        //发送Ajax请求
        var strUrl = "/rispweb/rispservice/HSServiceRunSql.aspx";
	    strSql = escape(strSql);
	    strSql = strSql.replace("+", "x__plus");
        var strPostBody = "f3svc_sql=" + strSql;
        if (strResID) strPostBody += "&f3svc_resid=" + strResID;
        if (strOutDbName) strPostBody += "&f3svc_outdbc=" + escape(strOutDbName);
        var xmlReq = F3AjaxSendHttpRequest("POST", strUrl, false, strPostBody);
        var xmlDoc = xmlReq.responseXML;
        return F3ParseInt(xmlDoc.selectSingleNode("//VALUE").text);
    }catch(ex){
        return 0;
    }
}

//获取xmlDoc对象中指定节点的下属节点数量
// 参数：
//      xmlDoc：从Ajax服务返回的xmlDoc
//      strNodeName：指定节点
// 返回：
//      指定节点的子节点数量
function F3GetXmlDocLength(xmlDoc, strNodeName){
    try{
        if (!xmlDoc) return 0;
        if (!strNodeName) return 0;
        return F3ParseInt(xmlDoc.getElementsByTagName(strNodeName).item(0).childNodes.length);
        //var strTemp = new String(strNodeName);
        //if (strTemp.substring(0, 2) != "//") strNodeName = "//" + strNodeName; //自动加路径前缀
        //return F3ParseInt(xmlDoc.selectSingleNode(strNodeName).length);
    }catch(ex){
        return 0;
    }
}

// 发送ajax的POST请求，返回成功(true)或失败(false)
// 参数：
//      strUrl：请求URL
//      arrayParamName：参数名称的数组
//      arrayParamValue：参数值的数组
// 返回
//      true: 成功
//      false: 失败
function F3AjaxPostUrlByReturnOK(strUrl, arrayParamName, arrayParamValue){
    try{
        if (!strUrl) return false;

        //加多个字段和值对
        var strPostBody = ""; //多个字段和值对，格式： colname1=xxx&colvalue1=yyy&colname2=xxx&colvalue2=yyy&...     字段值xxx必须先用escape()函数进行编码转换
        if (arrayParamName && arrayParamValue && arrayParamName.length>0 && arrayParamName.length==arrayParamValue.length){
            var intLen = arrayParamName.length;
            for (var i=0; i<intLen; i++){
                //var j = i+1;
                //strPostBody += "&colname" + j + "=" + escape(arrayParamName[i]) + "&colvalue" + j + "=" + escape(arrayParamValue[i]); //必须用escape()函数进行编码转换
                strPostBody += "&" + arrayParamName[i] + "=" + escape(arrayParamValue[i]); //必须用escape()函数进行编码转换
            }
        }
        
        //发送Ajax请求
        var xmlReq = F3AjaxSendHttpRequest("POST", strUrl, false, strPostBody);
        var xmlDoc = xmlReq.responseXML;
        var strValue = xmlDoc.selectSingleNode("//VALUE").text;
        if (strValue == "1"){
            return true;
        }else{
            return false;
        }
    }catch(ex){
        return false;
    }
}

// 发送ajax的POST请求，返回xmlDoc
// 参数：
//      strUrl：请求URL
//      arrayParamName：参数名称的数组
//      arrayParamValue：参数值的数组
// 返回
//      xmlDoc对象
function F3AjaxPostUrl(strUrl, arrayParamName, arrayParamValue){
    try{
        if (!strUrl) return null;

        //加多个字段和值对
        var strPostBody = ""; //多个字段和值对，格式： colname1=xxx&colvalue1=yyy&colname2=xxx&colvalue2=yyy&...     字段值xxx必须先用escape()函数进行编码转换
        if (arrayParamName && arrayParamValue && arrayParamName.length>0 && arrayParamName.length==arrayParamValue.length){
            var intLen = arrayParamName.length;
            for (var i=0; i<intLen; i++){
                strPostBody += "&" + arrayParamName[i] + "=" + escape(arrayParamValue[i]); //必须用escape()函数进行编码转换
            }
        }
        
        //发送Ajax请求
        var xmlReq = F3AjaxSendHttpRequest("POST", strUrl, false, strPostBody);
        var xmlDoc = xmlReq.responseXML;
        return xmlDoc;
    }catch(ex){
        return null;
    }
}

// 将ajax返回的xmlDoc包含的字段值赋值到下拉框的选项中
// 参数：
//      xmlDoc：从Ajax服务返回的xmlDoc
//      strDdl：下拉框的ID
//      strFirstEmpty：1: 下拉框的第一个选项放空值
//      strDefaultValue：下拉框的默认值
// 返回
//      true: 成功
//      false: 失败
function F3InitUiDropdownlist(xmlDoc, strDdl, strFirstEmpty, strDefaultValue){
    try{
        if (!xmlDoc || !strDdl) return false;

        var ddlist = document.getElementById(strDdl);
        if (!ddlist) return false;
        
        //先清空下拉框
        var intLen = document.getElementById(strDdl).options.length;
        for (var i=0; i<intLen; i++) {
            document.getElementById(strDdl).options.remove(0);
        }

        var intNodNum = F3GetXmlDocLength(xmlDoc, "F3AJAX_DATA");
        if (intNodNum <= 0){ //没有返回信息
            return false;
        }

        //第一个选项为空值
        if (strFirstEmpty && strFirstEmpty == "1"){
            var newOpt = document.createElement("option");
            newOpt.innerText = "";
            newOpt.value = "";
            ddlist.appendChild(newOpt);
        }

		//提取字段信息，写入页面
        var xmlNod = xmlDoc.getElementsByTagName("F3AJAX_DATA");
        //for (var i=intNodNum-1; i>=0; i--) {
        //    try{
        //        var strNodText = xmlNod.item(0).childNodes.item(i).text;
        //        var strNodValue = xmlNod.item(0).childNodes.item(i).getAttribute("VALUE");
        //        if (!strNodValue) continue;
        //        //插入属性到第一个元素
        //        var newOpt = document.createElement("option");
        //        newOpt.innerText = strNodText;
        //        newOpt.value = strNodValue;
        //        ddlist.insertBefore(newOpt, ddlist.options[0]); //倒过来插入option，因为add()方法无效。
        //    }catch(ex){}
        //}
        for (var i=0; i<intNodNum; i++) {
            try{
                var strNodText = xmlNod.item(0).childNodes.item(i).text;
                var strNodValue = xmlNod.item(0).childNodes.item(i).getAttribute("VALUE");
                if (!strNodValue) continue;

                //插入属性到第一个元素
                var newOpt = document.createElement("option");
                newOpt.innerText = strNodText;
                newOpt.value = strNodValue;
                ddlist.appendChild(newOpt);
            }catch(ex){}
        }
        
        //第一个选项为空值
		/*
        if (strFirstEmpty && strFirstEmpty == "1"){
            var newOpt = document.createElement("option");
            newOpt.innerText = "";
            newOpt.value = "";
            ddlist.insertBefore(newOpt, ddlist.options[0]);
        }
		*/
        
        //默认值
        try{
            if (strDefaultValue){
                document.getElementById(strDdl).value = strDefaultValue;
            }else{
                document.getElementById(strDdl).selectedIndex = 0; //默认选中第一个元素
            }
        }catch(ex){
        }
        
        return false;
    }catch(ex){
        return false;
    }
}

// 显示报表
// 参数：
//      strUrl：报表链接，和菜单xml配置文件中的一样
//      strRecID：记录ID，如果报表无需选中记录，则放空值
//      strDepartmentCode：部门ID，如果系统没有启用分公司管理，则放空值
//      strUserName：当前登录用户的醒目，如果报表不需要，则放空值
// 返回：
//      始终返回true
function F3ShowReport(strUrl, strRecID, strDepartmentCode, strUserName){
    if (strUrl.indexOf("?") > 0){
        strUrl += "&timeid=" + Math.round(Math.random() * 10000000000);
    }else{
        strUrl += "?timeid=" + Math.round(Math.random() * 10000000000);
    }

    if (strRecID) strUrl += "&mnurecid=" + strRecID; //URL需要有记录唯一值
    if (strDepartmentCode) strUrl += "&depcode1=" + strDepartmentCode;
    if (strUserName) strUrl += "&user=" + escape(strUserName);

    var strRptUrl = new String(strUrl);
    strRptUrl = strRptUrl.replace("[AND]", "&");
    if (strRptUrl.toUpperCase().indexOf("HTTP:") < 0){
        //从服务器获取报表host
        var strReportHost = F3AjaxGetColValue("", "SELECT CPAR_VALUE FROM CMS_CLIENT_PARAM WHERE CPAR_NAME='SYS_REPORT_HOST_20090315'", "");
        if (strReportHost){
            //alert("报表host=" + strReportHost);
            strRptUrl = F3TrimRight(strReportHost, "/") + "/" + F3TrimLeft(strRptUrl, "/");
        }
    }
    //alert("处理后的报表url=" + strRptUrl);
    window.location.href = strRptUrl; //报表也可以用GET请求
}

// 提交页面前Enable所有输入元素
// 参数：
//      strSubmitForm：页面Form名称
// 返回：
//      始终返回true
function F3EnableFormElementsBeforeSubmit(strSubmitForm){
    try{
        //Enable所有Checkbox和Select。因为：Disabled的控件无法上传值，也不能用Form的submitdisabledcontrols属性，因为CheckBox被aspx生成时外套了一个disabled的span。
        var i;
        var o = document.getElementById(strSubmitForm).tags("input");
        for (i=0;i<o.length;i++){
            //文本输入框，checkbox, radio
            if (o[i].type == "text" || o[i].type == "checkbox" || o[i].type == "radio"){ //是Checkbox 或 RadioBox
                o[i].disabled=false;
                try{
                    o[i].parentElement.disabled = false; //因为CheckBox和RadioBox被aspx生成时外套了一个disabled的span
                }catch(ex){
                }
            }
        }
        
        //下拉框
        o = document.getElementById(strSubmitForm).tags("select");
        for (i=0;i<o.length;i++){
            o[i].disabled=false;
            //o[i].parentElement.disabled = false; //Option外面好像没有：被aspx生成时外套了一个disabled的span
        }

        return true;
    }catch(ex){
        //alert("提交页面异常识别，错误信息：" + ex.message);
        return true;
    }
}

// 获取指定资源和指定查询条件的1条记录
// 参数：
//		intBiNo: 批量输入的序号，第一个批量取1，第二个批量输入取2，以此类推。
//      strResID：资源ID。批量输入定义中定义的子资源，一般是批量输入表格的数据所在的资源ID。
//      strColName: 待累加的列字段名称
//      strColNameSelect: 如果累加所有行，则此参数设空值；如果仅累加勾选项，则设置此字段值为勾选项名称，譬如常用“选择”
// 返回：
//      累计值
function F3EditSummarize(intBiNo, strResID, strColName, strColNameSelect){
	var intBiRecNum = F3ParseInt(document.getElementById("bi_recnum_" + intBiNo).value);
	var intBiRecNum2 = intBiRecNum-1;
	var dblTotal = 0 ;
	for (var i=1; i<=intBiRecNum2; i++) {
		var blnSum = true; //是否累加该行
		if (strColNameSelect){
			//仅累加勾选项
			var objSelect = document.getElementById("TAB" + strResID + "___" + strColNameSelect + "_" + i);
			if (objSelect && !objSelect.checked){
				blnSum = false; //有勾选项，但没有勾选，不累加
			}
		}
		if (blnSum){
			dblTotal += F3ParseFloat(document.getElementById("TAB" + strResID + "___" + strColName + "_" + i).value); //累加值
		}
	}

	//设置累计值到最后一行的该字段上
	var objLast = document.getElementById("TAB" + strResID + "___" + strColName + "_" + intBiRecNum);
	if (objLast){
		objLast.value = dblTotal;
	}
	return dblTotal;
}

//显示Loading图标
// 参数：
//      strSubmitForm：页面Form名称
//      intImageTop：等待图片的高度位置（像素）
//      intImageLeft：等待图片的横坐标位置（像素）
//      strContainerName1：需要灰度处理的容器ID
//      strContainerName2：需要灰度处理的容器ID
//      strContainerName3：需要灰度处理的容器ID
//      strContainerName4：需要灰度处理的容器ID
//      strContainerName5：需要灰度处理的容器ID
// 返回：
//      始终返回true
function F3ShowLoadingImage(strSubmitForm, intImageTop, intImageLeft, strContainerName1, strContainerName2, strContainerName3, strContainerName4, strContainerName5){
    try{
        var ctrlLoadingImg = document.getElementById("imgLoading");
        if (!ctrlLoadingImg){
            ctrlLoadingImg = document.createElement("<img id='imgLoading' src='/rispweb/images/loading/loading1.gif' align='absbottom' border='0' style='position:absolute; left:" + intImageLeft + "px; top:" + intImageTop + "px; display:block;' />");
            document.getElementById(strSubmitForm).appendChild(ctrlLoadingImg);
        }
        ctrlLoadingImg.style.display = "block";
        
        if (strContainerName1 && document.getElementById(strContainerName1)) {
            document.getElementById(strContainerName1).style.filter="alpha(opacity=30)"; //设置窗体的透明度
        }
        if (strContainerName2 && document.getElementById(strContainerName2)) {
            document.getElementById(strContainerName2).style.filter="alpha(opacity=30)"; //设置窗体的透明度
        }
        if (strContainerName3 && document.getElementById(strContainerName3)) {
            document.getElementById(strContainerName3).style.filter="alpha(opacity=30)"; //设置窗体的透明度
        }
        if (strContainerName4 && document.getElementById(strContainerName4)) {
            document.getElementById(strContainerName4).style.filter="alpha(opacity=30)"; //设置窗体的透明度
        }
        if (strContainerName5 && document.getElementById(strContainerName5)) {
            document.getElementById(strContainerName5).style.filter="alpha(opacity=30)"; //设置窗体的透明度
        }
        return true;
    }catch(ex){
        return true;
    }
}

//客户端界面出错后取消Loading图标状态
// 参数：
//      strContainerName1：需要灰度处理的容器ID
//      strContainerName2：需要灰度处理的容器ID
//      strContainerName3：需要灰度处理的容器ID
//      strContainerName4：需要灰度处理的容器ID
//      strContainerName5：需要灰度处理的容器ID
// 返回：
//      始终返回true
function F3CancelLoadingImage(strContainerName1, strContainerName2, strContainerName3, strContainerName4, strContainerName5){
    try{
        //不显示Loading图标
        if (document.getElementById("imgLoading")){
            document.getElementById("imgLoading").style.display = "none";
        }
    }catch(ex){
    }

    try{        
        if (strContainerName1 && document.getElementById(strContainerName1)) {
            document.getElementById(strContainerName1).style.filter="alpha(opacity=100)";
        }
        if (strContainerName2 && document.getElementById(strContainerName2)) {
            document.getElementById(strContainerName2).style.filter="alpha(opacity=100)";
        }
        if (strContainerName3 && document.getElementById(strContainerName3)) {
            document.getElementById(strContainerName3).style.filter="alpha(opacity=100)";
        }
        if (strContainerName4 && document.getElementById(strContainerName4)) {
            document.getElementById(strContainerName4).style.filter="alpha(opacity=100)";
        }
        if (strContainerName5 && document.getElementById(strContainerName5)) {
            document.getElementById(strContainerName5).style.filter="alpha(opacity=100)";
        }
    }catch(ex){
    }
    
    return true;
}

//提交页面，Enable所有输入元素且显示Loading图标
function F3ConfirmClicked(strSubmitForm, intImageTop, intImageLeft, strContainerName1, strContainerName2, strContainerName3, strContainerName4, strContainerName5){
    try{
        F3EnableFormElementsBeforeSubmit(strSubmitForm);
        
        F3ShowLoadingImage(strSubmitForm, intImageTop, intImageLeft, strContainerName1, strContainerName2, strContainerName3, strContainerName4, strContainerName5);
        return true;
    }catch(ex){
        alert("页面处理异常出错，错误信息：" + ex.message);
        return false;
    }
}

var blnButtonClicked = false;
function F3ButtonClicked(){
	if (!blnButtonClicked){
		blnButtonClicked = true;
		return true;
	}else{
		alert('操作进行中，不能重复点击。');
		return false;
	}
}

var btnButtonClickedNoAlert = false;
function F3ButtonClickedNoAlert(){
	if (!btnButtonClickedNoAlert){
		btnButtonClickedNoAlert = true;
		return true;
	}else{
		return false;
	}
}

var blnPrmoptConfirmBtnClicked = false;
function F3PrmoptConfirm(strMsg1, strMsg2){
	try{
		if (blnPrmoptConfirmBtnClicked){
			return false;
		}
		blnPrmoptConfirmBtnClicked = true;

		if (strMsg1){
			if (!window.confirm(strMsg1)){
				blnPrmoptConfirmBtnClicked = false;
				return false;
			}
		}
		if (strMsg2){
			if (!window.confirm(strMsg2)){
				blnPrmoptConfirmBtnClicked = false;
				return false;
			}
		}
		return true;
	}catch(ex){
		blnPrmoptConfirmBtnClicked = false;
		return false;
	}
}

var blnPrmoptLoadingConfirmBtnClicked = false;
function F3PrmoptConfirmAndShowLoading(strMsg1, strMsg2, strSubmitForm, intImageTop, intImageLeft, strContainerName1, strContainerName2, strContainerName3, strContainerName4, strContainerName5){
	try{
		if (blnPrmoptLoadingConfirmBtnClicked){
			return false;
		}
		blnPrmoptLoadingConfirmBtnClicked = true;

		if (strMsg1){
			if (!window.confirm(strMsg1)){
				blnPrmoptLoadingConfirmBtnClicked = false;
				return false;
			}
		}
		if (strMsg2){
			if (!window.confirm(strMsg2)){
				blnPrmoptLoadingConfirmBtnClicked = false;
				return false;
			}
		}

		F3ShowLoadingImage(strSubmitForm, intImageTop, intImageLeft, strContainerName1, strContainerName2, strContainerName3, strContainerName4, strContainerName5);
		return true;
	}catch(ex){
		blnPrmoptLoadingConfirmBtnClicked = false;
		return false;
	}
}

//设置Cookie
function F3SetCookie(name, value){
    document.cookie = name + "=" + value + ";";
}

//提取Cookie
function F3GetCookie(name){
    var cookies = document.cookie;
    var start = cookies.indexOf(name + "=");
    if (start == -1){
        return "";
    }
    start = cookies.indexOf("=", start) +1;
    var end = cookies.indexOf(";", start);
    if (end == -1){
        end = cookies.length;
    }

    var value = unescape(cookies.substring(start, end));
    if (value == null){
        return ""
    }else{
        return value;
    }
}

//Ajax发送请求
//参数：
//    strMethod: POST 或 GET
//    strUrl: url
//    isAsynchronize: true = 异步     false = 同步
//    strPostBody: POST请求时的参数，格式： param1=xxx&param2=yyy&param3=zzz
function F3AjaxSendHttpRequest(strMethod, strUrl, isAsynchronize, strPostBody){
    try{
        if(window.ActiveXObject){ 
            for( var i = 5; i; i-- ){ 
                try{ 
                    if( i == 2 ){ 
                        var xmlReq = new ActiveXObject("Microsoft.XMLHTTP"); 
                        if (xmlReq){
                            xmlReq.open(strMethod, strUrl, isAsynchronize);
                            if (strMethod=="POST" && strPostBody){
                                xmlReq.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); //POST请求必须使用此content type
                                xmlReq.send(strPostBody);
                            }else{
                                xmlReq.send();
                            }
                            return xmlReq;
                        }
                    }else{
                        var xmlReq = new ActiveXObject( "Msxml2.XMLHTTP." + i + ".0" );
                        if (xmlReq){
                            if (strMethod=="POST" && strPostBody){
                                xmlReq.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); //POST请求必须使用此content type
                                xmlReq.setRequestHeader("Content-Type","UTF-8");
                                xmlReq.open(strMethod, strUrl, isAsynchronize);
                                xmlReq.send(strPostBody);
                            }else{
                                xmlReq.setRequestHeader("Content-Type","text/xml");
                                xmlReq.setRequestHeader("Content-Type","UTF-8");
                                xmlReq.open(strMethod, strUrl, isAsynchronize);
                                xmlReq.send();
                            }
                            return xmlReq;
                        }
                    }
                    break;
                }catch(e){
                }
             }
        }else if(window.XMLHttpRequest){
            var xmlReq = new XMLHttpRequest();
            if (xmlReq){
                if (xmlReq.overrideMimeType){
                    xmlReq.overrideMimeType('text/xml'); 
                    
                    xmlReq.open(strMethod, strUrl, isAsynchronize);
                    if (strMethod=="POST" && strPostBody){
                        xmlReq.send(strPostBody);
                    }else{
                        xmlReq.send(null);
                    }
                    return xmlReq;
                }
            }
        }else{
            alert("当前浏览器不支持window.ActiveXObject和window.ActivXMLHttpRequest，无法使用Ajax技术");
        }
        return false;
    }catch(ex){
        return false;
    }
} 

//根据ID获取Value
//Note:不能用于Select
//lsh
function F3GetValueByID(id)
{
    var IDs = document.getElementById(""+id);
    if(!IDs) return "";
    var length = IDs.length;
    if(!length){
        return IDs.value;
    }else{
        return IDs(0).value;
    }
}

//删除头尾的指定字符
function F3Trim(src, chr){
    if (!chr) chr = " ";
    for (var i=0; i<50; i++){
        if (src.charAt(0) == chr){
            src = src.substring(1);
        }else{
            break;
        }
    }
    for (var i=0; i<50; i++){
        if (src.charAt(src.length-1) == chr){
            src = src.substring(0, src.length-1);
        }else{
            break;
        }
    }
    return src;
}

//删除指定的头字符
function F3TrimLeft(src, chr){
    if (!chr) chr = " ";
    for (var i=0; i<50; i++){
        if (src.charAt(0) == chr){
            src = src.substring(1);
        }else{
            break;
        }
    }
    return src;
}

//删除指定的尾字符
function F3TrimRight(src, chr){
    if (!chr) chr = " ";
    for (var i=0; i<50; i++){
        if (src.charAt(src.length-1) == chr){
            src = src.substring(0, src.length-1);
        }else{
            break;
        }
    }
    return src;
}

//获取URL中的参数值
function F3GetRequest(paramName){
    try{
        var hrefstr = window.location.href;
        var pos = hrefstr.indexOf("?")
        var parastr = hrefstr.substring(pos+1); //获取URL后的参数字符串

        var para = parastr.split("&");
        var tempstr="";
        for(i=0;i<para.length;i++){
            tempstr = para[i];
            pos = tempstr.indexOf("=");
            if(tempstr.substring(0,pos) == paramName){
                tempstr = tempstr.substring(pos+1);
                return tempstr.replace("x__plus", "+");
            }
        }
        return "";
    }catch(ex){
        return "";
    }
}

//转换string或object为数字型，非数字的返回0
function F3ParseInt(strNum){
    try{
        if(!strNum) return 0;
        var str;
		if(typeof(strNum) == 'String'){
			str = strNum.toString();
        }else if(typeof(strNum) == 'object'){
            str = strNum.value;
        }else{
            str = strNum;
        }
        if(isNaN(str)){
            return 0;
        }else{
            return parseInt(str);
        }
    }catch(ex){
        return 0;
    }
}

//转换string或object为数字型，非数字的返回0
function F3ParseFloat(strNum){
    try{
        if(!strNum) return 0;
        var str;
		if(typeof(strNum) == 'String'){
			str = strNum.toString();
        }else if(typeof(strNum) == 'object'){
            str = strNum.value;
        }else{
            str = strNum;
        }
        if(isNaN(str)){
            return 0;
        }else{
            return parseFloat(str);
        }
    }catch(ex){
        return 0;
    }
}

/*输入的是不是字母*/
function IsAlpha(cCheck){
    return ((('a'<=cCheck) && (cCheck<='z')) || (('A'<=cCheck) && (cCheck<='Z')))
}

/*
是不是输入了正确的用户名
用户名的判断条件:只能是由 数字、字母、-、_组成的字符串。
对应fType:username
*/
function Verifyname(str){
    for (nIndex=0; nIndex<str.length; nIndex++){
        cCheck = str.charAt(nIndex);
        if (!(!isNaN(cCheck) || IsAlpha(cCheck) || cCheck=='-' || cCheck=='_' )){
            return false;
        }
    }
    return true;                    
}

/*
日期判断
对应fType:date
*/
function F3IsDate(strValue){
    try{
        if (!strValue) return false;
        
        strValue = strValue.trim();
        var pattern = /\d{4}-\d{1,2}-\d{1,2}|\d{4}\/\d{1,2}\/\d{1,2}/;    
        if( strValue.replace(pattern, "") != "" ) 
            return false;
        else {
            var parts = strValue.split(/-|\//);
            var y = parseFloat(parts[0]);
            var m = parseFloat(parts[1]);
            var d = parseFloat(parts[2]);
            
            switch(m) {
                case 1: case 3: case 5: case 7: case 8: case 10: case 12:
                    return ( 0<d && d < 32 );
                case 4: case 6: case 9: case 11:
                    return ( 0<d && d < 31 );
                case 2:
                    if( isLeapYear(y) ) return ( 0<d && d<30 );
                    else return ( 0<d && d<29 );
                default:
                    return false;
            }
        }
        return true;
    }catch(ex){
        return false;
    }
}

/*
时间判断
对应fType:date
*/
function isTime(strValue) {
    strValue = strValue.trim();
    try{
        var pattern1 = /\d{1,2}:\d{1,2}:\d{1,2}/;
        var pattern2 = /\d{1,2}:\d{1,2}/;
        var pattern3 = /\d{1,2}/;
        if( strValue.replace(pattern1, "") != "" && strValue.replace(pattern2, "") != "" && strValue.replace(pattern3, "") != ""){
            return false;
        }else{
            var parts = strValue.split(/:/);
            if (parts.length == 1){
                var h = parseInt(parts[0]);
                if (h<0 || h>23){
                    return false;
                }
            }else if (parts.length == 2){
                var h = parseInt(parts[0]);
                var m = parseInt(parts[1]);
                if (h<0 || h>23 || m<0 || m>=60){
                    return false;
                }
            }else if (parts.length == 3){
                var h = parseInt(parts[0]);
                var m = parseInt(parts[1]);
                var s = parseInt(parts[2]);
                if (h<0 || h>23 || m<0 || m>=60 || s<0 || s>=60){
                    return false;
                }
            }
        }
    }catch(ex){
        return false;
    }
    
    return true;
}

/*
日期和时间判断
对应fType:datetime
*/
function isDateTime(strValue) {
    try{
        strValue = strValue.trim();
        var pos = 0;
        try{
            pos = strValue.indexOf(' '); //    /*\s*/
        }catch(ex){
            //return false;
        }
        
        if (pos == -1){
            if (!F3IsDate(strValue)){
                return false;
            }
        }else{
            var strDate = strValue.substring(0, pos);
            var strTime = strValue.substring(pos);
            strDate = strDate.trim();
            strTime = strTime.trim();
            if (!F3IsDate(strDate)){
                return false;
            }
            if (!isTime(strTime)){
                return false;
            }
        }
    }catch(ex){
        return false;
    }
    
    return true;
}

// 获取今天日期
// 参数：
//      strFormat: 格式，目前支持： yyyy-MM-dd , yyyyMMdd
function F3Today(strFormat){
    var datToday = new Date();
    var strYear2 = new String(datToday.getFullYear());
    var strYear1 = strYear2.substring(2);
    var strMonth1 = datToday.getMonth()+1;
    var intMonth = F3ParseInt(strMonth1);
    var strMonth2 = "";
    if (intMonth<=9){
        strMonth2 = "0" + intMonth;
    }else{
        strMonth2 = intMonth;
    }
    var strDate1 = F3ParseInt(datToday.getDate());
    var strDate2 = "";
    if (strDate1<=9){
        strDate2 = "0" + strDate1;
    }else{
        strDate2 = strDate1;
    }
    
    var strToday = new String(strFormat);
    strToday = strToday.replace("yyyy", strYear2);
    strToday = strToday.replace("MM", strMonth2);
    strToday = strToday.replace("dd", strDate2);
    strToday = strToday.replace("yy", strYear1);
    strToday = strToday.replace("M", strMonth1);
    strToday = strToday.replace("d", strDate1);
    return strToday;
}


// 获取与今天日期相差制定天数的日期
// 参数：
//      intDiffDays: 相差天数，若是负数，则日期往前计算
function F3GetDate(intDiffDays){
    var datToday = new Date();
    var ms = Date.parse(datToday) + intDiffDays * 24 * 60 * 60 * 1000; //往前 intDiffDays 天
    var datRtn = new Date(ms);
    var strDate = datRtn.getFullYear() + "-" + (datRtn.getMonth()+1) + "-" + datRtn.getDate();
    return strDate;
}



/*
**********************************************************************************************************
**********************************************************************************************************
**********************************************************************************************************
**********************************************************************************************************
**********************************************************************************************************
**********************************************************************************************************
**********************************************************************************************************
**********************************************************************************************************
**********************************************************************************************************
**********************************************************************************************************
**********************************************************************************************************
**********************************************************************************************************
**********************************************************************************************************
**********************************************************************************************************
**********************************************************************************************************
**********************************************************************************************************
**********************************************************************************************************
**********************************************************************************************************
**********************************************************************************************************
**********************************************************************************************************
**********************************************************************************************************
**********************************************************************************************************
**********************************************************************************************************
**********************************************************************************************************
**********************************************************************************************************
**********************************************************************************************************
*/


/*打开高级字典的记录选择窗体*/
function F3OpenAdvanceDictWindow(strMainResID, strMainColNameOfMainRes, strMainCtrlNameOfMainRes, strBiIndex, strIsMultiTable, strUserName, strUserEnPass, strFilterMainCtrl1, strFilterDictCol1, strFilterMainCtrl2, strFilterDictCol2, strFilterMainCtrl3, strFilterDictCol3){
    var colValue = new String(document.getElementById(strMainCtrlNameOfMainRes).value);
    colValue = colValue.replace("+", "x__plus");
    
    var strFilterValue1 = "";
    if (strFilterMainCtrl1){
        try{
            strFilterValue1 = document.getElementById(strFilterMainCtrl1).value;
        }catch(ex){
            strFilterMainCtrl1 = "";
            strFilterValue1 = "";
        }
    }
    
    var strFilterValue2 = "";
    if (strFilterMainCtrl2){
        try{
            strFilterValue2 = document.getElementById(strFilterMainCtrl2).value;
        }catch(ex){
            strFilterMainCtrl2 = "";
            strFilterValue2 = "";
        }
    }
    
    var strFilterValue3 = "";
    if (strFilterMainCtrl3){
        try{
            strFilterValue3 = document.getElementById(strFilterMainCtrl3).value;
        }catch(ex){
            strFilterMainCtrl3 = "";
            strFilterValue3 = "";
        }
    }

    var strUrl = "/rispweb/rispfield/FieldGetAdvDictionary.aspx?dynlogin=1&mnuresid=" + strMainResID;
    if (strUserName) strUrl += "&user=" + escape(strUserName);
    if (strUserEnPass) strUrl += "&ucode=" + escape(strUserEnPass);
    if (strFilterDictCol1) strUrl += "&filtercol1=" + escape(strFilterDictCol1);
    if (strFilterValue1) strUrl += "&filtercolval1=" + escape(strFilterValue1);
    if (strFilterDictCol2) strUrl += "&filtercol2=" + escape(strFilterDictCol2);
    if (strFilterValue2) strUrl += "&filtercolval2=" + escape(strFilterValue2);
    if (strFilterDictCol3) strUrl += "&filtercol3=" + escape(strFilterDictCol3);
    if (strFilterValue3) strUrl += "&filtercolval3=" + escape(strFilterValue3);
    if (strMainColNameOfMainRes) strUrl += "&colname=" + escape(strMainColNameOfMainRes);
    if (strMainCtrlNameOfMainRes) strUrl += "&ctrlname=" + escape(strMainCtrlNameOfMainRes);
    if (strBiIndex) strUrl += "&bi_index=" + strBiIndex;
    if (strIsMultiTable) strUrl += "&multitab=" + strIsMultiTable;
    if (colValue) strUrl += "&colval=" + escape(colValue);
    window.open(strUrl, "advdict_" + strMainResID, "left=120,top=20,height=640,width=720,status=no,toolbar=no,menubar=no,location=no,resizable=yes,scrollbars=yes");
    return false;
}

/*打开定制编码的记录选择窗体*/
function F3OpenCustomizeCodeWindow(strUrl, strParam2, strResID, strColName, strCtrlName, strIsMultiTable, left, top, width, height, strUserName, strUserEnPass){
    var colValue = new String(document.getElementById(strCtrlName).value);
    colValue = colValue.replace("+", "x__plus");
    //colValue = escape(colValue);
    if (strUrl.indexOf("?") > 0){
        strUrl += "&";
    }else{
        strUrl += "?";
    }
    strUrl += "dynlogin=1";
    if (strParam2) strUrl += "&strParam2=" + strParam2;
    if (strResID) strUrl += "&mnuresid=" + strResID;
    if (strUserName) strUrl += "&user=" + escape(strUserName);
    if (strUserEnPass) strUrl += "&ucode=" + escape(strUserEnPass);
    if (strColName) strUrl += "&colname=" + escape(strColName);
    if (strCtrlName) strUrl += "&ctrlname=" + escape(strCtrlName);
    if (strIsMultiTable) strUrl += "&multitab=" + strIsMultiTable;
    if (colValue) strUrl += "&colval=" + escape(colValue);
    window.open(strUrl, "custcode_" + strResID, "left=" + left + ",top=" + top + ",height=" + height + ",width=" + width + ",status=no,toolbar=no,menubar=no,location=no,resizable=yes,scrollbars=yes");
    return false;
}

/*提取当前用户的部门名称*/
function F3ShowMyDepartment(strCtrlNameOfDepName, strCtrlNameOfDepID){
    try{
        if (strCtrlNameOfDepName){
            document.getElementById(strCtrlNameOfDepName).value = document.getElementById("f3edit_user_depname").value;
        }
    }catch(ex){}
    
    try{
        if (strCtrlNameOfDepID){
            document.getElementById(strCtrlNameOfDepID).value = document.getElementById("f3edit_user_depid").value;
        }
    }catch(ex){}
}

/*提取当前用户名称*/
function F3ShowMyName(strCtrlNameOfUserName, strCtrlNameOfUserID){
    try{
        if (strCtrlNameOfUserName){
            document.getElementById(strCtrlNameOfUserName).value = document.getElementById("f3edit_username").value;
        }
    }catch(ex){}
    
    try{
        if (strCtrlNameOfUserID){
            document.getElementById(strCtrlNameOfUserID).value = document.getElementById("f3edit_userid").value;
        }
    }catch(ex){}
}

/*打开部门选择窗体*/
function F3OpenDepartmentSelectWindow(strResID, strCtrlName, strCtrlNameOfDepID, strUserName, strUserEnPass){
    strUrl = "/rispweb/adminuser/HsDepartmentPromptSelect.aspx?dynlogin=1&mnuresid=" + strResID + "&ctrlnameOfDepID=" + escape(strCtrlNameOfDepID) + "&ctrlname=" + escape(strCtrlName) + "&user=" + escape(strUserName) + "&ucode=" + escape(strUserEnPass);
    window.open(strUrl, "depsel_" + strResID, "left=120,top=20,height=580,width=430,status=no,toolbar=no,menubar=no,location=no,resizable=no,scrollbars=yes");
    return false;
}

/*打开用户选择窗体*/
function F3OpenLoginUserSelectWindows(strResID, strCtrlNameOfUserName, strCtrlNameOfUserCode){
    strUrl = "/rispweb/adminuser/HsUserPromptSelect.aspx?mnuresid=" + strResID + "&colname=" + escape(strCtrlNameOfUserName) + "&colnameOfUserCode=" + escape(strCtrlNameOfUserCode);
    window.open(strUrl, "usersel_" + strResID, "left=120,top=20,height=580,width=720,status=no,toolbar=no,menubar=no,location=no,resizable=yes,scrollbars=yes");
    return false;
}

/*打开人事员工选择窗体*/
function F3OpenHrUserSelectWindows(strResID, strCtrlNameOfUserName, strCtrlNameOfUserCode){
    strUrl = "/rispweb/cmsproduct/hr/HrUserPromptSelect.aspx?mnuresid=" + strResID + "&colname=" + escape(strCtrlNameOfUserName) + "&colnameOfUserCode=" + escape(strCtrlNameOfUserCode);
    window.open(strUrl, "usersel_" + strResID, "left=120,top=20,height=580,width=720,status=no,toolbar=no,menubar=no,location=no,resizable=yes,scrollbars=yes");
    return false;
}

//在界面上的文档框（编辑状态下的Textbox）右边添加"查阅"按钮，点击后跳出窗体提取或打开文档
function F3OpenDocFileWindow(strResID, strRecID, strUserName, strUserEnPass){
    var strUrl = "/rispweb/cmsdocument/DocOpen.aspx?dynlogin=1&mnuresid=" + strResID + "&docrecid=" + strRecID + "&user=" + escape(strUserName) + "&ucode=" + escape(strUserEnPass);
    window.open(strUrl, "docfile_" + strResID, "status=no,toolbar=yes,menubar=yes,location=yes,resizable=yes,scrollbars=yes");
    return false;
}

//保存主资源记录
function F3SaveHostRecord(strResID){
    var rtn = F3ValidateValue(self.document.Form1);
    if (rtn == false){
        return false;
    }
    self.document.getElementById("btnSave").click();
    return false;
}

//添加子资源记录
function F3AddSubRecord(strHostResID, strHostRecID, strResID, strUserName, strUserEnPass){
    var strUrl = "/rispweb/risphost/HSEdit.aspx?mnuispopup=1&dynlogin=1&mnuhostresid=" + strHostResID + "&mnuhostrecid=" + strHostRecID + "&mnuresid=" + strResID + "&mnuinmode=3" + "&user=" + escape(strUserName) + "&ucode=" + escape(strUserEnPass);
    window.open(strUrl, "recadd_" + strResID, "left=10,top=10,height=680,width=950,status=no,toolbar=no,menubar=no,location=no,resizable=yes,scrollbars=yes");
    return false;
}

//修改子资源记录
function F3EditSubRecord(strHostResID, strHostRecID, strResID, strUserName, strUserEnPass, strMsg){
    var ctrlValue = document.getElementById("RECID3_" + strResID).value; //eval("self.document.Form1.RECID3_" + strResID);
    if (ctrlValue == ""){
        alert(strMsg);
        return false;
    }
    var strUrl = "/rispweb/risphost/HSEdit.aspx?mnuispopup=1&dynlogin=1&mnuhostresid=" + strHostResID + "&mnuhostrecid=" + strHostRecID + "&mnuresid=" + strResID + "&mnuinmode=5&mnurecid=" + escape(ctrlValue) + "&user=" + escape(strUserName) + "&ucode=" + escape(strUserEnPass);
    window.open(strUrl, "recedit_" + strResID, "left=10,top=10,height=680,width=950,status=no,toolbar=no,menubar=no,location=no,resizable=yes,scrollbars=yes");
    return false;
}

//查阅子资源记录
function F3ViewSubRecord(strHostResID, strHostRecID, strResID, strUserName, strUserEnPass, strMsg){
    //var ctlName = eval("self.document.Form1.RECID3_" + strResID);
    var ctrlValue = document.getElementById("RECID3_" + strResID).value
    if (ctrlValue == ""){
        alert(strMsg);
        return false;
    }
    var strUrl = "/rispweb/risphost/HSEdit.aspx?mnuispopup=1&mnupopup_closeonly=1&dynlogin=1&mnuhostresid=" + strHostResID + "&mnuhostrecid=" + strHostRecID + "&mnuresid=" + strResID + "&mnuinmode=13&mnurecid=" + escape(ctrlValue) + "&user=" + escape(strUserName) + "&ucode=" + escape(strUserEnPass);
    window.open(strUrl, "recview_" + strResID, "left=10,top=10,height=680,width=950,status=no,toolbar=no,menubar=no,location=no,resizable=yes,scrollbars=yes");
    return false;
}

//删除子资源记录
function F3DeleteSubRecord(strResID, strMsg){
    //var ctlName = eval("self.document.Form1.RECID3_" + strResID);
    var ctrlValue = document.getElementById("RECID3_" + strResID).value
    if (ctrlValue == ""){
        alert(strMsg);
        return false;
    }
    self.document.Form1.mnusubtabresid.value = strResID;
    //为了确保页面刷新为最新数据，这里必须设置为保存命令，等效为在页面上点击“保存”
    //var eventTarget = "btnSave";
    //self.document.Form1.__EVENTTARGET.value = eventTarget.split("$").join(":");
    //self.document.Form1.__EVENTARGUMENT.value = "";
    self.document.Form1.mnucmd.value = "delrelrec";
    self.document.Form1.submit();
    return false;
}

//资源定制Button的操作
function F3EditSubRecordForExtButton(strHostResID, strHostRecID, strResID, strUserName, strUserEnPass, mnusection, mnukey, frmWidth, frmHeight, strMsg){
    //var ctlName = eval("self.document.Form1.RECID3_" + strResID);
    var ctrlValue = document.getElementById("RECID3_" + strResID).value
    if (ctrlValue == ""){
        alert(strMsg);
        return false;
    }
    //开始删除窗体
    var strUrl = "/rispweb/cmshost/HSEditPopupResult.aspx?cmd=SubtablecmdSet&mnusection=" + mnusection + "&mnukey=" + mnukey + "&dynlogin=1&mnuhostresid=" + strHostResID + "&mnuhostrecid=" + strHostRecID + "&mnuresid=" + strResID + "&mnuinmode=13&mnurecid=" + escape(ctrlValue) + "&user=" + escape(strUserName) + "&ucode=" + escape(strUserEnPass);
    var rtnVal = window.showModalDialog(strUrl, "", "dialogHeight:" + frmHeight + "px; dialogWidth:" + frmWidth + "px; center:yes"); 
    if (rtnVal == "1"){
        //操作成功后保存当前记录，为了刷新界面数据
        return F3SaveHostRecord(strResID);
    }else{
        return false;
    }
}

//输入窗体的子资源表单的“添加”类按钮，指定按钮名称和窗体名称
function F3EditSubRecordForExtButtonByAddForm(strHostResID, strHostRecID, strResID, strFormName, strUserName, strUserEnPass, mnusection, mnukey, frmWidth, frmHeight){
    var strUrl = "/rispweb/risphost/HSEdit.aspx?mnuispopup=1&mnusection=" + mnusection + "&mnukey=" + mnukey + "&dynlogin=1&mnuhostresid=" + strHostResID + "&mnuhostrecid=" + strHostRecID + "&mnuresid=" + strResID + "&mnuinmode=3" + "&mnuformname=" + escape(strFormName) + "&user=" + escape(strUserName) + "&ucode=" + escape(strUserEnPass);
    window.open(strUrl, "recadd_" + strResID, "left=10,top=10,height=" + frmWidth + ",width=" + frmWidth + ",status=no,toolbar=no,menubar=no,location=no,resizable=yes,scrollbars=yes");
    return false;
}

//输入窗体的子资源表单的“修改”类按钮，指定按钮名称和窗体名称
function F3EditSubRecordForExtButtonByEditForm(strHostResID, strHostRecID, strResID, strFormName, strUserName, strUserEnPass, mnusection, mnukey, frmWidth, frmHeight, strMsg){
    //var ctlName = eval("self.document.Form1.RECID3_" + strResID);
    var ctrlValue = document.getElementById("RECID3_" + strResID).value
    if (ctrlValue == ""){
        alert(strMsg);
        return false;
    }
    var strUrl = '/rispweb/risphost/HSEdit.aspx?mnuispopup=1&mnusection=' + mnusection + '&mnukey=' + mnukey + '&dynlogin=1&mnuhostresid=' + strHostResID + '&mnuhostrecid=' + strHostRecID + '&mnuresid=' + strResID + '&mnuinmode=5&mnurecid=' + escape(ctrlValue) + "&mnuformname=" + escape(strFormName) + "&user=" + escape(strUserName) + "&ucode=" + escape(strUserEnPass);
    window.open(strUrl, 'recedit_' + strResID, 'left=10,top=10,height=' + frmWidth + ',width=' + frmWidth + ',status=no,toolbar=no,menubar=no,location=no,resizable=yes,scrollbars=yes');
    return false;
}

//关闭跳出的编辑窗体
function F3ClosePopupEditFormAndSaveOpener(){
    try{
        //为了确保页面刷新为最新数据，这里必须设置为保存命令，等效为在页面上点击“保存”
        //var eventTarget = "btnSave";
        //window.opener.document.Form1.__EVENTTARGET.value = eventTarget.split("$").join(":");
        //window.opener.document.Form1.__EVENTARGUMENT.value = "";
        //window.opener.document.Form1.mnucmd.value = "btnSave";
        //window.opener.document.Form1.submit();
        window.opener.document.getElementById("btnSave").click();
        window.close();
        return false;
    }catch(ex){
    }
}

//关闭跳出的编辑窗体
function F3ClosePopupEditFormWithoutRefresh(){
    window.close();
    return false;
}

//提取子资源文档
function F3SubRecordGetDoc(strResID, strUserName, strUserEnPass, strMsg, strMsg){
    //var ctlName = eval("self.document.Form1.RECID3_" + strResID);
    var ctrlValue = document.getElementById("RECID3_" + strResID).value
    if (ctrlValue == ""){
        alert(strMsg);
        return false;
    }
    var strUrl = '/rispweb/rispdocument/DocOpen.aspx?dynlogin=1&mnuresid=' + strResID + '&docrecid=' + ctrlValue + "&docopenstyle=1" + "&user=" + escape(strUserName) + "&ucode=" + escape(strUserEnPass); //docopenstyle=1: 提取文档
    
    //window.open(strUrl, 'docget_' + strResID, 'left=10,top=10,height=200,width=300,status=no,toolbar=no,menubar=no,location=no,resizable=yes,scrollbars=yes');
    formDownFile.action=strUrl; //不用open而用此特殊Form，下载文档时不会跳出无用的新窗体
    formDownFile.submit();    

    return false;
}
function F3SubRecordGetDoc(strResID, strUserName, strUserEnPass, strMsg) {
    //var ctlName = eval("self.document.Form1.RECID3_" + strResID);
    var ctrlValue = document.getElementById("RECID3_" + strResID).value
    if (ctrlValue == "") {
        alert(strMsg);
        return false;
    }
    var strUrl = '/rispweb/rispdocument/DocOpen.aspx?dynlogin=1&mnuresid=' + strResID + '&docrecid=' + ctrlValue + "&docopenstyle=1" + "&user=" + escape(strUserName) + "&ucode=" + escape(strUserEnPass); //docopenstyle=1: 提取文档

    //window.open(strUrl, 'docget_' + strResID, 'left=10,top=10,height=200,width=300,status=no,toolbar=no,menubar=no,location=no,resizable=yes,scrollbars=yes');
    formDownFile.action = strUrl; //不用open而用此特殊Form，下载文档时不会跳出无用的新窗体
    formDownFile.submit();

    return false;
}

//在线浏览子记录文档
function F3SubRecordOnlineViewDoc(strResID, strUserName, strUserEnPass, strMsg){
    //var ctlName = eval("self.document.Form1.RECID3_" + strResID);
    var ctrlValue = document.getElementById("RECID3_" + strResID).value
    if (ctrlValue == ""){
        alert(strMsg);
        return false;
    }
    var strUrl = '/rispweb/rispdocument/DocOpen.aspx?dynlogin=1&mnuresid=' + strResID + '&docrecid=' + ctrlValue + "&docopenstyle=2" + "&user=" + escape(strUserName) + "&ucode=" + escape(strUserEnPass); //docopenstyle=2: 在线浏览文档
    window.open(strUrl, 'docview_' + strResID, 'left=10,top=10,height=680,width=950,status=no,toolbar=no,menubar=no,location=no,resizable=yes,scrollbars=yes');
    return false;
}

//输入窗体中子资源记录选中的事件响应
function F3RowLeftClickInSubResTable(src, strResID){
    if (ctrlKeyClicked == true){ //多选记录
        src.bgColor = "#C4D9F9";
        var ctlName = document.getElementById("RECID3_" + strResID); //eval("self.document.Form1.RECID3_" + strResID);
        var strRecID3 = F3Trim(ctlName.value, ",");
        if (strRecID3 == ""){
            ctlName.value = src.RECID3; //需要将用户选择的行号POST给服务器
        }else{
            ctlName.value = strRecID3 + "," + src.RECID3; //需要将用户选择的行号POST给服务器
        }
    }else{
        //单选记录
        var o=src.parentNode;
        for (var k=1;k<o.children.length;k++){
            if (o.children[k].bgColor_bak == null || o.children[k].bgColor_bak == ""){
                o.children[k].bgColor = "white";
            }else{
                o.children[k].bgColor = o.children[k].bgColor_bak;
            }
        }
        src.bgColor = "#C4D9F9";
        var ctlName = document.getElementById("RECID3_" + strResID); //eval("self.document.Form1.RECID3_" + strResID);
        ctlName.value = src.RECID3; //需要将用户选择的行号POST给服务器
    }
}

//登录时重定向URL
function F3RedirectLogin(strUrl, strHideBars){
    try{
        if (strHideBars == "1"){ //隐藏浏览器的Bars
            var intTop = 0; //window.dialogTop; //window.screenTop;
            var intLeft = 0; //window.dialogLeft; //window.screenLeft;
            var intWidth = window.screen.availWidth-12; //全屏
            var intHeight = window.screen.availHeight-50; //window.dialogHeight; //全屏： window.screen.availHeight-50
            var newWin = window.open(strUrl, '_blank', 'left=' + intLeft + ',top=' + intTop + ',height=' + intHeight + ',width=' + intWidth + ',directories=no,location=no,menubar=no,resizable=yes,scrollbars=yes,status=no,titlebar=no,toolbar=no,fullscreen=yes');
            if (newWin == null){
                //打开新窗体失败，仍然使用原窗体。1）将服务器地址加入信任网站就可以解决此问题。    或者2）在IE的“弹出窗体阻止程序”中加入允许网站：服务器地址。
                window.location.href = strUrl;
            }else{
                //打开新窗体成功
                window.opener = null;
                window.close();
            }
        }else{
            window.location.href = strUrl;
        }
    }catch(ex){
    }
}
function getOs() {
    var OsObject = "";
    if (navigator.userAgent.indexOf("MSIE") > 0) {
        return "MSIE";
    }
    if (isFirefox = navigator.userAgent.indexOf("Firefox") > 0) {
        return "Firefox";
    }
    if (isSafari = navigator.userAgent.indexOf("Safari") > 0) {
        return "Safari";
    }
    if (isCamino = navigator.userAgent.indexOf("Camino") > 0) {
        return "Camino";
    }
    if (isMozilla = navigator.userAgent.indexOf("Gecko/") > 0) {
        return "Gecko";
    }

}
 
/*入口*/
function F3ValidateValue(frm) {
    if (!(getOs() == "MSIE"))
    {
        return true;
    }
    var o;
    var i;
    //判断所有的text框
    o=frm.tags("input");
    for (i=0;i<o.length;i++){
        if (F3ValidateValueType(o[i])==false) return false;
    }
    //判断所有的textarea框
    o=frm.tags("textarea");
    for (i=0;i<o.length;i++)
    {
        if (F3ValidateValueType(o[i])==false) return false;
    }
    //判断所有的select框
    o=frm.tags("select");
    for (i=0;i<o.length;i++){
        if (F3ValidateOptionValueType(o[i])==false) return false;
    }
    return true;
} 

/********************************************/
function F3ValidateValueType(o){
    //检查是否为必输项;
    if (o.mInput=="true"){
        if (o.value.trim()=="")
        {
            alert(o.errmsg+'不能为空');
            o.focus();
            return false;
        }
    }
    //类型判断;
    switch (o.fType)
    {
        case "num":
            if (isNaN(o.value))
            {
                alert(o.errmsg+'必须为数字');
                o.focus();
                o.select();
                return false;
            }
            break;
        case "username":
            if(!Verifyname(o.value)){
                alert(o.errmsg+'只能是字母，数字，－＿');
                o.focus();
                o.select();
                return false;
            }
            break;
        case "email":
            if (o.value!="") {
                var s=o.value
                var re=/^\b[\w\.-]+@[\w-]+\.(([A-Z]{2,6})|([A-Z]{2,6}\.([A-Z]{2,6}))|([A-Z]{2}\.cn))\b$/i
                if(!re.exec(s)){
                    alert(o.errmsg+'格式不正确');
                    o.focus();
                    o.select();
                    return false;
                }    
             }
             break;
        case "date":
            if (o.value!="") {
                if (!F3IsDate(o.value)){
                    alert(o.errmsg+'必须为日期格式\n 如:2004-12-12 或者 2004/12/12');
                    o.focus();
                    o.select();
                    return false;
                }
            }
            break;
        case "time":
            if (o.value!="") {
                if (!isTime(o.value)){
                    alert(o.errmsg+'必须为时间格式\n 如:18:30:60 或者 8:25');
                    o.focus();
                    o.select();
                    return false;
                }
            }
            break;
        case "datetime":
            if (o.value!="") {
                if (!isDateTime(o.value)){
                    alert(o.errmsg+'必须为日期时间格式格式\n 如:2004-12-12 或者 2004-12-12 15:30 或者 2004/12/12 15:30:28');
                    o.focus();
                    o.select();
                    return false;
                }
            }
            break;
            
        default:
            break;
        
        }
    return true;
}

/********************************************/
function F3ValidateOptionValueType(o){
    //选择项不能为空
    try{
        if (o.mInput=="true"){
            if (o.options(o.selectedIndex).text.trim()=="")
            {
                alert(o.errmsg+'不能为空');
                o.focus();
                return false;
            }
        }
        return true;
    }catch(ex){
        alert(o.errmsg+'不能为空');
        o.focus();
        return false;
    }
}

function isLeapYear(iYear) {
    return !(iYear%4 != 0 || (iYear%100 == 0 && iYear%400 != 0));
}

String.prototype.trim = function(){ 
    return this.replace(/(^\s*)|(\s*$)/g, ""); 
}

//Javascript里面去掉字符串两边的空格
String.prototype.Trim = function() 
{ 
    return this.replace(/(^\s*)|(\s*$)/g, ""); 
} 
String.prototype.LTrim = function() 
{ 
    return this.replace(/(^\s*)/g, ""); 
} 
String.prototype.RTrim = function() 
{ 
    return this.replace(/(\s*$)/g, ""); 
} 

function BASEtrim(str){
        str=str.toString()
        lIdx=0;rIdx=str.length;
        if (BASEtrim.arguments.length==2)
        act=BASEtrim.arguments[1].toLowerCase()
        else
        act="all"
        for(var i=0;i<str.length;i++){
            thelStr=str.substring(lIdx,lIdx+1)
        therStr=str.substring(rIdx,rIdx-1)
        if ((act=="all" || act=="left") && thelStr==" "){
            lIdx++
        }
        if ((act=="all" || act=="right") && therStr==" "){
            rIdx--
        }
        }
        str=str.slice(lIdx,rIdx)
        return str
}

function PopupDialog(ctrlobjs,Url,dialogArguments,width,height)
{
    if (width) {
    } else {
        //width = "280px";
        width = "290px";
    }
    if (height) {
    } else {
        //height = "175px";
        height = "215px";
    }
    //弹出一个小小的窗口
    //lsh
    var len = ctrlobjs.length;
    var ctrlobj;
    if(len == null)
        ctrlobj = ctrlobjs;
    else
        ctrlobj = ctrlobjs[0];
    if(ctrlobj.readOnly || ctrlobj.disabled)
        return false;
    if(dialogArguments==null)
        dialogArguments = "";
    showx = event.screenX - event.offsetX - 4 - 210 ; // + deltaX;
    showy = event.screenY - event.offsetY + 18; // + deltaY;
    newWINwidth = 210 + 4 + 18;
    var retval = window.showModalDialog(Url, dialogArguments, "dialogWidth:" + width + "; dialogHeight:" + height + "; dialogLeft:"+showx+"px; dialogTop:"+showy+"px; status:no; directories:yes;scrollbars:no;Resizable=no; "    );
    if( retval != null ){
        if(len == null)
            ctrlobj.value = retval;
        else
            {
                for(var i = 0;i<len;i++)
                    ctrlobjs[i].value = retval;
            }
    }else{
    }
}

//toValidNum:将文本转换成合格的数字
function toValidNum(txt){
    var num=parseFloat(txt);
    if(isNaN(num))
        num = 0;
    return num.toString();
}
//dateCompare:比较日期
//date1和date2可以是以'-'分隔的String,遵循年-月-日的顺序.
//返回-1:date1<date2, 0:date1=date2, 1:date1>date2
function dateCompare(date1,date2){
    if(typeof(date1)=='undefined') date1='1900-01-01';
    if(date1==null) date1='1900-01-01';
    if(typeof(date2)=='undefined') date2='1900-01-01';
    if(date2==null) date2='1900-01-01';
    
    date1=date1.split('-');
    date2=date2.split('-');
    
    var ret = (parseInt(date1[0])*10000+parseInt(date1[1])*100+parseInt(date1[2]) ) -
                 (parseInt(date2[0])*10000+parseInt(date2[1])*100+parseInt(date2[2]) ) 
    if(ret>0)
        ret = 1
    else if (ret < 0)
        ret=-1
    else
        ret=0
        
    return ret;
}

/*
* 下述代码解决IE5和IE6下的png图片不透明的问题
*/
function F3CorrectPng()
{
    var arVersion = navigator.appVersion.split("MSIE")
    var intVer = parseFloat(arVersion[1]);
    if (intVer >= 5.5 && intVer < 7 && document.body.filters){
        for(var j=0; j<document.images.length; j++) {
            var img = document.images[j];
            var imgName = img.src.toUpperCase();
            if (imgName.substring(imgName.length-3, imgName.length) == "PNG") {
                var imgID = (img.id) ? "id='" + img.id + "' " : "" ;
                var imgClass = (img.className) ? "class='" + img.className + "' " : "" ;
                var imgTitle = (img.title) ? "title='" + img.title + "' " : "title='" + img.alt + "' " ;
                var imgStyle = "display:inline-block;" + img.style.cssText ;
                if (img.align == "left") imgStyle = "float:left;" + imgStyle ;
                if (img.align == "right") imgStyle = "float:right;" + imgStyle ;
                if (img.parentElement.href) imgStyle = "cursor:hand;" + imgStyle ;
                var strNewHTML = "<span " + imgID + imgClass + imgTitle + " style=\"" + "width:" + img.width + "px; height:" + img.height + "px;" + imgStyle + ";" + "filter:progid:DXImageTransform.Microsoft.AlphaImageLoader" + "(src=\'" + img.src + "\', sizingMethod='scale');\"></span>";
                img.outerHTML = strNewHTML
                j = j-1 ;
            }
        }
    }
}

/*
* 把带:的时间转为分钟数
*/
function F3ConvertTimeToInt(strWorkTime){
    try{
	    var strTime = new String(strWorkTime);
	    var pos = strTime.indexOf(":", 0)
	    if (pos < 0){
	        return F3ParseInt(strTime.toString());
	    }else if (pos == 0){
	        return F3ParseInt(strTime.substring(1));
	    }else{
	        var intTime = F3ParseInt(strTime.substring(0, pos)) * 60 + F3ParseInt(strTime.substring(pos+1));
	        return intTime;
	    }
    }catch(ex){
        return 0;
    }
}

/*
* 把分钟数转为带:的时间
*/
function F3ConvertIntToTime(intWorkTime){
    try{
        var intHour = Math.floor(intWorkTime / 60);
        var intMin = intWorkTime % 60;
        
        var strMin = "";
        if (intMin == 0){
            strMin = "00";
        }else{
            strMin = "" + intMin;
        }
        
        if (intHour > 0){
            return intHour + ":" + strMin;
        }else{
            return "0:" + strMin;
        }
    }catch(ex){
        return "";
    }
}
function RealsunAjaxGetUserPass(strUserID,baseurl) {
    try {
        

        //发送Ajax请求
        var strUrl = baseurl+"/rispweb/rispservice/RSServiceRequestUserPass.aspx";
        var strPostBody = "user=" + strUserID;
        var xmlReq = F3AjaxSendHttpRequest("POST", strUrl, false, strPostBody);
        var xmlDoc = xmlReq.responseXML;
        return xmlDoc.selectSingleNode("//VALUE").text;
    } catch (ex) {
        return "";
    }
}
function restartService(strServiceName,strAction) {
    try {


        //发送Ajax请求
        var strUrl = "/rispweb/rispservice/SvcClearCache.aspx";
        var strPostBody = "servicename=" + strServiceName + "&action=" + strAction;
        var xmlReq = F3AjaxSendHttpRequest("POST", strUrl, false, strPostBody);
        
    } catch (ex) {
        return "";
    }
}
function mobileLogin(user,upass) {
    try {


        //发送Ajax请求
        var strUrl = "/rispweb/rispservice/SvcLogin.aspx";
        var strPostBody = "clienttype=mobile&user=" + user + "&upass=" + upass;
        var xmlReq = F3AjaxSendHttpRequest("POST", strUrl, false, strPostBody);


    } catch (ex) {
        return "";
    }
}
