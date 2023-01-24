import { expect } from 'chai';
import sinon from 'sinon';
import { Model } from 'mongoose';

import CarService from '../../../src/Services/car.service';
import { carInput, carOutput } from '../Mocks/car.mocks';

describe('Testes da camada Service da aplicação', function () {
  it('Verifica se é possível cadastrar um novo carro com sucesso', async function () {
    sinon.stub(Model, 'create').resolves(carOutput);

    const service = new CarService();
    const result = await service.create(carInput);

    expect(result).to.be.deep.equal(carOutput);
  });

  it('Verifica se retorna o id correto do carro', async function () {
    sinon.stub(Model, 'findById').resolves(carOutput);

    const service = new CarService();
    const result = await service.getById('6371dr8395fe55401aee3228');

    expect(result).to.be.deep.equal(carOutput);
  });
});
