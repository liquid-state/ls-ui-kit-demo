const path = require('path');
const fs = require('fs');
const {injectBabelPlugin} = require('react-app-rewired');
const rewireLess = require('react-app-rewire-less');

// Load package.json
const pkgPath = path.join(__dirname, 'package.json');
const pkg = fs.existsSync(pkgPath) ? require(pkgPath) : {};

let theme = {};
if (pkg.theme && typeof (pkg.theme) === 'string') {
  let cfgPath = pkg.theme;
  const getThemeConfig = require(cfgPath);
  theme = getThemeConfig();
} else if (pkg.theme && typeof (pkg.theme) === 'object') {
  theme = pkg.theme;
}


/* config-overrides.js */
module.exports = function override(config, env) {
  // config = rewireLess(config, env);
  // with loaderOptions
  config = injectBabelPlugin([
    "import",
    {
      "libraryName": "antd",
      "style": true
    }
  ], config);
  const loaderOptions = {modifyVars: theme};
  config = rewireLess.withLoaderOptions(loaderOptions)(config, env);
  return config;
}