// Länderauswahl    -------------------------------
var imgArr = ["al.svg", "ad.svg", "by.svg", "be.svg", "ba.svg"];
window.onload = LandAuswahl //lädt ein land beim aufruf der seite

function LandAuswahl() { // sucht ein zufälliges land aus
    var num = Math.floor(Math.random() * (imgArr.length));
    document.canvas.src = "img/" + imgArr[num];
}


// Theme    --------------------------------------
const chk = document.getElementById('chk');

chk.addEventListener('change', () => {
    document.body.classList.toggle('dark');
});




// // Json datalist    ------------------------------
// // Get the <datalist> and <input> elements.
// var dataList = document.getElementById('json-datalist');
// var input = document.getElementById('ajax');

// // Get the <datalist> and <input> elements.
// var dataList = document.getElementById('json-datalist');
// var input = document.getElementById('ajax');

// // Create a new XMLHttpRequest.
// var request = new XMLHttpRequest();

// // Handle state changes for the request.
// request.onreadystatechange = function(response) {
//     if (request.readyState === 4) {
//         if (request.status === 200) {
//             // Parse the JSON
//             var jsonOptions = JSON.parse(request.responseText);

//             // Loop over the JSON array.
//             jsonOptions.forEach(function(item) {
//                 // Create a new <option> element.
//                 var option = document.createElement('option');
//                 // Set the value using the item in the JSON array.
//                 option.value = item.Name;
//                 // Add the <option> element to the <datalist>.
//                 dataList.appendChild(option);
//             });

//             // Update the placeholder text.
//             input.placeholder = "Ländername";
//         } else {
//             // An error occured :(
//             input.placeholder = "Couldn't load datalist options :(";
//         }
//     }
// };

// // Update the placeholder text.
// input.placeholder = "Loading options...";

// // Set up and make the request.
// request.open('GET', 'Länder.json', true);
// request.send();