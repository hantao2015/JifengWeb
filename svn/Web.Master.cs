using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.UI;
using System.Web.UI.WebControls;
using Maochong.BLL;
using Maochong.Lib;
using Maochong.Model;
 
using System.Runtime.InteropServices;
using System.Text;
using System.Text.RegularExpressions;
 
using System.Web.UI.HtmlControls;
 

namespace Maochong.Web
{
    public   partial class Web : MasterPage
    {
        private List<ItemModel> _allItemList = null;
        private List<ItemModel> _allMenuList = null;
        //protected ContentPlaceHolder ContentPlaceHolder1;
        //protected HtmlForm form1;
        //protected ContentPlaceHolder head;
        private ItemBLL itemBll = new ItemBLL();
        protected Literal Literal_userName;
        protected PlaceHolder PlaceHolder_login;
        protected PlaceHolder PlaceHolder_logout;

        public void CheckLogin()
        {
            if (base.Session["webUser"] == null)
            {
                base.Response.Redirect("~/Login.aspx");
            }
        }

        public string GetCurrentNavigation(List<ItemModel> _allMenuList, int itemID)
        {
            // <> c__DisplayClass18 class2;
            //List<ItemModel> list = Enumerable.Where<ItemModel>(_allMenuList, new Func<ItemModel, bool>(class2, (IntPtr)this.< GetCurrentNavigation > b__16)).ToList<ItemModel>();
            //if ((list == null) || (list.Count == 0))
            //{
            //    return "";
            //}
            //ItemModel currentModel = list[0];
            //List<ItemModel> list2 = Enumerable.Where<ItemModel>(_allMenuList, new Func<ItemModel, bool>(class2, (IntPtr)this.< GetCurrentNavigation > b__17)).ToList<ItemModel>();
            //if (string.IsNullOrEmpty(currentModel.Url))
            //{
            //    if ((list2 == null) || (list2.Count == 0))
            //    {
            //        return ("<a href='" + this.GetMenuLink(currentModel) + "'>" + currentModel.Name + " &gt;</a>");
            //    }
            //    return ("<a href='" + this.GetMenuLink(list2[0]) + "'>" + currentModel.Name + " &gt;</a>");
            //}
            //if (currentModel.Url == "#")
            //{
            //    if ((list2 == null) || (list2.Count == 0))
            //    {
            //        return ("<a href='" + this.GetMenuLink(currentModel) + "'>" + currentModel.Name + " &gt;</a>");
            //    }
            //    return ("<a href='" + this.GetMenuLink(list2[0]) + "'>" + currentModel.Name + " &gt;</a>");
            //}
            //return ("<a href='" + this.GetMenuLink(currentModel) + "'>" + currentModel.Name + " &gt;</a>");
            return "";
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

        public string LeftMenuHtml(int itemFID, int itemID)
        {
            //int num;
            //ItemModel model2;
            //Func<ItemModel, bool> func = null;
            //Func<ItemModel, bool> func2 = null;
            //Func<ItemModel, bool> func3 = null;
            //Func<ItemModel, bool> func4 = null;
            //<> c__DisplayClasse classe;
            //StringBuilder builder = new StringBuilder("");
            //List<ItemModel> allMenuList = this.AllMenuList;
            //if (itemFID == 0)
            //{
            //    if (func == null)
            //    {
            //        func = new Func<ItemModel, bool>(classe, (IntPtr)this.< LeftMenuHtml > b__6);
            //    }
            //    ItemModel model = Enumerable.Where<ItemModel>(this.AllMenuList, func).ToList<ItemModel>()[0];
            //    if (func2 == null)
            //    {
            //        func2 = new Func<ItemModel, bool>(classe, (IntPtr)this.< LeftMenuHtml > b__7);
            //    }
            //    List<ItemModel> list2 = Enumerable.Where<ItemModel>(this.AllMenuList, func2).ToList<ItemModel>();
            //    builder.AppendLine("<span>" + model.Alias + "</span>");
            //    builder.AppendLine("<dt>" + model.Name + "</dt>");
            //    if ((list2 != null) && (list2.Count > 0))
            //    {
            //        for (num = 0; num < list2.Count; num++)
            //        {
            //            model2 = list2[num];
            //            if (string.IsNullOrEmpty(model.Url))
            //            {
            //                if (num == 0)
            //                {
            //                    builder.AppendLine("<dd class='zuo_nav'>");
            //                }
            //                else
            //                {
            //                    builder.AppendLine("<dd>");
            //                }
            //            }
            //            else if (model.Url == "#")
            //            {
            //                if (num == 0)
            //                {
            //                    builder.AppendLine("<dd class='zuo_nav'>");
            //                }
            //                else
            //                {
            //                    builder.AppendLine("<dd>");
            //                }
            //            }
            //            else
            //            {
            //                builder.AppendLine("<dd>");
            //            }
            //            builder.AppendLine("<a href='" + this.GetMenuLink(model2) + "'>");
            //            builder.AppendLine(model2.Name);
            //            builder.AppendLine("</a>");
            //            builder.AppendLine("</dd>");
            //        }
            //    }
            //}
            //else
            //{
            //    if (func3 == null)
            //    {
            //        func3 = new Func<ItemModel, bool>(classe, (IntPtr)this.< LeftMenuHtml > b__8);
            //    }
            //    ItemModel model3 = Enumerable.Where<ItemModel>(this.AllMenuList, func3).ToList<ItemModel>()[0];
            //    if (func4 == null)
            //    {
            //        func4 = new Func<ItemModel, bool>(classe, (IntPtr)this.< LeftMenuHtml > b__9);
            //    }
            //    List<ItemModel> list3 = Enumerable.Where<ItemModel>(this.AllMenuList, func4).ToList<ItemModel>();
            //    builder.AppendLine("<span>" + model3.Alias + "</span>");
            //    builder.AppendLine("<dt>" + model3.Name + "</dt>");
            //    if ((list3 != null) && (list3.Count > 0))
            //    {
            //        for (num = 0; num < list3.Count; num++)
            //        {
            //            model2 = list3[num];
            //            if (model2.ID == itemID)
            //            {
            //                builder.AppendLine("<dd class='zuo_nav'>");
            //            }
            //            else
            //            {
            //                builder.AppendLine("<dd>");
            //            }
            //            builder.AppendLine("<a href='" + this.GetMenuLink(model2) + "'>");
            //            builder.AppendLine(model2.Name);
            //            builder.AppendLine("</a>");
            //            builder.AppendLine("</dd>");
            //        }
            //    }
            //}
            //  return builder.ToString();
            return "";
        }

        public string NavigationHtml(int itemID)
        {
            //Func<ItemModel, bool> func = null;
            //<> c__DisplayClass14 class2;
            //StringBuilder builder = new StringBuilder();
            //List<ItemModel> allMenuList = this.AllMenuList;
            //List<string> list2 = new List<string>();
            //List<ItemModel> currentList = Enumerable.Where<ItemModel>(allMenuList, new Func<ItemModel, bool>(class2, (IntPtr)this.< NavigationHtml > b__10)).ToList<ItemModel>();
            //if ((currentList == null) || (currentList.Count == 0))
            //{
            //    return "";
            //}
            //list2.Add("<span>" + currentList[0].Name + "</span>");
            //for (List<ItemModel> farthModel = Enumerable.Where<ItemModel>(allMenuList, new Func<ItemModel, bool>(class2, (IntPtr)this.< NavigationHtml > b__11)).ToList<ItemModel>(); (farthModel != null) && (farthModel.Count > 0); farthModel = Enumerable.Where<ItemModel>(allMenuList, func).ToList<ItemModel>())
            //{
            //    list2.Add(this.GetCurrentNavigation(allMenuList, farthModel[0].ID));
            //    if (func == null)
            //    {
            //        func = new Func<ItemModel, bool>(class2, (IntPtr)this.< NavigationHtml > b__12);
            //    }
            //}
            //list2.Add("<a href=\"Index.aspx\">首页 &gt;</a>");
            //list2.Reverse();
            //foreach (string str in list2)
            //{
            //    builder.AppendLine(str);
            //}
            //return builder.ToString();
            return "";
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

        public string TopMenuHtml()
        {
            //StringBuilder builder = new StringBuilder("");
            //List<ItemModel> allMenuList = this.AllMenuList;
            //if (CS$<> 9__CachedAnonymousMethodDelegate2 == null)
            //{
            //    CS$<> 9__CachedAnonymousMethodDelegate2 = new Func<ItemModel, bool>(null, (IntPtr) < TopMenuHtml > b__0);
            //}
            //List<ItemModel> list2 = Enumerable.Where<ItemModel>(allMenuList, CS$<> 9__CachedAnonymousMethodDelegate2).ToList<ItemModel>();
            //using (List<ItemModel>.Enumerator enumerator = list2.GetEnumerator())
            //{
            //    Func<ItemModel, bool> func = null;
            //    ItemModel tempModel;
            //    while (enumerator.MoveNext())
            //    {
            //        tempModel = enumerator.Current;
            //        builder.AppendLine("<li>");
            //        if (func == null)
            //        {
            //            <> c__DisplayClass4 class2;
            //            func = new Func<ItemModel, bool>(class2, (IntPtr)this.< TopMenuHtml > b__1);
            //        }
            //        List<ItemModel> list3 = Enumerable.Where<ItemModel>(allMenuList, func).ToList<ItemModel>();
            //        if ((list3 == null) || (list3.Count == 0))
            //        {
            //            builder.AppendLine("<a href='" + this.GetMenuLink(tempModel) + "'>");
            //            if (tempModel.Name.Contains("美人学社"))
            //            {
            //                builder.AppendLine("<span>" + tempModel.Name + "<span>");
            //            }
            //            else
            //            {
            //                builder.AppendLine(tempModel.Name);
            //            }
            //            builder.AppendLine("</a>");
            //        }
            //        else
            //        {
            //            if (string.IsNullOrEmpty(tempModel.Url) || (tempModel.Url == "#"))
            //            {
            //                builder.AppendLine("<a href='" + this.GetMenuLink(list3[0]) + "'>");
            //            }
            //            else
            //            {
            //                builder.AppendLine("<a href='" + this.GetMenuLink(tempModel) + "'>");
            //            }
            //            if (tempModel.Name.Contains("美人学社"))
            //            {
            //                builder.AppendLine("<span>" + tempModel.Name + "<span>");
            //            }
            //            else
            //            {
            //                builder.AppendLine(tempModel.Name);
            //            }
            //            builder.AppendLine("</a>");
            //            builder.AppendLine("<dl>");
            //            foreach (ItemModel model in list3)
            //            {
            //                builder.AppendLine("<a href='" + this.GetMenuLink(model) + "'>");
            //                builder.AppendLine(model.Name);
            //                builder.AppendLine("</a>");
            //            }
            //            builder.AppendLine("</dl>");
            //        }
            //        builder.AppendLine("</li>");
            //    }
            //}
            //return builder.ToString();
            return "";
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


