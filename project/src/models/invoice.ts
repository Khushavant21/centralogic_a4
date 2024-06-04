import { Schema, model, Types } from 'mongoose';

const invoiceSchema = new Schema({
    totalInvoiceValue: { type: Number, required: true },
    sowId: { type: Types.ObjectId, ref: 'SOW', required: true },
    status: { type: String, enum: ['Drafted', 'Cancelled', 'Approved'], default: 'Drafted' },
    sowPaymentPlanId: { type: Types.ObjectId, ref: 'SOWPaymentPlan', required: true },
    invoiceSentOn: { type: Date },
    customerId: { type: Types.ObjectId, ref: 'Customer', required: true },
    paymentReceivedOn: { type: Date },
    invoiceVersionNo: { type: Number, required: true },
    paymentId: { type: Types.ObjectId, ref: 'Payment' },
    invoiceAmount: { type: Number },
    invoiceTaxAmount: { type: Number },
});

const Invoice = model('Invoice', invoiceSchema);
export default Invoice;
