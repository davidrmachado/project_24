import Car from '../Domains/Car';
import CarODM from '../Models/CarModelODM';
import ICar from '../Interfaces/ICar';

export default class CarService {
  private createCarDomain(car: ICar | null): Car | null {
    if (car) {
      return new Car(car);
    }
    return null;
  }

  create = async (car: ICar) => {    
    const carODM = new CarODM();
    const newEntry = await carODM.create(car);
    return this.createCarDomain(newEntry);
  };

  getAll = async () => {
    const carODM = new CarODM();
    const cars = await carODM.getAll();
    return cars.map((car) => this.createCarDomain(car));
  };

  getById = async (id: string) => {
    const carODM = new CarODM();
    const car = await carODM.getById(id);
    return this.createCarDomain(car);
  };
}
