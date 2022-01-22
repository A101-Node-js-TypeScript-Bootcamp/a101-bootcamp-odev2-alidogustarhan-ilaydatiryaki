const axios = require("axios");

exports.categorySingle = async (name) => {
  const response = await axios.get(
    `https://api.trendyol.com/sapigw/product-categories/${name}/attributes`
  );
  return response.data;
};
