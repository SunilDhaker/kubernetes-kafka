var rp = require('request-promise');
var fs = require('fs');

var customerArr1 = require('./customer.json')

console.log("total cutomer : ", customerArr1.length)


var customerArr = []

for(var i=0;i<customerArr1.length;i++){
    customerArr.push(customerArr1[i])
}

var uriConfig = {
    loginUri: 'http://192.168.0.153/user/login/forany',
    signUpUri: 'http://192.168.0.153/user/create',
    orgCreateUri:'http://192.168.0.153/organisation/create/fromcustomer',
    addUserToOrgUri:'http://http://192.168.0.153/organisation/add'
}

// var uriConfig = {
//     loginUri: 'http://35.197.144.201/user/login/forany',
//     signUpUri: 'http://35.197.144.201/user/create',
//     orgCreateUri:'http://35.197.144.201/organisation/create/fromcustomer',
//     addUserToOrgUri:'http://35.197.144.201/organisation/add'
// }

// 8085: 32718 Group
// 8087: 32593 Registry

function getLoginObjectFromCustomer(customer) {
    var obj = {};
    if (customer.mobileNumber && customer.emailAddress) {
        obj.loginType = "fretron",
            obj.mobileNumber = customer.mobileNumber;

        return obj;
    }
    else {
        return null;
    }

}
function getSignUPObjectFromCustomer(customer, response) {
    var obj = {};
    obj.otp = response.otp;
    obj.onBoardingType = "fretron"
    obj.name = customer.contactPersonName
    obj.email = customer.emailAddress
    obj.mobileNumber = customer.mobileNumber

    return obj;
}

// var customerArr = [
//     { "contactPersonName": "Mohit sahu 32", "emailAddress": "sahu32@gmail.com", "mobileNumber": "999932", "uuid": "abc-abc-abc-32", "organizationName": "Chharbhuja Logistics", "organizationBillingAddress": "Shop No 39, Near Under bridge, By Pass, Pur Road Choraha, Bhilwara", "organizationShippingAddress": "Shop No 39, Near Under bridge, By Pass, Pur Road Choraha, Bhilwara", "typeOfCustomer": "fleetOwner" },
//     { "contactPersonName": "Mohit sahu 31", "emailAddress": "sahu31@gmail.com", "mobileNumber": "999931", "uuid": "abc-abc-abc-31", "organizationName": "Chharbhuja Logistics", "organizationBillingAddress": "Shop No 40, Near Under bridge, By Pass, Pur Road Choraha, Bhilwara", "organizationShippingAddress": "Shop No 39", "typeOfCustomer": "fleetOwner" },
//     { "contactPersonName": "Mohit sahu 33", "emailAddress": "sahu33@gmail.com", "mobileNumber": "999933", "uuid": "abc-abc-abc-33", "organizationName": "Chharbhuja Logistics", "organizationBillingAddress": "Shop No 40, Near Under bridge, By Pass, Pur Road Choraha, Bhilwara", "organizationShippingAddress": "Shop No 39", "typeOfCustomer": "fleetOwner" }

// ]

sequencialExecuteEachCustomer(customerArr,0)
function makeHttpCall(option) {
    return rp(option)
}

function sequencialExecuteEachCustomer(customerArr, index) {
    if (index > customerArr.length - 1) {
        return Promise.resolve()
    }
    var customer = customerArr[index]
    console.log("_______Customer number : ",index+"__________customer uuid : ________",customer.uuid)
    var loginBody = getLoginObjectFromCustomer(customerArr[index])
    if (loginBody != null) {
        var loginOptions = {
            method: 'POST',
            uri: uriConfig.loginUri,
            body: loginBody,
            headers: {
                'Content-Type': 'application/json'
            },
            json: true
        }
        makeHttpCall(loginOptions).then(function (loginResponse) {
            if (loginResponse.status == 200 && loginResponse.userType == 'new') {
                console.log("login success ");
                // make request for user 
                var signupOption = {
                    method: 'POST',
                    uri: uriConfig.signUpUri,
                    body: getSignUPObjectFromCustomer(customer, loginResponse),
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    json: true
                }

                makeHttpCall(signupOption).then(function (signUpResponse) {
                    if (signUpResponse.status == 200) {
                        console.log("sign up success")
                        token = signUpResponse.token
                        userId = signUpResponse.uuid
                        customerId = customer.uuid

                        var createOrgData = {}
                        createOrgData.orgId = "ORG_" + index
                        if (customer.organizationName) {
                            createOrgData.organisationName = customer.organizationName
                        }
                        else {
                            createOrgData.organisationName = customer.contactPersonName
                        }
                        createOrgData.type = "FLEET_OWNER"
                        createOrgData.uuid = customer.uuid
                        createOrgData.addedBy = userId
                        var orgnanizationOptions = {
                            method: 'POST',
                            uri: uriConfig.orgCreateUri,
                            body: createOrgData,
                            headers: {
                                'Content-Type': 'application/json',
                                'Authorization': 'Bearer' + ' ' + token
                            },
                            json: true
                        };
                        makeHttpCall(orgnanizationOptions).then(function (createOrgResponse) {

                            if (createOrgResponse.status == 200) {
                                //todo get org id and add it to user 
                                console.log("success Create org ")
                                // var millisecondsToWait = 500;
                                // setTimeout(function () {
                                //     // Whatever you want to do after the wait
                                //     var orgId = createOrgResponse['organisation.created']['uuid'];
                                //     console.log(" Org uuid -- should be same as customer Id : ", orgId)
                                //     console.log("ORG id given by user : ",createOrgResponse['organisation.created']['orgId'])
                                //     var addUserOrgData = {};
                                //     addUserOrgData.userUuid = userId;
                                //     addUserOrgData.orgUuid = orgId;
                                //     addUserOrgData.accessLevel = 'admin'
                                //     var addOrgOptions = {
                                //         method: 'POST',
                                //         uri: uriConfig.addUserToOrgUri,
                                //         body: addUserOrgData,
                                //         headers: {
                                //             'Content-Type': 'application/json',
                                //             'Authorization': 'Bearer' + ' ' + token
                                //         },
                                //         json: true
                                //     }

                                //     makeHttpCall(addOrgOptions).then(function (addUserOrgResponse) {
                                //         if (addUserOrgResponse.statusCode == 200) {
                                //             console.log("success org-user ")
                                //             sequencialExecuteEachCustomer(customerArr, index + 1)
                                //         }
                                //         else {
                                //             console.log("Fail org-User", addUserOrgResponse)
                                //             sequencialExecuteEachCustomer(customerArr, index + 1)
                                //         }
                                //     })
                                //         .catch(function (err) {
                                //             console.log("add org-user err : ", err)
                                //             sequencialExecuteEachCustomer(customerArr, index + 1)
                                //         })
                                // })
                                sequencialExecuteEachCustomer(customerArr, index + 1)
                            }
                            else {
                                console.log("create org fail : ", createOrgResponse)
                                sequencialExecuteEachCustomer(customerArr, index + 1)
                            }
                        })
                            .catch(function (err) {
                                console.log("create org err : ", err)
                                sequencialExecuteEachCustomer(customerArr, index + 1)
                            })
                    }
                    else {
                        console.log("fail sign up : ", signUpResponse);
                        sequencialExecuteEachCustomer(customerArr, index + 1)
                    }
                })
                    .catch(function (err) {
                        console.log("sign up err : ", err)
                        sequencialExecuteEachCustomer(customerArr, index + 1)
                    })
            }
            else {
                console.log("fail login", loginResponse);
                sequencialExecuteEachCustomer(customerArr, index + 1)
            }
        })
            .catch(function (err) {
                console.log("login err : ", err)
                sequencialExecuteEachCustomer(customerArr, index + 1)
            })
    }
    else {
        console.log("login body null for customer : ", customerArr[index])
        sequencialExecuteEachCustomer(customerArr, index + 1)
    }

}