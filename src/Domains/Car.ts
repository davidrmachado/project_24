import ICar from '../Interfaces/ICar';

export default class Car {
  protected id?: string;
  protected model: string;
  protected year: number;
  protected color: string;
  protected status?: boolean | false;
  private doorsQty: number;
  private seatsQty: number;
  protected buyValue: number;

  constructor(obj: ICar) {
    this.id = obj.id;
    this.model = obj.model;
    this.year = obj.year;
    this.color = obj.color;
    this.status = obj.status || false;
    this.doorsQty = obj.doorsQty;
    this.seatsQty = obj.seatsQty;
    this.buyValue = obj.buyValue;
  }
}
