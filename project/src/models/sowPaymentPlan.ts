import { Schema, model, Types } from 'mongoose';

const sowPaymentPlanSchema = new Schema({
    sowId: { type: Types.ObjectId, ref: 'SOW', required: true },
    customerId: { type: Types.ObjectId, ref: 'Customer', required: true },
    plannedInvoiceDate: { type: Date, required: true },
    totalActualAmount: { type: Number, required: true },
});

const SOWPaymentPlan = model('SOWPaymentPlan', sowPaymentPlanSchema);
export default SOWPaymentPlan;
