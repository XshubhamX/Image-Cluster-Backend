const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const allKeywordsSchema = new Schema({
    type: {
        type: String,
        required: true
    }
});

const AllKeywordsSchema = mongoose.model("allKeywords", allKeywordsSchema);

export { AllKeywordsSchema as default };
