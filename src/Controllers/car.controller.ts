import { NextFunction, Request, Response } from 'express';

import Icar from '../Interfaces/ICar';
import CarService from '../Services/car.service';

export default class CarController {
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

  getAll = async () => {
    try {
      const cars = await this.carService.getAll();
      return this.res.status(200).json(cars);
    } catch (error) {
      this.next(error);
    }
  };

  getById = async () => {
    const { id } = this.req.params;
    try {
      const car = await this.carService.getById(id);
      if (!car) {
        return this.res.status(404).json({ message: 'Car not found' });
      }
      return this.res.status(200).json(car);
    } catch (error) {
      return this.res.status(422).json({ message: 'Invalid mongo id' });
    }
  };

  updateById = async () => {
    try {
      const { params: { id }, body } = this.req;
      const result = await this.carService.updateById(id, body);
      if (!result) {
        return this.res.status(404).json({ message: 'Car not found' });
      }
      return this.res.status(200).json(result);
    } catch (error) {
      return this.res.status(422).json({ message: 'Invalid mongo id' });
    }
  };
}
