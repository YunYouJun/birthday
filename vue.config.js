/**
 * @type {import('@vue/cli-service').ProjectOptions}
 */
module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/birthday/" : "/",
  pages: {
    index: {
      entry: "src/main.ts",
      title: "Happy Birthday!",
    },
  },
};
