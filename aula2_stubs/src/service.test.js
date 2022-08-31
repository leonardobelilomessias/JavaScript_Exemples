
const sinon = require('sinon');
const fs = require('fs')
const Service = require('./service');
const BASE_URL = "https://swapi.dev/api/planets/1/";
const BASE_URL2 = "https://swapi.dev/api/planets/2/";
const mocks={
  alderaan:require('./mocks/name'),
};

(async () => {
  {
    /*
    // dessa forma vai para internet
    const service = new Service()
    const withoutStub = await service.makeRequest(BASE_URL2)
    console.log(JSON.stringify(withoutStub))*/

  }
  const service = new Service()
  const stub = sinon.stub(service, service.makeRequest.name)

  stub.withArgs(BASE_URL2).resolves(mocks.alderaan)
  {
    const resolve = await service.makeRequest(BASE_URL2)
    console.log(resolve)
  }
})()