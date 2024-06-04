import { Request, Response } from 'express';
import SOWPaymentPlan from '../models/sowPaymentPlan';

export const createSOWPaymentPlan = async (req: Request, res: Response) => {
    try {
        const sowPaymentPlan = new SOWPaymentPlan(req.body);
        await sowPaymentPlan.save();
        res.status(201).send(sowPaymentPlan);
    } catch (error) {
        res.status(400).send(error);
    }
};

export const getSOWPaymentPlans = async (req: Request, res: Response) => {
    try {
        const sowPaymentPlans = await SOWPaymentPlan.find();
        res.status(200).send(sowPaymentPlans);
    } catch (error) {
        res.status(400).send(error);
    }
};
