using Maochong.BLL;
using Maochong.Model;
using System;
using System.Collections.Generic;
using System.Runtime.InteropServices;
using System.Web.UI;
using System.Web.UI.WebControls;
using Wuqi.Webdiyer;
namespace MaoChong.Web
{
    public partial class Query : System.Web.UI.Page
    {

        protected void AspNetPager1_PageChanged(object sender, EventArgs e)
        {
            this.BandQuery(this.AspNetPager1.CurrentPageIndex);
        }

        public void BandQuery(int pageIndex)
        {
            int totalRowNum = 0;
            string sqlWhere = "";
            if (this.GetQueryWhere(out sqlWhere))
            {
                List<OrderModel> list = new OrderBLL().GetModelListByPage(pageIndex, this.AspNetPager1.PageSize, sqlWhere, string.Empty, out totalRowNum);
                //this.AspNetPager1.set_CurrentPageIndex(pageIndex);
                this.AspNetPager1.CurrentPageIndex = pageIndex;
                this.AspNetPager1.RecordCount=totalRowNum;
                this.Repeater_List.DataSource = list;
                this.Repeater_List.DataBind();
            }
        }

        public void BandState()
        {
            List<OrderStateModel> modelList = new OrderStateBLL().GetModelList();
            this.ddl_state.DataSource = modelList;
            this.ddl_state.DataValueField = "OrderState";
            this.ddl_state.DataTextField = "OrderState";
            this.ddl_state.DataBind();
            this.ddl_state.Items.Insert(0, new ListItem("全部状态", ""));
        }

        protected void btn_Query_Click(object sender, EventArgs e)
        {
            this.BandQuery(1);
        }

        private bool GetQueryWhere(out string sqlWhere)
        {
            sqlWhere = "";
            string str = this.txt_startDate.Text.Trim().Replace("开始日期", "");
            string str2 = this.txt_endDate.Text.Trim().Replace("结束日期", "");
            DateTime date = DateTime.Now.Date;
            DateTime result = DateTime.Now.Date;
            if (!string.IsNullOrEmpty(str))
            {
                if (!DateTime.TryParse(str, out date))
                {
                    base.ClientScript.RegisterStartupScript(base.GetType(), "", "<script>alert('开始日期格式不正确!');</script>");
                    return false;
                }
                date = date.Date;
            }
            if (!string.IsNullOrEmpty(str2))
            {
                if (!DateTime.TryParse(str2, out result))
                {
                    base.ClientScript.RegisterStartupScript(base.GetType(), "", "<script>alert('结束日期格式不正确!');</script>");
                    return false;
                }
                result = result.Date;
            }
            UserModel loginUser = this.Master.GetLoginUser();
            sqlWhere = " and C3_404476220140='" + loginUser.Mobile + "' ";
            if ((this.ddl_state.SelectedValue != "") && (this.ddl_state.SelectedValue != "0"))
            {
                sqlWhere = sqlWhere + " and C3_409922754171='" + this.ddl_state.SelectedValue + "' ";
            }
            if (!string.IsNullOrEmpty(str))
            {
                sqlWhere = sqlWhere + " and C3_404475804593>='" + date.ToShortDateString() + "' ";
            }
            if (!string.IsNullOrEmpty(str2))
            {
                sqlWhere = sqlWhere + " and C3_404475804593<'" + result.AddDays(1.0).ToShortDateString() + "' ";
            }
            if (loginUser.Login2type == "bg")
            {
                // C3_505405981411 办公专用
                sqlWhere = sqlWhere + "and isnull(C3_505405981411,'')='Y'";
            }
            else
            {
                sqlWhere = sqlWhere + "and isnull(C3_505405981411,'')<>'Y'";
            }
           
            return true;
        }

        protected void Ibtn_Delete_Click(object sender, EventArgs e)
        {
            ImageButton button = sender as ImageButton;
            long id = long.Parse(button.CommandArgument);
            OrderBLL rbll = new OrderBLL();
            if (rbll.DeleteRow(id))
            {
                if ((this.Repeater_List.Items.Count <= 1) && (this.AspNetPager1.CurrentPageIndex > 1))
                {
                    this.BandQuery(this.AspNetPager1.CurrentPageIndex - 1);
                }
                else
                {
                    this.BandQuery(this.AspNetPager1.CurrentPageIndex);
                }
                base.ClientScript.RegisterStartupScript(base.GetType(), "", "<script>alert('删除成功!');</script>");
            }
            else
            {
                base.ClientScript.RegisterStartupScript(base.GetType(), "", "<script>alert('删除失败!');</script>");
            }
        }

        protected void Page_Load(object sender, EventArgs e)
        {
            this.Master.CheckLogin();
            if (!base.IsPostBack)
            {
                this.BandState();
            }
        }

        public bool SetDelete(object orderState)
        {
            bool flag = false;
            if ((orderState != null) && (orderState != DBNull.Value))
            {
                if (string.IsNullOrEmpty(orderState.ToString()))
                {
                    return flag;
                }
                if (orderState.ToString().Contains("未确认"))
                {
                    flag = true;
                }
            }
            return flag;
        }
    }
}