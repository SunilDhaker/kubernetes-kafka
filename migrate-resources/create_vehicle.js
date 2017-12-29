
var rp = require('request-promise');
var fs = require('fs');



var vehicleArr = require('./vehicle_updated.json')

// var url = "http://35.198.208.88:32231/migration/vehicle/add"
var url = "http://192.168.0.153:8989/migration/vehicle/add"

createVehicleAt(vehicleArr , 0)

function createVehicleAt(vehicleArr, index) {


    var options = {
        method: 'POST',
        uri: url,
        body: vehicleArr[index],
        headers: {
            'Content-Type': 'application/json'
        },
        json: true
    }

    console.log("creatind at index : " + index)

    rp(options).then(function (createResponse) {
        

        console.log("done at index : " + index)
        if (createResponse.status == 200) {
            console.log("success vehicle create")
            setTimeout( () => createVehicleAt(vehicleArr, index + 1) , 1)
           
        }
        else{
            console.log("failed");
            console.log(vehicleArr[index]);
            createVehicleAt(vehicleArr, index + 1)

        }
    }).catch((e) => {
        console.log(e)
        createVehicleAt(vehicleArr, index + 1)

    });
}

