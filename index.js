const returnFirstTwoDrivers = function(){
    return (['Antonia', 'Nuru'])
}

const returnLastTwoDrivers = function(){
    return (['Amari', 'Mo'])
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(quad){
    return function(fare){
        return (quad * fare)
    }
}

const fareDoubler = createFareMultiplier(2)
const fareTripler = createFareMultiplier(3)

function selectDifferentDrivers(returnFirstTwoDrivers, returnLastTwoDrivers){
    return returnLastTwoDrivers(returnFirstTwoDrivers)
}