// images => https://github.com/djaiss/mapsicon
const Länder = [{
        code: "al",
        latitude: 41.153332,
        longitude: 20.168331,
        name: "Albanien",
    },
    {
        code: "ad",
        latitude: 42.546245,
        longitude: 1.601554,
        name: "Andorra",
    },
    {
        code: "by",
        latitude: 53.709807,
        longitude: 27.953389,
        name: "Weißrussland",
    },
    {
        code: "be",
        latitude: 50.503887,
        longitude: 4.469936,
        name: "Belgien",
    },
    {
        code: "ba",
        latitude: 43.915886,
        longitude: 17.679076,
        name: "Bosnien und Herzegowina",
    },
    {
        code: "bg",
        latitude: 42.733883,
        longitude: 25.48583,
        name: "Bulgarien",
    },
    {
        code: "dk",
        latitude: 56.26392,
        longitude: 9.501785,
        name: "Dänemark",
    },
    {
        code: "de",
        latitude: 51.165691,
        longitude: 10.451526,
        name: "Deutschland",
    },
    {
        code: "ee",
        latitude: 58.595272,
        longitude: 25.013607,
        name: "Estland",
    },
    {
        code: "fi",
        latitude: 61.92411,
        longitude: 25.748151,
        name: "Finnland",
    },
    {
        code: "fr",
        latitude: 46.227638,
        longitude: 2.213749,
        name: "Frankreich",
    },
    {
        code: "gr",
        latitude: 39.074208,
        longitude: 21.824312,
        name: "Griechenland",
    },
    {
        code: "ie",
        latitude: 53.41291,
        longitude: -8.24389,
        name: "Irland",
    },
    {
        code: "is",
        latitude: 64.963051,
        longitude: -19.020835,
        name: "Island",
    },
    {
        code: "it",
        latitude: 41.87194,
        longitude: 12.56738,
        name: "Italien",
    },
    {
        code: "kz",
        latitude: 48.019573,
        longitude: 66.923684,
        name: "Kasachstan",
    },
    {
        code: "hr",
        latitude: 45.1,
        longitude: 15.2,
        name: "Kroatien",
    },
    {
        code: "lv",
        latitude: 56.879635,
        longitude: 24.603189,
        name: "Lettland",
    },
    {
        code: "li",
        latitude: 47.166,
        longitude: 9.555373,
        name: "Liechtenstein",
    },
    {
        code: "lt",
        latitude: 55.169438,
        longitude: 23.881275,
        name: "Litauen",
    },
    {
        code: "lu",
        latitude: 49.815273,
        longitude: 6.129583,
        name: "Luxemburg",
    },
    {
        code: "mt",
        latitude: 35.937496,
        longitude: 14.375416,
        name: "Malta",
    },
    {
        code: "md",
        latitude: 47.411631,
        longitude: 28.369885,
        name: "Moldau",
    },
    {
        code: "mc",
        latitude: 43.750298,
        longitude: 7.412841,
        name: "Monaco",
    },
    {
        code: "me",
        latitude: 42.708678,
        longitude: 19.37439,
        name: "Montenegro",
    },
    {
        code: "nl",
        latitude: 52.132633,
        longitude: 5.291266,
        name: "Niederlande",
    },
    {
        code: "mk",
        latitude: 41.608635,
        longitude: 21.745275,
        name: "Nord Mazedonien",
    },
    {
        code: "no",
        latitude: 60.472024,
        longitude: 8.468946,
        name: "Norwegen",
    },
    {
        code: "au",
        latitude: -25.274398,
        longitude: 133.775136,
        name: "Österreich",
    },
    {
        code: "pl",
        latitude: 51.919438,
        longitude: 19.145136,
        name: "Polen",
    },
    {
        code: "pt",
        latitude: 39.399872,
        longitude: -8.224454,
        name: "Portugal",
    },
    {
        code: "ro",
        latitude: 45.943161,
        longitude: 24.96676,
        name: "Rumänien",
    },
    {
        code: "ru",
        latitude: 61.52401,
        longitude: 105.318756,
        name: "Russland",
    },
    {
        code: "sm",
        latitude: 43.94236,
        longitude: 12.457777,
        name: "San Marino",
    },
    {
        code: "se",
        latitude: 60.128161,
        longitude: 18.643501,
        name: "Schweden",
    },
    {
        code: "ch",
        latitude: 46.818188,
        longitude: 8.227512,
        name: "Schweiz",
    },
    {
        code: "rs",
        latitude: 44.016521,
        longitude: 21.005859,
        name: "Serbien",
    },
    {
        code: "sk",
        latitude: 48.669026,
        longitude: 19.699024,
        name: "Slowakei",
    }, {
        code: "si",
        latitude: 46.151241,
        longitude: 14.995463,
        name: "Slowenien",
    },
    {
        code: "es",
        latitude: 40.463667,
        longitude: -3.74922,
        name: "Spanien",
    },
    {
        code: "cz",
        latitude: 49.817492,
        longitude: 15.472962,
        name: "Tschechien",
    },
    {
        code: "tr",
        latitude: 38.963745,
        longitude: 35.243322,
        name: "Türkei",
    }, {
        code: "ua",
        latitude: 48.379433,
        longitude: 31.16558,
        name: "Ukraine",
    },
    {
        code: "hu",
        latitude: 47.162494,
        longitude: 19.503304,
        name: "Ungarn",
    },
    {
        code: "va",
        latitude: 41.902916,
        longitude: 12.453389,
        name: "Vatikanstadt",
    },
    {
        code: "gb",
        latitude: 55.378051,
        longitude: -3.435973,
        name: "Vereinigtes Königreich",
    }
];












// // koordinaten funktion für entfernung - ignorieren
// function distance(lat1,
//     lat2, lon1, lon2)
// {

// // The math module contains a function
// // named toRadians which converts from
// // degrees to radians.
// lon1 =  lon1 * Math.PI / 180;
// lon2 = lon2 * Math.PI / 180;
// lat1 = lat1 * Math.PI / 180;
// lat2 = lat2 * Math.PI / 180;

// // Haversine formula
// let dlon = lon2 - lon1;
// let dlat = lat2 - lat1;
// let a = Math.pow(Math.sin(dlat / 2), 2)
// + Math.cos(lat1) * Math.cos(lat2)
// * Math.pow(Math.sin(dlon / 2),2);

// let c = 2 * Math.asin(Math.sqrt(a));

// // Radius of earth in kilometers. Use 3956
// // for miles
// let r = 6371;

// // calculate the result
// return(c * r);
// }

// // Driver code   

// let lat1 = 53.32055555555556;
// let lat2 = 53.31861111111111;
// let lon1 = -1.7297222222222221;
// let lon2 = -1.6997222222222223;
// document.write(distance(lat1, lat2,
//           lon1, lon2) + " K.M");