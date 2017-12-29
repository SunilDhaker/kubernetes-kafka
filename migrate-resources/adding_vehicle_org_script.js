var rp = require('request-promise');
var fs = require('fs');

var vehicleArr = require('./vehicles_orig.json')

console.log("total cutomer : ", vehicleArr.length)

// var uriConfig = {
//     vehicleUpdateUri: 'http://35.198.224.56:80/home/commandSync',
//     vehicleCreateUri: 'http://35.198.224.56:80/home/commandSync'
// }


var uriConfig = {
        // vehicleUpdateUri: 'http://35.198.224.56:80/home/commandSync',
        // vehicleCreateUri: 'http://35.198.224.56:80/home/commandSync'

        vehicleUpdateUri: 'http://192.168.0.153:8080/home/commandSync',
        vehicleCreateUri: 'http://192.168.0.153:8080/home/commandSync'
    }

//method for create vehicle
// sequentialyCreateVehicleAndUpdateOrgId(vehicleArr, 0)
// var vehicleArr = []

// for(var i=0;i<1;i++){
//     vehicleArr.push(vehicleArr1[i])
// }


//method for update vehicle
sequentialyUpdateVehicleOrg(vehicleArr,0)

function getVehicleUpdateBody(vehicle) {
    var updation = {}
    var obj = {}
    if (vehicle.customerId && vehicle.uuid) {
        obj.orgId = vehicle.customerId
        obj.uuid = vehicle.uuid
        obj.sharedWith = ["FRETRON_GOD_FO"]
        updation.type = "vehicle.update.command"
        updation.data= obj
        return updation
    }

    return null;
}

function getVehicleCreateObject(vehicle) {
    var obj = {}
    obj.type = 'vehicle.create.command';
    obj.data = {}
    obj.data['customerId'] = vehicle.customerId
    obj.data['vehicleType'] = vehicle.vehicleType
    obj.data['vtsDeviceId'] = vehicle.vtsDeviceId
    obj.data['vehicleRegistrationNumber'] = vehicle.vehicleRegistrationNumber
    obj.data['associatedWith'] = vehicle.associatedWith
    obj.data['uuid'] = vehicle.uuid
    return obj;
}

function makeHttpCall(option) {
    return rp(option)
}

function sequentialyCreateVehicleAndUpdateOrgId(vehicleArr, index) {
    if (index > vehicleArr.length - 1) {
        //   sequentialyUpdateVehicleOrg(vehicleArr,0)
    }
    var vehicle = vehicleArr[index];
    console.log("___vehicle create : ", index + " __________ uuid : ", vehicle.uuid)
    var vehicleupdateBody = getVehicleUpdateBody(vehicle);
    if (vehicleupdateBody != null) {
        var vehicleCreateOption = {
            method: 'POST',
            uri: uriConfig.vehicleCreateUri,
            body: getVehicleCreateObject(vehicle),
            headers: {
                'Content-Type': 'application/json'
            },
            json: true
        }
        makeHttpCall(vehicleCreateOption).then(function (createResponse) {
            if (createResponse.StatusCode == 200) {
                console.log("success vehicle create")
                sequentialyCreateVehicleAndUpdateOrgId(vehicleArr, index + 1)
            }
            else {
                console.log("fail vehicle create ", createResponse)
                sequentialyCreateVehicleAndUpdateOrgId(vehicleArr, index + 1)

            }
        })
            .catch(function (err) {
                console.log("error in vehicle create ")
                sequentialyCreateVehicleAndUpdateOrgId(vehicleArr, index + 1)
            })
    }
    else {
        console.log("vehicle update body null", vehicle)
        sequentialyCreateVehicleAndUpdateOrgId(vehicleArr, index + 1);
    }

}





function sequentialyUpdateVehicleOrg(vehicleArr, index) {

    if (index > vehicleArr.length - 1) {
        return Promise.resolve()
    }
    var vehicle = vehicleArr[index];
    console.log("___vehicle update : ", index + " __________ uuid : ", vehicle.uuid)
    var vehicleupdateBody = getVehicleUpdateBody(vehicle);
    if (vehicleupdateBody != null) {
        vehicleUpdateOptions = {
            method: 'POST',
            uri: uriConfig.vehicleUpdateUri,
            body: vehicleupdateBody,
            headers: {
                'Content-Type': 'application/json'
            },
            json: true
        }
        makeHttpCall(vehicleUpdateOptions).then(function (updateResponse) {
            if (updateResponse.statusCode == 200) {
                console.log("vehicle updated successfully");
                sequentialyUpdateVehicleOrg(vehicleArr, index + 1)
            }
            else {
                console.log("vehicle update fail", updateResponse)
                sequentialyUpdateVehicleOrg(vehicleArr, index + 1)
            }
        })
            .catch(function (err) {
                console.log("error in vehicle update", err)
                sequentialyUpdateVehicleOrg(vehicleArr, index + 1)
            })
    }
    else {
        console.log("vehicle update body null", vehicle)
        sequentialyUpdateVehicleOrg(vehicleArr, index + 1);
    }


} 