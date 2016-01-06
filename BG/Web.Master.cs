using System;
using Maochong.BLL;
using Maochong.Lib;
using Maochong.Model;
 
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;
using System.Text;
using System.Text.RegularExpressions;
using System.Web.UI;
using System.Web.UI.HtmlControls;
using System.Web.UI.WebControls;

namespace MaoChong.Web
{
    public partial class Web : System.Web.UI.MasterPage
    {

        private List<ItemModel> _allItemList = null;
        private List<ItemModel> _allMenuList = null;
     
      
        private ItemBLL itemBll = new ItemBLL();
      

        public void CheckLogin()
        {
            if (base.Session["webUser"] == null)
            {
                base.Response.Redirect("~/Login.aspx");
            }
        }

    

        public string GetLenghStr(object input, int strLength, string emptyStr)
        {
            if (input == null)
            {
                return "";
            }
            return StringHelp.GetSubString(input.ToString(), strLength, emptyStr);
        }

        public UserModel GetLoginUser()
        {
            UserModel model = null;
            if (base.Session["webUser"] == null)
            {
                base.Response.Redirect("~/Login.aspx");
                return model;
            }
            return (base.Session["webUser"] as UserModel);
        }

        public string GetMenuLink(ItemModel _itemModel)
        {
            string url = _itemModel.Url;
            if (string.IsNullOrEmpty(url))
            {
                return string.Concat(new object[] { _itemModel.ShowPage, "?ItemFID=", _itemModel.Fid, "&ItemID=", _itemModel.ID });
            }
            if (url == "#")
            {
                return string.Concat(new object[] { _itemModel.ShowPage, "?ItemFID=", _itemModel.Fid, "&ItemID=", _itemModel.ID });
            }
            string pattern = @"^[a-zA-z]+://(\w+(-\w+)*)(\.(\w+(-\w+)*))*(\?\S*)?$";
            Regex regex = new Regex(pattern);
            if (regex.IsMatch(_itemModel.Url))
            {
                return _itemModel.Url;
            }
            return string.Concat(new object[] { _itemModel.Url, "?ItemFID=", _itemModel.Fid, "&ItemID=", _itemModel.ID });
        }

     
   
        public string ObjectToShortDate(object input, string nullOrEmptyInfo)
        {
            if (string.IsNullOrEmpty(nullOrEmptyInfo))
            {
                nullOrEmptyInfo = "";
            }
            if ((input == null) || (input == DBNull.Value))
            {
                return nullOrEmptyInfo;
            }
            if (input.ToString() == "")
            {
                return nullOrEmptyInfo;
            }
            DateTime now = DateTime.Now;
            if (DateTime.TryParse(input.ToString(), out now))
            {
                return now.ToShortDateString();
            }
            return "不能转换为时间";
        }

        protected void Page_Load(object sender, EventArgs e)
        {
            if (!base.IsPostBack)
            {
                if (base.Session["webUser"] == null)
                {
                    this.PlaceHolder_login.Visible = true;
                    this.PlaceHolder_logout.Visible = false;
                }
                else
                {
                    this.PlaceHolder_login.Visible = false;
                    this.PlaceHolder_logout.Visible = true;
                    UserModel model = base.Session["webUser"] as UserModel;
                    this.Literal_userName.Text = "欢迎您，";
                    if (!string.IsNullOrEmpty(model.Name))
                    {
                        this.Literal_userName.Text = this.Literal_userName.Text + model.Name;
                    }
                    else if (!string.IsNullOrEmpty(model.Nick))
                    {
                        this.Literal_userName.Text = this.Literal_userName.Text + model.Nick;
                    }
                    else
                    {
                        this.Literal_userName.Text = this.Literal_userName.Text + model.Mobile;
                    }
                    this.Literal_userName.Text = this.Literal_userName.Text + " 会员.";
                }
            }
        }

        public bool QueryStringIntTryParse(string name, out int output)
        {
            output = -1;
            if (string.IsNullOrEmpty(base.Request.QueryString[name]))
            {
                return false;
            }
            return int.TryParse(base.Request.QueryString[name].ToString(), out output);
        }

        public bool QueryStringIsInt(string name)
        {
            int result = -1;
            if (string.IsNullOrEmpty(base.Request.QueryString[name]))
            {
                return false;
            }
            return int.TryParse(base.Request.QueryString[name].ToString(), out result);
        }

        public bool QueryStringIsString(string name)
        {
            if (string.IsNullOrEmpty(base.Request.QueryString[name]))
            {
                return false;
            }
            return true;
        }

      

        public string TopMenuHtml(int itemFID, int itemID)
        {
            StringBuilder builder = new StringBuilder("");
            return builder.ToString();
        }

        public UserModel UpdateLoginUser()
        {
            UserModel model = null;
            if (base.Session["webUser"] == null)
            {
                base.Response.Redirect("~/Login.aspx");
                return model;
            }
            model = base.Session["webUser"] as UserModel;
            UserModel modelByMobile = null;
            modelByMobile = new UserBLL().GetModelByMobile(model.Mobile);
            modelByMobile.Login2type = model.Login2type;
            base.Session["webUser"] = modelByMobile;
            return model;
        }

        public List<ItemModel> AllItemList
        {
            get
            {
                if (this._allItemList == null)
                {
                    this._allItemList = this.itemBll.GetAllItem();
                }
                return this._allItemList;
            }
            set
            {
                this._allItemList = value;
            }
        }

        public List<ItemModel> AllMenuList
        {
            get
            {
                if (this._allMenuList == null)
                {
                    this._allMenuList = this.itemBll.GetAllMenu();
                }
                return this._allMenuList;
            }
            set
            {
                this._allMenuList = value;
            }
        }
    }
}
