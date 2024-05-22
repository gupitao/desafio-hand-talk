import { sendData } from '../http';
import { ExtractData } from '../types';
import axios from 'axios';

jest.mock('axios');

describe('sendData', () => {
  const mockData: ExtractData = {
    device: 'desktop',
    os: 'Windows',
    origin: 'https://example.com',
    themeChanges: 0,
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('deve enviar dados para a API com sucesso', async () => {
    // Define a resposta da API com sucesso (200)
    const mockResponse = {
      status: 200,
      data: { message: 'Dados recebidos com sucesso' },
    };

    // Define o axios.post para retornar uma promessa resolvida com a resposta mockada
    (axios.post as jest.Mock).mockResolvedValue(mockResponse); 

    await sendData(mockData);

    // Verifica se o axios foi chamado com a URL, dados e headers corretos
    expect(axios.post).toHaveBeenCalledWith(
      'http://127.0.0.1:5001/hand-talk-6e23d/us-central1/webApi/api/v1/collect',
      mockData,
      { headers: { Authorization: 'Bearer token123' } } 
    );
  });
});