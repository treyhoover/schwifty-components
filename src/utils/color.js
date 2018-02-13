export const color = n => ({ theme, skin, inverted }) => inverted ?
  theme.skins[skin][9 - n] :
  theme.skins[skin][n];
