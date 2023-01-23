export default interface ICar {
  id?: string;
  model: string;
  year: number;
  color: string;
  status?: boolean | false;
  doorsQty: number;
  seatsQty: number;
  buyValue: number;
}
