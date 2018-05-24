const filter = {
  // 为money添加单位
  addMoneyUnit(money) {
    return `${money}元`;
  },
  formatMoney(value, quentity) {
    if (!quentity) quentity = 1;
    return '¥' + (value * quentity).toFixed(2) + '元';
  }
};
export default filter;
