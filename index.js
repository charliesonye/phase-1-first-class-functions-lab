// Code your solution in this file!

const returnFirstTwoDrivers = (arrayOfDrivers) => {
   return arrayOfDrivers.slice(0,2)
}

const returnLastTwoDrivers = (arrayOfDrivers) => {
    return arrayOfDrivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

function createFareMultiplier(fare) {
    return function multiply(value) {
        return fare * value
       
    }
}

function fareDoubler(fare){
    return fare * 2
}

function fareTripler(fare){
    return fare * 3
}

function selectDifferentDrivers(arrayOfDrivers, fn) {
    if(fn == returnFirstTwoDrivers) {
        return arrayOfDrivers.slice(0,2)
    }else{
        return arrayOfDrivers.slice(-2)
    }
}