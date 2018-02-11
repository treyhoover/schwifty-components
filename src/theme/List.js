import * as colors from "./colors";

const gray = Object.values(colors.gray).slice(0, 10);
const red = Object.values(colors.red).slice(0, 10);
const orange = Object.values(colors.orange).slice(0, 10);
const yellow = Object.values(colors.yellow).slice(0, 10);
const green = Object.values(colors.green).slice(0, 10);
const blue = Object.values(colors.blue).slice(0, 10);
const white = Object.values(colors.black).slice(0, 10);

const black = [
  "#ffffff",
  colors.black["50"],
  colors.black["100"],
  colors.black["200"],
  colors.black["300"],
  colors.black["400"],
  colors.black["500"],
  colors.black["700"],
  colors.black["800"],
  colors.black["900"],
];

export default {
  skins: {
    gray,
    red,
    orange,
    yellow,
    green,
    blue,
    black,
    white,
    primary: blue,
    secondary: black,
  },
};
