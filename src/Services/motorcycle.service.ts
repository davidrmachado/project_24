import Motorcycle from '../Domains/Motorcycle';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleODM from '../Models/MotorcycleModelODM';

export default class MotorcycleService {
  private createMotorcycleDomain(carParameters: IMotorcycle | null): Motorcycle | null {
    if (carParameters) {
      return new Motorcycle(carParameters);
    }
    return null;
  }

  postMotorcycle = async (motorcycleParameters: IMotorcycle) => {
    const result = new MotorcycleODM();
    const newEntry = await result.create({ 
      ...motorcycleParameters, status: motorcycleParameters.status || false });
    return this.createMotorcycleDomain(newEntry);
  };

  getAllMotorcycles = async () => {
    const result = new MotorcycleODM();
    const allMotos = await result.getAllMotorcycles();
    return allMotos.map((motorcycle) => this.createMotorcycleDomain(motorcycle));
  };

  getMotorcycleById = async (id: string) => {
    const result = new MotorcycleODM();
    const moto = await result.getMotorcycleById(id);
    return this.createMotorcycleDomain(moto);
  };
}
