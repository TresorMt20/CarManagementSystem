using System.Collections.Generic;
using System.Linq;
using API.Entities;

namespace API.Extensions
{
    public static class ProductExtensions
    {
        public static IQueryable<Car> Sort(this IQueryable<Car> query, string orderBy)
        {
            if (string.IsNullOrEmpty(orderBy)) return query.OrderBy(p => p.Name); 

            query = orderBy switch
            {
                "price" => query.OrderBy(p => p.PricePerDay),
                "priceDesc" => query.OrderByDescending(p => p.PricePerDay),
                _ => query.OrderBy(p => p.Name)
            };

            return query;
        }

        public static IQueryable<Car> Search(this IQueryable<Car> query, string searchTerm)
        {
            if (string.IsNullOrEmpty(searchTerm)) return query;

            var lowerCaseSearchTerm = searchTerm.Trim().ToLower();

            return query.Where(p => p.Name.ToLower().Contains(lowerCaseSearchTerm));
        }

        public static IQueryable<Car> Filter(this IQueryable<Car> query, string brands, string types)
        {
            var brandList = new List<string>();
            var typeList = new List<string>();

            if (!string.IsNullOrEmpty(brands))
                brandList.AddRange(brands.ToLower().Split(",").ToList());

            if (!string.IsNullOrEmpty(types))
                typeList.AddRange(types.ToLower().Split(",").ToList());

            query = query.Where(p => brandList.Count == 0 || brandList.Contains(p.Brand.ToLower()));
            query = query.Where(p => typeList.Count == 0 || typeList.Contains(p.Model.ToLower()));

            return query;
        }
    }
}