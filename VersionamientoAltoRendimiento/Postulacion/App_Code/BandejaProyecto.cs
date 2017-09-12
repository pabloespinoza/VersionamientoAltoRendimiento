using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Net;
using System.Text;
using System.Web;
using System.Web.Mvc;

namespace AltoRendimiento.App_Code
{
    public class BandejaProyecto
    {
        public string LclNombre {get;set;} 
        public decimal ProFolioProyecto {get;set;} 
        public string ProNombreProyecto {get;set;} 
        public int ProMesInicio {get;set;} 
        public int ProMesTermino {get;set;}
        public int ProEstado { get; set; }
    }
}