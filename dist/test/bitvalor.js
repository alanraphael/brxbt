"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Chai = require("chai");
const ChaiHttp = require("chai-http");
const index_1 = require("../src/index");
const should = Chai.should();
Chai.use(ChaiHttp);
describe('BitValor', () => {
    describe('/GET /api/bivalor', () => {
        it('Deve retornar todas as ordens', (done) => {
            Chai.request(index_1.default)
                .get('/api/bitvalor')
                .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                res.body.length.should.be.eql(0);
                done();
            });
        });
    });
});
