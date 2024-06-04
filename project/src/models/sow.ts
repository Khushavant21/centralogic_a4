import { Schema, model, Types } from 'mongoose';

const { ObjectId } = Types;

const sowSchema = new Schema({
    invoiceEmailAddresses: { type: [String], required: true },
    customerId: { type: ObjectId, ref: 'Customer', required: true },
    customerPONumber: { type: String, required: true },
    title: { type: String, required: true },
    customerSONumber: { type: String, required: true },
    validityPeriod: { type: Date, required: true },
    totalValue: { type: Number, required: true },
    currency: { type: String, required: true },
});

const SOW = model('SOW', sowSchema);
export default SOW;
