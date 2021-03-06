const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CalendlySchema = new Schema({
  
  travelerName: {
    type: String,
    trim: true
  },

  travelerEmail: {
    type: String
  },

  isReschedule: {
    type: Boolean
  },

  calendlyID: {
    type: String
  },

  event_type: {
    type: String
  },

  location: {
    type: String
  },

  operator: {
    type: Array
  },

  start_time_pretty: {
    type: String
  },
  
  paid: {
    type: Boolean,
    default: null
  }

},
  {
    collection: 'calendly',
    timestamps: true
});

const Calendly = mongoose.model("Calendly", CalendlySchema);

module.exports = Calendly;