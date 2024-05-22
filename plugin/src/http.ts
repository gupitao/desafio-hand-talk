import axios, { AxiosError } from 'axios';
import { ExtractData } from './types';

// Endereço da API para enviar os dados
const apiUrl = 'http://127.0.0.1:5001/hand-talk-6e23d/us-central1/webApi/api/v1/collect';
const token = '664e2369e3616'

// Função para enviar os dados para a API
export async function sendData(data: ExtractData): Promise<void> {
  try {
    // axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    await axios.post(apiUrl, data, { 
      headers: { Authorization: `Bearer ${token}` } 
    });

  } catch (error) {
    
    if(error instanceof AxiosError){
        throw new Error(`${error.response?.status} - ${error.response?.data.error}`);
    }

    throw error;
  }
}   