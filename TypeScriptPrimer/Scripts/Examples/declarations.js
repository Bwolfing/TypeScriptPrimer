function functionScoping(performInitialize) {
    if (performInitialize) {
        var x = 10;
    }
    return x;
}
logToScreen("functionScoping():\n" + functionScoping(false) + "\n" + functionScoping(true));
function redeclareVariables() {
    var count = 0;
    for (var i = 0; i < 5; i++, count++) {
        if (count >= 2) {
            break;
        }
        logToScreen("Outer loop: i = " + i);
        for (var i = 0; i < 4; i++) {
            logToScreen(" &nbsp; &nbsp; Inner loop: i = " + i);
        }
    }
}
logToScreen("redclareVariables():");
redeclareVariables();
function valueCaptureWrong() {
    for (var i = 0; i < 10; i++) {
        setTimeout(function () { logToScreen("valueCaptureWrong(): " + i); }, 100 * i);
    }
}
logToScreen("valueCaptureWrong():");
valueCaptureWrong();
function shadowingExample(useParameter, returnVal) {
    if (!useParameter) {
        var returnVal_1 = 10;
        return returnVal_1;
    }
    return returnVal;
}
logToScreen("shadowingExample():\n" + shadowingExample(true, 35) + "\n" + shadowingExample(false, 500));
function shadowingExampleWithLoop() {
    for (var i = 0; i < 5; i++) {
        logToScreen("Outer loop: i = " + i);
        for (var i_1 = 0; i_1 < 4; i_1++) {
            logToScreen(" &nbsp; &nbsp; &nbsp; Inner loop: i = " + i_1);
        }
    }
}
logToScreen("shadowingExampleWithLoop():");
shadowingExampleWithLoop();
function valueCaptureCorrect() {
    var _loop_1 = function (i) {
        setTimeout(function () { logToScreen("valueCaptureCorrect(): " + i); }, i * 100);
    };
    for (var i = 0; i < 10; i++) {
        _loop_1(i);
    }
}
setTimeout(function () { valueCaptureCorrect(); }, 2000);
