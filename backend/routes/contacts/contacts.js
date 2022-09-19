const routes = require("express").Router();
const { route } = require("..");
const {
  getAllContacts,
  getContactById,
} = require("../../controllers/contacts/contacts");

routes.get("/", getAllContacts);
routes.get("/:id", getContactById);

module.exports = routes;
