import { Schema, model, Types } from 'mongoose';

const { ObjectId } = Types;

const invoiceLineItemSchema = new Schema({
    invoiceId: { type: ObjectId, ref: 'Invoice', required: true },
    orderNo: { type: Number, required: true },
    particular: { type: String, required: true },
    rate: { type: Number, required: true },
    unit: { type: Number, required: true },
    total: { type: Number, required: true },
});

const InvoiceLineItem = model('InvoiceLineItem', invoiceLineItemSchema);
export default InvoiceLineItem;
