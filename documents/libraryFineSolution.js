// variables
const onTime = 'on time';
const dailyFee = 'daily';
const monthlyFee = 'monthly';
const fixedFee = 'fixed';
let feesToApply = [onTime, 0];

let isItLate = (d1, m1, y1, d2, m2, y2) => {
    return y1< y2 ?
        false
        : (y1 > y2) ?
            true 
            : (y1 == y2) && (m1 > m2) ?
                true 
                : (m1 == m2) && (d1 > d2) ?
                    true
                    : false
}

let determineFee = (d1, m1, y1, d2, m2, y2) => {
    y1 > y2 ?
        feesToApply = [fixedFee, 0]
        : m1 > m2 ?
            feesToApply = [monthlyFee, (m1 - m2)]
            : d1 > d2 ?
                feesToApply = [dailyFee, (d1 - d2)]
                : feesToApply = 'is this right?'
}

let applyFee = feeArray => {
    switch(feeArray[0]) {
        case dailyFee:
            return 15 * feeArray[1];
        case monthlyFee:
            return 500 * feeArray[1];
        case fixedFee:
            return 10000;
        default:
            return 0;
    }
}

function libraryFineOriginal(d1, m1, y1, d2, m2, y2) {
    isItLate(d1, m1, y1, d2, m2, y2) ?
        determineFee(d1, m1, y1, d2, m2, y2)
        : feesToApply[0] = onTime;

    return applyFee(feesToApply);
}


// Complete the libraryFine function below.

function libraryFine(d1, m1, y1, d2, m2, y2) {
    return y1 < y2 ?
        0
        : y1 > y2 ?
            10000
            : (y1 == y2) && (m1 > m2) ?
                500 * (m1 - m2)
                : (y1 == y2) && (m1 == m2) && (d1 > d2) ?
                    15 * (d1 - d2)
                    : 0

    // === *** OR *** === //

    // if (y1 < y2){
    //     return 0;
    // } else if (y1 > y2) {
    //     return 10000
    // } else if ((y1 == y2) && (m1 > m2)){
    //     return 500 * (m1 - m2);
    // } else if ((y1 == y2) && (m1 == m2) && (d1 > d2)){
    //     return 15 * (d1 - d2)
    // } else {
    //     return 0
    // }
}