const { override, useBabelRc} = require("customize-cra");

// config-overrides.js
module.exports = override(
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useBabelRc()
  );
  
