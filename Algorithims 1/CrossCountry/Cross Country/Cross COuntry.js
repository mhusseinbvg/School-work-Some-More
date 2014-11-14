var runner1 = new Array();

function update1() {
    var name = document.getElementById("firstguy,lastname").value + "," + document.getElementById("firstguy,firstname").value;
    document.getElementById("firstRunnerName").innerHTML = name;
    runner1.push(name);
    var mileOne = document.getElementById("firstguy,firstlap").value;
    var mileTwo = document.getElementById("firstguy,secondlap").value;
    var finalTime = document.getElementById("firstguy,totaltime").value;
    var splitOne = mileOne;
    runner1.push(splitOne);
    var splitTwo = convertToSeconds(mileOne) - convertToSeconds(mileTwo);
    runner1.push(toString(splitTwo));
    var splitThree = convertToSeconds(finalTime) - convertToSeconds(mileTwo);
    runner1.push(toString(splitThree));
    runner1.push(finalTime);
    document.getElementById("firstguyTotaltime").innerHTML = finalTime;
    document.getElementById("firstRunnerSplit1").innerHTML = splitOne;
}

function delete1() {
    document.getElementById("firstRunnerName").innerHTML = "";
    document.getElementById("firstguy,lastname").value = "";
    document.getElementById("firstguy,firstname").value = "";
}

function restore1() {

}

function convertToSeconds(tobeconverted) {
    var position = tobeconverted.indexOf(':');
    var min = tobeconverted.substring(0, position);
    var sec = tobeconverted.substring(position + 1);
    var minFinal = parseInt(min);
    var secFinal = parseInt(sec);
    var finalTime = minFinal * 60 + secFinal;
    return finalTime;
}
