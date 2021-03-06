const db = require("../models");

// Defining methods for the bookingController
module.exports = {
  findAll: function(req, res) {
    db.Bookings
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findById: function(req, res) {
    db.Bookings
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  findOne: function(req, res){
    db.Bookings
    .findOne({ 'email': req.params.email })
    .then(dbModel => res.json(dbModel))
    .catch(err => res.status(422).json(err));
  },

  findOneByEmail: async function(req, res){
    return await db.Bookings.findOne({ email: req })
  },

  create: function(req, res) {
    db.Bookings
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => {
        console.log(err)
        res.status(422).json(err)});
  },
  update: function(req, res) {
    db.Bookings
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  remove: function(req, res) {
    db.Bookings
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
