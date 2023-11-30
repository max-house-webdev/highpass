const path = require("path");

const components = "src/components";
const assets = "src/assets";

module.exports = {
  webpack: {
    alias: {
      "@src": path.resolve(__dirname, "src"),
      "@images": path.resolve(__dirname, `${assets}/images`),

      "@core": path.resolve(__dirname, "src/core"),
      "@features": path.resolve(__dirname, "src/features"),
      "@hooks": path.resolve(__dirname, "src/hooks"),
      "@pages": path.resolve(__dirname, "src/pages"),

      "@components": path.resolve(__dirname, `${components}`),

      "@mh-utils": path.resolve(__dirname, "src/mh-utils"),
    },
  },
};
