import mongoose from 'mongoose';

const consultingFormSchema = new mongoose.Schema({
    pageCategory: { type: String },
    name: { type: String },
    email: { type: String },
    phoneNo: { type: String }
});

const consultingFormModel = mongoose.model('consultingFormForm', consultingFormSchema);

export default consultingFormModel;