(function(){
    "use strict";

    var bonds = "Connery|Lazenby|Moore|Dalton|Brosnan|Craig";
    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    // TODO: Convert planetsString to an array, save it to planetsArray.
    planetsArray = planetsString.split('|');

    console.log(planetsArray);

    // TODO: Create a string with <br> tags between each planet. console.log() your results.
    //       Why might this be useful?

    var planetBreak = planetsArray.join('<br>');
    console.log(planetBreak);

    document.write(planetBreak);
    // Bonus: Create a second string that would display your planets in an undordered list.
    //        You will need an opening AND closing <ul> tags around the entire string, and <li> tags around each planet.
    //        console.log() your results.

    function makeUlList(str) { 

        var strArr = str.split("|");
        console.log(strArr);


        str = strArr.join('</li><li> ');
        console.log(str);

        var strUl = str.split(' ');
        console.log(strUl);

        strUl.push("</li><ul>");

        strUl.unshift("<ul><li>"); 

        strUl = strUl.join('');

        console.log(strUl);

        document.write(strUl);    
    }

    makeUlList(bonds);


})();
