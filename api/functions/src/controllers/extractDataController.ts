import { Request, Response, NextFunction} from 'express'
import { ExtractDataService } from '../services/extractDataService';
import { ExtractData } from '../models/extractData';

export class ExtracDataController {
    private extractService: ExtractDataService;

    constructor(extractService: ExtractDataService){
        this.extractService = extractService;
    }

    collect = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const extractData = req.body as ExtractData;  
            
            await this.extractService.createExtraction(extractData);
    
            res.status(200).json();
        } catch (error) {
            res.status(500).send(error);
        }
    };

    list = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const origin = req.header('Origin');
            
            if(!origin){
                res.status(400).send({ error: "Origem não especificado."});
            }else {
                res.status(200).json(await this.extractService.getLastestExtractions(origin));
            }

        } catch (error) {
            res.status(500).send(error);
        }
    };
}