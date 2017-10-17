import * as Request from 'request-promise';
import DB from '../../db'

class BitValorModel {
    private _collection;

    constructor() {
        this._collection = DB.getCollection('bitvalor');

        if (this._collection == null)
            this._collection = DB.addCollection('bitvalor');
    }

    /**
     * Gera a base de dados com os valores das exchanges.
     *
     * Obs.: A especicação para uso da API da Bitvalor limita a 1 requisição por minuto.
     */
    public load() {
        return new Promise((resolve, reject) => {
            Request('https://api.bitvalor.com/v1/order_book.json')
            .then((body) => {
                this.clear();
                let json = JSON.parse(body);

                for (let ob of json.bids) {
                    this._collection.insert(
                        {
                            order_type: 'bids',
                            exchange: ob[0],
                            price: ob[1],
                            volume: ob[2]
                        }
                    );
                }

                for (let ob of json.asks) {
                    this._collection.insert(
                        {
                            order_type: 'asks',
                            exchange: ob[0],
                            price: ob[1],
                            volume: ob[2]
                        }
                    );
                }

                resolve(true);
            })
            .catch((err) => reject(err));
        });
    }

    public clear() {
        this._collection.chain().remove();
    }

    /**
     * Formata os filtros para consulta.
     *
     * @param {Object} filters
     *
     * @return {Object}
     */
    private _parse_filter(filters) {
        if (filters.price_lte || filters.price_gte) {
            filters.price = {$and: []};

            if (filters.price_lte)
                filters.price['$and'].push({$lte: filters.price_lte});
            if (filters.price_gte)
                filters.price['$and'].push({$gte: filters.price_gte});

            delete filters.price_lte;
            delete filters.price_gte;
        }

        if (filters.volume_lte || filters.volume_gte) {
            filters.volume = {$and: []};

            if (filters.volume_lte)
                filters.volume['$and'].push({$lte: filters.volume_lte});
            if (filters.volume_gte)
                filters.volume['$and'].push({$gte: filters.volume_gte});

            delete filters.volume_lte;
            delete filters.volume_gte;
        }
        return filters;
    }

    /**
     * Consulta a base de dados.
     *
     * @description Realiza a consulta a base de dados e verifica se os dados expiraram,
     * caso tenha expirado será feito uma chamada assíncrona para atualizar a base.
     *
     * @param {Object} filters recebe os filtros para consulta.
     *
     * @return {Promise}
     */
    public select(filters) {
        return new Promise((resolve, reject) => {
            filters = this._parse_filter(filters);

            let data = this._collection.data;

            if (data.length == 0) {
                this.load().then((res) => {
                    let data = this._collection.data;
                    resolve(data);
                });
            } else {
                let now = Date.now() - (60 * 1000);

                if (data[0].meta.created < now)
                   this.load();

                resolve(this._collection.find(filters));
             }
        });
    }

}

export default BitValorModel;
