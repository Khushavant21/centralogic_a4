import { Request, Response } from 'express';
import Organization from '../models/organization';

export const createOrganization = async (req: Request, res: Response) => {
    try {
        const organization = new Organization(req.body);
        await organization.save();
        res.status(201).send(organization);
    } catch (error) {
        res.status(400).send(error);
    }
};

export const getOrganizations = async (req: Request, res: Response) => {
    try {
        const organizations = await Organization.find();
        res.status(200).send(organizations);
    } catch (error) {
        res.status(400).send(error);
    }
};
