const axios = require("axios");

exports.fetchName = async (name) => {
  const response = await axios.get(
    `https://api.trendyol.com/sapigw/brands/by-name?name={${name}}`
  );
  return response.data;
};
