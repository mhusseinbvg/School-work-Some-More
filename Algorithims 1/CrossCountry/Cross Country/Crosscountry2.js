//arrays for the restore method
var firstguyArr = [];
var secondguyArr = [];
var thirdguyArr = [];
var fourthguyArr = [];
var fithguyArr = [];

function update1() {
    firstguyArr = new Array();
    var firstName = document.getElementById("firstguy,firstname").value;
    var lastName = document.getElementById("firstguy,lastname").value;
    var totalTime = document.getElementById("firstguy,totaltime").value;
    var firstlap = document.getElementById("firstguy,firstlap").value;
    var secondlap = document.getElementById("firstguy,secondlap").value;

    var name = lastName + "," + firstName;

    var splitOne = firstlap;
    var splitTwo = convertToSeconds(secondlap) - convertToSeconds(firstlap);
    var splitThree = convertToSeconds(totalTime) - convertToSeconds(secondlap);

    if (isNaN(splitTwo) || isNaN(splitThree)) {
        alert("Please enter the numbers correctly");
    } else {
        firstguyArr.push(firstName);
        firstguyArr.push(lastName);
        firstguyArr.push(firstlap);
        firstguyArr.push(secondlap);
        firstguyArr.push(totalTime);

        convertToMinutes(splitTwo);
        convertToMinutes(splitThree);

        document.getElementById("firstRunnerName").innerHTML = name;
        document.getElementById("firstRunnerSplit1").innerHTML = splitOne;
        document.getElementById("firstRunnerSplit2").innerHTML = convertToMinutes(splitTwo);
        document.getElementById("firstRunnerSplit3").innerHTML = convertToMinutes(splitThree);
        document.getElementById("FirstRunnerTotalTime").innerHTML = totalTime;
    }
}

function restore1() {
    if (firstguyArr.length == 0) {
        alert("nothing to restore")
    } else if (firstguyArr[0].length == 0) {
        alert("end of stack")
    } else {
        document.getElementById("firstguy,totaltime").value = firstguyArr.pop();
        document.getElementById("firstguy,secondlap").value = firstguyArr.pop();
        document.getElementById("firstguy,firstlap").value = firstguyArr.pop();
        document.getElementById("firstguy,lastname").value = firstguyArr.pop();
        document.getElementById("firstguy,firstname").value = firstguyArr.pop();
    }
}

function delete1() {
    document.getElementById("firstRunnerName").innerHTML = "";
    document.getElementById("firstRunnerSplit1").innerHTML = "";
    document.getElementById("firstRunnerSplit2").innerHTML = "";
    document.getElementById("firstRunnerSplit3").innerHTML = "";
    document.getElementById("FirstRunnerTotalTime").innerHTML = "";
}

function update2() {
    secondguyArr = new Array();
    var secondName = document.getElementById("secondguy,firstname").value;
    var lastName = document.getElementById("secondguy,lastname").value;
    var totalTime = document.getElementById("secondguy,totaltime").value;
    var firstlap = document.getElementById("secondguy,secondlap").value;
    var secondlap = document.getElementById("secondguy,secondlap").value;

    var name = lastName + "," + secondName;

    var splitOne = firstlap;
    var splitTwo = convertToSeconds(secondlap) - convertToSeconds(firstlap);
    var splitThree = convertToSeconds(totalTime) - convertToSeconds(secondlap);

    if (isNaN(splitTwo) || isNaN(splitThree)) {
        alert("Please enter the numbers correctly");
    } else {
        secondguyArr.push(secondName);
        secondguyArr.push(lastName);
        secondguyArr.push(firstlap);
        secondguyArr.push(secondlap);
        secondguyArr.push(totalTime);

        convertToMinutes(splitTwo);
        convertToMinutes(splitThree);

        document.getElementById("secondRunnerName").innerHTML = name;
        document.getElementById("secondRunnerSplit1").innerHTML = splitOne;
        document.getElementById("secondRunnerSplit2").innerHTML = convertToMinutes(splitTwo);
        document.getElementById("secondRunnerSplit3").innerHTML = convertToMinutes(splitThree);
        document.getElementById("SecondRunnerTotalTime").innerHTML = totalTime;
    }
}

function restore2() {
    if (secondguyArr.length == 0) {
        alert("nothing to restore")
    } else if (secondguyArr[0].length == 0) {
        alert("end of stack")
    } else {
        document.getElementById("secondguy,totaltime").value = secondguyArr.pop();
        document.getElementById("secondguy,secondlap").value = secondguyArr.pop();
        document.getElementById("secondguy,secondlap").value = secondguyArr.pop();
        document.getElementById("secondguy,lastname").value = secondguyArr.pop();
        document.getElementById("secondguy,secondname").value = secondguyArr.pop();
    }
}

function delete2() {
    document.getElementById("secondRunnerName").innerHTML = "";
    document.getElementById("secondRunnerSplit1").innerHTML = "";
    document.getElementById("secondRunnerSplit2").innerHTML = "";
    document.getElementById("secondRunnerSplit3").innerHTML = "";
    document.getElementById("SecondRunnerTotalTime").innerHTML = "";
}

function update3() {
    thirdguyArr = new Array();
    var firstName = document.getElementById("thirdguy,firstname").value;
    var lastName = document.getElementById("thirdguy,lastname").value;
    var totalTime = document.getElementById("thirdguy,totaltime").value;
    var firstlap = document.getElementById("thirdguy,firstlap").value;
    var secondlap = document.getElementById("thirdguy,secondlap").value;

    var name = lastName + "," + firstName;

    var splitOne = firstlap;
    var splitTwo = convertToSeconds(secondlap) - convertToSeconds(firstlap);
    var splitThree = convertToSeconds(totalTime) - convertToSeconds(secondlap);

    if (isNaN(splitTwo) || isNaN(splitThree)) {
        alert("Please enter the numbers correctly");
    } else {
        thirdguyArr.push(thirdName);
        thirdguyArr.push(lastName);
        thirdguyArr.push(firstlap);
        thirdguyArr.push(secondlap);
        thirdguyArr.push(totalTime);

        convertToMinutes(splitTwo);
        convertToMinutes(splitThree);

        document.getElementById("thirdRunnerName").innerHTML = name;
        document.getElementById("thirdRunnerSplit1").innerHTML = splitOne;
        document.getElementById("thirdRunnerSplit2").innerHTML = convertToMinutes(splitTwo);
        document.getElementById("thirdRunnerSplit3").innerHTML = convertToMinutes(splitThree);
        document.getElementById("ThirdRunnerTotalTime").innerHTML = totalTime;
    }
}

function restore3() {
    if (thirdguyArr.length == 0) {
        alert("nothing to restore")
    } else if (thirdguyArr[0].length == 0) {
        alert("end of stack")
    } else {
        document.getElementById("thirdguy,totaltime").value = thirdguyArr.pop();
        document.getElementById("thirdguy,secondlap").value = thirdguyArr.pop();
        document.getElementById("thirdguy,firstlap").value = thirdguyArr.pop();
        document.getElementById("thirdguy,lastname").value = thirdguyArr.pop();
        document.getElementById("thirdguy,firstname").value = thirdguyArr.pop();
    }
}

function delete3() {
    document.getElementById("thirdRunnerName").innerHTML = "";
    document.getElementById("thirdRunnerSplit1").innerHTML = "";
    document.getElementById("thirdRunnerSplit2").innerHTML = "";
    document.getElementById("thirdRunnerSplit3").innerHTML = "";
    document.getElementById("ThirdRunnerTotalTime").innerHTML = "";
}

function update4() {
    fourthguyArr = new Array();
    var firstName = document.getElementById("fourthguy,firstname").value;
    var lastName = document.getElementById("fourthguy,lastname").value;
    var totalTime = document.getElementById("fourthguy,totaltime").value;
    var firstlap = document.getElementById("fourthguy,firstlap").value;
    var secondlap = document.getElementById("fourthguy,secondlap").value;

    var name = lastName + "," + firstName;

    var splitOne = firstlap;
    var splitTwo = convertToSeconds(secondlap) - convertToSeconds(firstlap);
    var splitThree = convertToSeconds(totalTime) - convertToSeconds(secondlap);

    if (isNaN(splitTwo) || isNaN(splitThree)) {
        alert("Please enter the numbers correctly");
    } else {
        fourthguyArr.push(firstName);
        fourthguyArr.push(lastName);
        fourthguyArr.push(firstlap);
        fourthguyArr.push(secondlap);
        fourthguyArr.push(totalTime);

        convertToMinutes(splitTwo);
        convertToMinutes(splitThree);

        document.getElementById("fourthRunnerName").innerHTML = name;
        document.getElementById("fourthRunnerSplit1").innerHTML = splitOne;
        document.getElementById("fourthRunnerSplit2").innerHTML = convertToMinutes(splitTwo);
        document.getElementById("fourthRunnerSplit3").innerHTML = convertToMinutes(splitThree);
        document.getElementById("FourthRunnerTotalTime").innerHTML = totalTime;
    }
}

function restore4() {
    if (fourthguyArr.length == 0) {
        alert("nothing to restore")
    } else if (fourthguyArr[0].length == 0) {
        alert("end of stack")
    } else {
        document.getElementById("fourthguy,totaltime").value = fourthguyArr.pop();
        document.getElementById("fourthguy,secondlap").value = fourthguyArr.pop();
        document.getElementById("fourthguy,firstlap").value = fourthguyArr.pop();
        document.getElementById("fourthguy,lastname").value = fourthguyArr.pop();
        document.getElementById("fourthguy,firstname").value = fourthguyArr.pop();
    }
}

function delete4() {
    document.getElementById("fourthRunnerName").innerHTML = "";
    document.getElementById("fourthRunnerSplit1").innerHTML = "";
    document.getElementById("fourthRunnerSplit2").innerHTML = "";
    document.getElementById("fourthRunnerSplit3").innerHTML = "";
    document.getElementById("FourthRunnerTotalTime").innerHTML = "";
}

function update5() {
    fithguyArr = new Array();
    var firstName = document.getElementById("fithguy,firstname").value;
    var lastName = document.getElementById("fithguy,lastname").value;
    var totalTime = document.getElementById("fithguy,totaltime").value;
    var firstlap = document.getElementById("fithguy,firstlap").value;
    var secondlap = document.getElementById("fithguy,secondlap").value;

    var name = lastName + "," + firstName;

    var splitOne = firstlap;
    var splitTwo = convertToSeconds(secondlap) - convertToSeconds(firstlap);
    var splitThree = convertToSeconds(totalTime) - convertToSeconds(secondlap);

    if (isNaN(splitTwo) || isNaN(splitThree)) {
        alert("Please enter the numbers correctly");
    } else {
        fithguyArr.push(firstName);
        fithguyArr.push(lastName);
        fithguyArr.push(firstlap);
        fithguyArr.push(secondlap);
        fithguyArr.push(totalTime);

        convertToMinutes(splitTwo);
        convertToMinutes(splitThree);

        document.getElementById("fithRunnerName").innerHTML = name;
        document.getElementById("fithRunnerSplit1").innerHTML = splitOne;
        document.getElementById("fithRunnerSplit2").innerHTML = convertToMinutes(splitTwo);
        document.getElementById("fithRunnerSplit3").innerHTML = convertToMinutes(splitThree);
        document.getElementById("FithRunnerTotalTime").innerHTML = totalTime;
    }
}

function restore5() {
    if (fithguyArr.length == 0) {
        alert("nothing to restore")
    } else if (fithguyArr[0].length == 0) {
        alert("end of stack")
    } else {
        document.getElementById("fithguy,totaltime").value = fithguyArr.pop();
        document.getElementById("fithguy,secondlap").value = fithguyArr.pop();
        document.getElementById("fithguy,firstlap").value = fithguyArr.pop();
        document.getElementById("fithguy,lastname").value = fithguyArr.pop();
        document.getElementById("fithguy,firstname").value = fithguyArr.pop();
    }
}

function delete5() {
    document.getElementById("fithRunnerName").innerHTML = "";
    document.getElementById("fithRunnerSplit1").innerHTML = "";
    document.getElementById("fithRunnerSplit2").innerHTML = "";
    document.getElementById("fithRunnerSplit3").innerHTML = "";
    document.getElementById("FithRunnerTotalTime").innerHTML = "";
}

function convertToSeconds(tobeconverted) {
    var position = tobeconverted.indexOf(':');
    var min = tobeconverted.substring(0, position);
    var sec = tobeconverted.substring(position + 1);
    var minFinal = parseFloat(min);
    var secFinal = parseFloat(sec);
    var finalTime = minFinal * 60 + secFinal;
    return finalTime; //converts the time to seconds for easy computing
}

function convertToMinutes(tobeconverted) {
    var min = tobeconverted / 60;
    min = Math.round(min);
    if (min >= 1) {
        var secs = min * 60 - tobeconverted;
        var finalResult = Math.round(min).toString() + ":" + Math.abs((secs.toFixed(2))).toString();
        return finalResult;
    } else {
        return "00:" + tobeconverted.toFixed(2).toString();
    } //converts the time to the original display version// a little off when it comes to milliseconds need to fix
}
