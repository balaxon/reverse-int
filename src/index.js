module.exports = function reverse (n) {
  itog = Math.abs(n);
  return itog.toString().split("").reverse().join("");
}
