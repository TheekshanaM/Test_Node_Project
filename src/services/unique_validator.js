const mongoose = require("mongoose");
module.exports = {
  async findUnique(model, itemArray) {
    for (const element of itemArray) {
      let item = await model.findOne(element).exec();
      if (item) {
        return Object.keys(element) + " already exist";
      }
    }
    return null;
  },

  async findUniqueForUpdate(id, model, itemArray) {
    for (const element of itemArray) {
      let items = await model.find(element).exec();
      for (const item of items) {
        if (item._id != id) {
          return Object.keys(element) + " already exist";
        }
      }
    }
    return null;
  },
};
