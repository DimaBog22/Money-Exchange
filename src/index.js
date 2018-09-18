// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
    if (currency > 10000) {
        return { error: "You are rich, my friend! We don't have so much coins for exchange" };
    } 
    if (currency <= 0) {
        return {};
    } 
   
    const H = 50;
    const Q = 25;
    const D = 10;
    const N = 5;
    const P = 1;
    let result = {};

    let countH = 0;
    let countQ = 0;
    let countD = 0;
    let countN = 0;
    let countP = 0;

    while (currency != 0) {
        if (currency >= H) {
            currency = currency - H;
            countH++;
            continue;
        }
        if (currency >= Q) {
            currency = currency - Q;
            countQ++;
            continue;
        }
        if (currency >= D) {
            currency = currency - D;
            countD++;
            continue;
        }
        if (currency >= N) {
            currency = currency - N;
            countN++;
            continue;
        }
        if (currency >= P) {
            currency = currency - P;
            countP++;
            continue;
        }
    }

    if (countH > 0) {
        result.H = countH;
    }
    if (countQ > 0) {
        result.Q = countQ;
    }
    if (countD > 0) {
        result.D = countD;
    }
    if (countN > 0) {
        result.N = countN;
    }
    if (countP > 0) {
        result.P = countP;
    }    

    return result;
}
