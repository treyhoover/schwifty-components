export const createColorizer = componentName => n => ({ theme, skin, inverted }) => inverted ?
  theme[componentName].skins[skin.toLowerCase()][9 - n] :
  theme[componentName].skins[skin.toLowerCase()][n];
