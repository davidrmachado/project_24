import express from 'express';

import CarController from '../Controllers/car.controller';

import MotorcycleController from '../Controllers/motorcycle.controller';

const route = express.Router();

route.post('/cars', (req, res, next) => new CarController(req, res, next).postCar());

route.get('/cars', (req, res, next) => new CarController(req, res, next).getAll());

route.get('/cars/:id', (req, res, next) => new CarController(req, res, next).getById());

route.put('/cars/:id', (req, res, next) => new CarController(req, res, next).updateById());

route.post('/motorcycles', (req, res, next) => 
  new MotorcycleController(req, res, next).postMotorcycle());

route.get('/motorcycles', (req, res, next) => 
  new MotorcycleController(req, res, next).getAllMotorcycles());
  
route.get('/motorcycles/:id', (req, res, next) => 
  new MotorcycleController(req, res, next).getMotorcycleById());

export default route;
