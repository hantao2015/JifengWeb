namespace MaoChong.Web.CheckCode
{
    using System;
    using System.Drawing;
    using System.Drawing.Drawing2D;
    using System.Drawing.Imaging;
    using System.IO;
    using System.Web.UI;
    using System.Web.UI.HtmlControls;
    using System.Web.UI.WebControls;

    public partial class CodeImage : Page
    {
      

        public string CreateCode(int codeLength)
        {
            string[] strArray = "2,3,4,5,6,7,8,9,a,b,c,d,e,f,g,h,j,k,m,n,o,p,q,r,s,t,u,v,w,x,y,z".Split(new char[] { ',' });
            string str2 = "";
            Random random = new Random();
            for (int i = 0; i < codeLength; i++)
            {
                str2 = str2 + strArray[random.Next(0, strArray.Length)];
            }
            return str2;
        }

        public void CreateImages(string code)
        {
            int num;
            Bitmap image = new Bitmap(60, 0x1a);
            Graphics graphics = Graphics.FromImage(image);
            WebColorConverter converter = new WebColorConverter();
            graphics.Clear((Color)converter.ConvertFromString("#eeeeee"));
            Random random = new Random();
            for (num = 0; num < 12; num++)
            {
                int num2 = random.Next(image.Width);
                int num3 = random.Next(image.Width);
                int num4 = random.Next(image.Height);
                int num5 = random.Next(image.Height);
                graphics.DrawLine(new Pen(Color.LightGray), num2, num4, num3, num5);
            }
            Font font = new Font("Arial", 15f, FontStyle.Italic | FontStyle.Bold);
            LinearGradientBrush brush = new LinearGradientBrush(new Rectangle(0, 0, image.Width, image.Height), Color.Blue, Color.Gray, 1.2f, true);
            graphics.DrawString(code, font, brush, (float)0f, (float)0f);
            for (num = 0; num < 10; num++)
            {
                int x = random.Next(image.Width);
                int y = random.Next(image.Height);
                image.SetPixel(x, y, Color.White);
            }
            graphics.DrawRectangle(new Pen(Color.Silver), 0, 0, image.Width - 1, image.Height - 1);
            MemoryStream stream = new MemoryStream();
            image.Save(stream, ImageFormat.Gif);
            base.Response.ClearContent();
            base.Response.ContentType = "image/Gif";
            base.Response.BinaryWrite(stream.ToArray());
            graphics.Dispose();
            image.Dispose();
        }

        protected void Page_Load(object sender, EventArgs e)
        {
            string code = this.CreateCode(4);
            this.Session["CheckCode"] = code;
            this.CreateImages(code);
        }
    }
}

