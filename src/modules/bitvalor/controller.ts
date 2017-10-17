import { Router, Request, Response, NextFunction } from 'express';
import BitValorModel from './model';

class BitValor {
    public router: Router;

    constructor() {
        this.router = Router();
        this.init();
    }

    /**
     * @api {get} /api/bitvalor Ordens das exchanges brasileiras
     * @apiVersion 0.1.0
     * @apiName BitValor
     * @apiGroup BitValor
     *
     * @apiParam {String} order_type Tipo da ordem.
     * @apiParam {String} exchange Legenda da exchange.
     * @apiParam {Number} price_gte Preço maior ou igual.
     * @apiParam {Number} price_lte Preço menor ou igual.
     * @apiParam {Number} volume_gte Volume maior ou igual.
     * @apiParam {Number} volume_lte Volume menor ou igual.
     *
     * @apiParamExample Request-Example:
     *      /api/bitvalor?order_type=bids&exchange=LOC&price_gte=16000&price_lte=18000&volume_gte=0.09&volume_lte=0.5
     */
    public get(req: Request, res: Response, next: NextFunction) {
        let order_book = new BitValorModel();

        let filters = req.query;

        order_book.select(filters)
            .then((resp) => {
                let data = JSON.parse(JSON.stringify(resp));

                for (let r of data) {
                    delete r.meta;
                    delete r.$loki;
                }

                res.json(data);
            });
    }

    public init() {
        this.router.get('/', this.get);
    }
}

const bitValor = new BitValor();
export default bitValor.router;
