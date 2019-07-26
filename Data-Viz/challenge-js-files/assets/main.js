var yearsStaticData = [];
var dataSet1 = [];

function getRandomRgb() {
    let num = Math.round(0xffffff * Math.random());
    let r = num >> 16;
    let g = (num >> 8) & 255;
    let b = num & 255;
    return "rgb(" + r + ", " + g + ", " + b + ")";
}

function getYearsOutOfData() {
    for (let i = 2; i < table1.rows[1].cells.length; i++) {
        yearsStaticData[i - 2] = table1.rows[1].cells[i].innerHTML;
    }
}
getYearsOutOfData();

function createJsonFile() {
    for (let i = 2; i < table1.rows.length; i++) {
        let randomRGB = getRandomRgb();
        let tableRow = table1.rows[i];
        let country = tableRow.cells[1].innerHTML;
        let data = [];
        let rowJson = {
            label: country,
            fill: false,
            borderColor: randomRGB,
            data: data
        };
        for (let i = 2; i < tableRow.cells.length; i++) {
            data.push(parseInt(tableRow.cells[i].innerHTML));
        }
        dataSet1.push(rowJson);
    }
}
createJsonFile();

function createCanvasAndInsertToDom() {
    const canvas1 = document.createElement("canvas");
    canvas1.id = "myChart1";
    table1.parentNode.insertBefore(canvas1, table1);
    const ctx = document.getElementById("myChart1").getContext("2d");
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = 1000;

    new Chart(ctx, {
        type: "line",
        data: {
            labels: yearsStaticData,
            datasets: dataSet1
        },
        options: {}
    });
}
createCanvasAndInsertToDom();


function getDataFromDatapointsUrl(){
const proxyurl = "https://cors-anywhere.herokuapp.com/";
const url = 'https://canvasjs.com/services/data/datapoints.php)';

fetch(proxyurl + url)
.then(response => response.text())
.then(contents => createArrayForUpdatingData(contents));
}

getDataFromDatapointsUrl();

// setInterval(getDataFromDatapointsUrl, 100);
var updatingDataArray = [];

function createArrayForUpdatingData(updatingData){
    updatingDataArray.push(updatingData);
}

console.log(updatingDataArray)






