using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Shop.Models
{
    public class Conturi
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }
        public string Server { get; set; }
        public string Nume { get; set; }
        public int Level { get; set; }
        public int Bani { get; set; }
        public int Ore { get; set; }
        public int Avertismente { get; set; }
        public string Factiune { get; set; }
    }
}
