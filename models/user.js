const mongoose = require('mongoose');

const URLSchema = new mongoose.Schema({
    pr_name: String,
    pr_email: String,
    pr_country: String,
    pr_mobile:Number,
    pr_product: String,
    pr_plan_id: String,
    pr_inst_coll: String,
    pr_state: String,
    pr_city: String,
    date: {
        type: String,
        default: Date.now
    }
})

const Url = mongoose.model('User', URLSchema);

module.exports = Url;