using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Security;
using System.Web.SessionState;
using HS.Platform;
using hsopPlatform;

namespace Maochong.Web
{
    public class Global : System.Web.HttpApplication
    {

        protected void Application_Start(object sender, EventArgs e)
        {
            try
            {
                HsopCmsEnvironment.InitForWebApplication(base.Server.MapPath("/"), "svn", "svn.log", @"\cmsdoc\log\", true);
            }
            catch (Exception exception)
            {
                SLog.Fatal("系统启动时在Application_Start()中异常出错", ref exception, true);
            }
        }

        protected void Session_Start(object sender, EventArgs e)
        {

        }

        protected void Application_BeginRequest(object sender, EventArgs e)
        {

        }

        protected void Application_AuthenticateRequest(object sender, EventArgs e)
        {

        }

        protected void Application_Error(object sender, EventArgs e)
        {

        }

        protected void Session_End(object sender, EventArgs e)
        {

        }

        protected void Application_End(object sender, EventArgs e)
        {

        }
    }
}