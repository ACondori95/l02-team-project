const mongoose = require("mongoose");

const contactSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
    },
    lastName: {
      type: String,
    },
    email: {
      type: String,
    },
    favouriteColor: {
      type: String,
    },
    birthDate: {
      type: Date,
    },
  },
  {
    collection: "contacts",
  }
);

module.exports = mongoose.model("contacts", contactSchema);
