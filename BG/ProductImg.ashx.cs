using Maochong.BLL;
using Maochong.Model;
using System;
using System.Web;
using System.Web.SessionState;
namespace MaoChong.Web
{
    /// <summary>
    /// ProductImg 的摘要说明
    /// </summary>
    public class ProductImg : IHttpHandler, IRequiresSessionState
    {

        public byte[] GetImgByte(int productID)
        {
            byte[] buffer = null;
            ProductModel model = new ProductBLL().GetModel(productID);
            if (model == null)
            {
                return buffer;
            }
            return model.Image;
        }

        public void ProcessRequest(HttpContext context)
        {
            string str = HttpContext.Current.Request.Params["ID"];
            if (!string.IsNullOrEmpty(str))
            {
                int result = 0;
                if (int.TryParse(str, out result))
                {
                    byte[] imgByte = this.GetImgByte(result);
                    this.ShowImg(context, imgByte);
                }
            }
        }

        public void ShowImg(HttpContext context, byte[] imgByte)
        {
            context.Response.ContentType = "image/Jpeg";
            context.Response.BinaryWrite(imgByte);
        }

        public bool IsReusable
        {
            get
            {
                return false;
            }
        }
    }
}