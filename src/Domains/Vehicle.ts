import IVehicle from '../Interfaces/IVehicle';

export default class Vehicle {
  protected id?: string | undefined; 
  protected model: string;
  protected year: number;
  protected color: string;
  protected status?: boolean | undefined;
  protected buyValue: number;

  constructor(vehicleParameters: IVehicle) {
    this.id = vehicleParameters.id;
    this.model = vehicleParameters.model;
    this.year = vehicleParameters.year;
    this.color = vehicleParameters.color;
    this.status = vehicleParameters.status || false;
    this.buyValue = vehicleParameters.buyValue;
  }
}
