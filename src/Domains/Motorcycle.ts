import IMotorcycle from '../Interfaces/IMotorcycle';

import Vehicle from './Vehicle';

class Motorcycle extends Vehicle {
  private category: 'Street' | 'Custom' | 'Trail';
  private engineCapacity: number;

  constructor({ id, model, year, color, status, category, engineCapacity, buyValue }: IMotorcycle) {
    super({ id, model, year, color, status, buyValue });
    this.category = category;
    this.engineCapacity = engineCapacity;
  }
}

export default Motorcycle;
