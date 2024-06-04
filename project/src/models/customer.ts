import { Schema, model } from 'mongoose';

const customerSchema = new Schema({
    organizationId: { type: Schema.Types.ObjectId, ref: 'Organization', required: true },
    MSAValidFrom: { type: Date, required: true },
    MSAValidUpto: { type: Date, required: true },
    legalName: { type: String, required: true },
    NDASignedOn: { type: Date, required: true },
    shortName: { type: String, required: true },
    NDAValidUpto: { type: Date, required: true },
    addressId: { type: String, required: true },
    NDAValidFrom: { type: Date, required: true },
    displayName: { type: String, required: true },
    isNDASigned: { type: Boolean, required: true },
    isMSASigned: { type: Boolean, required: true },
    MSASignedOn: { type: Date, required: true },
});

const Customer = model('Customer', customerSchema);
export default Customer;
