// images => https://github.com/djaiss/mapsicon
const Länder = [{
        code: "AD",
        latitude: 42.546245,
        longitude: 1.601554,
        name: "Andorra",
        continent: "Europa"
    },
    {
        code: "AE",
        latitude: 23.424076,
        longitude: 53.847818,
        name: "Vereinigte Arabische Emirate",
        continent: "Asien"
    },
    {
        code: "AF",
        latitude: 33.93911,
        longitude: 67.709953,
        name: "Afghanistan",
        continent: "Asien"
    },
    {
        code: "AG",
        latitude: 17.060816,
        longitude: -61.796428,
        name: "Antigua und Barbuda",
        continent: "Nordamerika"
    },
    {
        code: "AI",
        latitude: 18.220554,
        longitude: -63.068615,
        name: "Anguilla",
        continent: "Nordamerika"
    },
    {
        code: "AL",
        latitude: 41.153332,
        longitude: 20.168331,
        name: "Albanien",
        continent: "Europa"
    },
    {
        code: "AM",
        latitude: 40.069099,
        longitude: 45.038189,
        name: "Armenien",
        continent: "Asien"
    },
    {
        code: "AO",
        latitude: -11.202692,
        longitude: 17.873887,
        name: "Angola",
        continent: "Afrika"
    },
    {
        code: "AQ",
        latitude: -75.250973,
        longitude: -0.071389,
        name: "Antarktis",
        continent: "Antarktika"
    },
    {
        code: "AR",
        latitude: -38.416097,
        longitude: -63.616672,
        name: "Argentinien",
        continent: "Südamerika"
    },
    {
        code: "AS",
        latitude: -14.270972,
        longitude: -170.132217,
        name: "Amerikanisch-Samoa",
        continent: "Ozeanien"
    },
    {
        code: "AT",
        latitude: 47.516231,
        longitude: 14.550072,
        name: "Österreich",
        continent: "Europa"
    },
    {
        code: "AU",
        latitude: -25.274398,
        longitude: 133.775136,
        name: "Australien",
        continent: "Ozeanien"
    },
    {
        code: "AW",
        latitude: 12.52111,
        longitude: -69.968338,
        name: "Aruba",
        continent: "Nordamerika"
    },
    {
        code: "AZ",
        latitude: 40.143105,
        longitude: 47.576927,
        name: "Aserbaidschan",
        continent: "Asien"
    },
    {
        code: "BA",
        latitude: 43.915886,
        longitude: 17.679076,
        name: "Bosnien und Herzegowina",
        continent: "Europa"
    },
    {
        code: "BB",
        latitude: 13.193887,
        longitude: -59.543198,
        name: "Barbados",
        continent: "Nordamerika"
    },
    {
        code: "BD",
        latitude: 23.684994,
        longitude: 90.356331,
        name: "Bangladesch",
        continent: "Asien"
    },
    {
        code: "BE",
        latitude: 50.503887,
        longitude: 4.469936,
        name: "Belgien",
        continent: "Europa"
    },
    {
        code: "BF",
        latitude: 12.238333,
        longitude: -1.561593,
        name: "Burkina Faso",
        continent: "Afrika"
    },
    {
        code: "BG",
        latitude: 42.733883,
        longitude: 25.48583,
        name: "Bulgarien",
        continent: "Europa"
    },
    {
        code: "BH",
        latitude: 25.930414,
        longitude: 50.637772,
        name: "Bahrain",
        continent: "Asien"
    },
    {
        code: "BI",
        latitude: -3.373056,
        longitude: 29.918886,
        name: "Burundi",
        continent: "Afrika"
    },
    {
        code: "BJ",
        latitude: 9.30769,
        longitude: 2.315834,
        name: "Benin",
        continent: "Afrika"
    },
    {
        code: "BM",
        latitude: 32.321384,
        longitude: -64.75737,
        name: "Bermuda",
        continent: "Nord America"
    },
    {
        code: "BN",
        latitude: 4.535277,
        longitude: 114.727669,
        name: "Brunei",
        continent: "Asien"
    },
    {
        code: "BO",
        latitude: -16.290154,
        longitude: -63.588653,
        name: "Bolivien",
        continent: "Südamerika"
    },
    {
        code: "BR",
        latitude: -14.235004,
        longitude: -51.92528,
        name: "Brasilien",
        continent: "Südamerika"
    },
    {
        code: "BS",
        latitude: 25.03428,
        longitude: -77.39628,
        name: "Bahamas",
        continent: "Nordamerika"
    },
    {
        code: "BT",
        latitude: 27.514162,
        longitude: 90.433601,
        name: "Bhutan",
        continent: "Asien"
    },
    {
        code: "BV",
        latitude: -54.423199,
        longitude: 3.413194,
        name: "Bouvetinsel",
        continent: "Südamerika"
    },
    {
        code: "BW",
        latitude: -22.328474,
        longitude: 24.684866,
        name: "Botsuana",
        continent: "Afrika"
    },
    {
        code: "BY",
        latitude: 53.709807,
        longitude: 27.953389,
        name: "Weißrussland",
        continent: "Europa"
    },
    {
        code: "BZ",
        latitude: 17.189877,
        longitude: -88.49765,
        name: "Belize",
        continent: "Nordamerika"
    },
    {
        code: "CA",
        latitude: 56.130366,
        longitude: -106.346771,
        name: "Kanada",
        continent: "Nordamerika"
    },
    {
        code: "CC",
        latitude: -12.164165,
        longitude: 96.870956,
        name: "Kokosinseln",
        continent: "Ozeanien"
    },
    {
        code: "CD",
        latitude: -4.038333,
        longitude: 21.758664,
        name: "Demokratische Republik Kongo",
        continent: "Afrika"
    },
    {
        code: "CF",
        latitude: 6.611111,
        longitude: 20.939444,
        name: "Zentralafrikanische Republik",
        continent: "Afrika"
    },
    {
        code: "CG",
        latitude: -0.228021,
        longitude: 15.827659,
        name: "Kongo",
        continent: "Afrika"
    },
    {
        code: "CH",
        latitude: 46.818188,
        longitude: 8.227512,
        name: "Schweiz",
        continent: "Europa"
    },
    {
        code: "CI",
        latitude: 7.539989,
        longitude: -5.54708,
        name: "Elfenbeinküste",
        continent: "Afrika"
    },
    {
        code: "CK",
        latitude: -21.236736,
        longitude: -159.777671,
        name: "Cookinseln",
        continent: "Ozeanien"
    },
    {
        code: "CL",
        latitude: -35.675147,
        longitude: -71.542969,
        name: "Chile",
        continent: "Südamerika"
    },
    {
        code: "CM",
        latitude: 7.369722,
        longitude: 12.354722,
        name: "Kamerun",
        continent: "Afrika"
    },
    {
        code: "CN",
        latitude: 35.86166,
        longitude: 104.195397,
        name: "China",
        continent: "Asien"
    },
    {
        code: "CO",
        latitude: 4.570868,
        longitude: -74.297333,
        name: "Kolumbien",
        continent: "Südamerika"
    },
    {
        code: "CR",
        latitude: 9.748917,
        longitude: -83.753428,
        name: "Costa Rica",
        continent: "Nordamerika"
    },
    {
        code: "CU",
        latitude: 21.521757,
        longitude: -77.781167,
        name: "Kuba",
        continent: "Nordamerika"
    },
    {
        code: "CV",
        latitude: 16.002082,
        longitude: -24.013197,
        name: "Kap Verde",
        continent: "Afrika"
    },
    {
        code: "CX",
        latitude: -10.447525,
        longitude: 105.690449,
        name: "Weihnachtsinsel",
        continent: "Ozeanien"
    },
    {
        code: "CY",
        latitude: 35.126413,
        longitude: 33.429859,
        name: "Zypern",
        continent: "Asien"
    },
    {
        code: "CZ",
        latitude: 49.817492,
        longitude: 15.472962,
        name: "Tschechien",
        continent: "Europa"
    },
    {
        code: "DE",
        latitude: 51.165691,
        longitude: 10.451526,
        name: "Deutschland",
        continent: "Europa"
    },
    {
        code: "DJ",
        latitude: 11.825138,
        longitude: 42.590275,
        name: "Dschibuti",
        continent: "Afrika"
    },
    {
        code: "DK",
        latitude: 56.26392,
        longitude: 9.501785,
        name: "Dänemark",
        continent: "Europa"
    },
    {
        code: "DM",
        latitude: 15.414999,
        longitude: -61.370976,
        name: "Dominica",
        continent: "Nordamerika"
    },
    {
        code: "DO",
        latitude: 18.735693,
        longitude: -70.162651,
        name: "Dominikanische Republik",
        continent: "Nordamerika"
    },
    {
        code: "DZ",
        latitude: 28.033886,
        longitude: 1.659626,
        name: "Algerien",
        continent: "Afrika"
    },
    {
        code: "EC",
        latitude: -1.831239,
        longitude: -78.183406,
        name: "Ecuador",
        continent: "Südamerika"
    },
    {
        code: "EE",
        latitude: 58.595272,
        longitude: 25.013607,
        name: "Estland",
        continent: "Europa"
    },
    {
        code: "EG",
        latitude: 26.820553,
        longitude: 30.802498,
        name: "Ägypten",
        continent: "Afrika"
    },
    {
        code: "EH",
        latitude: 24.215527,
        longitude: -12.885834,
        name: "Westsahara",
        continent: "Afrika"
    },
    {
        code: "ER",
        latitude: 15.179384,
        longitude: 39.782334,
        name: "Eritrea",
        continent: "Afrika"
    },
    {
        code: "ES",
        latitude: 40.463667,
        longitude: -3.74922,
        name: "Spanien",
        continent: "Europa"
    },
    {
        code: "ET",
        latitude: 9.145,
        longitude: 40.489673,
        name: "Äthiopien",
        continent: "Afrika"
    },
    {
        code: "FI",
        latitude: 61.92411,
        longitude: 25.748151,
        name: "Finnland",
        continent: "Europa"
    },
    {
        code: "FJ",
        latitude: -16.578193,
        longitude: 179.414413,
        name: "Fidschi",
        continent: "Ozeanien"
    },
    {
        code: "FK",
        latitude: -51.796253,
        longitude: -59.523613,
        name: "Falklandinseln",
        continent: "Südamerika"
    },
    {
        code: "FO",
        latitude: 61.892635,
        longitude: -6.911806,
        name: "Färöer",
        continent: "Europa"
    },
    {
        code: "FR",
        latitude: 46.227638,
        longitude: 2.213749,
        name: "Frankreich",
        continent: "Europa"
    },
    {
        code: "GA",
        latitude: -0.803689,
        longitude: 11.609444,
        name: "Gabun",
        continent: "Afrika"
    },
    {
        code: "GB",
        latitude: 55.378051,
        longitude: -3.435973,
        name: "Vereinigtes Königreich",
        continent: "Europa"
    },
    {
        code: "GD",
        latitude: 12.262776,
        longitude: -61.604171,
        name: "Grenada",
        continent: "Nordamerika"
    },
    {
        code: "GE",
        latitude: 42.315407,
        longitude: 43.356892,
        name: "Georgien",
        continent: "Asien"
    },
    {
        code: "GF",
        latitude: 3.933889,
        longitude: -53.125782,
        name: "Französisch-Guayana",
        continent: "Südamerika"
    },
    {
        code: "GG",
        latitude: 49.465691,
        longitude: -2.585278,
        name: "Guernsey",
        continent: "Europa"
    },
    {
        code: "GH",
        latitude: 7.946527,
        longitude: -1.023194,
        name: "Ghana",
        continent: "Afrika"
    },
    {
        code: "GI",
        latitude: 36.137741,
        longitude: -5.345374,
        name: "Gibraltar",
        continent: "Europa"
    },
    {
        code: "GL",
        latitude: 71.706936,
        longitude: -42.604303,
        name: "Grönland",
        continent: "Nordamerika"
    },
    {
        code: "GM",
        latitude: 13.443182,
        longitude: -15.310139,
        name: "Gambia",
        continent: "Afrika"
    },
    {
        code: "GN",
        latitude: 9.945587,
        longitude: -9.696645,
        name: "Guinea",
        continent: "Afrika"
    },
    {
        code: "GP",
        latitude: 16.08663,
        longitude: -61.422873,
        name: "Guadeloupe",
        continent: "Nordamerika"
    },
    {
        code: "GQ",
        latitude: 1.650801,
        longitude: 10.267895,
        name: "Äquatorialguinea",
        continent: "Afrika"
    },
    {
        code: "GR",
        latitude: 39.074208,
        longitude: 21.824312,
        name: "Griechenland",
        continent: "Europa"
    },
    {
        code: "GS",
        latitude: -54.429579,
        longitude: -36.587909,
        name: "Südgeorgien und die Südlichen Sandwichinseln",
        continent: "Südamerika"
    },
    {
        code: "GT",
        latitude: 15.783471,
        longitude: -90.230759,
        name: "Guatemala",
        continent: "Nordamerika"
    },
    {
        code: "GU",
        latitude: 13.444304,
        longitude: 144.793731,
        name: "Guam",
        continent: "Ozeanien"
    },
    {
        code: "GW",
        latitude: 11.803749,
        longitude: -15.180413,
        name: "Guinea-Bissau",
        continent: "Afrika"
    },
    {
        code: "GY",
        latitude: 4.860416,
        longitude: -58.93018,
        name: "Guyana",
        continent: "Südamerika"
    },
    {
        code: "HK",
        latitude: 22.396428,
        longitude: 114.109497,
        name: "Hong Kong",
        continent: "Asien"
    },
    {
        code: "HM",
        latitude: -53.08181,
        longitude: 73.504158,
        name: "Heard und McDonaldinseln",
        continent: "Ozeanien"
    },
    {
        code: "HN",
        latitude: 15.199999,
        longitude: -86.241905,
        name: "Honduras",
        continent: "Nordamerika"
    },
    {
        code: "HR",
        latitude: 45.1,
        longitude: 15.2,
        name: "Kroatien",
        continent: "Europa"
    },
    {
        code: "HT",
        latitude: 18.971187,
        longitude: -72.285215,
        name: "Haiti",
        continent: "Nordamerika"
    },
    {
        code: "HU",
        latitude: 47.162494,
        longitude: 19.503304,
        name: "Ungarn",
        continent: "Europa"
    },
    {
        code: "ID",
        latitude: -0.789275,
        longitude: 113.921327,
        name: "Indonesien",
        continent: "Asien"
    },
    {
        code: "IE",
        latitude: 53.41291,
        longitude: -8.24389,
        name: "Irland",
        continent: "Europa"
    },
    {
        code: "IL",
        latitude: 31.046051,
        longitude: 34.851612,
        name: "Israel",
        continent: "Asien"
    },
    {
        code: "IM",
        latitude: 54.236107,
        longitude: -4.548056,
        name: "Isle of Man",
        continent: "Europa"
    },
    {
        code: "IN",
        latitude: 20.593684,
        longitude: 78.96288,
        name: "Indien",
        continent: "Asien"
    },
    {
        code: "IO",
        latitude: -6.343194,
        longitude: 71.876519,
        name: "Diego Garcia",
        continent: "Afrika"
    },
    {
        code: "IQ",
        latitude: 33.223191,
        longitude: 43.679291,
        name: "Irak",
        continent: "Asien"
    },
    {
        code: "IR",
        latitude: 32.427908,
        longitude: 53.688046,
        name: "Iran",
        continent: "Asien"
    },
    {
        code: "IS",
        latitude: 64.963051,
        longitude: -19.020835,
        name: "Island",
        continent: "Europa"
    },
    {
        code: "IT",
        latitude: 41.87194,
        longitude: 12.56738,
        name: "Italien",
        continent: "Europa"
    },
    {
        code: "JM",
        latitude: 18.109581,
        longitude: -77.297508,
        name: "Jamaica",
        continent: "Nort America"
    },
    {
        code: "JO",
        latitude: 30.585164,
        longitude: 36.238414,
        name: "Jordanien",
        continent: "Asien"
    },
    {
        code: "JP",
        latitude: 36.204824,
        longitude: 138.252924,
        name: "Japan",
        continent: "Asien"
    },
    {
        code: "KE",
        latitude: -0.023559,
        longitude: 37.906193,
        name: "Kenia",
        continent: "Afrika"
    },
    {
        code: "KG",
        latitude: 41.20438,
        longitude: 74.766098,
        name: "Kirgisistan",
        continent: "Asien"
    },
    {
        code: "KH",
        latitude: 12.565679,
        longitude: 104.990963,
        name: "Kambodscha",
        continent: "Asien"
    },
    {
        code: "KI",
        latitude: -3.370417,
        longitude: -168.734039,
        name: "Kiribati",
        continent: "Ozeanien"
    },
    {
        code: "KM",
        latitude: -11.875001,
        longitude: 43.872219,
        name: "Komoren",
        continent: "Afrika"
    },
    {
        code: "KN",
        latitude: 17.357822,
        longitude: -62.782998,
        name: "St. Kitts und Nevis",
        continent: "Nordamerika"
    },
    {
        code: "KP",
        latitude: 40.339852,
        longitude: 127.510093,
        name: "Nordkorea",
        continent: "Asien"
    },
    {
        code: "KR",
        latitude: 35.907757,
        longitude: 127.766922,
        name: "Südkorea",
        continent: "Asien"
    },
    {
        code: "KW",
        latitude: 29.31166,
        longitude: 47.481766,
        name: "Kuwait",
        continent: "Asien"
    },
    {
        code: "KY",
        latitude: 19.513469,
        longitude: -80.566956,
        name: "Caymaninseln",
        continent: "Nordamerika"
    },
    {
        code: "KZ",
        latitude: 48.019573,
        longitude: 66.923684,
        name: "Kasachstan",
        continent: "Asien"
    },
    {
        code: "LA",
        latitude: 19.85627,
        longitude: 102.495496,
        name: "Laos",
        continent: "Asien"
    },
    {
        code: "LB",
        latitude: 33.854721,
        longitude: 35.862285,
        name: "Libanon",
        continent: "Asien"
    },
    {
        code: "LC",
        latitude: 13.909444,
        longitude: -60.978893,
        name: "St. Lucia",
        continent: "Nordamerika"
    },
    {
        code: "LI",
        latitude: 47.166,
        longitude: 9.555373,
        name: "Liechtenstein",
        continent: "Europa"
    },
    {
        code: "LK",
        latitude: 7.873054,
        longitude: 80.771797,
        name: "Sri Lanka",
        continent: "Asien"
    },
    {
        code: "LR",
        latitude: 6.428055,
        longitude: -9.429499,
        name: "Liberia",
        continent: "Afrika"
    },
    {
        code: "LS",
        latitude: -29.609988,
        longitude: 28.233608,
        name: "Lesotho",
        continent: "Afrika"
    },
    {
        code: "LT",
        latitude: 55.169438,
        longitude: 23.881275,
        name: "Litauen",
        continent: "Europa"
    },
    {
        code: "LU",
        latitude: 49.815273,
        longitude: 6.129583,
        name: "Luxemburg",
        continent: "Europa"
    },
    {
        code: "LV",
        latitude: 56.879635,
        longitude: 24.603189,
        name: "Lettland",
        continent: "Europa"
    },
    {
        code: "LY",
        latitude: 26.3351,
        longitude: 17.228331,
        name: "Libyen",
        continent: "Afrika"
    },
    {
        code: "MA",
        latitude: 31.791702,
        longitude: -7.09262,
        name: "Marokko",
        continent: "Afrika"
    },
    {
        code: "MC",
        latitude: 43.750298,
        longitude: 7.412841,
        name: "Monaco",
        continent: "Europa"
    },
    {
        code: "MD",
        latitude: 47.411631,
        longitude: 28.369885,
        name: "Moldau",
        continent: "Europa"
    },
    {
        code: "ME",
        latitude: 42.708678,
        longitude: 19.37439,
        name: "Montenegro",
        continent: "Europa"
    },
    {
        code: "MG",
        latitude: -18.766947,
        longitude: 46.869107,
        name: "Madagaskar",
        continent: "Afrika"
    },
    {
        code: "MK",
        latitude: 41.608635,
        longitude: 21.745275,
        name: "Nordmazedonien",
        continent: "Europa"
    },
    {
        code: "ML",
        latitude: 17.570692,
        longitude: -3.996166,
        name: "Mali",
        continent: "Afrika"
    },
    {
        code: "MM",
        latitude: 21.913965,
        longitude: 95.956223,
        name: "Myanmar",
        continent: "Asien"
    },
    {
        code: "MN",
        latitude: 46.862496,
        longitude: 103.846656,
        name: "Mongolei",
        continent: "Asien"
    },
    {
        code: "MO",
        latitude: 22.198745,
        longitude: 113.543873,
        name: "Macau",
        continent: "Asien"
    },
    {
        code: "MQ",
        latitude: 14.641528,
        longitude: -61.024174,
        name: "Martinique",
        continent: "Nordamerika"
    },
    {
        code: "MR",
        latitude: 21.00789,
        longitude: -10.940835,
        name: "Mauritanien",
        continent: "Afrika"
    },
    {
        code: "MS",
        latitude: 16.742498,
        longitude: -62.187366,
        name: "Montserrat",
        continent: "Nordamerika"
    },
    {
        code: "MT",
        latitude: 35.937496,
        longitude: 14.375416,
        name: "Malta",
        continent: "Europa"
    },
    {
        code: "MU",
        latitude: -20.348404,
        longitude: 57.552152,
        name: "Mauritius",
        continent: "Afrika"
    },
    {
        code: "MV",
        latitude: 3.202778,
        longitude: 73.22068,
        name: "Malediven",
        continent: "Asien"
    },
    {
        code: "MW",
        latitude: -13.254308,
        longitude: 34.301525,
        name: "Malawi",
        continent: "Afrika"
    },
    {
        code: "MX",
        latitude: 23.634501,
        longitude: -102.552784,
        name: "Mexico",
        continent: "Südamerika"
    },
    {
        code: "MY",
        latitude: 4.040255,
        longitude: 109.091912,
        name: "Malaysia",
        continent: "Asien"
    },
    {
        code: "MZ",
        latitude: -18.665695,
        longitude: 35.529562,
        name: "Mosambik",
        continent: "Afrika"
    },
    {
        code: "NA",
        latitude: -22.95764,
        longitude: 18.49041,
        name: "Namibia",
        continent: "Afrika"
    },
    {
        code: "NC",
        latitude: -20.904305,
        longitude: 165.618042,
        name: "Neukaledonien",
        continent: "Ozeanien"
    },
    {
        code: "NE",
        latitude: 17.607789,
        longitude: 8.081666,
        name: "Niger",
        continent: "Afrika"
    },
    {
        code: "NF",
        latitude: -29.040835,
        longitude: 167.954712,
        name: "Norfolkinsel",
        continent: "Ozeanien"
    },
    {
        code: "NG",
        latitude: 9.081999,
        longitude: 8.675277,
        name: "Nigeria",
        continent: "Afrika"
    },
    {
        code: "NI",
        latitude: 12.865416,
        longitude: -85.207229,
        name: "Nicaragua",
        continent: "Südamerika"
    },
    {
        code: "NL",
        latitude: 52.132633,
        longitude: 5.291266,
        name: "Niederlande",
        continent: "Europa"
    },
    {
        code: "NO",
        latitude: 60.472024,
        longitude: 8.468946,
        name: "Norwegen",
        continent: "Europa"
    },
    {
        code: "NP",
        latitude: 28.394857,
        longitude: 84.124008,
        name: "Nepal",
        continent: "Asien"
    },
    {
        code: "NR",
        latitude: -0.522778,
        longitude: 166.931503,
        name: "Nauru",
        continent: "Ozeanien"
    },
    {
        code: "NU",
        latitude: -19.054445,
        longitude: -169.867233,
        name: "Niue",
        continent: "Ozeanien"
    },
    {
        code: "NZ",
        latitude: -40.900557,
        longitude: 174.885971,
        name: "Neuseeland",
        continent: "Ozeaninen"
    },
    {
        code: "OM",
        latitude: 21.512583,
        longitude: 55.923255,
        name: "Oman",
        continent: "Asien"
    },
    {
        code: "PA",
        latitude: 8.537981,
        longitude: -80.782127,
        name: "Panama",
        continent: "Nordamerika"
    },
    {
        code: "PE",
        latitude: -9.189967,
        longitude: -75.015152,
        name: "Peru",
        continent: "Südamerika"
    },
    {
        code: "PF",
        latitude: -17.679742,
        longitude: -149.406843,
        name: "Französisch-Polynesien",
        continent: "Ozeanien"
    },
    {
        code: "PG",
        latitude: -6.314993,
        longitude: 143.95555,
        name: "Papua-Neuguinea",
        continent: "Ozeanien"
    },
    {
        code: "PH",
        latitude: 12.879721,
        longitude: 121.774017,
        name: "Philippinen",
        continent: "Asien"
    },
    {
        code: "PK",
        latitude: 30.375321,
        longitude: 69.345116,
        name: "Pakistan",
        continent: "Asien"
    },
    {
        code: "PL",
        latitude: 51.919438,
        longitude: 19.145136,
        name: "Polen",
        continent: "Asien"
    },
    {
        code: "PM",
        latitude: 46.941936,
        longitude: -56.27111,
        name: "St. Pierre und Miquelon",
        continent: "Nordamerika"
    },
    {
        code: "PN",
        latitude: -24.703615,
        longitude: -127.439308,
        name: "Pitcairn",
        continent: "Ozeanien"
    },
    {
        code: "PR",
        latitude: 18.220833,
        longitude: -66.590149,
        name: "Puerto Rico",
        continent: "Nordamerika"
    },
    {
        code: "PT",
        latitude: 39.399872,
        longitude: -8.224454,
        name: "Portugal",
        continent: "Europa"
    },
    {
        code: "PW",
        latitude: 7.51498,
        longitude: 134.58252,
        name: "Palau",
        continent: "Ozeanien"
    },
    {
        code: "PY",
        latitude: -23.442503,
        longitude: -58.443832,
        name: "Paraguay",
        continent: "Südamerika"
    },
    {
        code: "QA",
        latitude: 25.354826,
        longitude: 51.183884,
        name: "Katar",
        continent: "Asien"
    },
    {
        code: "RE",
        latitude: -21.115141,
        longitude: 55.536384,
        name: "Réunion",
        continent: "Afrika"
    },
    {
        code: "RO",
        latitude: 45.943161,
        longitude: 24.96676,
        name: "Rumänien",
        continent: "Europa"
    },
    {
        code: "RS",
        latitude: 44.016521,
        longitude: 21.005859,
        name: "Serbien",
        continent: "Europa"
    },
    {
        code: "RU",
        latitude: 61.52401,
        longitude: 105.318756,
        name: "Russland",
        continent: "Europa"
    },
    {
        code: "RW",
        latitude: -1.940278,
        longitude: 29.873888,
        name: "Rwanda",
        continent: "Afrika"
    },
    {
        code: "SA",
        latitude: 23.885942,
        longitude: 45.079162,
        name: "Saudi-Arabien",
        continent: "Asien"
    },
    {
        code: "SB",
        latitude: -9.64571,
        longitude: 160.156194,
        name: "Salomonen",
        continent: "Ozeanien"
    },
    {
        code: "SC",
        latitude: -4.679574,
        longitude: 55.491977,
        name: "Seychellen",
        continent: "Afrika"
    },
    {
        code: "SD",
        latitude: 15.8905231,
        longitude: 30.7671933,
        name: "Sudan",
        continent: "Afrika"
    },
    {
        code: "SS",
        latitude: 6.85065,
        longitude: 30.659016,
        name: "	Südsudan",
        continent: "Afrika"
    },
    {
        code: "SE",
        latitude: 60.128161,
        longitude: 18.643501,
        name: "Schweden",
        continent: "Europa"
    },
    {
        code: "SG",
        latitude: 1.352083,
        longitude: 103.819836,
        name: "Singapur",
        continent: "Asien"
    },
    {
        code: "SH",
        latitude: -24.143474,
        longitude: -10.030696,
        name: "St. Helena",
        continent: "Afrika"
    },
    {
        code: "SI",
        latitude: 46.151241,
        longitude: 14.995463,
        name: "Slovenien",
        continent: "Europa"
    },
    {
        code: "SJ",
        latitude: 77.553604,
        longitude: 23.670272,
        name: "Svalbard und Jan Mayen",
        continent: "Europa"
    },
    {
        code: "SK",
        latitude: 48.669026,
        longitude: 19.699024,
        name: "Slowakei",
        continent: "Europa"
    },
    {
        code: "SL",
        latitude: 8.460555,
        longitude: -11.779889,
        name: "Sierra Leone",
        continent: "Afrika"
    },
    {
        code: "SM",
        latitude: 43.94236,
        longitude: 12.457777,
        name: "San Marino",
        continent: "Europa"
    },
    {
        code: "SN",
        latitude: 14.497401,
        longitude: -14.452362,
        name: "Senegal",
        continent: "Afrika"
    },
    {
        code: "SO",
        latitude: 5.152149,
        longitude: 46.199616,
        name: "Somalia",
        continent: "Afrika"
    },
    {
        code: "SR",
        latitude: 3.919305,
        longitude: -56.027783,
        name: "Suriname",
        continent: "Südamerika"
    },
    {
        code: "ST",
        latitude: 0.18636,
        longitude: 6.613081,
        name: "São Tomé und Príncipe",
        continent: "Afrika"
    },
    {
        code: "SV",
        latitude: 13.794185,
        longitude: -88.89653,
        name: "El Salvador",
        continent: "Nordamerika"
    },
    {
        code: "SY",
        latitude: 34.802075,
        longitude: 38.996815,
        name: "Syrien",
        continent: "Asien"
    },
    {
        code: "SZ",
        latitude: -26.522503,
        longitude: 31.465866,
        name: "Swasiland ",
        continent: "Afrika"
    },
    {
        code: "TC",
        latitude: 21.694025,
        longitude: -71.797928,
        name: "Turks- und Caicosinseln",
        continent: "Nordamerika"
    },
    {
        code: "TD",
        latitude: 15.454166,
        longitude: 18.732207,
        name: "Tschad",
        continent: "Afrika"
    },
    {
        code: "TF",
        latitude: -49.280366,
        longitude: 69.348557,
        name: "Französische Süd- und Antarktisgebiete",
        continent: "Afrika"
    },
    {
        code: "TG",
        latitude: 8.619543,
        longitude: 0.824782,
        name: "Togo",
        continent: "Afrika"
    },
    {
        code: "TH",
        latitude: 15.870032,
        longitude: 100.992541,
        name: "Thailand",
        continent: "Asien"
    },
    {
        code: "TJ",
        latitude: 38.861034,
        longitude: 71.276093,
        name: "Tadschikistan",
        continent: "Asien"
    },
    {
        code: "TK",
        latitude: -8.967363,
        longitude: -171.855881,
        name: "Tokelau",
        continent: "Ozeanien",
    },
    {
        code: "TL",
        latitude: -8.874217,
        longitude: 125.727539,
        name: "Osttimor",
        continent: "Asien"
    },
    {
        code: "TM",
        latitude: 38.969719,
        longitude: 59.556278,
        name: "Turkmenistan",
        continent: "Asien"
    },
    {
        code: "TN",
        latitude: 33.886917,
        longitude: 9.537499,
        name: "Tunesien",
        continent: "Afrika"
    },
    {
        code: "TO",
        latitude: -21.178986,
        longitude: -175.198242,
        name: "Tonga",
        continent: "Ozeanien"
    },
    {
        code: "TR",
        latitude: 38.963745,
        longitude: 35.243322,
        name: "Türkei",
        continent: "Asien"
    },
    {
        code: "TT",
        latitude: 10.691803,
        longitude: -61.222503,
        name: "Trinidad und Tobago",
        continent: "Nordamerika"
    },
    {
        code: "TW",
        latitude: 23.69781,
        longitude: 120.960515,
        name: "Taiwan",
        continent: "Asien"
    },
    {
        code: "TZ",
        latitude: -6.369028,
        longitude: 34.888822,
        name: "Tansania",
        continent: "Afrika"
    },
    {
        code: "UA",
        latitude: 48.379433,
        longitude: 31.16558,
        name: "Ukraine",
        continent: "Europa"
    },
    {
        code: "UG",
        latitude: 1.373333,
        longitude: 32.290275,
        name: "Uganda",
        continent: "Afrika"
    },
    {
        code: "US",
        latitude: 37.09024,
        longitude: -95.712891,
        name: "Vereinigte Staaten",
        continent: "Nordamerika"
    },
    {
        code: "UY",
        latitude: -32.522779,
        longitude: -55.765835,
        name: "Uruguay",
        continent: "Südamerika"
    },
    {
        code: "UZ",
        latitude: 41.377491,
        longitude: 64.585262,
        name: "Usbekistan",
        continent: "Asien"
    },
    {
        code: "VA",
        latitude: 41.902916,
        longitude: 12.453389,
        name: "Vatikanstadt",
        continent: "Europa"
    },
    {
        code: "VC",
        latitude: 12.984305,
        longitude: -61.287228,
        name: "St. Vincent und die Grenadinen",
        continent: "Nordamerika"
    },
    {
        code: "VE",
        latitude: 6.42375,
        longitude: -66.58973,
        name: "Venezuela",
        continent: "Südamerika"
    },
    {
        code: "VG",
        latitude: 18.420695,
        longitude: -64.639968,
        name: "Britische Jungferninseln",
        continent: "Nordamerika"
    },
    {
        code: "VI",
        latitude: 18.335765,
        longitude: -64.896335,
        name: "Amerikanische Jungferninseln",
        continent: "Nordamerika"
    },
    {
        code: "VN",
        latitude: 14.058324,
        longitude: 108.277199,
        name: "Vietnam",
        continent: "Asien"
    },
    {
        code: "VU",
        latitude: -15.376706,
        longitude: 166.959158,
        name: "Vanuatu",
        continent: "Ozeanien"
    },
    {
        code: "WF",
        latitude: -13.768752,
        longitude: -177.156097,
        name: "Wallis und Futuna",
        continent: "Ozeanien"
    },
    {
        code: "WS",
        latitude: -13.759029,
        longitude: -172.104629,
        name: "Samoa",
        continent: "Ozeanien"
    },
    {
        code: "YE",
        latitude: 15.552727,
        longitude: 48.516388,
        name: "Jemen",
        continent: "Asien"
    },
    {
        code: "YT",
        latitude: -12.8275,
        longitude: 45.166244,
        name: "Mayotte",
        continent: "Afrika"
    },
    {
        code: "ZA",
        latitude: -30.559482,
        longitude: 22.937506,
        name: "Südafrika",
        continent: "Afrika"
    },
    {
        code: "ZM",
        latitude: -13.133897,
        longitude: 27.849332,
        name: "Zambia",
        continent: "Afrika"
    },
    {
        code: "ZW",
        latitude: -19.015438,
        longitude: 29.154857,
        name: "Zimbabwe",
        continent: "Afrika"
    },
];



const Richtungspfeile = [{
        Himmelsrichtung: "N",
        Pfeil: "🡹"
    },
    {
        Himmelsrichtung: "NO",
        Pfeil: "🡽"
    },
    {
        Himmelsrichtung: "NW",
        Pfeil: "🡼"
    },
    {
        Himmelsrichtung: "S",
        Pfeil: "🡻"
    },
    {
        Himmelsrichtung: "SO",
        Pfeil: "🡾"
    },
    {
        Himmelsrichtung: "SW",
        Pfeil: "🡿"
    },
    {
        Himmelsrichtung: "O",
        Pfeil: "🡺"
    },
    {
        Himmelsrichtung: "W",
        Pfeil: "🡸"
    },
    {
        Himmelsrichtung: "",
        Pfeil: "🎉"
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