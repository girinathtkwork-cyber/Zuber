module.exports = function (api) {
  api.cache(true);
  return {
    presets: [
      ["babel-preset-expo", { jsxImportSource: "nativewind" }],
      "nativewind/babel",
    ],
  };
};


// Bable is a JS compiler/transpiler
// it conversts modern JS, JSX, tsx, nativeWind syntax into code react native can understand ( Without this className wont work )