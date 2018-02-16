const borderRadius = require("./border-radius");
const borderWidths = require("./border-widths");
const boxShadow = require("./box-shadow");
const breakpoints = require("./breakpoints");
const fontFamily = require("./font-family");
const heights = require("./heights");
const letterSpacing = require("./letter-spacing");
const lineHeight = require("./line-height");
const maxWidths = require("./max-widths");
const colors = require("./colors");
const spacing = require("./spacing");
const typeScale = require("./type-scale");
const typography = require("./typography");
const widths = require("./widths");

module.exports = Object.assign({},
  { breakpoints },
  colors,
  borderRadius,
  borderWidths,
  boxShadow,
  fontFamily,
  heights,
  letterSpacing,
  lineHeight,
  maxWidths,
  spacing,
  typeScale,
  typography,
  widths
);
