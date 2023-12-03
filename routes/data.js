const express = require("express");
const mongoose = require("mongoose");
const dataModel = require("../models/data_db");

const dataRouter = express();

dataRouter.get("/entry-log", async (req, res) => {
    try {
      const allData = await dataModel.find({});
  
      res.json(allData);

    } catch (error) {

      res.status(500).json({ message: error.message });
      
    }
  });

module.exports = dataRouter ;
