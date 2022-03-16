export interface Product {
    // id: number;
    // name: string;
    // description: string;
    // price: number;
    // pictureUrl: string;
    // type?: string;
    // brand: string;
    // quantityInStock?: number;
    id: number;
    brand: string;
    model: string;
    name: string;
    pricePerDay: number;
    pictureUrl: string;
    fuelConsumptionPerHundred?: number;
    transmissionType: string;
    numberOfSeats?: number;
    color: string;
    rentalPointId: string;
    description:string;
    lastViewTime: Date | null;
}

export interface ProductParams {
    orderBy: string;
    searchTerm?: string;
    types: string[];
    brands: string[];
    pageNumber: number;
    pageSize: number;
}