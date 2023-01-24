import { NextFunction, Request, Response } from 'express';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleService from '../Services/motorcycle.service';

export default class MotorcycleController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private motorcycleService: MotorcycleService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.motorcycleService = new MotorcycleService();
  }

  postMotorcycle = async () => {
    const motorcycle: IMotorcycle = {
      model: this.req.body.model,
      year: this.req.body.year,
      color: this.req.body.color,
      status: this.req.body.status,
      category: this.req.body.category,
      engineCapacity: this.req.body.engineCapacity,
      buyValue: this.req.body.buyValue,
    };

    try {
      const result = await this.motorcycleService.postMotorcycle(motorcycle);
      return this.res.status(201).json(result);
    } catch (error) {
      this.next(error);
    }
  };

  getAllMotorcycles = async () => {
    try {
      const motorcycles = await this.motorcycleService.getAllMotorcycles();
      this.res.status(200).json(motorcycles);
    } catch (error) {
      this.next(error);
    }
  };

  getMotorcycleById = async () => {
    const { id } = this.req.params;

    try {
      const result = await this.motorcycleService.getMotorcycleById(id);
      if (!result) {
        return this.res.status(404).json({ message: 'Motorcycle not found' });
      }
      return this.res.status(200).json(result);
    } catch (error) {
      return this.res.status(422).json({ message: 'Invalid mongo id' });
    }
  };
}
