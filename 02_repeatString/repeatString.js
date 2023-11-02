const repeatString = function(repeatSentence, numTimes) {
    let i;
    let strSpace = "";
    const randomTimes = Math.floor(Math.random());
    for (i = 0; i < numTimes; i++){
        if (numTimes < 0) {
            break;
        }
        strSpace+=repeatSentence;
    }
    if (numTimes < 0) {
        return "ERROR";
    } else {
    return strSpace;
}
};

// Do not edit below this line
module.exports = repeatString;
