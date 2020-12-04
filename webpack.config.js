const path = require("path");
const isProd = process.env.NODE_ENV == "production";
const HtmlWebpackPlugin = require("html-webpack-plugin");
const sveltePreprocess = require("svelte-preprocess");

module.exports = {
  entry: {
    main: "./index.ts",
  },
  output: {
    filename: isProd ? "[name]-bundle-[contenthash].js" : "[name]-bundle.js",
    path: path.resolve(__dirname, "dist"),
    publicPath: "/dist/",
  },
  resolve: {
    extensions: [".mjs", ".ts", ".tsx", ".js", ".svelte"],
    modules: [path.resolve("./"), path.resolve("./node_modules")],
  },
  mode: isProd ? "production" : "development",
  module: {
    rules: [
      {
        test: /\.(html|svelte)$/,
        use: [
          { loader: "babel-loader" },
          {
            loader: "svelte-loader",
            options: {
              emitCss: true,
              preprocess: sveltePreprocess({})
            },
          },
        ],
      },
      {
        test: /\.(t|j)sx?$/,
        exclude: /node_modules/,
        loader: "babel-loader",
      },
    ],
  },
  plugins: [new HtmlWebpackPlugin({ template: "default.htm" })],
};
