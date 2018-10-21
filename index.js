const csv_to_json = require('csvtojson');
const fs = require('fs');
const path = require('path');

const filename = "customer-data"
const jsonFilename = filename + ".json"
const csvFilename = filename + ".csv"

csv_to_json()
.fromFile(path.join(__dirname, csvFilename))
.then((jsonObj)=>{
    fs.writeFile(path.join(__dirname, jsonFilename), JSON.stringify(jsonObj, null, 2), 'utf8', function(err){
        if (err) {
            return console.log(err);
        }
        console.log("Successfully converted the file.");
    })
})



