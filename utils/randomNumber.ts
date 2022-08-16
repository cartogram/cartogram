export function randomNumber(min, max, correction = 0) {
  return Math.floor((Math.random() - correction) * (max - min + 1)) + min;
}
