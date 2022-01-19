const axios = require("axios");

exports.fetch = async () => {
  const response = await axios.get("https://api.trendyol.com/sapigw/brands");
  return response.data;
};
