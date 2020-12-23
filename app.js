const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
];

const people = [ 'Babar, Faiz', 'Sonia, Ali', 'Ahmed, khan', 'Anwar, Maqsood', 
                 'Taimor, Nasir', 'Aman, Siddiq', 'Muqaddas, Aliyan', 'Urooj, Fatima', 
                 'Anum, Shabbir', 'Wania, Zuhaib', 'Arsalan, Khawar', 'Asra, Ghouri', 
                 'Sadia, Iqbal', 'Maria, Haider', 'Tasmina, Jawaid', 'Muzammil, Mushtaq', 
                 'Junaid, Mumtaz', 'Sunny, shams', 'Shahzaib, Asad', 'Tahira, Qasim',
];
// Array.prototype.filter()
// 1: Filter the list of inventors for those who were born in the 1500's

const eighteen = inventors.filter(inventor => (inventor.year >= 1800 && inventor.year <= 1900))

console.table(eighteen);

// Array.prototype.map()
// 2: Give us an array of the inventory fisrt and last names

const fullNames = inventors.map(inventor => inventor.first + ' ' + inventor.last);
console.table(fullNames);

// Array.prototype.sort()
// 3: Sort the inventors by birthdate, oldest to youngest

// const ordered = inventors.sort(function(a, b){
//     if(a.year > b.year) {
//         return 1;
//     }
//     else {
//         return -1;
//     }
// });
/* AnotherWay*/
const ordered = inventors.sort((a, b) => a.year > b.year ? 1 : -1); 
console.table(ordered);

// Array.prototype.reduce()
// 4: How many years did all the inventors live?

const totalYears = inventors.reduce((total, inventor) => {
    return total + (inventor.passed - inventor.year);
}, 0);

console.table(totalYears);

// 5: sort the inventors by years lived

const oldest = inventors.sort(function(a, b) {
    const lastGuy = a.passed - a.year;
    const nextGuy = b.passed - b.year;
    return lastGuy > nextGuy ? -1 : 1;
});
console.table(oldest);

// 6: sort the people alphabetically by last names?
const alpha = people.sort((lastOne, nextOne) => {
    const [aLast, aFirst] = lastOne.split(', ');
    const [bLast, bFirst] = nextOne.split(', ');
    return aLast > bLast ? 1 : -1;
});

console.table(alpha);

// 7: Sum up the instances of each of these

const data = ['car', 'car', 'bike', 'truck', 'walk', 'truck', 'van', 'bike', 'walk', 'car', 'truck', 'van', 'walk'];

const transportation = data.reduce(function(obj, item){
    if(!obj[item]) {
        obj[item] = 0;
    }
    obj[item]++;
    return obj;

}, {});

console.table(transportation);