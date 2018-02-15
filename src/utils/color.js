// N is 0-1, for 0% (index 0 of the color palette) to 100% (last index)
export const color = n => ({ theme, skin, inverted }) => {
  const pct = inverted ? 1 - n : n;
  const index = Math.round(pct * (theme.skins[skin].length - 1));

  return theme.skins[skin][index];
};
