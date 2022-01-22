const axios = require("axios");

exports.fetchCategory = async () => {
  const response = await axios.get("https://api.trendyol.com/sapigw/product-categories");
  return response.data;
};
