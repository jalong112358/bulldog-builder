const express = require("express");
const axios = require("axios");
const secrets = require("./config/secrets");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
// const nodemailer = require("nodemailer");
// const validateInput = require("./form-validation");
const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

const path = require("path");
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

const db = require("./config/secrets").mongoURI;

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true
    });
    console.log("MongoDB Connected...");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

connectDB();

app.use("/api/product", require("./routes/api/product"));

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
