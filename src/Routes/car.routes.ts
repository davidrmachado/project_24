import express from 'express';
import CarController from '../Controllers/car.controller';

const route = express.Router();

route.post('/cars', (req, res, next) => new CarController(req, res, next).postCar());

export default route;
