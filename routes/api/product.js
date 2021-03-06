const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const secrets = require("../../config/secrets");

const { google } = require("googleapis");
const OAuth2 = google.auth.OAuth2;

// LOAD RECIPE MODEL
const Product = require("../../models/Product");

const validateInput = require("../../form-validation");

router.get("/:id", (req, res) => {
  // console.log(req.params.id);
  Product.findById(req.params.id)

    .then(product => res.json(product))
    .catch(err => res.status(404).json({ noproductfound: "No product found" }));
});

router.post("/add", (req, res) => {
  let specs = [];
  let productName = req.body.selectedPath[0].productName;
  let slug = req.body.selectedPath[0].slug;
  let totalPrice = req.body.totalPrice;
  let productId = req.body.productId;
  let variationId = req.body.variationId;
  let pathIndex = req.body.pathIndex;
  let customText = req.body.customText;
  let imageNumber = req.body.imageNumber;
  let hasCustomText = req.body.hasCustomText;

  for (i = 1; i < req.body.selectedPath.length; i++) {
    let info;
    if (req.body.selectedPath[i].selectedFieldProps.info) {
      info = req.body.selectedPath[i].selectedFieldProps.info;
    }
    specs.push({
      title: req.body.selectedPath[i].selectedFieldProps.title,
      name: req.body.selectedPath[i].selectedFieldProps.name,
      price: req.body.selectedPath[i].selectedFieldProps.price,

      info: info
    });
  }

  const newProduct = new Product({
    productName: productName,
    slug: slug,
    totalPrice: totalPrice,
    specs: specs,
    productId: productId,
    variationId: variationId,
    pathIndex: pathIndex,
    customText: customText,
    imageNumber: imageNumber,
    hasCustomText: hasCustomText
  });

  newProduct.save(function(err, product) {
    res.send(product.id);
  });
});

router.post("/email", (req, res) => {
  let product;
  let buildData = [];

  const { errors, isValid } = validateInput(req.body.userInfo);

  if (!isValid) {
    return res.json({ errors: errors, success: false });
  } else {
    product = req.body.buildData.productName;

    for (i = 0; i < req.body.buildData.specs.length; i++) {
      buildData.push("<li>" + req.body.buildData.specs[i].name + "</li>");
    }

    // console.log(buildData);

    //Send email
    const oauth2Client = new OAuth2(
      secrets.clientId, // ClientID
      secrets.clientSecret, // Client Secret
      "https://developers.google.com/oauthplayground" // Redirect URL
    );

    oauth2Client.setCredentials({
      refresh_token: secrets.refreshToken
    });
    const accessToken = oauth2Client.getAccessToken();

    let smtpTransport = nodemailer.createTransport({
      service: "gmail",
      secure: false,
      auth: {
        type: "OAuth2",
        user: secrets.email,
        clientId: secrets.clientId,
        clientSecret: secrets.clientSecret,
        refreshToken: secrets.refreshToken,
        accessToken: accessToken
      }
    });

    const mailOptions = {
      from: secrets.email,
      to: secrets.email,
      subject: "BUILD YOUR OWN SUBMISSION",
      html:
        "<div><h3>" +
        req.body.userInfo.name +
        "</h3><h4>" +
        req.body.userInfo.email +
        "</h4><h4>" +
        product +
        "</h4><ul>" +
        buildData.toString() +
        "</ul><p>" +
        req.body.userInfo.message +
        "</p></div>"
    };

    smtpTransport.sendMail(mailOptions, (error, response) => {
      error
        ? res.json({
            errors: { smtp: true },
            success: false
          })
        : res.json({ errors: { smtp: false }, success: true });
      smtpTransport.close();
    });
  }
});

module.exports = router;
