import { Response, Request, NextFunction} from 'express'
import { ExtractDataService } from '../services/extractDataService';


export class RateLimitMiddleware {
    private extractService: ExtractDataService;

    constructor(extractService: ExtractDataService){
        this.extractService = extractService;
    }

    rateLimit = async(req: Request, res: Response, next: NextFunction) => {

        const extractsAgo = await this.extractService.getExtractionsByBetweenData();

        if(extractsAgo.length >= 5){
            res.status(401).send({ error: 'Limite de registros alcançado aguarde 10 minutos.'})
        }else {
            next();
        }
    }

}