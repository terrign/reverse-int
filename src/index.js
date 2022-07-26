module.exports = function reverse (n) {
    const nStr = Math.abs(n) + ''
    let nArr = nStr.split('')
    return +nArr.reverse().join('')
    }