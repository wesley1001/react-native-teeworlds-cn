Date.prototype.toCustomString = function() {
  return `${this.getFullYear()}-${this.getMonth()+1}-${this.getDate()}`;
}
