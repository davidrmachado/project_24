import express from 'express';
import CarController from '../Controllers/car.controller';

const route = express.Router();

route.post('/cars', (req, res, next) => new CarController(req, res, next).postCar());

route.get('/cars', (req, res, next) => new CarController(req, res, next).getAll());

route.get('/cars/:id', (req, res, next) => new CarController(req, res, next).getById());

route.put('/cars/:id', (req, res, next) => new CarController(req, res, next).updateById());

export default route;
