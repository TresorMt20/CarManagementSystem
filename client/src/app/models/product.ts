export interface Product {
    id: number;
    brand: string;
    model: string;
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