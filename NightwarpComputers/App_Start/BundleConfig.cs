using System.Web;
using System.Web.Optimization;

namespace NightwarpComputers
{
    public class BundleConfig
    {
        // For more information on bundling, visit https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new StyleBundle("~/CSS")
                .IncludeDirectory("~/Content/Css", "*.css")
                .IncludeDirectory("~/Content/Bootstrap", "*.css")
                .IncludeDirectory("~/Content/Scss", "*.scss"));

            bundles.Add(new StyleBundle("~/Fonts")
                .Include("~/fonts/font-awesome/css/font-awesome.min.css")
                .Include("~/Content/SLIcons/css/simple-line-icons.css"));

            bundles.Add(new ScriptBundle("~/JS")
                .IncludeDirectory("~/Scripts/Bootstrap", "*.js")
                .IncludeDirectory("~/Scripts/JQuery", "*.js"));

            bundles.Add(new ScriptBundle("~/NCAngular")
                .IncludeDirectory("~/Scripts/Controllers", "*.js")
                .Include("~/Scripts/app.js"));
        }
    }
}
