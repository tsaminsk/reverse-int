module.exports = function reverse (n) {
    // return parseInt(Math.abs(n).toString().split('').reverse().join(''))
    n = Math.abs(n)
    let hundreds = Math.trunc(n / 100)
    let tens = Math.trunc(n / 10) % 10
    return (n % 10) * 100 + tens * 10 + hundreds
}
