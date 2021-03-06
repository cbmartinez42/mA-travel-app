const mongoose = require("mongoose");
const db = require("../models");
require('dotenv').config()

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/dothisdb", { 
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  }
);

const toursSeed = [
  {
      // "_objectid": 1,
      "tourName": "Snorkeling and Beach BBQ",
      "tourOperator": "Kaimani Marine Tours",
      "departureLocation": {
          "street": "74 Front Street",
          "street2": "",
          "city": "Punta Gorda",
          "state": "Toledo",
          "zip": "00000"
      },
      "email": "kaimanimarine@gmail.com",
      "description": "Visit three pristine snorkel sites and then enjoy a Creole-seafood BBQ on a private beach.  In the afternoon; you can either be a beach bum, snorkel from shore, do some birding, or visit our active coconut farm where we are crazy for coconuts!",
      "tourLocation": "Snake Cayes",
      "cancellationPolicy": "72 hours full refund, under 72 hours 50% refund",
      "startTimes": "8:00 am",
      "duration": "8 hours",
      "cost": "75",
      "additionalFees": "5 per person park fee to be paid at the ranger station",
      "maxCapacity": "36",
      "minCapacity": "4",
      "keywords": ["snorkel", "BBQ", "sustainable tours", "Creole", "coconuts", "organic farm", "beach", "birding"],
      "image": "https://www.touropia.com/gfx/d/best-beaches-in-belize/hopkins_village_beach.jpg?v=1"
  },
  {
      // "_objectid": 2,
      "tourName": "Deep Sea Fishing",
      "tourOperator": "Kaimani Marine Tours",
      "departureLocation": {
          "street": "74 Front Street",
          "street2": "",
          "city": "Punta Gorda",
          "state": "Toledo",
          "zip": "00000"
      },
      "email": "kaimanimarine@gmail.com",
      "description": "Get out into the wild side, pass the Belize Barrier reef and hunt the big ones.  Regular catches include kingfish, tuna, wahoo, barracuda and more!!  Your guide will be an OG Toledo firsherman born and bred fishing these indulgent southern waters, you are guaranteed an experience of a lifetime!!",
      "tourLocation": "Sapodilla Cayes",
      "cancellationPolicy": "72 hours full refund, under 72 hours 50% refund",
      "startTimes": "6:00 am",
      "duration": "12 hours",
      "cost": "400",
      "additionalFees": "$10 per person park fee to be paid at the ranger station",
      "maxCapacity": "4",
      "minCapacity": "1",
      "keywords": ["deep-sea fishing", "fishing", "sustainable tours"],
      "image": "https://www.touropia.com/gfx/d/best-beaches-in-belize/the_split_caye_caulker.jpg?v=1980b180cfa3799eabe92a233ddc546a"
  },
  {
      // "_objectid": 3,
      "tourName": "Creole Drumming and Cooking Immersion",
      "tourOperator": "Maroon Creole Drum School",
      "departureLocation": {
          "street": "Joe Taylor Creek Road",
          "street2": "",
          "city": "Punta Gorda",
          "state": "Toledo",
          "zip": "00000"
      },
      "email": "pricklypeartat2@hotmail.com ",
      "description": "Think you have no rhythm?  Think again, drumming master Emmeth Young brings out the beat in anyone!!  You will be swayed into these Afro-Caribbean rhythms and then seduced by Miss Jill's firehearth cooking where you can try your hand at authentic Creole cooking.  You will end the day with a satisfied belly and spirit!",
      "tourLocation": "Maroon Creole Drum School",
      "cancellationPolicy": "72 hours full refund, under 72 hours 50% refund",
      "startTimes": "10:00 am, 4:00 pm",
      "duration": "3 hours",
      "cost": "55",
      "additionalFees": "none",
      "maxCapacity": "22",
      "minCapacity": "2",
      "keywords": ["cultural immersion", "sustainable tours", "Creole", "Belize culture", "drumming", "cooking"],
      "image": "https://www.touropia.com/gfx/d/best-beaches-in-belize/goffs_caye_beach.jpg?v=1adfd6e5ddbae978554a8e75b696c092"
  },
  {
      // "_objectid": 4,
      "tourName": "Mayan Cultural Immersion",
      "tourOperator": "The Living Maya Experience",
      "departureLocation": {
          "street": "Southern Highway, Big Falls bridge",
          "street2": "",
          "city": "Big Falls",
          "state": "Toledo",
          "zip": "00000"
      },
      "email": "livingmayaexperience@gmail.com",
      "description": "A cultural home visit that offers guests a fascinating glimpse into a fast disappearing in which the local Kek'chi Mayas depend upon the forest and found everything in it to satisfy their needs from food to furniture to medicine.",
      "tourLocation": "Big Falls",
      "cancellationPolicy": "72 hours full refund, under 72 hours 50% refund",
      "startTimes": "8:00 am, 11:00 am, 2:00 pm, 5:00 pm",
      "duration": "3 hours",
      "cost": "40",
      "additionalFees": "none",
      "maxCapacity": "16",
      "minCapacity": "1",
      "keywords": ["cultural immersion", "Mayan", "cooking", "Belizean culture", "traditional tours", "sustainable tours"],
      "image": "https://www.touropia.com/gfx/d/best-beaches-in-belize/south_water_caye_beach.jpg?v=b1fd1c71da33a0a91cdb768b6c938c8f"
  }
  ]
  

db.Tours
  .remove({})
  .then(() => db.Tours.collection.insertMany(toursSeed))
  .then(data => {
    console.log(data.result.n + " records inserted! Have fun storming the castle!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
