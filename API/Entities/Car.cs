using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Entities
{
    public class Car
    {
        public int Id { get; set; }
        public string Brand { get; set; }
        public string Model { get; set; }
        public long PricePerDay { get; set; }
        public string PictureUrl { get; set; }
        public int FuelConsumptionPerHundred { get; set; }
        public string TransmissionType { get; set; }
        public int NumberOfSeats { get; set; }
        public string Color { get; set; }
        public string RentalPointId { get; set; }
         public string Description { get; set; }
        public DateTime LastViewTime { get; set; }
    }
}