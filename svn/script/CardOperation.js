//读取卡上的GUID号码
function Hsop_GetCardGUID(obj)
{
  
         if (obj.GetCardGUID())
	       {
	         
              return UintCardGuid(obj);
	       } 
	       else
	       {
	        return 0;
	       }
      

}
function UintCardGuid(obj)
{

    
    if (obj.CardGUID<0)
    {
        var e="";
        var s="";
      
        s=String(Math.abs(obj.CardGUID).toString(2));
        for (var i=0;i < s.length;i++)
	{
           
            if (s.substr(i,1)=="1")
            {
               e=e+"0";
            }
            else
            {
               e=e+"1";
            }
            
	}
        for (var i=0;i< ( 32 - s.length);i++)
        {
            e="1"+e
        }
         
        s=parseInt(e,2) +1;
      
        return  s;
    }
    else
    {
       return obj.CardGUID;
    }
}

function setobjectcommonsector(obj,CardCommonObj)
{
//alert("setobjectcommonsector");
		  obj.CommonSector=CardCommonObj.CardSector;
		  obj.CardHolderID =CardCommonObj.CardIdentityHolderID;
		  obj.CardHolderName =  CardCommonObj.CardIdentityEmployeeName;
		  obj.CardGroup=CardCommonObj.CardGroup;
		  obj.CardGrade=CardCommonObj.CardGrade;
		  obj.CardNo =CardCommonObj.CardConsumptionCardID1;
		  obj.CardType=CardCommonObj.CardType;
		  obj.Cardsubtype=CardCommonObj.Cardsubtype;
		  obj.DayLimit=CardCommonObj.DefaultDayLimit;
		  obj.StartDate =CardCommonObj.StartDate;
		  obj.EndDate=CardCommonObj.EndDate;
		  obj.TimesLimit=CardCommonObj.TimesLimit;
		  //alert("setobjectcommonsector");
		  //alert(obj.TimesLimit);
	 
}
function setobjectspesector(obj,CardSpeObj)
{
  
  obj.SpecialSector=CardSpeObj.SpecialSector;
  obj.IdentityType =CardSpeObj.IdentityType;
  obj.LockFlag=CardSpeObj.LockFlag;
  obj.CardPassword=CardSpeObj.CardPassword;
  obj.IdentityNumber = CardSpeObj.IdentityNumber;
  	 
}
function setobjectwallet(obj,CardWallet1Obj)
{
  			    obj.Wallet1Money=CardWallet1Obj.Wallet1Money* 100;//：剩余金额
				obj.Wallet1TotalTransactions=CardWallet1Obj.Wallet1TotalTransactions;//：累计交易次数
				obj.Wallet1DayTotalSpending=CardWallet1Obj.Wallet1DayTotalSpending* 100;//：日累计消费额
				obj.Wallet1TransactionAmount=CardWallet1Obj.Wallet1TransactionAmount* 100;//：本次交易金额
				obj.Wallet1LastAmount=CardWallet1Obj.Wallet1LastAmount* 100;//：上次余额
				obj.Wallet1 = CardWallet1Obj.Wallet1;
			
  
}

function WriteCommonSector(obj,CardCommonObj)
{
//alert("WriteCommonSector");
  setobjectcommonsector(obj,CardCommonObj);
 
  if (!obj.WriteCommonSector()) 
    {
      return false;
    }
  
    
   return true;
}
function WriteSpeSector(obj,CardSpeObj)
{
setobjectspesector(obj,CardSpeObj);
//alert("WriteSpecialSector");
if (!obj.WriteSpecialSector()) 
   {
     return false;
        
	}

    return true;
}
function WriteActiveSector(obj,CardActiveObj)
{
	obj.ActiveSector=CardActiveObj.ActiveSector;
if  (!obj.WriteActiveSector())
   {
     return false;
        
	};
	return true;
}




function WriteWalletOneSector(obj,CardWallet1Obj)
{

setobjectwallet(obj,CardWallet1Obj);

	
		if (!obj.WriteWallet1())
  	{
				return false;
  	}

	return true;
}

function ReadWalletSector(obj,cardsector,CardWallet1Obj)
{

  
		obj.Wallet1  = cardsector;
	  
		if (!obj.ReadWallet1()) 
   	    {
	     
          return false;
		}
	getcardwalletobject(CardWallet1Obj,obj);
	return true;
}


function getcardwalletobject(CardWallet1,obj)
{
	
			CardWallet1.Wallet1Money=obj.Wallet1Money;//：剩余金额
			CardWallet1.Wallet1TotalTransactions=obj.Wallet1TotalTransactions;//：累计交易次数
			CardWallet1.Wallet1DayTotalSpending=obj.Wallet1DayTotalSpending;//：日累计消费额
			CardWallet1.Wallet1TransactionAmount=obj.Wallet1TransactionAmount;//：本次交易金额
			CardWallet1.Wallet1LastAmount=obj.Wallet1LastAmount;//：上次余额
				
	
		

}
function ReadCommonSector(HSopReader1,CardCommonObj,sector)
{
  
 
  //alert("ReadCommonSector");
  		HSopReader1.CommonSector=sector;
  		if (HSopReader1.ReadCommonSector())
  			{

		    CardCommonObj.CardGroup = HSopReader1.CardGroup;
			CardCommonObj.CardSector=sector;
			CardCommonObj.CardIdentityHolderID=HSopReader1.CardHolderID;
			CardCommonObj.CardIdentityEmployeeName=HSopReader1.CardHolderName;
			CardCommonObj.CardConsumptionCardID1=HSopReader1.CardNo;
			CardCommonObj.StartDate=HSopReader1.StartDate;
			 CardCommonObj.EndDate=HSopReader1.EndDate;
			 CardCommonObj.DefaultDayLimit=HSopReader1.DayLimit;
			 CardCommonObj.CardGrade=HSopReader1.CardGrade;
			 CardCommonObj.TimesLimit=HSopReader1.TimesLimit;
			 CardCommonObj.CardType=HSopReader1.CardType;
			 CardCommonObj.Cardsubtype=HSopReader1.cardsubtype ;
					
	  		}
	  		else
  			{
   				alert("读公共信息扇区失败");
  			}
  

}
function ReadSpecialSector(HSopReader1,CardSpeObj,sector)
{
	
  HSopReader1.SpecialSector=sector;
  
  if (HSopReader1.ReadSpecialSector())
  {
  		
    
	  	    CardSpeObj.SpecialSector=sector;
			CardSpeObj.CardPassword =HSopReader1.CardPassword;
			CardSpeObj.IdentityNumber =HSopReader1.IdentityNumber;
			CardSpeObj.IdentityType=HSopReader1.IdentityType;
			CardSpeObj.LockFlag=HSopReader1.LockFlag;
  }
  else
  {
    alert("读专用信息扇区失败！");
  }
}
//
function ExecuteCardOperationXml(xmlReq,strTimeid,strcardoperation,obj)
{
//alert("ExecuteCardOperationXml");
 var xmlDoc = xmlReq.responseXML;
  if (xmlDoc.selectSingleNode("//timeid").text==strTimeid)
      {
         if (xmlDoc.selectSingleNode("//Results").text=="False")
             {
                alert(xmlDoc.selectSingleNode("//ErrorMessage").text)
                  return false;
              }
       
      }
    var CardCommonObj = new Object();
	var CardSpeObj = new Object();
	var CardWallet1Obj=new Object();
	var CardWallet2Obj=new Object();
	var CardWallet3Obj=new Object();
	var CardWallet4Obj=new Object();
	var CardWallet1ObjReturn = new Object();
	var CardActiveObj = new Object();
	//alert(strcardoperation);
            
  if (strcardoperation==1 || strcardoperation==10  || strcardoperation==2 )
  {
 
  //公共扇区
 
  	         CardCommonObj.CardGroup = xmlDoc.selectSingleNode("//CardGroup").text;
			 CardCommonObj.CardSector=xmlDoc.selectSingleNode("//Commonsector").text;
			 CardCommonObj.CardIdentityHolderID=xmlDoc.selectSingleNode("//CardHolderID").text;
			 CardCommonObj.CardIdentityEmployeeName=xmlDoc.selectSingleNode("//CardHolderName").text;
			 CardCommonObj.CardConsumptionCardID1=xmlDoc.selectSingleNode("//CardNo").text;
			 CardCommonObj.StartDate=xmlDoc.selectSingleNode("//StartDate").text;
			 CardCommonObj.EndDate=xmlDoc.selectSingleNode("//EndDate").text;
			
			 CardCommonObj.DefaultDayLimit=xmlDoc.selectSingleNode("//DayLimit").text;
			 CardCommonObj.CardGrade=xmlDoc.selectSingleNode("//CardGrade").text;
			 CardCommonObj.CardType=xmlDoc.selectSingleNode("//CardType").text;
			 CardCommonObj.Cardsubtype=xmlDoc.selectSingleNode("//Cardsubtype").text;
			 CardCommonObj.TimesLimit=xmlDoc.selectSingleNode("//TimesLimit").text;
			  
/***专用信息扇区********/
			 CardSpeObj.SpecialSector=xmlDoc.selectSingleNode("//SpecialSector").text;
			 CardSpeObj.CardPassword =xmlDoc.selectSingleNode("//CardPassword").text;
			 CardSpeObj.IdentityNumber =xmlDoc.selectSingleNode("//IdentityNumber").text;
			 CardSpeObj.IdentityType=xmlDoc.selectSingleNode("//IdentityType").text;
			 CardSpeObj.LockFlag=xmlDoc.selectSingleNode("//LockFlag").text;
			 CardActiveObj.ActiveSector=xmlDoc.selectSingleNode("//ActiveSector").text;
			
/*钱包1*/
           CardWallet1Obj.Wallet1=xmlDoc.selectSingleNode("//Wallet1").text;
           CardWallet1Obj.Wallet1Money=xmlDoc.selectSingleNode("//Wallet1Money").text;
           CardWallet1Obj.Wallet1TotalTransactions=xmlDoc.selectSingleNode("//Wallet1TotalTransactions").text;
           CardWallet1Obj.Wallet1DayTotalSpending=xmlDoc.selectSingleNode("//Wallet1DayTotalSpending").text;
           CardWallet1Obj.Wallet1TransactionAmount=xmlDoc.selectSingleNode("//Wallet1TransactionAmount").text;
           CardWallet1Obj.Wallet1LastAmount=xmlDoc.selectSingleNode("//Wallet1LastAmount").text;
           
           /*钱包2*/
           CardWallet2Obj.Wallet1=xmlDoc.selectSingleNode("//Wallet2").text;
           CardWallet2Obj.Wallet1Money=xmlDoc.selectSingleNode("//Wallet2Money").text;
           CardWallet2Obj.Wallet1TotalTransactions=xmlDoc.selectSingleNode("//Wallet2TotalTransactions").text;
           CardWallet2Obj.Wallet1DayTotalSpending=xmlDoc.selectSingleNode("//Wallet2DayTotalSpending").text;
           CardWallet2Obj.Wallet1TransactionAmount=xmlDoc.selectSingleNode("//Wallet2TransactionAmount").text;
           CardWallet2Obj.Wallet1LastAmount=xmlDoc.selectSingleNode("//Wallet2LastAmount").text;
           /*钱包3*/
           CardWallet3Obj.Wallet1=xmlDoc.selectSingleNode("//Wallet3").text;
           CardWallet3Obj.Wallet1Money=xmlDoc.selectSingleNode("//Wallet3Money").text;
           CardWallet3Obj.Wallet1TotalTransactions=xmlDoc.selectSingleNode("//Wallet3TotalTransactions").text;
           CardWallet3Obj.Wallet1DayTotalSpending=xmlDoc.selectSingleNode("//Wallet3DayTotalSpending").text;
           CardWallet3Obj.Wallet1TransactionAmount=xmlDoc.selectSingleNode("//Wallet3TransactionAmount").text;
           CardWallet3Obj.Wallet1LastAmount=xmlDoc.selectSingleNode("//Wallet3LastAmount").text;
           /*钱包4*/
           CardWallet4Obj.Wallet1=xmlDoc.selectSingleNode("//Wallet4").text;
           CardWallet4Obj.Wallet1Money=xmlDoc.selectSingleNode("//Wallet4Money").text;
           CardWallet4Obj.Wallet1TotalTransactions=xmlDoc.selectSingleNode("//Wallet4TotalTransactions").text;
           CardWallet4Obj.Wallet1DayTotalSpending=xmlDoc.selectSingleNode("//Wallet4DayTotalSpending").text;
           CardWallet4Obj.Wallet1TransactionAmount=xmlDoc.selectSingleNode("//Wallet4TransactionAmount").text;
           CardWallet4Obj.Wallet1LastAmount=xmlDoc.selectSingleNode("//Wallet4LastAmount").text;
          // alert(CardCommonObj.CardConsumptionCardID1);  
   //////////////////////开始写卡操作

           if  (!WriteCommonSector(obj,CardCommonObj))
             {
                 alert("写公共扇区失败!");
                 return false;
             }
             
            //  alert("写公共扇区完成!");
//         alert("writing sp ");
//          CardSpeObj.IdentityType=xmlDoc.selectSingleNode("//IdentityType").text;
//			 CardSpeObj.LockFlag=xmlDoc.selectSingleNode("//LockFlag").text;
//			 CardActiveObj.ActiveSector=xmlDoc.selectSingleNode("//ActiveSector").text;
//          alert(CardSpeObj.SpecialSector);
//          alert(CardSpeObj.CardPassword);
//          alert(CardSpeObj.IdentityNumber );
//          alert(CardSpeObj.IdentityType );
//          alert(CardSpeObj.LockFlag );
//          alert(CardActiveObj.ActiveSector );
            if (!WriteSpeSector(obj,CardSpeObj))
             {
                alert("写专用扇区失败!");
                return false;
             }
             // alert("was!1");
               
            if ( !WriteActiveSector(obj,CardActiveObj))
             {
                     
                 alert("写活动扇区失败!");
                 return false;
                     
             }
             
                 // alert("was!");
           if  (CardWallet1Obj.Wallet1 > 0)
             {
           
                 if (!WriteWalletOneSector(obj,CardWallet1Obj))
                      {
                            alert("写钱包1失败!");
                            return false;
                       }
                       //alert("写钱包1!");
             }
             
       
            if  (CardWallet2Obj.Wallet1 > 0)
              {
                  if (!WriteWalletOneSector(obj,CardWallet2Obj))
                      {
                            alert("写钱包2失败!");
                            return false;
                       }
                      // alert("写钱包2!");
              }
           
            if  (CardWallet3Obj.Wallet1 > 0)
              {
                  if (!WriteWalletOneSector(obj,CardWallet3Obj))
                      {
                            alert("写钱包3失败!");
                            return false;
                      }
                    //  alert("写钱包3!");
              }
            if  (CardWallet4Obj.Wallet1 > 0)
              {
                  if (!WriteWalletOneSector(obj,CardWallet4Obj))
                     {
                            alert("写钱包4失败!");
                            return false;
                    } 
                    //alert("写钱包4!");
             }
       return true;
  }
}

function ReadDirectorySector()
{
  if (HSopReader1.ReadDirectorySector())
  {
    //alert(HSopReader1.CommonSector);
    alert("公共信息扇区：" + HSopReader1.CommonSector.toString() + ",专用信息扇区：" + HSopReader1.SpecialSector.toString() + ",活动信息扇区：" + HSopReader1.ActiveSector.toString() + ",钱包1：" + HSopReader1.Wallet1.toString() + ",钱包2：" + HSopReader1.Wallet2.toString());
  }
  else
  {
    alert("读目录扇区失败！");
  }
}