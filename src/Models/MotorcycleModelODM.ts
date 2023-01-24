import { Schema } from 'mongoose';

import IMotorcycle from '../Interfaces/IMotorcycle';
import AbstractODM from './AbstractODM';

export default class MotorcycleODM extends AbstractODM<IMotorcycle> {
  constructor() {
    super(
      new Schema<IMotorcycle>({
        model: { type: String, required: true },
        year: { type: Number, required: true },
        color: { type: String, required: true },
        status: { type: Boolean },
        category: { type: String, required: true },
        engineCapacity: { type: Number, required: true },
        buyValue: { type: Number, required: true },
      }),
      'Motorcycle',
    );
  }

  getAllMotorcycles = async () => {
    const result = this.model.find();
    return result;
  };

  getMotorcycleById = async (id: string) => {
    const result = this.model.findById(id);
    return result;
  };
}
