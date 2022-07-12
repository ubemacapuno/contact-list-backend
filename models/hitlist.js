const mongoose = require('mongoose')
//renamed from hitlist to Hitlist
const HitlistSchema = new mongoose.Schema({ //define the columns of our table/schema:
    contactName: {
        type: String,
        required: true,
    },
    contactCompany: {
        type: String,
        required: true,
    },
    contactPhone: {
        type: String,
        required: false,
    },
    contactEmail: {
        type: String,
        required: false,
    },
    contactPosition: {
        type: String,
        required: true,
    },
    contactFact: {
        type: String,
        required: false,
    },
    contactAdditional: {
        type: String,
        required: false,
    },
})

//Pass the HitlistSchema over to mongoose so it can be created in mongodb

const Hitlist = mongoose.model("Hitlist", HitlistSchema)
module.exports = Hitlist