import { Request, Response } from 'express';
import Invoice from '../models/invoice';

export const createInvoice = async (req: Request, res: Response) => {
    try {
        const invoice = new Invoice(req.body);
        await invoice.save();
        res.status(201).send(invoice);
    } catch (error) {
        res.status(400).send(error);
    }
};

export const getInvoices = async (req: Request, res: Response) => {
    try {
        const invoices = await Invoice.find();
        res.status(200).send(invoices);
    } catch (error) {
        res.status(400).send(error);
    }
};
