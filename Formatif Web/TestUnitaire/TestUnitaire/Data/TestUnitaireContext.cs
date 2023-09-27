using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using TestUnitaire.Models;

namespace TestUnitaire.Data
{
    public class TestUnitaireContext : DbContext
    {
        public TestUnitaireContext (DbContextOptions<TestUnitaireContext> options)
            : base(options)
        {
        }

        public DbSet<TestUnitaire.Models.Bill> Bill { get; set; } = default!;
    }
}
