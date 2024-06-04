import { Schema, model, Types } from 'mongoose';

const paymentSchema = new Schema({
    paymentDate: { type: Date, required: true },
    forExAmount: { type: Number, required: true },
    currency: { type: String, required: true },
    indianAmount: { type: Number, required: true },
    invoiceId: { type: Types.ObjectId, ref: 'Invoice', required: true },
    isFullPayment: { type: Boolean, required: true },
    bankPayment: { type: String },
    details: { type: String },
});

const Payment = model('Payment', paymentSchema);
export default Payment;
