function moneyConvert (money) {
  return String('$' + money.toFixed(2));
}

module.exports = moneyConvert;
