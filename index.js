// Write your solution here!
const drivers = ["Milo", "Otis", "Garfield"];

function destructivelyAppendDriver(name) {
    drivers.push(name);
}

function destructivelyPrependDriver(name) {
    drivers.unshift(name)
}

function destructivelyRemoveLastDriver() {
    drivers.pop();
}

function destructivelyRemoveFirstDriver() {
    drivers.shift();
}

function appendDriver(name) {
    const driversArray = [...drivers,name];
    return driversArray;
}

function prependDriver(name) {
    const driversArray = [name,...drivers];
    return driversArray;
}

function removeLastDriver() {
    const driversArray = [...drivers];
    driversArray.pop();
    return driversArray;
}

function removeFirstDriver() {
    const driversArray = [...drivers];
    driversArray.shift();
    return driversArray;
}