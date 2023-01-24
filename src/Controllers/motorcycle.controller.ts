import { NextFunction, Request, Response } from 'express';
import IMotorcycle from '../Interfaces/IMotorcycle';
import MotorcycleService from '../Services/motorcycle.service';

export default class MotorcycleController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private vservice: MotorcycleService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.vservice = new MotorcycleService();
  }

  public async postMotorcycle() {
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
      const result = await this.vservice.postMotorcycle(motorcycle);
      return this.res.status(201).json(result);
    } catch (error) {
      this.next(error);
    }
  }
}
