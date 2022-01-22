const jwt = require("jsonwebtoken");
const CustomAPIError = require("../errors/custom-error");
// const Joi = require("joi");
const Joi = require("@hapi/joi");
const axios = require("axios");
const brand = require("../trendyol/trendyol_GetAll");
const brandName = require("../trendyol/trendyol_GetOne");
const category =require("../trendyol/trendyol_GetCategory");
const category_single=require("../trendyol/trendyol_GetCategoryOne");

const login = async (req, res) => {
  const schema = Joi.object({
    username: Joi.string().required(),
    password: Joi.number().required(),
  });

  const check = schema.validate(req.body);

  if (check.error) {
    throw new CustomAPIError("OPPPS!! Something Wrong", 401);
    
  }

  if (!check.error) {
    const { username, password } = req.body;
    if (username === "ADMIN" && password === "1234") {
      const id = Math.floor(Math.random() * 100);
      const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
        expiresIn: "30d",
      });
      res.status(200).json({ msg: "User Created", token });
    }
  }
};

const dashboard = async (req, res) => {
  const response = await brand.fetch();
  let say_hello = req.user.username;
  res.status(200).json({
    msg: `Merhaba ${say_hello} İŞTE SİTEMİZDEKİ TÜM MARKALAR... `,
    secret: response,
  });
};

const dashboard_marka = async (req, res) => {
  let name = req.user.name;
  let say_hello = req.user.username;
  const response_name = await brandName.fetchName(name);
  res.status(200).json({
    msg: `MERHABA ${say_hello} İŞTE ARADIĞIN MARKANIN TÜM ÜRÜNLERİ...`,
    secret: response_name,
  });
};

const dashboard_category = async (req, res) => {
  const response_category = await category.fetchCategory();
  let say_hello = req.user.username;
  res.status(200).json({
    msg: `Merhaba ${say_hello} İŞTE SİTEMİZDEKİ TÜM KATEGORİLER... `,
    secret: response_category,
  });
};

const dashboard_categoryOne = async (req, res) => {
  let name = req.user.name;
  let say_hello = req.user.username;
  const response_id = await category_single.categorySingle(name);
  res.status(200).json({
    msg: `MERHABA ${say_hello} İŞTE ARADIĞIN SINGLE KATEGORİNİN TÜM ÜRÜNLERİ...`,
    secret: response_id,
  });
};



module.exports = {
  login,
  dashboard,
  dashboard_marka,
  dashboard_category,
  dashboard_categoryOne
};
