// Code your solution in this file!
const returnFirstTwoDrivers = (drivers) => {
    return drivers.slice(0, 2)
}

const returnLastTwoDrivers  = (drivers) => {
    // return [drivers[drivers.length -2], drivers[drivers.length - 1]]   --this works!
    return drivers.slice(drivers.length - 2)
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = (number) => {
    return function fareQuintupler (fare) {
        return fare * number
    }
}

// const fareDoubler = (fare) => createFareMultiplier(2)(fare)
const fareDoubler = (fare) => {
    return fare * 2
}

const fareTripler = (fare) => createFareMultiplier(3)(fare)
// two ways to do this, see above //fareDoubler

function selectDifferentDrivers (drivers, selectDrivers) {
    return selectDrivers (drivers)
}

