import express from 'express';
import {getCompanySearchStr} from "../controllers/controller_company";
import {cacheMiddleware} from "../middlware/cache";

export const companyRoutes = express.Router();
companyRoutes.get('/get_data', cacheMiddleware, getCompanySearchStr);
