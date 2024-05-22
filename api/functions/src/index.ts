import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import * as express from 'express';
import * as bodyParser from "body-parser";
import * as cors from "cors";
import { ExtractDataRepository } from './repositories/extractDataRepository';
import { ExtractDataService } from './services/extractDataService';
import { ExtracDataController } from './controllers/extractDataController';
import { AuthenticateMiddleware } from './middlewares/authenticateMiddleware';
import { RateLimitMiddleware } from './middlewares/rateLimitMiddleware';

admin.initializeApp(functions.config().firebase);

const app = express();
const main = express();

//Extract Module
const extractRepo = new ExtractDataRepository();
const extractService = new ExtractDataService(extractRepo);
const extracController = new ExtracDataController(extractService);

//Middlewares
const rateMiddleware = new RateLimitMiddleware(extractService);

app.use(AuthenticateMiddleware.authenticate);

app.get('/list', extracController.list);
app.post('/collect', rateMiddleware.rateLimit, extracController.collect);

main.use(cors());
main.use(bodyParser.json());
main.use(bodyParser.urlencoded({ extended: false }));

main.use('/api/v1', app);

export const webApi = functions.https.onRequest(main);