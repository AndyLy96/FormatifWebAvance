using Microsoft.VisualStudio.TestTools.UnitTesting;
using TestUnitaire.Service;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using TestUnitaire.Data;
using Microsoft.EntityFrameworkCore.InMemory;
using TestUnitaire.Models;
using Microsoft.AspNetCore.Mvc;

namespace TestUnitaire.Service.Tests
{
    [TestClass()]
    public class BillServiceTests
    {

        DbContextOptions<TestUnitaireContext> options;
        public BillServiceTests()
        {
            options = new DbContextOptionsBuilder<TestUnitaireContext>()
                .UseInMemoryDatabase(databaseName: "BillService")
                .Options;
        }
        //[TestInitialize]
        //public void Init()
        //{
        //    // TODO avoir la durée de vie d'un context la plus petite possible
        //    using TestUnitaireContext db = new TestUnitaireContext(options);
        //    // TODO on ajoute des données de tests
        //    db.AddRange(SeedTests.SeedTestBills());
        //    db.SaveChanges();
        //}
        [TestCleanup]
        public void Dispose()
        {
            //TODO on efface les données de tests pour remettre la BD dans son état initial
            using TestUnitaireContext db = new TestUnitaireContext(options);
            db.Bill.RemoveRange(db.Bill);
            db.SaveChanges();
        }
        [TestMethod()]
        public void CreateBillTest()
        {
            using TestUnitaireContext db = new TestUnitaireContext(options);
            BillService service = new BillService(db);
            Item i = new Item()
            {
                Id = 1,
                Name = "Test",
                Price = 1,
            };

            List<Item> itemList = new List<Item>
            {
                i
            };

            service.CreateBill("Test", itemList);

            Assert.AreEqual(1, itemList.Count);

        }

        [TestMethod()]
        public void CreateBillTestNameEmpty()
        {
            using TestUnitaireContext db = new TestUnitaireContext(options);
            BillService service = new BillService(db);
            Item i = new Item()
            {
                Id = 1,
                Name = "Test",
                Price = 1,
            };

            List<Item> itemList = new List<Item>
            {
                i
            };

            

            var ex = Assert.ThrowsException<Exception>(() => service.CreateBill("", itemList));


            Assert.AreEqual("You need a name to create a bill", ex.Message);


        }

        [TestMethod()]
        public void CreateBillTestNameNull()
        {
            using TestUnitaireContext db = new TestUnitaireContext(options);
            BillService service = new BillService(db);
            Item i = new Item()
            {
                Id = 1,
                Name = "Test",
                Price = 1,
            };

            List<Item> itemList = new List<Item>
            {
                i
            };



            var ex = Assert.ThrowsException<Exception>(() => service.CreateBill(null, itemList));


            Assert.AreEqual("You need a name to create a bill", ex.Message);


        }


        [TestMethod()]
        public void CreateBillTestNoItem()
        {
            using TestUnitaireContext db = new TestUnitaireContext(options);
            BillService service = new BillService(db);
            Item i = new Item()
            {
                Id = 1,
                Name = "Test",
                Price = 1,
            };

            List<Item> itemList = new List<Item>();







            Assert.AreEqual(service.CreateBill("Test", itemList), null);


        }

        [TestMethod()]
        public void CreateBillTestPriceSmall()
        {
            using TestUnitaireContext db = new TestUnitaireContext(options);
            BillService service = new BillService(db);
            Item i = new Item()
            {
                Id = 1,
                Name = "Test",
                Price = -1,
            };

            List<Item> itemList = new List<Item>
            {
                i
            };



            var ex = Assert.ThrowsException<AreYouInsaneException>(() => service.CreateBill("Bill", itemList));


            Assert.AreEqual("Not paying for you to take something!", ex.Message);


        }

        [TestMethod()]
        public void CreateBillTestPriceZero()
        {
            using TestUnitaireContext db = new TestUnitaireContext(options);
            BillService service = new BillService(db);
            Item i = new Item()
            {
                Id = 1,
                Name = "Test",
                Price = 0,
            };

            List<Item> itemList = new List<Item>
            {
                i
            };



            var ex = Assert.ThrowsException<AreYouInsaneException>(() => service.CreateBill("Bill", itemList));


            Assert.AreEqual("Not giving free stuff either!!", ex.Message);


        }
    }
}