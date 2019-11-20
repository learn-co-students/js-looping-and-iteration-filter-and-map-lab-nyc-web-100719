// Code your solution here:
function driversWithRevenueOver(drivers, revenue){
    return drivers.filter(function(driver){
        return driver.revenue > revenue;
    });
}

function driverNamesWithRevenueOver(drivers, revenue){
    let filteredDrivers = drivers.filter(function(driver){
        if (driver.revenue > revenue){
            return driver.name
        }
    });
    return filteredDrivers.map(function(driver){
        return driver.name;
    });
}

function exactMatch(drivers, keyValuePair){
    return drivers.filter(function(driver){
        for(const attribute in driver){
            for(const key in keyValuePair){
                if(attribute === key){
                    return driver[attribute] === keyValuePair[key]
                }
            }
        }
    })
}

function exactMatchToList(drivers, keyValuePair){
    let filteredDrivers = exactMatch(drivers, keyValuePair);
    return filteredDrivers.map(function(driver){
        return driver.name;
    });
}