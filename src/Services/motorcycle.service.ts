import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MotorcycleModelODM';

class MotorcycleService {
  private createMotorcycleDomain(carParameters: IMotorcycle | null): Motorcycle | null {
    if (carParameters) {
      return new Motorcycle(carParameters);
    }
    return null;
  }

  public async postMotorcycle(motorcycleParameters: IMotorcycle) {
    const result = new MotorcycleODM();
    const newEntry = await result.create({ 
      ...motorcycleParameters, status: motorcycleParameters.status || false });
    return this.createMotorcycleDomain(newEntry);
  }
}

export default MotorcycleService;
