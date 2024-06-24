// Number of pages of the current book - integer [1… 1000]
// · Pages read in 1 hour - integer [1… 1000]
// · The number of days for which you must read the book - integer [1… 1000]

function requiredReading(pagesNumber, pagesPerHour, dayNumber){
 
    let allHours = pagesNumber / pagesPerHour;
    let hoursPerDay = allHours / dayNumber;

    console.log(hoursPerDay);

}
 requiredReading (212, 20, 2);
 requiredReading (432, 15, 4);