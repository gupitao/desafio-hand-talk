import { Request, Response, NextFunction } from 'express';


export class AuthenticateMiddleware {
    static authenticate = (req: Request, res: Response, next: NextFunction) => {
        try {
            const tokens: { [key:string] : string} = {
                'http://localhost:3000': '664e2369e3616',
                'dominio.net': '664e23846171b',
            };

            let token  = req.header('Authorization');
            const origin = req.header('Origin');

            console.log(token, origin);

            if(token){
                token = token.startsWith('Bearer ') ? token.slice(6).trim() : token;
            }

            if (!origin) {
                res.status(401).json({ error: 'Origem não encontrada' });
            }else if (!token || !tokens[origin]) {
                res.status(401).json({ error: 'Token inválido ou não encontrado' });
            }else if (token !== tokens[origin]) {
                res.status(401).json({ error: 'Token inválido' });
            }else {
                next();
            }

        } catch (error) {
            res.status(500).send({error: 'Internal Error'});
        }
    };
}