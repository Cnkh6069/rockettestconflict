function generateRandomNumber(minValue = 0, maxValue = 100) {
  return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
}

export default generateRandomNumber;
