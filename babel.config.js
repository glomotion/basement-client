// babel.config.js
module.exports = (api) => {
  let plugins = [];

  // @NOTE: "emotion" plugin MUST be the very first plugin...
  if (api.env() === "production") {
    plugins = [["@emotion", { sourceMap: false }], ...plugins];
  } else {
    plugins = [["@emotion", { sourceMap: true }], ...plugins];
  }

  return {
    presets: [["@babel/preset-react"], "@babel/preset-env"],
    plugins,
  };
};
