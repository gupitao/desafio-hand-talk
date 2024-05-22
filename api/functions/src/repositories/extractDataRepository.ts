import { Firestore } from "firebase-admin/firestore";
import { ExtractData } from "../models/extractData";
import * as admin from 'firebase-admin';

export class ExtractDataRepository {
    private db: Firestore;
    private collection:string;


    constructor(){
        this.db = admin.firestore();
        this.collection = 'collects';
    }

    async getLastestExtractions(limit: number, origin: string): Promise<ExtractData[]>{
        try {
            const extractDatas: ExtractData[] = [];

            const snapshot = await this.db.collection(this.collection).where('origin', '==', origin).orderBy('createdAt', 'desc').limit(limit).get();
            
            snapshot.docs.forEach(doc => {               
                const extract = doc.data() as ExtractData;

                extract.createdAt = doc.data().createdAt.toDate();

                extractDatas.push(extract);
            });
    
            return extractDatas;   
        } catch (error) {
            throw new Error("Ocorreu um erro ao buscar as extrações no banco de dados.");
        }
    }

    async getExtractionsByBetweenData(): Promise<ExtractData[]> {
        try {
            const extractDatas: ExtractData[] = [];
            const now = new Date();
            const minutesAgo = new Date(now.getTime() - 10 * 60000);

            
            const snapshot = await this.db.collection(this.collection).where('createdAt', '>=', minutesAgo).get();

            snapshot.docs.forEach(doc => {
                const extract = doc.data() as ExtractData;

                extract.createdAt = doc.data().createdAt.toDate();

                extractDatas.push(extract);
            })

            return extractDatas;
        } catch (error) {
            throw new Error("Ocorreu um erro ao buscar as transações no periodo de 10 minutos");
            
        }
    }

    async createExtraction(extractData: ExtractData): Promise<void> {
        try {
            extractData.createdAt = new Date();
            await this.db.collection(this.collection).add(extractData);    
        } catch (error) {
            throw new Error("Ocorreu um erro ao salvar a extração no banco de dados.");
        }        
    }
}