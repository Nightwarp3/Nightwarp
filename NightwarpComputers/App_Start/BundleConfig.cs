using System.Web;
using System.Web.Optimization;

namespace NightwarpComputers
{
    public class BundleConfig
    {
        // For more information on bundling, visit https://go.microsoft.com/fwlink/?LinkId=301862
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new StyleBundle("~/Content/cssOld").Include("~/Content/oldSite.css"));

            bundles.Add(new StyleBundle("~/Content/css").Include("~/Content/Site.css"));

            bundles.Add(new ScriptBundle("~/bundles/NightwarpComputers")
                .IncludeDirectory("~/Scripts/Controllers", "*.js")
                .Include("~/Scripts/NightwarpComputers.js"));
        }
    }
}
