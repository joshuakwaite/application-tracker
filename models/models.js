var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var applicationSchema = new Schema ({

    appliedDate: {
        type: Date,
        default: Date.now
    },
    companyName: {
        type: String,
        required: true
    },
    contactName: String,
    position: String,
    statedPay: Schema.Types.Mixed,
    website: Schema.Types.Mixed,
    notes: String,
    applicationUsed: Schema.Types.Mixed,
    isArchived: {
        type: Boolean,
        default: false
    },
    contactEmail: String,
    contactPhone: Schema.Types.Mixed,
    lastFollowUp: {
        type: Date,
        default: Date.now
    },
    followUpNote: Schema.Types.Mixed,
    user: {
        type: Schema.Types.Mixed,
        ref: "User",
        required: true
    }
});

module.exports = mongoose.model("Application", applicationSchema)