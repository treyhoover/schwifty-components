export const createColorizer = componentName => n => ({ theme, skin, inverted }) => inverted ?
  theme[componentName].skins[skin][9 - n] :
  theme[componentName].skins[skin][n];
