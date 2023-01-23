import { model, Model, models, Schema } from 'mongoose';

import ICar from '../Interfaces/ICar';

export default class CarODM {
  private schema: Schema;
  private model: Model<ICar>;

  constructor() {
    this.schema = new Schema<ICar>({
      model: { type: String, required: true },
      year: { type: Number, required: true },
      color: { type: String, required: true },
      status: { type: Boolean },
      doorsQty: { type: Number, required: true },
      seatsQty: { type: Number, required: true },
      buyValue: { type: Number, required: true },
    });
    this.model = models.Car || model('Car', this.schema);
  }

  create = async (car: ICar) => {
    const result = await this.model.create({ ...car });
    return result;    
  };

  getAll = async () => {
    const result = await this.model.find();
    return result;
  };

  getById = async (id: string) => {
    const result = await this.model.findById(id);

    return result;
  };
}