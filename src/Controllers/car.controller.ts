import { NextFunction, Request, Response } from 'express';

import Icar from '../Interfaces/ICar';
import CarService from '../Services/car.service';

class CarController {
  private req: Request;
  private res: Response;
  private next: NextFunction;
  private carService: CarService;

  constructor(req: Request, res: Response, next: NextFunction) {
    this.req = req;
    this.res = res;
    this.next = next;
    this.carService = new CarService();
  }

  createCar = (): Icar => ({
    id: this.req.body.id,
    model: this.req.body.model,
    year: Number(this.req.body.year),
    color: this.req.body.color,
    status: this.req.body.status,
    doorsQty: Number(this.req.body.doorsQty),
    seatsQty: Number(this.req.body.seatsQty),
    buyValue: Number(this.req.body.buyValue),
  });

  postCar = async () => {
    try {
      const newEntry = this.createCar();
      const result = await this.carService.create(newEntry);
      this.res.status(201).json(result);
    } catch (error) {
      this.next(error);
    }
  };
}

export default CarController;
