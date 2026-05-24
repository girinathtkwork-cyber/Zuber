const { getDefaultConfig } = require("expo/metro-config");
const { withNativeWind } = require("nativewind/metro");

const config = getDefaultConfig(__dirname);

module.exports = withNativeWind(config, {
  input: "./global.css",
});
//  metro: the system that collects all files and prepares the app to run.

// NativeWind uses:
// global.css
// But React Native normally doesn't support CSS files directly like web apps.
// So Metro is configured to:
// detect global.css
// process Tailwind styles
// connect them to NativeWind