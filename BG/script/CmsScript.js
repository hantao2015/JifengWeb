/*打开高级字典的记录选择窗体*/
function OpenAdvDictWindow(strMainResID, strColName, strCtrlName, strBiIndex, blnIsMultiTable, strUserName, strUserEnPass, strFilterMainCtrl1, strFilterDictCol1, strFilterMainCtrl2, strFilterDictCol2, strFilterMainCtrl3, strFilterDictCol3){
	var ctlName=eval('self.document.Form1.' + strCtrlName);
	var colValue = new String(ctlName.value);
	colValue = colValue.replace("+", "x__plus");
	//colValue = escape(colValue);
	//var colValue2 = encodeURI(colValue);
	
//	alert("strBiIndex=" + strBiIndex);
//	var strIndex = "";
//	if (strBiIndex=='' || strBiIndex='0'){
//	    strIndex = "";
//	}else{
//	    strIndex = "_" + strBiIndex;
//	}
	
	var strFilterValue1 = "";
//	strFilterMainCtrl1 = strFilterMainCtrl1 + strIndex;
	//alert("strFilterMainCtrl1 1=" + strFilterMainCtrl1);
	if (strFilterMainCtrl1 != "undefined" && strFilterMainCtrl1 != ""){
	    try{
	        //alert("strFilterMainCtrl1 2=" + strFilterMainCtrl1);
		    var ctlFilterCol = eval('self.document.Form1.' + strFilterMainCtrl1);
		    strFilterValue1 = new String(ctlFilterCol.value);
		    //alert("strFilterValue1=" + strFilterValue1);
		}catch(ex){
		    strFilterMainCtrl1 = "";
		    strFilterValue1 = "";
		}
	}
	
//	strFilterMainCtrl2 = strFilterMainCtrl2 + strIndex;
	var strFilterValue2 = "";
	if (strFilterMainCtrl2 != "undefined" && strFilterMainCtrl2 != ""){
	    try{
		    var ctlFilterCol = eval('self.document.Form1.' + strFilterMainCtrl2);
		    strFilterValue2 = new String(ctlFilterCol.value);
		}catch(ex){
		    strFilterMainCtrl2 = "";
		    strFilterValue2 = "";
		}
	}
	
//	strFilterMainCtrl3 = strFilterMainCtrl3 + strIndex;
	var strFilterValue3 = "";
	if (strFilterMainCtrl3 != "undefined" && strFilterMainCtrl3 != ""){
	    try{
		    var ctlFilterCol = eval('self.document.Form1.' + strFilterMainCtrl3);
		    strFilterValue3 = new String(ctlFilterCol.value);
		}catch(ex){
		    strFilterMainCtrl3 = "";
		    strFilterValue3 = "";
		}
	}

	var strUrl = '/rispweb/rispfield/FieldGetAdvDictionary.aspx?dynlogin=1&mnuresid=' + strMainResID + "&user=" + escape(strUserName) + "&ucode=" + escape(strUserEnPass) + "&filtercol1=" + escape(strFilterDictCol1) + "&filtercolval1=" + escape(strFilterValue1) + "&filtercol2=" + escape(strFilterDictCol2) + "&filtercolval2=" + escape(strFilterValue2) + "&filtercol3=" + escape(strFilterDictCol3) + "&filtercolval3=" + escape(strFilterValue3) + '&colname=' + escape(strColName) + '&ctrlname=' + escape(strCtrlName) + '&bi_index=' + strBiIndex + '&multitab=' + blnIsMultiTable + '&colval=' + escape(colValue);
	window.open(strUrl, 'advdict_' + strMainResID, 'left=120,top=20,height=640,width=720,status=yes,toolbar=no,menubar=no,location=no,resizable=yes,scrollbars=yes');
	return false;
}

/*打开定制编码的记录选择窗体*/
function OpenCustCodeWindow(strUrl, strParam2, strResID, strColName, strCtrlName, blnIsMultiTable, left, top, width, height, strUserName, strUserEnPass){
	var ctlName=eval('self.document.Form1.' + strCtrlName);
	var colValue = new String(ctlName.value);
	colValue = colValue.replace("+", "x__plus");
	//colValue = escape(colValue);
	if (strUrl.indexOf("?") > 0){
        strUrl = strUrl + '&';
    }else{
        strUrl = strUrl + '?';
    }
	strUrl = strUrl + 'strParam2=' + strParam2 + '&dynlogin=1&mnuresid=' + strResID + "&user=" + escape(strUserName) + "&ucode=" + escape(strUserEnPass) + '&colname=' + escape(strColName) + '&ctrlname=' + escape(strCtrlName) + '&multitab=' + blnIsMultiTable + '&colval=' + escape(colValue);
	window.open(strUrl, 'custcode_' + strResID, 'left=' + left + ',top=' + top + ',height=' + height + ',width=' + width + ',status=yes,toolbar=no,menubar=no,location=no,resizable=yes,scrollbars=yes');
	return false;
}

/*提取当前用户的部门名称*/
function ShowMyDepartment(strCtrlName){
	var ctlName=eval('self.document.Form1.' + strCtrlName);
	ctlName.value = document.getElementById("FORMDATA_USERDEPNAME").value;
}

/*提取当前用户名称*/
function ShowMyName(strCtrlName){
	var ctlName=eval('self.document.Form1.' + strCtrlName);
	ctlName.value = document.getElementById("FORMDATA_USERNAME").value;
}

/*打开部门选择窗体*/
function OpenWindowOfSelectDeparment(strResID, strColName, strCtrlName, strUserName, strUserEnPass){
	strUrl = '/rispweb/adminuser/hsDepartmentPromptSelect.aspx?dynlogin=1&mnuresid=' + strResID + "&user=" + escape(strUserName) + "&ucode=" + escape(strUserEnPass) + '&colname=' + escape(strColName) + '&ctrlname=' + escape(strCtrlName);
	window.open(strUrl, 'depsel_' + strResID, 'left=120,top=20,height=580,width=430,status=no,toolbar=no,menubar=no,location=no,resizable=no,scrollbars=yes');
	return false;
}

/*打开用户选择窗体*/
function OpenWindowOfSelectLoginUser(strResID, strColName){
	strUrl = '/rispweb/adminuser/hsUserPromptSelect.aspx?mnuresid=' + strResID + '&colname=' + escape(strColName);
	window.open(strUrl, 'usersel_' + strResID, 'left=120,top=20,height=580,width=720,status=no,toolbar=no,menubar=no,location=no,resizable=yes,scrollbars=yes');
	return false;
}

//在界面上的文档框（编辑状态下的Textbox）右边添加"查阅"按钮，点击后跳出窗体提取或打开文档
function OpenDocFileWindow(strResID, strRecID, strUserName, strUserEnPass){
	var strUrl = '/rispweb/rispdocument/DocOpen.aspx?dynlogin=1&mnuresid=' + strResID + '&docrecid=' + strRecID + "&user=" + escape(strUserName) + "&ucode=" + escape(strUserEnPass);
	window.open(strUrl, 'docfile_' + strResID, 'status=yes,toolbar=yes,menubar=yes,location=yes,resizable=yes,scrollbars=yes');
	return false;
}

//保存主资源记录

function SaveHostRecord(strResID){
    var rtn = CheckValue(self.document.Form1);
    if (rtn == false){
        return false;
    }
	//为了确保页面刷新为最新数据，这里必须设置为保存命令，等效为在页面上点击“保存”

	//var eventTarget = "btnSave";
	//self.document.Form1.__EVENTTARGET.value = eventTarget.split("").join(":");
	//self.document.Form1.__EVENTARGUMENT.value = "";
	self.document.Form1.mnucmd.value = "btnSave";
	self.document.Form1.submit();
	return false;
}

//添加子资源记录

function AddSubRecord(strHostResID, strHostRecID, strResID, strUserName, strUserEnPass){
	var strUrl = '/rispweb/risphost/hsEdit.aspx?mnuispopup=1&dynlogin=1&mnuhostresid=' + strHostResID + '&mnuhostrecid=' + strHostRecID + '&mnuresid=' + strResID + '&mnuinmode=3' + "&user=" + escape(strUserName) + "&ucode=" + escape(strUserEnPass);
	window.open(strUrl, 'recadd_' + strResID, 'left=10,top=10,height=680,width=950,status=yes,toolbar=no,menubar=no,location=no,resizable=yes,scrollbars=yes');
	return false;
}

//修改子资源记录

function EditSubRecord(strHostResID, strHostRecID, strResID, strUserName, strUserEnPass, strMsg){
    var ctlName = eval("self.document.Form1.RECID3_" + strResID);
	if (ctlName.value == ""){
		alert(strMsg);
		return false;
	}
	var strUrl = '/rispweb/risphost/hsEdit.aspx?mnuispopup=1&dynlogin=1&mnuhostresid=' + strHostResID + '&mnuhostrecid=' + strHostRecID + '&mnuresid=' + strResID + '&mnuinmode=5&mnurecid=' + escape(ctlName.value) + "&user=" + escape(strUserName) + "&ucode=" + escape(strUserEnPass);
	window.open(strUrl, 'recedit_' + strResID, 'left=10,top=10,height=680,width=950,status=yes,toolbar=no,menubar=no,location=no,resizable=yes,scrollbars=yes');
	return false;
}

//查阅子资源记录

function ViewSubRecord(strHostResID, strHostRecID, strResID, strUserName, strUserEnPass, strMsg){
    var ctlName = eval("self.document.Form1.RECID3_" + strResID);
	if (ctlName.value == ""){
		alert(strMsg);
		return false;
	}
	var strUrl = '/rispweb/risphost/hsEdit.aspx?mnuispopup=1&mnupopup_closeonly=1&dynlogin=1&mnuhostresid=' + strHostResID + '&mnuhostrecid=' + strHostRecID + '&mnuresid=' + strResID + '&mnuinmode=13&mnurecid=' + escape(ctlName.value) + "&user=" + escape(strUserName) + "&ucode=" + escape(strUserEnPass);
	window.open(strUrl, 'recview_' + strResID, 'left=10,top=10,height=680,width=950,status=yes,toolbar=no,menubar=no,location=no,resizable=yes,scrollbars=yes');
	return false;
}

//删除子资源记录

function DeleteSubRecord(strResID, strMsg){
    var ctlName = eval("self.document.Form1.RECID3_" + strResID);
	if (ctlName.value == ""){
		alert(strMsg);
		return false;
	}
	self.document.Form1.mnusubtabresid.value = strResID;
	//为了确保页面刷新为最新数据，这里必须设置为保存命令，等效为在页面上点击“保存”

	//var eventTarget = "btnSave";
	//self.document.Form1.__EVENTTARGET.value = eventTarget.split("").join(":");
	//self.document.Form1.__EVENTARGUMENT.value = "";
	self.document.Form1.mnucmd.value = "delrelrec";
	self.document.Form1.submit();
	return false;
}

//资源定制Button的操作

function EditSubRecordForExtButton(strHostResID, strHostRecID, strResID, strUserName, strUserEnPass, mnusection, mnukey, frmWidth, frmHeight, strMsg){
    var ctlName = eval("self.document.Form1.RECID3_" + strResID);
	if (ctlName.value == ""){
		alert(strMsg);
		return false;
	}
	//开始删除窗体

	var strUrl = '/rispweb/risphost/hsEditPopupResult.aspx?cmd=SubtablecmdSet&mnusection=' + mnusection + '&mnukey=' + mnukey + '&dynlogin=1&mnuhostresid=' + strHostResID + '&mnuhostrecid=' + strHostRecID + '&mnuresid=' + strResID + '&mnuinmode=13&mnurecid=' + escape(ctlName.value) + "&user=" + escape(strUserName) + "&ucode=" + escape(strUserEnPass);
	var rtnVal = window.showModalDialog(strUrl, "", "dialogHeight:" + frmHeight + "px; dialogWidth:" + frmWidth + "px; center:yes"); 
	if (rtnVal == "1"){
		//操作成功后保存当前记录，为了刷新界面数据
		return SaveHostRecord(strResID);
	}else{
		return false;
	}
}

//输入窗体的子资源表单的“添加”类按钮，指定按钮名称和窗体名称
function EditSubRecordForExtButtonByAddForm(strHostResID, strHostRecID, strResID, strFormName, strUserName, strUserEnPass, mnusection, mnukey, frmWidth, frmHeight){
	var strUrl = '/rispweb/risphost/hsEdit.aspx?mnuispopup=1&mnusection=' + mnusection + '&mnukey=' + mnukey + '&dynlogin=1&mnuhostresid=' + strHostResID + '&mnuhostrecid=' + strHostRecID + '&mnuresid=' + strResID + '&mnuinmode=3' + "&mnuformname=" + escape(strFormName) + "&user=" + escape(strUserName) + "&ucode=" + escape(strUserEnPass);
	window.open(strUrl, 'recadd_' + strResID, 'left=10,top=10,height=' + frmWidth + ',width=' + frmWidth + ',status=yes,toolbar=no,menubar=no,location=no,resizable=yes,scrollbars=yes');
	return false;
}

//输入窗体的子资源表单的“修改”类按钮，指定按钮名称和窗体名称
function EditSubRecordForExtButtonByEditForm(strHostResID, strHostRecID, strResID, strFormName, strUserName, strUserEnPass, mnusection, mnukey, frmWidth, frmHeight, strMsg){
    var ctlName = eval("self.document.Form1.RECID3_" + strResID);
	if (ctlName.value == ""){
		alert(strMsg);
		return false;
	}
	var strUrl = '/rispweb/risphost/hsEdit.aspx?mnuispopup=1&mnusection=' + mnusection + '&mnukey=' + mnukey + '&dynlogin=1&mnuhostresid=' + strHostResID + '&mnuhostrecid=' + strHostRecID + '&mnuresid=' + strResID + '&mnuinmode=5&mnurecid=' + escape(ctlName.value) + "&mnuformname=" + escape(strFormName) + "&user=" + escape(strUserName) + "&ucode=" + escape(strUserEnPass);
	window.open(strUrl, 'recedit_' + strResID, 'left=10,top=10,height=' + frmWidth + ',width=' + frmWidth + ',status=yes,toolbar=no,menubar=no,location=no,resizable=yes,scrollbars=yes');
	return false;
}

//关闭跳出的编辑窗体

function ClosePopupEditFormAndSaveOpener(){
	//为了确保页面刷新为最新数据，这里必须设置为保存命令，等效为在页面上点击“保存”

	//var eventTarget = "btnSave";
	//window.opener.document.Form1.__EVENTTARGET.value = eventTarget.split("").join(":");
	//window.opener.document.Form1.__EVENTARGUMENT.value = "";
	window.opener.document.Form1.mnucmd.value = "btnSave";
    window.opener.document.Form1.submit();
    window.close();
    return false;
}

//关闭跳出的编辑窗体

function ClosePopupEditFormWithoutRefresh(){
    window.close();
    return false;
}

//提取子资源文档

function SubRecordGetDoc(strResID, strUserName, strUserEnPass, strMsg, strMsg){
    var ctlName = eval("self.document.Form1.RECID3_" + strResID);
	if (ctlName.value == ""){
		alert(strMsg);
		return false;
	}
	var strRecID = ctlName.value;
	var strUrl = '/rispweb/rispdocument/DocOpen.aspx?dynlogin=1&mnuresid=' + strResID + '&docrecid=' + strRecID + "&docopenstyle=1" + "&user=" + escape(strUserName) + "&ucode=" + escape(strUserEnPass); //docopenstyle=1: 提取文档
	
	//window.open(strUrl, 'docget_' + strResID, 'left=10,top=10,height=200,width=300,status=yes,toolbar=no,menubar=no,location=no,resizable=yes,scrollbars=yes');
	formDownFile.action=strUrl; //不用open而用此特殊Form，下载文档时不会跳出无用的新窗体
	formDownFile.submit();	

	return false;
}

//在线浏览子记录文档

function SubRecordOnlineViewDoc(strResID, strUserName, strUserEnPass, strMsg){
    var ctlName = eval("self.document.Form1.RECID3_" + strResID);
	if (ctlName.value == ""){
		alert(strMsg);
		return false;
	}
	var strRecID = ctlName.value;
	var strUrl = '/rispweb/rispdocument/DocOpen.aspx?dynlogin=1&mnuresid=' + strResID + '&docrecid=' + strRecID + "&docopenstyle=2" + "&user=" + escape(strUserName) + "&ucode=" + escape(strUserEnPass); //docopenstyle=2: 在线浏览文档
	window.open(strUrl, 'docview_' + strResID, 'left=10,top=10,height=680,width=950,status=yes,toolbar=no,menubar=no,location=no,resizable=yes,scrollbars=yes');
	return false;
}

//输入窗体中子资源记录选中的事件响应

function RowLeftClickInSubResTable(src, ResID){
	if (ctrlKeyClicked == true){ //多选记录

		src.bgColor = "#C4D9F9";
		var ctlName = eval("self.document.Form1.RECID3_" + ResID);
		var strRecID3 = TrimChar(ctlName.value, ",");
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
        var ctlName = eval("self.document.Form1.RECID3_" + ResID);
        ctlName.value = src.RECID3; //需要将用户选择的行号POST给服务器
	}
}

/*
获取http请求对象的实例

*/
function SendF3XmlHttpRequest(strMethod, strUrl, isAsynchronize){
    try{
        if(window.ActiveXObject){ 
            for( var i = 5; i; i-- ){ 
                try{ 
                    if( i == 2 ){ 
                        var xmlReq = new ActiveXObject("Microsoft.XMLHTTP"); 
                        if (xmlReq){
                            xmlReq.open(strMethod, strUrl, isAsynchronize);
                            xmlReq.send();
                            return xmlReq;
                        }
                    }else{
                        var xmlReq = new ActiveXObject( "Msxml2.XMLHTTP." + i + ".0" );
                        if (xmlReq){
                            xmlReq.setRequestHeader("Content-Type","text/xml");
                            xmlReq.setRequestHeader("Content-Type","UTF-8");

                            xmlReq.open(strMethod, strUrl, isAsynchronize);
                            xmlReq.send();
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
                    xmlReq.send(null);
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

//登录时重定向URL
function RedirectLogin(strUrl, strHideBars){
    try{
        if (strHideBars == "1"){ //隐藏浏览器的Bars
            var intTop = 0; //window.dialogTop; //window.screenTop;
            var intLeft = 0; //window.dialogLeft; //window.screenLeft;
            var intWidth = window.screen.availWidth-12; //window.dialogWidth; //window.document.body.clientWidth; //全屏： window.screen.availWidth-12
            var intHeight = window.screen.availHeight-50; //window.dialogHeight; //全屏： window.screen.availHeight-50
            //var newWin = window.open(strUrl, '_blank', 'fullscreen=1');
            var newWin = window.open(strUrl, '_blank', 'left=' + intLeft + ',top=' + intTop + ',height=' + intHeight + ',width=' + intWidth + ',directories=no,location=no,menubar=no,resizable=yes,scrollbars=yes,status=yes,titlebar=no,toolbar=no');
           
            if (newWin == null) {
                //打开新窗体失败，仍然使用原窗体。1）将服务器地址加入信任网站就可以解决此问题。  或者2）在IE的“弹出窗体阻止程序”中加入允许网站：服务器地址。

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
