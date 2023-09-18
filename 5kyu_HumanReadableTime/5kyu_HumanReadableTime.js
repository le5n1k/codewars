/*
Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.
 */

function humanReadable (seconds) {
    let hh,hha="";
    let mm,mma="";
    let ss,ssa="";

    hh = Math.floor(seconds/3600);
    //console.log(hh);
    if(hh===0) {
        hha+="00:";
    }
    else if(hh<10) {
        hha="0"+hh+":";
    }
    else {
        hha=hha+hh+":";
    }
    seconds=seconds%3600;
    mm=Math.floor(seconds/60);
    //console.log(mm);
    if(mm===0) {
        mma+="00:";
    }
    else if(mm<10) {
        mma="0"+mm+":";
    }
    else {
        mma=mma+mm+":";
    }
    seconds=seconds%60;
    ss=seconds;
    //console.log(ss);
    if(ss===0) {
        ssa+="00";
    }
    else if(ss<10) {
        ssa="0"+ss;
    }
    else {
        ssa+=ss;
    }
    return hha+mma+ssa;
}

console.log(humanReadable(99999999));