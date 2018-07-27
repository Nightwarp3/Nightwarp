using NightwarpComputers.Models;
using System.Data.Entity;
using System.Data.Entity.ModelConfiguration.Conventions;

namespace NightwarpComputers.DataAccess
{
    public class OrderContext : DbContext
    {
        public OrderContext() : base("OrderContext")
        {
        }

        public DbSet<Order> Orders { get; set; }

        protected override void OnModelCreating(DbModelBuilder modelBuilder)
        {
            modelBuilder.Conventions.Remove<PluralizingTableNameConvention>();
        }
    }
}