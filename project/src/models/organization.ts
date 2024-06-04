import { Schema, model } from 'mongoose';

const organizationSchema = new Schema({
    GSTNo: { type: String, required: true },
    PANNo: { type: String, required: true },
    legalOrgName: { type: String, required: true },
    invoiceTemplateId: { type: String, required: true },
    shortName: { type: String, required: true },
    contactName: { type: String, required: true },
    displayName: { type: String, required: true },
    email: { type: String, required: true },
    addressId: { type: String, required: true },
    phone: { type: String, required: true },
});

const Organization = model('Organization', organizationSchema);
export default Organization;
