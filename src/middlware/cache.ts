import NodeCache from "node-cache";
import {NextFunction, Request, Response} from "express";
const cache = new NodeCache();

export const cacheMiddleware = (req: Request, res: Response, next: NextFunction) => {
    const key =  req.originalUrl || req.url;
    const cachedBody = cache.get(key);

    if (cachedBody) {
        res.send(cachedBody);
        return;
    }

    res.on('finish', () => {
        if (res.statusCode === 200) {
            cache.set(key, res.get('Content-Type') === 'application/json' ? res.json : res);
        }
    });

    next();
};
