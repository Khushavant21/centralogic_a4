import { Request, Response } from 'express';
import SOW from '../models/sow';

export const createSOW = async (req: Request, res: Response) => {
    try {
        const sow = new SOW(req.body);
        await sow.save();
        res.status(201).send(sow);
    } catch (error) {
        res.status(400).send(error);
    }
};

export const getSOWs = async (req: Request, res: Response) => {
    try {
        const sows = await SOW.find();
        res.status(200).send(sows);
    } catch (error) {
        res.status(400).send(error);
    }
};
