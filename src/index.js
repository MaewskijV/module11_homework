function getPercents(percent, number) {
    let result = number * (percent / 100);
    if (isNaN(percent) || typeof percent === 'string' || isNaN(number) || typeof number === 'string') {
        result = "Данные не верны";
    }
    return result;
}

module.exports = getPercents;