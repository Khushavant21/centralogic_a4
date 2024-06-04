import { Request, Response } from 'express';
import Customer from '../models/customer';

export const createCustomer = async (req: Request, res: Response) => {
    try {
        const customer = new Customer(req.body);
        await customer.save();
        res.status(201).send(customer);
    } catch (error) {
        res.status(400).send(error);
    }
};

export const getCustomers = async (req: Request, res: Response) => {
    try {
        const customers = await Customer.find();
        res.status(200).send(customers);
    } catch (error) {
        res.status(400).send(error);
    }
};
