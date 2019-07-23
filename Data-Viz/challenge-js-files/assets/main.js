var countryArray = [];
var countryCrimeDataArray = [];
var yearsArray = [];

function seperateCountryFromData(){

let data = document.getElementsByTagName("tbody");
for (let i = 1; i < data[0].rows.length; i ++){
    pushInCountryArray(data[0].rows[i].cells[1].innerText);
    }

}
seperateCountryFromData();

let data = document.getElementsByTagName("tbody");
for (let i = 1; i < data[0].rows.length; i ++){
    createCleanNumber(data[0].rows[i]);
}

function createCleanNumber(messyNumber){
    for (let i = 2; i < messyNumber.cells.length; i++){
        let number = messyNumber.cells[i].innerText;
        pushCrimeDataArray(parseFloat(number.replace(/,/g, '.')));
        }
}

function pushInCountryArray(country){
    countryArray.push(country);
}

function pushCrimeDataArray(crimeData){
    countryCrimeDataArray.push(crimeData);
}

function seperateYearsFromData(){
    let table1 = document.getElementById('table1');

    for (i = 2; i < table1.rows[1].cells.length; i ++){
    pushYearsInArray(table1.rows[1].cells[i].innerText);
    }
}
seperateYearsFromData();

function pushYearsInArray(years){
    yearsArray.push(years);
}



new Chart(document.getElementById("line-chart"), {
    type: 'line',
    data: {
      labels: yearsArray,
      datasets: [{ 
          data: [86,114,106,106,107,111,133,221,783,2478],
          label: "Africa",
          borderColor: "#3e95cd",
          fill: false
        }, { 
          data: [282,350,411,502,635,809,947,1402,3700,5267],
          label: "Asia",
          borderColor: "#8e5ea2",
          fill: false
        }, { 
          data: [168,170,178,190,203,276,408,547,675,734],
          label: "Europe",
          borderColor: "#3cba9f",
          fill: false
        }, { 
          data: [40,20,10,16,24,38,74,167,508,784],
          label: "Latin America",
          borderColor: "#e8c3b9",
          fill: false
        }, { 
          data: [6,3,2,2,7,26,82,172,312,433],
          label: "North America",
          borderColor: "#c45850",
          fill: false
        }
      ]
    },
    options: {
      title: {
        display: true,
        text: 'World population per region (in millions)'
      }
    }
  });


