function getBrightness(hex: string): number {
  const r = parseInt(hex.substring(1, 2), 16);
  const g = parseInt(hex.substring(3, 2), 16);
  const b = parseInt(hex.substring(4, 2), 16);
  return (r * 299 + g * 587 + b * 114) / 1000;
}

export default {
  getBrightness,
};
