import { Request, Response, NextFunction } from 'express';
import { ExtractDataService } from '../services/extractDataService';
import { RateLimitMiddleware } from './rateLimitMiddleware';

describe('RateLimitMiddleware', () => {
  let middleware: RateLimitMiddleware;
  let extractService: ExtractDataService;
  let req: Request;
  let res: Response;
  let next: NextFunction;

  beforeEach(() => {
    extractService = {
      getExtractionsByBetweenData: jest.fn().mockResolvedValue([]) // Mock the service method
    } as unknown as ExtractDataService;
    middleware = new RateLimitMiddleware(extractService);

    req = {} as Request;
    res = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn()
    } as unknown as Response;
    next = jest.fn();
  });

  it('deve chamar next() se houver menos de 5 extrações', async () => {
    await middleware.rateLimit(req, res, next);
    expect(next).toHaveBeenCalled();
    expect(res.status).not.toHaveBeenCalled();
    expect(res.send).not.toHaveBeenCalled();
  });

  it('deve enviar resposta de erro se 5 ou mais extrações', async () => {
    (extractService.getExtractionsByBetweenData as jest.Mock).mockResolvedValue(new Array(5).fill(null));
    await middleware.rateLimit(req, res, next);
    expect(next).not.toHaveBeenCalled();
    expect(res.status).toHaveBeenCalledWith(401);
    expect(res.send).toHaveBeenCalledWith({ error: 'Limite de registros alcançado aguarde 10 minutos.' });
  });
});