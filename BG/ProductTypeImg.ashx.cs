namespace MaoChong.Web
{
    using Maochong.BLL;
    using Maochong.Model;
    using System;
    using System.Web;
    using System.Web.SessionState;

    public class ProductTypeImg : IHttpHandler, IRequiresSessionState
    {
        public byte[] GetImgByte(int productTypeID)
        {
            byte[] buffer = null;
            ProductTypeModel model = new ProductTypeBLL().GetModel(productTypeID);
            if (model == null)
            {
                return buffer;
            }
            return model.MinImage;
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

