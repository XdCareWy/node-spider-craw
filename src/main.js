// 入口文件中引入
require("@babel/register")({
  presets: ["@babel/preset-env"],
  plugins: ["@babel/plugin-transform-runtime"]
});
module.exports = require("./index.js");
