const mongoose = require("mongoose");
const moment = require("moment-timezone");

const IST = "Asia/Kolkata" ;

const DataSchema = mongoose.Schema({
  Value: String,
  timestamp: {
    type: Date,
    default: () => moment().tz(IST).toDate(),
  },
});
const DataModel = mongoose.model("datas" , DataSchema);

module.exports = DataModel ;