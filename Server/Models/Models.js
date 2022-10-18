const mongoose = require('mongoose');

const Schema = mongoose.Schema
const workoutSchema = new Schema({
    user_id: String,
    email: [String],
    stock: [
        {
            id : Number,
        stock_id : String,
        stock_name : String,
        date_of_importing : String,
        date_of_exporting : String,
        no_of_units: String,
        isbn: String,
        dispatched: Boolean,
        expired : Boolean,
    }
    ]


});
// const workoutSchema = new Schema({
//
//     title: String,
//     email: [String],
//     stock_id: [String],
//             stock_name: [String],
//     date_of_importing: [Date],
//             date_of_exporting: [Date]
//         ,
//         no_of_units: [Number],
//         no_of_items_in_one_unit: [Number],
//         date_of_expiration: [Date],
//         isbn: [Date],
//         dispatched: [Boolean],
//         expired: [Boolean],
// }, {timestamps: true});

module.exports = mongoose.model('Models', workoutSchema);
