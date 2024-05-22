import { ExtractData } from "../models/extractData";
import { ExtractDataRepository } from "../repositories/extractDataRepository";

export class ExtractDataService {
    private extracDataRepository: ExtractDataRepository;

    constructor(extractRepo: ExtractDataRepository){
        this.extracDataRepository = extractRepo;
    }

    async getLastestExtractions(origin: string): Promise<ExtractData[]>{
        try {
            return await this.extracDataRepository.getLastestExtractions(20, origin);    
        } catch (error) {
            throw new Error("Ocorreu um erro ao buscar as extrações.");
        }
    }

    async createExtraction(extractData: ExtractData) {
        try {

            return this.extracDataRepository.createExtraction(extractData);   
            
        } catch (error) {
            throw new Error("Ocorreu um erro ao salvar a extração");
        }
    }

    async getExtractionsByBetweenData() {
        try {
            
            return this.extracDataRepository.getExtractionsByBetweenData();

        } catch (error) {
            throw new Error("Ocorreu um erro ao buscar as extrações dos ultimos 10 minutos");
        }
    }

}