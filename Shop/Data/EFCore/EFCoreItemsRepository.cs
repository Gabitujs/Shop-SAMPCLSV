using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using Microsoft.AspNetCore.Hosting;
using Shop.Models;

namespace Shop.Data.EFCore
{
    public class EFCoreItemsRepository
    {
        // Database Context
        public ApplicationDbContext context;
        // Configurations
        IConfiguration configuration;
        // Current Enviroment
        internal IHostingEnvironment _env;

        #region Models
        private readonly Conturi conturi;
        #endregion

        // Constructor
        public EFCoreItemsRepository(IConfiguration configuration, ApplicationDbContext context, IHostingEnvironment _env)
        {
            this.configuration = configuration;
            this.context = context;
            this._env = _env;
        }

        // Requires rework, because atm there is nothing to tell the current state.
        public List<Conturi> GetAllAccounts()
        {
            var accounts = context.Conturi.ToList();
            return accounts;
        }
   
        public void AddAccounts(Conturi conturi)
        {

           
            context.Add(conturi);

            context.SaveChanges();
        }

    }
}
