import * as Chai from 'chai';
import ChaiHttp = require('chai-http');

import server from '../src/index';

const should = Chai.should();

Chai.use(ChaiHttp);

describe('BitValor', () => {

    describe('/GET /api/bivalor', () => {

        it('Deve retornar todas as ordens', (done) => {
            Chai.request(server)
                .get('/api/bitvalor')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');
                    res.body.length.should.above(1);
                    done();
                });
        });

        it('Deve retornar ordens da FoxBit', (done) => {
            Chai.request(server)
                .get('/api/bitvalor?exchange=FOX')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');

                    Chai.expect(res.body[0].exchange).to.equal('FOX');

                    done();
                });
        });


        it('Deve retornar tipo de ordem "bids"', (done) => {
            Chai.request(server)
                .get('/api/bitvalor?order_type=bids')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');

                    Chai.expect(res.body[0].order_type).to.equal('bids');

                    done();
                });
        });


        it('Deve retornar ordens com preços maiores', (done) => {
            Chai.request(server)
                .get('/api/bitvalor?price_gte=16000')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');

                    Chai.expect(res.body[0].price).to.be.at.least(16000);

                    done();
                });
        });

        it('Deve retornar ordens com preços menores', (done) => {
            Chai.request(server)
                .get('/api/bitvalor?price_lte=17000')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');

                    Chai.expect(res.body[0].price).to.be.at.most(17000);

                    done();
                });
        });


        it('Deve retornar ordens com volumes maiores', (done) => {
            Chai.request(server)
                .get('/api/bitvalor?volume_gte=0.005')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');

                    Chai.expect(res.body[0].volume).to.be.at.least(0.005);

                    done();
                });
        });


        it('Deve retornar ordens com volume menores', (done) => {
            Chai.request(server)
                .get('/api/bitvalor?volume_lte=1')
                .end((err, res) => {
                    res.should.have.status(200);
                    res.body.should.be.a('array');

                    Chai.expect(res.body[0].volume).to.be.at.most(1);

                    done();
                });
        });

    });

});
