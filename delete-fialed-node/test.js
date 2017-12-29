var count = 0;
var isOk = false;

var go = function () {



    for( i = 0 ; i < customers.length ; i++){

       var cus = customers[i];

        // console.log(cus.organizationName)
        isOk = false;
        for( j = 0 ; j < orgs.length ; j++){
            var org = orgs[j]
            if (org.organisationName == cus.organizationName) {
                isOk = true

              // console.log("match : " + org.organisationName)
            };
        }


        if (isOk == false) {
            count++;
            console.log("org not found for : " + cus.contactPersonName)
        }

    }

    console.log(count)

}








var orgs = [
    {
        "uuid": "12c84c33-a11d-42b9-8ac5-78c5602110b6",
        "orgId": "ORG54",
        "organisationName": "Pidilite",
        "type": "FLEET_OWNER",
        "addedBy": "c8e02382-92e7-4398-b62c-d8fe957e38ac"
    },
    {
        "uuid": "1b726bf4-d176-49d0-8132-6e2c59f31a6d",
        "orgId": "ORG_1",
        "organisationName": "Mr. Dharam Parkash",
        "type": "FLEET_OWNER",
        "addedBy": "00401a38-0cde-42f2-9023-53d283e9ba50"
    },
    {
        "uuid": "1c528e73-2e0a-4f98-927e-3d7a16b805a5",
        "orgId": "ORG_2",
        "organisationName": "Mr. Ramesh",
        "type": "FLEET_OWNER",
        "addedBy": "d7d4c25b-111a-48ae-913b-ced610b81b97"
    },
    {
        "uuid": "22d6f7c6-ed4c-4c98-897b-f1ee975ab4ba",
        "orgId": "ORG_3",
        "organisationName": "Mr. Rajesh",
        "type": "FLEET_OWNER",
        "addedBy": "e5fe804d-65ba-4c00-b6a5-4918717e40e7"
    },
    {
        "uuid": "25c32cf5-0c2a-4e29-8086-767547f65a24",
        "orgId": "tfo1",
        "organisationName": "test fleet org 1",
        "type": "FLEET_OWNER",
        "addedBy": "fc8288d4-2a8b-4a9b-89c8-b0c4400cffee"
    },
    {
        "uuid": "34182be5-fa6f-4fb3-9235-abc72b479ff4",
        "orgId": "ORG67",
        "organisationName": "Mr. Rajender Kumar",
        "type": "FLEET_OWNER",
        "addedBy": "402f8deb-1aa1-4458-ad02-fab143c3bc2a"
    },
    {
        "uuid": "3676cb04-5615-458e-b374-f3625a0f6c28",
        "orgId": "ORG52",
        "organisationName": "Jaat Roadlines",
        "type": "FLEET_OWNER",
        "addedBy": "03befccc-c833-4465-a623-a2da9bee25c6"
    },
    {
        "uuid": "38ec50f8-d7a1-47f3-bd88-dbbd773f4b3a",
        "orgId": "ORG79",
        "organisationName": "Mr. Anil Kumar",
        "type": "FLEET_OWNER",
        "addedBy": "4b8cb90f-b106-4403-b6e7-b090bdfdb143"
    },
    {
        "uuid": "475a0fc9-c187-419d-81cf-41feebb779b8",
        "orgId": "Test",
        "organisationName": "Test",
        "type": "FLEET_OWNER",
        "addedBy": "16946c23-7454-4d16-88d6-1707b2423d55"
    },
    {
        "uuid": "4b17410e-1bd4-479b-bab4-49886f0405fe",
        "orgId": "12345",
        "organisationName": "Shree RAM logistics ",
        "type": "FLEET_OWNER",
        "addedBy": "2f0dc98c-4102-4367-9e42-7fb2c7fab7fb"
    },
    {
        "uuid": "4ba70115-4d7f-4050-94be-3f2995a7226a",
        "orgId": "ORG73",
        "organisationName": "Mr. Sombir",
        "type": "FLEET_OWNER",
        "addedBy": "08c51181-1c81-463d-8ab8-de4ea1d65944"
    },
    {
        "uuid": "50b19d7e-4e77-4287-a904-8a0914b2f91f",
        "orgId": "ORG71",
        "organisationName": "Mr. Virender Kumar",
        "type": "FLEET_OWNER",
        "addedBy": "8f1e20af-4bfb-4cda-80a8-0583825dcb8e"
    },
    {
        "uuid": "50cb5bda-d76d-4f64-8559-3576dcd8da5e",
        "orgId": "ORG65",
        "organisationName": "Mr. Bhim Singh",
        "type": "FLEET_OWNER",
        "addedBy": "6c3718e9-7f29-4fa6-8d73-d1b1f22f2754"
    },
    {
        "uuid": "58188479-fd85-4afc-b66f-6c95b25e4295",
        "orgId": "ORG_10",
        "organisationName": "Mr. Vipin Dagar",
        "type": "FLEET_OWNER",
        "addedBy": "929685be-fa97-45d2-ae76-146846846b26"
    },
    {
        "uuid": "6628e30d-7371-4c6b-96e7-77ca43af99a5",
        "orgId": "सीगावल",
        "organisationName": "Jasraj gurjar ",
        "type": "TRANSPORTER",
        "addedBy": "f8169f0d-0c1c-45f3-b011-830b48c7f2b7"
    },
    {
        "uuid": "6c8a90a1-2ace-43da-b774-b6cb9a308f22",
        "orgId": "ORG_11",
        "organisationName": "Raju Roadlince",
        "type": "FLEET_OWNER",
        "addedBy": "1462d8c4-ad10-4a61-9d9a-e5e5560763b3"
    },
    {
        "uuid": "71b9a523-5caa-4cc1-a24f-2e8998c230d6",
        "orgId": "ORG_12",
        "organisationName": "Mr. Rajbir Singh",
        "type": "FLEET_OWNER",
        "addedBy": "57d5d361-144b-4359-8f57-ec77518425e3"
    },
    {
        "uuid": "783ccbe1-6145-4bcb-b03c-c8fd0d178945",
        "orgId": "AT1",
        "organisationName": "Akash Test",
        "type": "TRANSPORTER",
        "addedBy": "b7007463-c624-4e58-90cd-6a6ecfe4f752"
    },
    {
        "uuid": "7a6f2b55-7605-4811-8136-04a20ae74e40",
        "orgId": "ORG66",
        "organisationName": "Mr. Ajit Singh",
        "type": "FLEET_OWNER",
        "addedBy": "62b05015-2596-47fd-8b57-5341daf50dd3"
    },
    {
        "uuid": "7bd53045-a24d-4bed-b8c7-e5095cd078df",
        "orgId": "ORG_14",
        "organisationName": "Mr. Krishan kumar Yadav",
        "type": "FLEET_OWNER",
        "addedBy": "ba92368d-2c29-429c-ac9a-601531d1fac8"
    },
    {
        "uuid": "8056d23a-c92e-4978-9ca0-0f8cc7dba314",
        "orgId": "ORG_15",
        "organisationName": "Mr. Suresh Chand",
        "type": "FLEET_OWNER",
        "addedBy": "ab7929dc-4e1d-4ee6-a00f-d3d19d241cc6"
    },
    {
        "uuid": "81b46705-e3ed-4248-9e5a-094d466ea54e",
        "orgId": "tfo3",
        "organisationName": "Test FO 3",
        "type": "FLEET_OWNER",
        "addedBy": "fc8288d4-2a8b-4a9b-89c8-b0c4400cffee"
    },
    {
        "uuid": "82f6d3d4-613d-4187-8282-e0a619de0364",
        "orgId": "ORG_16",
        "organisationName": "Khandelwal Transport Co.",
        "type": "FLEET_OWNER",
        "addedBy": "f7ca8ed6-a907-465e-a583-4364145edf63"
    },
    {
        "uuid": "86e518d3-01f5-4847-a785-69e3bf66eb1a",
        "orgId": "ORG72",
        "organisationName": "Mr. Ravinder Kumar",
        "type": "FLEET_OWNER",
        "addedBy": "14d23b6d-1dd0-41e9-9c52-44f0dfd63ae3"
    },
    {
        "uuid": "8ac144a1-e6c6-4a53-9c10-336f27a037cf",
        "orgId": "ORG53",
        "organisationName": "Abhinav",
        "type": "FLEET_OWNER",
        "addedBy": "fc8288d4-2a8b-4a9b-89c8-b0c4400cffee"
    },
    {
        "uuid": "8ec5139e-2f4a-46f1-bab1-563a34400a0f",
        "orgId": "TeAB",
        "organisationName": "TeAB",
        "type": "FLEET_OWNER",
        "addedBy": "16946c23-7454-4d16-88d6-1707b2423d55"
    },
    {
        "uuid": "91d80700-3dc8-47fa-b97c-11aa70ddff50",
        "orgId": "ORG50",
        "organisationName": "Sunil Dhaker",
        "type": "FLEET_OWNER",
        "addedBy": "7cb40ad6-eff3-4bb5-92a9-08d101e87a65"
    },
    {
        "uuid": "9738048e-904e-4562-9450-d7f4ebf7dc39",
        "orgId": "ORG_20",
        "organisationName": "Mr. Ashok Kumar",
        "type": "FLEET_OWNER",
        "addedBy": "aafaac47-9921-4240-8559-794bdcfd5909"
    },
    {
        "uuid": "991c318c-2bd4-4c28-acab-9e8c520fbbdb",
        "orgId": "ORG_21",
        "organisationName": "Mrs. Savita",
        "type": "FLEET_OWNER",
        "addedBy": "45753194-03ec-4d36-9714-76dc97faf96d"
    },
    {
        "uuid": "99e02b90-c29d-4f95-b93f-c64b107c14fa",
        "orgId": "ORG51",
        "organisationName": "Shreeshyam Roadlines",
        "type": "FLEET_OWNER",
        "addedBy": "316eef1f-b065-4dd1-859a-14e331be702b"
    },
    {
        "uuid": "a6a8b1bc-4c89-45d3-a5b3-b4e45d417b60",
        "orgId": "ORG_23",
        "organisationName": "Mr. Raj Mal",
        "type": "FLEET_OWNER",
        "addedBy": "90eed892-03b1-429b-a753-d122f6176cb9"
    },
    {
        "uuid": "a9eb1360-5c6e-4475-a2fc-ff2e517a84d1",
        "orgId": "ORG70",
        "organisationName": "Mr. Pardeep Kumar",
        "type": "FLEET_OWNER",
        "addedBy": "b3228ebf-9fe1-48cf-b968-86811e57d490"
    },
    {
        "uuid": "b5205888-4067-4135-8875-f997d16f272a",
        "orgId": "TNG 1",
        "organisationName": "TESTING NEW ORG",
        "type": "FLEET_OWNER",
        "addedBy": "fc8288d4-2a8b-4a9b-89c8-b0c4400cffee"
    },
    {
        "uuid": "c83cfa6d-9aa1-4256-aeda-05a685474eac",
        "orgId": "ORG_25",
        "organisationName": "Mr. Jai Bhagwan",
        "type": "FLEET_OWNER",
        "addedBy": "8e9ea91c-2a7f-4c41-8d2b-4017d61240f7"
    },
    {
        "uuid": "ce6caecf-4fbb-4235-aa50-49442506fdc8",
        "orgId": "ORG60",
        "organisationName": " MAA JOGNIYA LOGISTICS",
        "type": "FLEET_OWNER",
        "addedBy": "cca3ed1d-c065-42f9-8928-05d5d34ec2b8"
    },
    {
        "uuid": "d53ecbb7-5267-4ee7-b685-1b67809780db",
        "orgId": "TOG1",
        "organisationName": "TEST OG1",
        "type": "FLEET_OWNER",
        "addedBy": "fc8288d4-2a8b-4a9b-89c8-b0c4400cffee"
    },
    {
        "uuid": "ede0f61f-2c2a-47f6-a3bc-b1cf349dc5e3",
        "orgId": "ORG61",
        "organisationName": "DARCL - Dinesh Verma Ji",
        "type": "FLEET_OWNER",
        "addedBy": "d3535c24-b2b2-47dc-9ab2-93db48a7bacd"
    },
    {
        "uuid": "edfaacd9-07b5-4779-bff2-4ec2c5ce8532",
        "orgId": "ORG_28",
        "organisationName": "Mr. Rajesh",
        "type": "FLEET_OWNER",
        "addedBy": "d10c3915-a741-47a1-ab55-dd24a1838d5b"
    },
    {
        "uuid": "fef49a6a-0c17-4d2d-b2bb-0b7f6b59c102",
        "orgId": "ORG_29",
        "organisationName": "Mr. Shiv Chand Jat",
        "type": "FLEET_OWNER",
        "addedBy": "49399545-b397-4ead-a7ac-bf17992a1911"
    },
    {
        "uuid": "ffd67145-a9a0-46e3-a4ff-dd7958d909b7",
        "orgId": "ORG59",
        "organisationName": "Shree Raj Logistics",
        "type": "FLEET_OWNER",
        "addedBy": "8e03f4a9-529d-4d79-af7e-5925e4f0e3f6"
    },
    {
        "uuid": "0cf81ae8-b22b-4c7b-b69c-58d8201fb340",
        "orgId": "ORG39",
        "organisationName": "Shree Bhagwati TPT",
        "type": "FLEET_OWNER",
        "addedBy": "6c2e19a6-5587-4112-bf3e-cbb96239ca50"
    },
    {
        "uuid": "15ca69b8-a08b-4b75-8ba3-5f4480fc2f65",
        "orgId": "ORG33",
        "organisationName": "Mr. Sandeep Dagar",
        "type": "FLEET_OWNER",
        "addedBy": "0e663889-fbe9-4fec-a4ba-c386c32274d6"
    },
    {
        "uuid": "30544e52-fd43-42dc-87fa-932ec4ea1213",
        "orgId": "Test",
        "organisationName": "Test",
        "type": "FLEET_OWNER",
        "addedBy": "16946c23-7454-4d16-88d6-1707b2423d55"
    },
    {
        "uuid": "542eb379-70c6-4a4e-a7e0-e536b8be7abb",
        "orgId": "ORG82",
        "organisationName": "Salasar Transport Co.",
        "type": "FLEET_OWNER",
        "addedBy": "93bca529-f0bc-463e-b7dd-fbf99610d9fd"
    },
    {
        "uuid": "5698c081-b681-4bfa-bc30-bf589f3eebb6",
        "orgId": "FRL",
        "organisationName": "Fretron-Lalit",
        "type": "FLEET_OWNER",
        "addedBy": "1d04a4f5-69c1-48af-ac44-0c0162fda48a"
    },
    {
        "uuid": "59010b3d-e570-4135-bc99-1bdd159d26ae",
        "orgId": "ORG13",
        "organisationName": "Mali transport",
        "type": "FLEET_OWNER",
        "addedBy": "eadf0c59-55da-45bd-90cd-bb4dbca49134"
    },
    {
        "uuid": "5ac71662-3dda-47c7-815a-528131251021",
        "orgId": "ORG38",
        "organisationName": "Mr. Vikram Dalal",
        "type": "FLEET_OWNER",
        "addedBy": "d5e0eb35-fb98-474f-9b6e-3dab9f31c1fc"
    },
    {
        "uuid": "65d2eab2-491e-4af6-85ad-8016752448ed",
        "orgId": "ORG_35",
        "organisationName": "Mr. Satyanarayan Gurjar",
        "type": "FLEET_OWNER",
        "addedBy": "74b4ae58-6a7c-490c-bbd4-194c0ab9e6f8"
    },
    {
        "uuid": "698a31a7-f467-45df-a602-659136d92da8",
        "orgId": "ORG30",
        "organisationName": "Darcl DDVS Chandigarh",
        "type": "FLEET_OWNER",
        "addedBy": "12c041c0-b105-47a8-8b0c-3fe34b6d1dae"
    },
    {
        "uuid": "6a09c5ed-3c3e-4040-954e-bd7ff4659a20",
        "orgId": "ORG_37",
        "organisationName": "Mrs. Krishana Devi",
        "type": "FLEET_OWNER",
        "addedBy": "ca7fad71-e16a-4f2a-b853-3224d71cb65b"
    },
    {
        "uuid": "6b2921e7-bc2d-4e33-ad83-6bb084035ae0",
        "orgId": "ORG22",
        "organisationName": "Dhanop Mata Roadlines",
        "type": "FLEET_OWNER",
        "addedBy": "0f629369-0666-48fb-bc48-06aad39186d2"
    },
    {
        "uuid": "6b6b9bed-fe62-47dc-8391-e2dbfe25c951",
        "orgId": "ORG36",
        "organisationName": "Mr. Raj Kishor",
        "type": "FLEET_OWNER",
        "addedBy": "6332e1f5-a493-42ae-938a-231fe96b0cfa"
    },
    {
        "uuid": "72249cc8-3d85-4ef4-920a-b01c4d1c044c",
        "orgId": "ORG32",
        "organisationName": "Mr. Bijender",
        "type": "FLEET_OWNER",
        "addedBy": "332c31c8-e4b5-40bc-b206-ec2cec4faff6"
    },
    {
        "uuid": "7585e053-7005-4de4-adfd-5327bf48fd88",
        "orgId": "ORG16",
        "organisationName": "FRETRON LLP",
        "type": "FLEET_OWNER",
        "addedBy": "16946c23-7454-4d16-88d6-1707b2423d55"
    },
    {
        "uuid": "84e67a4f-3e0a-4bf2-83f5-45c641ef747a",
        "orgId": "ORG15",
        "organisationName": "Mahaveer Logistics",
        "type": "FLEET_OWNER",
        "addedBy": "3e6d125c-d6dc-4784-bb78-34d88335014a"
    },
    {
        "uuid": "9627c400-9135-41e5-b9df-b0006cb231db",
        "orgId": "TFTO",
        "organisationName": "TEST FLEET OWN",
        "type": "FLEET_OWNER",
        "addedBy": "fc8288d4-2a8b-4a9b-89c8-b0c4400cffee"
    },
    {
        "uuid": "982e6733-e132-4a9c-9388-4fa4744f8783",
        "orgId": "ORG17",
        "organisationName": "DARCL - DDVS - KULDEEP CHAHAL",
        "type": "FLEET_OWNER",
        "addedBy": "f8b02fb3-b92c-4c6f-99e0-f9d4687cac57"
    },
    {
        "uuid": "9ccb66a0-1529-4a43-a2e0-dbe1e9694868",
        "orgId": "ORG34",
        "organisationName": "Mr. Virender",
        "type": "FLEET_OWNER",
        "addedBy": "c3ff4ab5-2cbb-489d-8305-d570de8cdee4"
    },
    {
        "uuid": "a2f69a90-9f08-4631-9536-2a369f8928e2",
        "orgId": "ORG41",
        "organisationName": "Mr. Surender",
        "type": "FLEET_OWNER",
        "addedBy": "89191757-0122-40da-8a05-07d80e5f4c7b"
    },
    {
        "uuid": "ae626e65-8139-4c8b-84f3-49d6726bb93a",
        "orgId": "ORG_46",
        "organisationName": "Mr. Hanuman Shai",
        "type": "FLEET_OWNER",
        "addedBy": "72081d9a-8fd2-4a43-ab8b-78e8ae325fe9"
    },
    {
        "uuid": "ae812eac-3a54-40dd-b0e4-b31dcfc2959e",
        "orgId": "ORG18",
        "organisationName": "Yadav Trailer Service",
        "type": "FLEET_OWNER",
        "addedBy": "7996fe3c-8d36-4225-89f1-fadb644754d1"
    },
    {
        "uuid": "bc3aaa07-635a-4d3d-a5a5-7f776e707b9d",
        "orgId": "ORG40",
        "organisationName": "Ajay Freight Carrier",
        "type": "FLEET_OWNER",
        "addedBy": "d3164c5c-61e4-4094-9cca-605aa68044e7"
    },
    {
        "uuid": "be8aeecd-62b6-474d-a4f2-9a4257c37fd7",
        "orgId": "naresh.jangra@m.darcl.com",
        "organisationName": "CJ Darcl Logistics Ltd.",
        "type": "TRANSPORTER",
        "addedBy": "ffe7955c-b653-4a2f-a46d-d69bff63fdd4"
    },
    {
        "uuid": "ce912f0f-2b60-40d4-b486-86c85593008f",
        "orgId": "ORG24",
        "organisationName": "Demo Account",
        "type": "FLEET_OWNER",
        "addedBy": "00968923-df05-4dec-b2a3-563568d0ebc0"
    },
    {
        "uuid": "e33cc614-6f72-43e3-9faf-dd244e64909a",
        "orgId": "ORG14",
        "organisationName": "Bhilwara Roadways",
        "type": "FLEET_OWNER",
        "addedBy": "3ed51a32-256b-4bdb-8875-1d90491c4662"
    },
    {
        "uuid": "e5c3a481-3a4c-4802-acf2-5b34b1605cbc",
        "orgId": "FRTRDEMO",
        "organisationName": "Fretron Demo Organisation",
        "type": "FLEET_OWNER",
        "addedBy": "bf7f24b6-92eb-4dde-8aef-1fa1d23911f1"
    },
    {
        "uuid": "e73c6380-eee0-4b8e-9e69-68b608f199fb",
        "orgId": "ORG_50",
        "organisationName": "Mr. Jitender Singh",
        "type": "FLEET_OWNER",
        "addedBy": "3f5b1a1d-af1d-4a5d-8ee1-27c3c8f7f2c2"
    },
    {
        "uuid": "e8582007-4cd5-4c1e-99c9-cd227fc00399",
        "orgId": "ORG23",
        "organisationName": "Chharbhuja Trailer Service",
        "type": "FLEET_OWNER",
        "addedBy": "9e3c2706-37c1-4f94-8d7d-d6a43573b940"
    },
    {
        "uuid": "ed7d582c-9fcc-42de-b2f0-16d079462515",
        "orgId": "ORG37",
        "organisationName": "DARCL - NBU Fleet",
        "type": "FLEET_OWNER",
        "addedBy": "5a8f045c-83e9-47de-9dc0-548240219738"
    },
    {
        "uuid": "ef89e52b-219f-4a74-9f18-c341587525b1",
        "orgId": "ORG_53",
        "organisationName": "Mr. Krishan kumar",
        "type": "FLEET_OWNER",
        "addedBy": "9e0e5419-7ff1-4a8a-b808-c80bfef91c65"
    },
    {
        "uuid": "0f1c6800-b586-4b58-b064-c1a656f26610",
        "orgId": "ORG5",
        "organisationName": "Shree Shyam Logistics",
        "type": "FLEET_OWNER",
        "addedBy": "054559f8-17cb-4d4a-a122-a428b798b291"
    },
    {
        "uuid": "25ba4781-6507-41c1-9482-05bb732d6407",
        "orgId": "ORG7",
        "organisationName": "Mr. Dharamvir Singh",
        "type": "FLEET_OWNER",
        "addedBy": "b209af15-c5e0-44eb-83fe-34178fe7e582"
    },
    {
        "uuid": "2a4a689f-d40a-47ba-ba91-40dfce75d7e0",
        "orgId": "ORG3",
        "organisationName": "Mr. Nand Kishore",
        "type": "FLEET_OWNER",
        "addedBy": "8c38a138-8239-4a7e-af21-7314b2cae98f"
    },
    {
        "uuid": "2fe5e33f-fd62-4868-89e6-0a37347fa11e",
        "orgId": "test",
        "organisationName": "SHIPPMER TEST",
        "type": "TRANSPORTER",
        "addedBy": "fc8288d4-2a8b-4a9b-89c8-b0c4400cffee"
    },
    {
        "uuid": "30574de1-9d26-4e13-94dd-9fc683482db0",
        "orgId": "ORG2",
        "organisationName": "Ronit Agarwal",
        "type": "FLEET_OWNER",
        "addedBy": "097efe4c-88b3-47ed-8aab-fc8eb772576e"
    },
    {
        "uuid": "379ae7f4-51fd-4065-92d7-eb12d2f1b309",
        "orgId": "Anil trailers ",
        "organisationName": "Anil trailer transport ",
        "type": "FLEET_OWNER",
        "addedBy": "ce155eb7-f54c-4086-b831-a5a9d4bf6447"
    },
    {
        "uuid": "3b89f656-4670-46fe-9330-bec9716030ad",
        "orgId": "TEAB",
        "organisationName": "AB TEST",
        "type": "TRANSPORTER",
        "addedBy": "16946c23-7454-4d16-88d6-1707b2423d55"
    },
    {
        "uuid": "49897f54-3e82-41bb-9067-28c329b720a4",
        "orgId": "ORG74",
        "organisationName": "Mr. Bhoop Singh",
        "type": "FLEET_OWNER",
        "addedBy": "3c28add6-8128-4d64-9cc8-02142ab416c8"
    },
    {
        "uuid": "4fe6f894-f43d-43b5-bbb9-8edf3ca96154",
        "orgId": "ORG_59",
        "organisationName": "Mr. Indrasinh Kalubha",
        "type": "FLEET_OWNER",
        "addedBy": "11be6286-86e5-441c-9546-a31dbd7377fd"
    },
    {
        "uuid": "5162fe62-736b-483a-b2cf-aeaa538d8672",
        "orgId": "sujanyadav33@gmail.com",
        "organisationName": "SANDEEP",
        "type": "TRANSPORTER",
        "addedBy": "ffa31ee9-19ea-448e-8d18-7bee3ea5ce01"
    },
    {
        "uuid": "5275b849-3423-4fe1-a6f4-2eadd7c1b334",
        "orgId": "ORG_60",
        "organisationName": "Mr. Pawan Kumar",
        "type": "FLEET_OWNER",
        "addedBy": "e46a1037-88e7-4fa9-adb2-b27415dcaea6"
    },
    {
        "uuid": "62b3b41c-b90b-49a5-8701-2b9330789aa8",
        "orgId": "ORG1",
        "organisationName": "Balaji Contractor",
        "type": "FLEET_OWNER",
        "addedBy": "7b162cca-8e6a-40c3-8e51-f8b142d708b7"
    },
    {
        "uuid": "7ed7be54-fabf-42f6-b425-cf6c59a8669c",
        "orgId": "ORG_62",
        "organisationName": "Mr. Raj Pal ",
        "type": "FLEET_OWNER",
        "addedBy": "a522f5b3-8259-491f-8a2a-d2332dbeec2f"
    },
    {
        "uuid": "840e5a0d-79f7-44d2-9eb1-32197329d8dc",
        "orgId": "ORG78",
        "organisationName": "Mr. Balwan Singh",
        "type": "FLEET_OWNER",
        "addedBy": "8ecc4bdb-2f9c-4af0-83f1-553ea858cace"
    },
    {
        "uuid": "9266b75e-420f-4ef0-9a29-0969369462ab",
        "orgId": "ORG_64",
        "organisationName": "Mr. Vikas Dagar",
        "type": "FLEET_OWNER",
        "addedBy": "7456c8e8-8a11-48a4-a1bd-035405391fb7"
    },
    {
        "uuid": "9c6877ae-b9d4-4109-9b57-6c743c2c61a0",
        "orgId": "ORG8",
        "organisationName": "Bala ji Roadline",
        "type": "FLEET_OWNER",
        "addedBy": "0f5d0f4a-3675-455b-9d8c-ac9f3af94f3c"
    },
    {
        "uuid": "aa2b40f7-bb5c-4251-acf8-f9ce21652f4a",
        "orgId": "ORG4",
        "organisationName": "Mr. Parth Singh",
        "type": "FLEET_OWNER",
        "addedBy": "e41e4179-87f8-4efd-b484-f9bfd8c973aa"
    },
    {
        "uuid": "b353376d-21ec-40c1-9171-80236dc8ab9b",
        "orgId": "ORG_67",
        "organisationName": "Mr. Anil Kumar",
        "type": "FLEET_OWNER",
        "addedBy": "f2a818e2-1449-4406-ac12-8e5353a574dc"
    },
    {
        "uuid": "c127a316-3b50-4511-8427-ce5b7da2f91b",
        "orgId": "ORG_68",
        "organisationName": "Mr. Suresh Kumar",
        "type": "FLEET_OWNER",
        "addedBy": "024be946-e2ad-4d94-8f5c-ede7868942ba"
    },
    {
        "uuid": "c6f9b827-8265-4a3e-b03c-b50b44dfbf3c",
        "orgId": "ORG_69",
        "organisationName": "Mr. Debi Lal Jat",
        "type": "FLEET_OWNER",
        "addedBy": "4ef63a29-1519-412f-9674-34922a818071"
    },
    {
        "uuid": "ce928bb8-47dd-44e7-8e2d-b64802913d5f",
        "orgId": "Insaafmotors",
        "organisationName": "Insaaf motors",
        "type": "FLEET_OWNER",
        "addedBy": "573128fd-4e1b-478f-a36d-495d1a858cf3"
    },
    {
        "uuid": "d1ca7094-2344-4cc5-a171-01a1d3d9207b",
        "orgId": "ORG6",
        "organisationName": "Mr. Pardeep ",
        "type": "FLEET_OWNER",
        "addedBy": "c5cea71b-8706-4453-aa0e-1b4e1f00adc5"
    },
    {
        "uuid": "e0c3c06e-ea28-4d8d-ba52-7e15936aa662",
        "orgId": "ORGF1",
        "organisationName": "TEST MY ORG",
        "type": "FLEET_OWNER",
        "addedBy": "fc8288d4-2a8b-4a9b-89c8-b0c4400cffee"
    },
    {
        "uuid": "ebb78092-52a5-48c4-b1d0-1d88882e3af0",
        "orgId": "ORG77",
        "organisationName": "Mr. Sunder Singh",
        "type": "FLEET_OWNER",
        "addedBy": "7f349488-0f07-4f10-a5b2-e6972ba8e3d1"
    },
    {
        "uuid": "f9ceda67-137e-41c1-87aa-33ef903343c3",
        "orgId": "ORG0",
        "organisationName": "Kacholiya Road Carrier",
        "type": "FLEET_OWNER",
        "addedBy": "304738c4-98af-46ff-94ef-9e4f7e9787f8"
    },
    {
        "uuid": "025d4d7c-5aa3-45b1-80f2-eda196a78a19",
        "orgId": "ORG26",
        "organisationName": "Mr. Mukesh Kumar",
        "type": "FLEET_OWNER",
        "addedBy": "fa866183-4170-49f6-adff-cb62ebce3829"
    },
    {
        "uuid": "03ad26d0-aab4-4b80-9c5f-83b1cfef728f",
        "orgId": "TO2",
        "organisationName": "TEST ORG2",
        "type": "FLEET_OWNER",
        "addedBy": "fc8288d4-2a8b-4a9b-89c8-b0c4400cffee"
    },
    {
        "uuid": "0e7c10f1-533b-4128-a30c-aea38b8aabd1",
        "orgId": "ORG9",
        "organisationName": "Balaji Logistics",
        "type": "FLEET_OWNER",
        "addedBy": "16eae998-776f-4f41-95a1-d6e6f2d78fb0"
    },
    {
        "uuid": "20e9b5a7-824f-4438-97e6-88f865383be1",
        "orgId": "FR LLP",
        "organisationName": "FR LLP",
        "type": "TRANSPORTER",
        "addedBy": "16946c23-7454-4d16-88d6-1707b2423d55"
    },
    {
        "uuid": "23ef7ca9-3346-493a-b044-0ab3a6180c93",
        "orgId": "ORG_75",
        "organisationName": "Mr. Jai Singh",
        "type": "FLEET_OWNER",
        "addedBy": "14ec6816-5f58-488e-8ba4-8674a2214c35"
    },
    {
        "uuid": "304b5008-590f-4c0c-b89d-3282eb48755c",
        "orgId": "ORG31",
        "organisationName": "Mr. Dinesh Kumar",
        "type": "FLEET_OWNER",
        "addedBy": "7711df19-43e3-449e-b4a8-c56e9a0d9dcd"
    },
    {
        "uuid": "33fbc2a6-f410-4881-9f92-ac74460c129f",
        "orgId": "CJDARCL",
        "organisationName": "CJ DARCL LOGISTICS",
        "type": "TRANSPORTER",
        "addedBy": "e179ffab-6da9-4c42-beab-7c3183ef77ff"
    },
    {
        "uuid": "3c88a88b-785f-4908-b37c-01f78a45493a",
        "orgId": "ORG_77",
        "organisationName": "Mr. Sunil Kumar",
        "type": "FLEET_OWNER",
        "addedBy": "cd022144-7312-4aba-973d-4b75b1ed63d8"
    },
    {
        "uuid": "3ec25675-8490-49ea-9b30-2a4f656fab58",
        "orgId": "ORG11",
        "organisationName": "JC Roadlines",
        "type": "FLEET_OWNER",
        "addedBy": "3ce05ef0-a37c-4238-9f55-cc99d0f32839"
    },
    {
        "uuid": "42f77d4c-9aa1-4f88-8a39-2a4cafb292d2",
        "orgId": "ORG76",
        "organisationName": "Mr. Shatrudhan Singh",
        "type": "FLEET_OWNER",
        "addedBy": "307d796f-3b4e-4eea-8518-e9bb60f86c3e"
    },
    {
        "uuid": "4c6e3cbb-57cb-4465-b458-6ab243d4925a",
        "orgId": "ORG35",
        "organisationName": "Mastana Transport Co.",
        "type": "FLEET_OWNER",
        "addedBy": "0d5102b0-57c1-431b-9462-a2e7da648e57"
    },
    {
        "uuid": "4f11ddc5-1627-4b95-91c9-bcfdf4d7d2d7",
        "orgId": "ORG10",
        "organisationName": "Shree DN Roadlines",
        "type": "FLEET_OWNER",
        "addedBy": "c87c291b-50e2-4869-a944-2bcad9fa5b15"
    },
    {
        "uuid": "54383032-9cd4-45be-8d8c-da109a7837c4",
        "orgId": "ST2",
        "organisationName": "SS TEST2",
        "type": "TRANSPORTER",
        "addedBy": "7cb40ad6-eff3-4bb5-92a9-08d101e87a65"
    },
    {
        "uuid": "577c335d-688a-4318-8bd5-5226cc2aadd2",
        "orgId": "ORG80",
        "organisationName": "Mr. Mahender Kumar",
        "type": "FLEET_OWNER",
        "addedBy": "965cae5a-3fd6-4705-b338-3d6360cf20d8"
    },
    {
        "uuid": "5e2fa30e-0991-4b89-a49e-28e4660664e8",
        "orgId": "ORG28",
        "organisationName": "Mr. Vijay Singh",
        "type": "FLEET_OWNER",
        "addedBy": "0ec22c5f-6582-44b7-9b22-20516ad7e010"
    },
    {
        "uuid": "7c4b9054-7fee-4864-b29f-b357947778fd",
        "orgId": "ORG_84",
        "organisationName": "Mr. Satish",
        "type": "FLEET_OWNER",
        "addedBy": "1c0d0cff-7dc0-4def-b3d3-9f6cbd2f9e21"
    },
    {
        "uuid": "835aed5d-7ac7-4ee4-8919-6989f7a6b917",
        "orgId": "ORG_85",
        "organisationName": "Mr. Hari Singh",
        "type": "FLEET_OWNER",
        "addedBy": "2ba2017d-b206-400a-a210-cc087d1298bb"
    },
    {
        "uuid": "842ffb2b-162f-4c0d-8d27-8fd9f61b0e71",
        "orgId": "TO3",
        "organisationName": "TEST ORG3",
        "type": "FLEET_OWNER",
        "addedBy": "fc8288d4-2a8b-4a9b-89c8-b0c4400cffee"
    },
    {
        "uuid": "867dbe69-a33b-47f9-82d8-0ecd3332cc0c",
        "orgId": "DARCL",
        "organisationName": "CJ DARCL",
        "type": "FLEET_OWNER",
        "addedBy": "f1995ac8-9642-41cb-8dbd-ca0e2a59a75c"
    },
    {
        "uuid": "8bf162a7-3dfc-4aa1-b058-9da2c2d9d07b",
        "orgId": "DDVS_ASHISH",
        "organisationName": "DARCL - DDVS - ASHISH GUPTA",
        "type": "FLEET_OWNER",
        "addedBy": "097efe4c-88b3-47ed-8aab-fc8eb772576e"
    },
    {
        "uuid": "8d7cabdd-bf3e-409f-ba21-95675661d54b",
        "orgId": "Test",
        "organisationName": "Test",
        "type": "FLEET_OWNER",
        "addedBy": "16946c23-7454-4d16-88d6-1707b2423d55"
    },
    {
        "uuid": "a02685bd-fa3f-4eb6-b90b-dba892ab7ebf",
        "orgId": "ORG27",
        "organisationName": "Mr. Vinod Kumar",
        "type": "FLEET_OWNER",
        "addedBy": "e24802d6-e5d8-4633-a285-a28812201755"
    },
    {
        "uuid": "a38afedf-cdb2-4be8-97c0-2872b0921f62",
        "orgId": "ORG_87",
        "organisationName": "Darcl DDVS Chandigarh - Suresh Kumar",
        "type": "FLEET_OWNER",
        "addedBy": "4b09448e-7bd9-41e5-8f67-00481243bcc3"
    },
    {
        "uuid": "a77e1a8e-1daf-4ee3-9499-da1f1ea2620c",
        "orgId": "ORG_88",
        "organisationName": "Mr. Ashok Kumar",
        "type": "FLEET_OWNER",
        "addedBy": "1d7e31a6-3a30-44eb-b029-a84e159d3a6f"
    },
    {
        "uuid": "b1c7e57d-97b8-4470-a7c3-2af667c1ae68",
        "orgId": "ORG20",
        "organisationName": "Fretron LLP",
        "type": "FLEET_OWNER",
        "addedBy": "618da435-ae37-4546-992d-dfc548c70af9"
    },
    {
        "uuid": "b7b9052e-cf87-40ce-a9c4-4a7509ecfa9b",
        "orgId": "ORG12",
        "organisationName": "Abhinav Som ",
        "type": "FLEET_OWNER",
        "addedBy": "80defcce-8df8-4c77-ab3c-851942f9c78d"
    },
    {
        "uuid": "bcbd35ad-061d-49bb-b1ee-1be06090ade3",
        "orgId": "ORG_92",
        "organisationName": "Mr. Sunil",
        "type": "FLEET_OWNER",
        "addedBy": "157bd5ba-7ebb-4b4b-8847-537ceeeb670d"
    },
    {
        "uuid": "c6ccec55-1665-4973-b610-e5863d702f7f",
        "orgId": "Test",
        "organisationName": "Test",
        "type": "FLEET_OWNER",
        "addedBy": "16946c23-7454-4d16-88d6-1707b2423d55"
    },
    {
        "uuid": "c8db3af6-3967-4a60-91af-46ad11df4ac8",
        "orgId": "ORG25",
        "organisationName": "Mr. Ishwar Singh",
        "type": "FLEET_OWNER",
        "addedBy": "76c1891d-a10c-4892-9d72-cc498b19fc92"
    },
    {
        "uuid": "c8dd3a4f-8dab-47a9-bd52-ac09a68b357d",
        "orgId": "ORG21",
        "organisationName": "India Trailor Transways",
        "type": "FLEET_OWNER",
        "addedBy": "0953bb9c-b772-4d07-8b85-55be7f5d129d"
    },
    {
        "uuid": "cf7d3925-c2ae-436a-af83-e9f149d1e10f",
        "orgId": "ORG19",
        "organisationName": "Jangal Transport Company",
        "type": "FLEET_OWNER",
        "addedBy": "10026717-3597-4e6a-b28f-87405b6d70d9"
    },
    {
        "uuid": "da85d37a-9353-449b-8265-09b812dd6078",
        "orgId": "ORG_96",
        "organisationName": "Shree Balaji Roadlines",
        "type": "FLEET_OWNER",
        "addedBy": "c4c52b59-0bf3-44a5-833d-836291a1f249"
    },
    {
        "uuid": "ee165ddc-3131-4adf-b2ff-fe7932e038da",
        "orgId": "ORG75",
        "organisationName": "Mr. Phool Singh",
        "type": "FLEET_OWNER",
        "addedBy": "705f7e41-5fb0-4341-a652-05923a2edcbd"
    },
    {
        "uuid": "ee85f8cb-72e3-42be-96d9-a5379d7b9e48",
        "orgId": "ORG29",
        "organisationName": "Mr. Dharmvir Singh",
        "type": "FLEET_OWNER",
        "addedBy": "793a6d5c-67f6-4c88-8c43-9199eb93b638"
    },
    {
        "uuid": "01abc1ab-2b22-4f04-9321-185fd84a4648",
        "orgId": "tof",
        "organisationName": "test orf1",
        "type": "TRANSPORTER",
        "addedBy": "fc8288d4-2a8b-4a9b-89c8-b0c4400cffee"
    },
    {
        "uuid": "0340a5f5-ad43-472e-81f4-10f6d0db864e",
        "orgId": "ST1",
        "organisationName": "SS TEST",
        "type": "TRANSPORTER",
        "addedBy": "7cb40ad6-eff3-4bb5-92a9-08d101e87a65"
    },
    {
        "uuid": "0924ec9c-a5c8-4bf0-b6ef-9867660c6fed",
        "orgId": "ORG56",
        "organisationName": "Mr. Jagdish",
        "type": "FLEET_OWNER",
        "addedBy": "1be6b803-5010-4c9a-9006-16a2a827a36a"
    },
    {
        "uuid": "112f3911-45a9-4357-8d9f-607ee2a4f1ba",
        "orgId": "AOF",
        "organisationName": "ANOTHER ORG FLEET",
        "type": "FLEET_OWNER",
        "addedBy": "fc8288d4-2a8b-4a9b-89c8-b0c4400cffee"
    },
    {
        "uuid": "1387cf70-f44d-4497-b522-e5299085df36",
        "orgId": "ORG_100",
        "organisationName": "Mr. Balwant Singh",
        "type": "FLEET_OWNER",
        "addedBy": "060a2360-5028-4318-ad0e-f18048e94638"
    },
    {
        "uuid": "212dd9cc-de64-4433-92be-3c5dead0e4df",
        "orgId": "ORG48",
        "organisationName": "Raipur golden transport",
        "type": "FLEET_OWNER",
        "addedBy": "84127b40-3d34-49f3-a8ad-0928e3c10486"
    },
    {
        "uuid": "3acfff20-49d0-4991-8938-4880491fd6a3",
        "orgId": "ORG44",
        "organisationName": "Baagwan Roadlines",
        "type": "FLEET_OWNER",
        "addedBy": "7e0d5d63-48a6-4d92-9b10-5a4935b3bffc"
    },
    {
        "uuid": "5bf6851e-158a-4faa-a1ef-f182bcd1cb13",
        "orgId": "ORG58",
        "organisationName": "Mr. Rampal",
        "type": "FLEET_OWNER",
        "addedBy": "7a7e0645-6e60-4403-977f-452d148087de"
    },
    {
        "uuid": "611f1302-b5f3-4e93-bb4c-3580b9d158c2",
        "orgId": "test transu1",
        "organisationName": "TEST transu",
        "type": "FLEET_OWNER",
        "addedBy": "fc8288d4-2a8b-4a9b-89c8-b0c4400cffee"
    },
    {
        "uuid": "76a10696-e4bc-4869-8030-dcf6374d3f0b",
        "orgId": "ORG45",
        "organisationName": "Shree Ram Logistics",
        "type": "FLEET_OWNER",
        "addedBy": "53c3275f-92f6-4518-aa93-65616dacf8c3"
    },
    {
        "uuid": "7fc132e5-efe5-4323-9f84-5a5531da768f",
        "orgId": "ORG81",
        "organisationName": "Mr. Umesh Kumar",
        "type": "FLEET_OWNER",
        "addedBy": "537d3fd0-44ce-4f3b-9d56-639fc56bbbd0"
    },
    {
        "uuid": "8b68f5a8-09fc-464f-95db-d4b1af7efa2e",
        "orgId": "ORG_107",
        "organisationName": "Mr. Ramchndar",
        "type": "FLEET_OWNER",
        "addedBy": "20e4d123-0254-416c-8718-0917acd7ee54"
    },
    {
        "uuid": "9708d847-9538-46af-a457-59751addd603",
        "orgId": "ORG_108",
        "organisationName": "DARCL - PROJECT DEPARTMENT",
        "type": "FLEET_OWNER",
        "addedBy": "da2f5042-4c50-4634-b52b-e7ab79cfd6ac"
    },
    {
        "uuid": "ab3eb302-6c7a-489f-8a09-ca0a3e882f64",
        "orgId": "ORG64",
        "organisationName": "Mr. Ishwar",
        "type": "FLEET_OWNER",
        "addedBy": "0de2e818-8e65-4f97-8716-5341bf4c63b2"
    },
    {
        "uuid": "ac25b789-70e3-4cb9-869e-3bc1bfdc6653",
        "orgId": "ORG42",
        "organisationName": "Chharbhuja Logistics",
        "type": "FLEET_OWNER",
        "addedBy": "3d4f5410-002b-41f5-8d5d-1256f22611f6"
    },
    {
        "uuid": "b8cccc63-6826-4357-9772-74966b649c88",
        "orgId": "ORG_111",
        "organisationName": "Mr. Anil Kumar",
        "type": "FLEET_OWNER",
        "addedBy": "9b162f65-6115-4d32-ac43-41cb28eb279e"
    },
    {
        "uuid": "bd510469-c8fe-4290-b765-f57890dda989",
        "orgId": "Rud@0175",
        "organisationName": "Rudrakshi Enterprises",
        "type": "FLEET_OWNER",
        "addedBy": "3d95c1d6-ce54-4c07-8195-4e25d2f73ae8"
    },
    {
        "uuid": "c02b710f-e2da-4932-9212-18ba2d2c2c87",
        "orgId": "ORG57",
        "organisationName": "Mr. Vijay Singh",
        "type": "FLEET_OWNER",
        "addedBy": "16fa204d-f97d-4294-b67a-ccd253c154ef"
    },
    {
        "uuid": "c1f75e5f-d4d4-4b9e-975d-3fe14bfec1fe",
        "orgId": "ORG55",
        "organisationName": "Mr. Ram Bhaj Sharma",
        "type": "FLEET_OWNER",
        "addedBy": "b8041a1f-c6d7-41f9-baff-bbb1e8d8e528"
    },
    {
        "uuid": "c23c4cbd-177e-47b7-929f-34804c9d7815",
        "orgId": "ORG68",
        "organisationName": "DARCL - Ahemdabad",
        "type": "FLEET_OWNER",
        "addedBy": "8551c314-b262-4d89-bb11-131f615d211b"
    },
    {
        "uuid": "d4fabab2-3759-49a3-a0c4-37d9ce78bb75",
        "orgId": "ORG_115",
        "organisationName": "Mr. Vipin Dagar",
        "type": "FLEET_OWNER",
        "addedBy": "f8fe0223-6fe9-4bc7-afd5-1d2d7c74f9bc"
    },
    {
        "uuid": "d5f15e6e-d929-4ac5-aed2-0b801a0c5a3c",
        "orgId": "ORG62",
        "organisationName": "Mr. Vijendra Singh",
        "type": "FLEET_OWNER",
        "addedBy": "a627ce16-099b-49e0-8772-82bfbf95e428"
    },
    {
        "uuid": "dc991ecb-b72e-47b4-a5c8-dfc55038b0f8",
        "orgId": "ORG63",
        "organisationName": "Mr. Pardeep",
        "type": "FLEET_OWNER",
        "addedBy": "0a885bef-d659-414f-89f6-afe36320c166"
    },
    {
        "uuid": "e001fd3b-79f3-43d2-be72-9261f8fdf58d",
        "orgId": "ORG_118",
        "organisationName": "Mr. Balwan",
        "type": "FLEET_OWNER",
        "addedBy": "09f837b1-e0b7-45e3-a272-63e2a02d7adc"
    },
    {
        "uuid": "e8639c1e-9407-4690-aef9-e82ca37e1f7e",
        "orgId": "ORG43",
        "organisationName": "The SRS Carriers",
        "type": "FLEET_OWNER",
        "addedBy": "43801a14-0af2-468c-ba32-17e04c1099d8"
    },
    {
        "uuid": "e87a6396-9caf-4486-9ed4-f4954ba5ec99",
        "orgId": "ORG_120",
        "organisationName": "Mr. Gaje Singh",
        "type": "FLEET_OWNER",
        "addedBy": "48c50747-1db1-4de4-92a2-d42f19b7424f"
    },
    {
        "uuid": "f57d3ae4-94b6-4c62-868e-387d1bc195e8",
        "orgId": "TFO2",
        "organisationName": "TEST F O 2",
        "type": "FLEET_OWNER",
        "addedBy": "fc8288d4-2a8b-4a9b-89c8-b0c4400cffee"
    },
    {
        "uuid": "f62f70e5-ec8c-40a8-8c9b-1c5dc2cb0b5c",
        "orgId": "ORG47",
        "organisationName": " SSP LOGISTICS",
        "type": "FLEET_OWNER",
        "addedBy": "e8ea0f48-4c5b-4d66-b595-1688d703d7a9"
    },
    {
        "uuid": "feb646e2-154c-46d4-94f8-9ad9a5c94627",
        "orgId": "ORG69",
        "organisationName": "Mr. Ravinder Kumar",
        "type": "FLEET_OWNER",
        "addedBy": "624ba493-dd94-4573-84a7-167a07b63d74"
    }
]

var customers = [{
	"contactPersonName": "Rahul Moral",
	"emailAddress": "kausar.ahamad@pidilite.com",
	"mobileNumber": "8470026828",
	"organizationName": "Pidilite",
	"organizationBillingAddress": "NA",
	"organizationShippingAddress": "Pidilite Delhi",
	"typeOfCustomer": "shipper",
	"uuid": "12c84c33-a11d-42b9-8ac5-78c5602110b6",
	"isDeleted": null,
	"createTime": 1506234079367,
	"updateTime": 1506314914078
}, {
	"contactPersonName": "Mr. Dharam Parkash",
	"emailAddress": "support45@fretron.com",
	"mobileNumber": "9540209674",
	"organizationName": "Mr. Dharam Parkash",
	"organizationBillingAddress": "Bhilwara",
	"organizationShippingAddress": "Bhilwara",
	"typeOfCustomer": "fleetOwner",
	"uuid": "1b726bf4-d176-49d0-8132-6e2c59f31a6d",
	"isDeleted": null,
	"createTime": null,
	"updateTime": null
}, {
	"contactPersonName": "Mr. Ramesh",
	"emailAddress": "support64@fretron.com",
	"mobileNumber": "8949248329",
	"organizationName": "Mr. Ramesh",
	"organizationBillingAddress": "Bhilwara",
	"organizationShippingAddress": "Bhilwara",
	"typeOfCustomer": "fleetOwner",
	"uuid": "1c528e73-2e0a-4f98-927e-3d7a16b805a5",
	"isDeleted": null,
	"createTime": null,
	"updateTime": null
}, {
	"contactPersonName": "Mr. Rajesh",
	"emailAddress": "support50@fretron.com",
	"mobileNumber": "8689038080",
	"organizationName": "Mr. Rajesh",
	"organizationBillingAddress": "Bhilwara",
	"organizationShippingAddress": "Bhilwara",
	"typeOfCustomer": "fleetOwner",
	"uuid": "22d6f7c6-ed4c-4c98-897b-f1ee975ab4ba",
	"isDeleted": null,
	"createTime": null,
	"updateTime": null
}, {
	"contactPersonName": "Mr. Rajender Kumar",
	"emailAddress": "support18@fretron.com",
	"mobileNumber": "9971347615",
	"organizationName": "Mr. Rajender Kumar",
	"organizationBillingAddress": "Bhilwara",
	"organizationShippingAddress": "Bhilwara",
	"typeOfCustomer": "fleetOwner",
	"uuid": "34182be5-fa6f-4fb3-9235-abc72b479ff4",
	"isDeleted": null,
	"createTime": null,
	"updateTime": null
}, {
	"contactPersonName": "VIAJYPAL SINGH JAT",
	"emailAddress": "jatroadlines4845@gmail.com",
	"mobileNumber": "8829004845",
	"organizationName": "Jaat Roadlines",
	"organizationBillingAddress": "Shop no 1, Pur Road, Opposite RTO Office, Narmada Vihar, Bhilwara",
	"organizationShippingAddress": "Shop no 1, Pur Road, Opposite RTO Office, Narmada Vihar, Bhilwara",
	"typeOfCustomer": "agent",
	"uuid": "3676cb04-5615-458e-b374-f3625a0f6c28",
	"isDeleted": null,
	"createTime": 1502363821566,
	"updateTime": 1506393834299
}, {
	"contactPersonName": "Mr. Anil Kumar",
	"emailAddress": "support39@fretron.com",
	"mobileNumber": "7988257039",
	"organizationName": "Mr. Anil Kumar",
	"organizationBillingAddress": "Bhilwara",
	"organizationShippingAddress": "Bhilwara",
	"typeOfCustomer": "fleetOwner",
	"uuid": "38ec50f8-d7a1-47f3-bd88-dbbd773f4b3a",
	"isDeleted": null,
	"createTime": null,
	"updateTime": null
}, {
	"contactPersonName": "Mr. Sombir",
	"emailAddress": "support33@fretron.com",
	"mobileNumber": "8607341979",
	"organizationName": "Mr. Sombir",
	"organizationBillingAddress": "Bhilwara",
	"organizationShippingAddress": "Bhilwara",
	"typeOfCustomer": "fleetOwner",
	"uuid": "4ba70115-4d7f-4050-94be-3f2995a7226a",
	"isDeleted": null,
	"createTime": null,
	"updateTime": null
}, {
	"contactPersonName": "Mr. Virender Kumar",
	"emailAddress": "support27@fretron.com",
	"mobileNumber": "9810458128",
	"organizationName": "Mr. Virender Kumar",
	"organizationBillingAddress": "Bhilwara",
	"organizationShippingAddress": "Bhilwara",
	"typeOfCustomer": "fleetOwner",
	"uuid": "50b19d7e-4e77-4287-a904-8a0914b2f91f",
	"isDeleted": null,
	"createTime": null,
	"updateTime": null
}, {
	"contactPersonName": "Mr. Bhim Singh",
	"emailAddress": "support7@fretron.com",
	"mobileNumber": "9354195737",
	"organizationName": "Mr. Bhim Singh",
	"organizationBillingAddress": "Bhilwara",
	"organizationShippingAddress": "Bhilwara",
	"typeOfCustomer": "fleetOwner",
	"uuid": "50cb5bda-d76d-4f64-8559-3576dcd8da5e",
	"isDeleted": null,
	"createTime": null,
	"updateTime": null
}, {
	"contactPersonName": "Mr. Vipin Dagar",
	"emailAddress": "support67@fretron.com",
	"mobileNumber": "9050411050",
	"organizationName": "Mr. Vipin Dagar",
	"organizationBillingAddress": "Bhilwara",
	"organizationShippingAddress": "Bhilwara",
	"typeOfCustomer": "fleetOwner",
	"uuid": "58188479-fd85-4afc-b66f-6c95b25e4295",
	"isDeleted": null,
	"createTime": null,
	"updateTime": null
}, {
	"contactPersonName": "Mr. Chandra Bhan Dhabas",
	"emailAddress": "support60@fretron.com",
	"mobileNumber": "9462697057",
	"organizationName": "Raju Roadlince",
	"organizationBillingAddress": "Dev Narayan Hotel bypass road,Hazarikhera, Bhilwara",
	"organizationShippingAddress": "Dev Narayan Hotel bypass road,Hazarikhera, Bhilwara",
	"typeOfCustomer": "fleetOwner",
	"uuid": "6c8a90a1-2ace-43da-b774-b6cb9a308f22",
	"isDeleted": null,
	"createTime": null,
	"updateTime": null
}, {
	"contactPersonName": "Mr. Rajbir Singh",
	"emailAddress": "support63@fretron.com",
	"mobileNumber": "8708672191",
	"organizationName": "Mr. Rajbir Singh",
	"organizationBillingAddress": "Bhilwara",
	"organizationShippingAddress": "Bhilwara",
	"typeOfCustomer": "fleetOwner",
	"uuid": "71b9a523-5caa-4cc1-a24f-2e8998c230d6",
	"isDeleted": null,
	"createTime": null,
	"updateTime": null
}, {
	"contactPersonName": "Mr. Ajit Singh",
	"emailAddress": "support8@fretron.com",
	"mobileNumber": "9355248918",
	"organizationName": "Mr. Ajit Singh",
	"organizationBillingAddress": "Bhilwara",
	"organizationShippingAddress": "Bhilwara",
	"typeOfCustomer": "fleetOwner",
	"uuid": "7a6f2b55-7605-4811-8136-04a20ae74e40",
	"isDeleted": null,
	"createTime": null,
	"updateTime": null
}, {
	"contactPersonName": "Mr. Krishan kumar Yadav",
	"emailAddress": "support54@fretron.com",
	"mobileNumber": "7597000078",
	"organizationName": "Mr. Krishan kumar Yadav",
	"organizationBillingAddress": "Bhilwara",
	"organizationShippingAddress": "Bhilwara",
	"typeOfCustomer": "fleetOwner",
	"uuid": "7bd53045-a24d-4bed-b8c7-e5095cd078df",
	"isDeleted": null,
	"createTime": null,
	"updateTime": null
}, {
	"contactPersonName": "Mr. Suresh Chand",
	"emailAddress": "support51@fretron.com",
	"mobileNumber": "9050849362",
	"organizationName": "Mr. Suresh Chand",
	"organizationBillingAddress": "Bhilwara",
	"organizationShippingAddress": "Bhilwara",
	"typeOfCustomer": "fleetOwner",
	"uuid": "8056d23a-c92e-4978-9ca0-0f8cc7dba314",
	"isDeleted": null,
	"createTime": null,
	"updateTime": null
}, {
	"contactPersonName": "Mr. Kailash Chand Sharma",
	"emailAddress": "support52@fretron.com",
	"mobileNumber": "9950287096",
	"organizationName": "Khandelwal Transport Co.",
	"organizationBillingAddress": "Baba Dham, Shyam Nagar, Bhilwara",
	"organizationShippingAddress": "Baba Dham, Shyam Nagar, Bhilwara",
	"typeOfCustomer": "fleetOwner",
	"uuid": "82f6d3d4-613d-4187-8282-e0a619de0364",
	"isDeleted": null,
	"createTime": null,
	"updateTime": null
}, {
	"contactPersonName": "Mr. Ravinder Kumar",
	"emailAddress": "support29@fretron.com",
	"mobileNumber": "8278207353",
	"organizationName": "Mr. Ravinder Kumar",
	"organizationBillingAddress": "Bhilwara",
	"organizationShippingAddress": "Bhilwara",
	"typeOfCustomer": "fleetOwner",
	"uuid": "86e518d3-01f5-4847-a785-69e3bf66eb1a",
	"isDeleted": null,
	"createTime": null,
	"updateTime": null
}, {
	"contactPersonName": "Abhinav",
	"emailAddress": "somabhi890@gmail.com",
	"mobileNumber": "8708069755",
	"organizationName": null,
	"organizationBillingAddress": null,
	"organizationShippingAddress": null,
	"typeOfCustomer": null,
	"uuid": "8ac144a1-e6c6-4a53-9c10-336f27a037cf",
	"isDeleted": null,
	"createTime": 1502369442652,
	"updateTime": null
}, {
	"contactPersonName": "Sunil",
	"emailAddress": "sunil@fretron.com",
	"mobileNumber": "9085432951",
	"organizationName": "Sunil Dhaker",
	"organizationBillingAddress": "G2 , Taradeep apartment",
	"organizationShippingAddress": "G2 , Taradeep apartment, Sarswati Kunj II, Wazirabad, Sector 52",
	"typeOfCustomer": "shipper",
	"uuid": "91d80700-3dc8-47fa-b97c-11aa70ddff50",
	"isDeleted": null,
	"createTime": 1502346771062,
	"updateTime": null
}, {
	"contactPersonName": "Mr. Ashok Kumar",
	"emailAddress": "support61@fretron.com",
	"mobileNumber": "9662805775",
	"organizationName": "Mr. Ashok Kumar",
	"organizationBillingAddress": "Bhilwara",
	"organizationShippingAddress": "Bhilwara",
	"typeOfCustomer": "fleetOwner",
	"uuid": "9738048e-904e-4562-9450-d7f4ebf7dc39",
	"isDeleted": null,
	"createTime": null,
	"updateTime": null
}, {
	"contactPersonName": "Mrs. Savita",
	"emailAddress": "support47@fretron.com",
	"mobileNumber": "7742149847",
	"organizationName": "Mrs. Savita",
	"organizationBillingAddress": "Bhilwara",
	"organizationShippingAddress": "Bhilwara",
	"typeOfCustomer": "fleetOwner",
	"uuid": "991c318c-2bd4-4c28-acab-9e8c520fbbdb",
	"isDeleted": null,
	"createTime": null,
	"updateTime": null
}, {
	"contactPersonName": "PAWAN YADAV",
	"emailAddress": "pawanyadav2446@gmail.com",
	"mobileNumber": "9929427384",
	"organizationName": "Shreeshyam Roadlines",
	"organizationBillingAddress": "Pur Bypass road, Shaheed Rajendra Kumar filling station, Indian Oil Pump, Bhilwara",
	"organizationShippingAddress": "Pur Bypass road, Shaheed Rajendra Kumar filling station, Indian Oil Pump, Bhilwara",
	"typeOfCustomer": "agent",
	"uuid": "99e02b90-c29d-4f95-b93f-c64b107c14fa",
	"isDeleted": null,
	"createTime": 1502363650184,
	"updateTime": 1506393824873
}, {
	"contactPersonName": "Mr. Raj Mal",
	"emailAddress": "support71@fretron.com",
	"mobileNumber": "7206221564",
	"organizationName": "Mr. Raj Mal",
	"organizationBillingAddress": "Bhilwara",
	"organizationShippingAddress": "Bhilwara",
	"typeOfCustomer": "fleetOwner",
	"uuid": "a6a8b1bc-4c89-45d3-a5b3-b4e45d417b60",
	"isDeleted": null,
	"createTime": null,
	"updateTime": null
}, {
	"contactPersonName": "Mr. Pardeep Kumar",
	"emailAddress": "support23@fretron.com",
	"mobileNumber": "8570026931",
	"organizationName": "Mr. Pardeep Kumar",
	"organizationBillingAddress": "Bhilwara",
	"organizationShippingAddress": "Bhilwara",
	"typeOfCustomer": "fleetOwner",
	"uuid": "a9eb1360-5c6e-4475-a2fc-ff2e517a84d1",
	"isDeleted": null,
	"createTime": null,
	"updateTime": null
}, {
	"contactPersonName": "Mr. Jai Bhagwan",
	"emailAddress": "support76@fretron.com",
	"mobileNumber": "9017766629",
	"organizationName": "Mr. Jai Bhagwan",
	"organizationBillingAddress": "Bhilwara",
	"organizationShippingAddress": "Bhilwara",
	"typeOfCustomer": "fleetOwner",
	"uuid": "c83cfa6d-9aa1-4256-aeda-05a685474eac",
	"isDeleted": null,
	"createTime": null,
	"updateTime": null
}, {
	"contactPersonName": "Bhanwar lal",
	"emailAddress": "maajogniyalogistics@gmail.com",
	"mobileNumber": "9829412411",
	"organizationName": " MAA JOGNIYA LOGISTICS",
	"organizationBillingAddress": "7/B 22 Azad nagar, Bhilwara",
	"organizationShippingAddress": "7/B 22 Azad nagar, Bhilwara",
	"typeOfCustomer": "fleetOwner",
	"uuid": "ce6caecf-4fbb-4235-aa50-49442506fdc8",
	"isDeleted": null,
	"createTime": null,
	"updateTime": null
}, {
	"contactPersonName": "Hari Prakash",
	"emailAddress": "hari1.prakash@darcl.com",
	"mobileNumber": "9350585818",
	"organizationName": "DARCL - Dinesh Verma Ji",
	"organizationBillingAddress": "DARCL",
	"organizationShippingAddress": "DARCL",
	"typeOfCustomer": "transporter",
	"uuid": "ede0f61f-2c2a-47f6-a3bc-b1cf349dc5e3",
	"isDeleted": null,
	"createTime": null,
	"updateTime": null
}, {
	"contactPersonName": "Mr. Rajesh",
	"emailAddress": "support49@fretron.com",
	"mobileNumber": "8930982987",
	"organizationName": "Mr. Rajesh",
	"organizationBillingAddress": "Bhilwara",
	"organizationShippingAddress": "Bhilwara",
	"typeOfCustomer": "fleetOwner",
	"uuid": "edfaacd9-07b5-4779-bff2-4ec2c5ce8532",
	"isDeleted": null,
	"createTime": null,
	"updateTime": null
}, {
	"contactPersonName": "Mr. Shiv Chand Jat",
	"emailAddress": "support55@fretron.com",
	"mobileNumber": "9928905392",
	"organizationName": "Mr. Shiv Chand Jat",
	"organizationBillingAddress": "Bhilwara",
	"organizationShippingAddress": "Bhilwara",
	"typeOfCustomer": "fleetOwner",
	"uuid": "fef49a6a-0c17-4d2d-b2bb-0b7f6b59c102",
	"isDeleted": null,
	"createTime": null,
	"updateTime": null
}, {
	"contactPersonName": "KIRAN KUMAR TAK",
	"emailAddress": "shreeraj111111@gmail.com",
	"mobileNumber": "9828386765",
	"organizationName": "Shree Raj Logistics",
	"organizationBillingAddress": "O-19 TPT NAGAR,BHILWARA",
	"organizationShippingAddress": "O-19 TPT NAGAR,BHILWARA",
	"typeOfCustomer": "agent",
	"uuid": "ffd67145-a9a0-46e3-a4ff-dd7958d909b7",
	"isDeleted": null,
	"createTime": null,
	"updateTime": null
}, {
	"contactPersonName": "Mr. Sandeep Dagar",
	"emailAddress": "support16@fretron.com",
	"mobileNumber": "9958779152",
	"organizationName": "Mr. Sandeep Dagar",
	"organizationBillingAddress": "Bhilwara",
	"organizationShippingAddress": "Bhilwara",
	"typeOfCustomer": "fleetOwner",
	"uuid": "15ca69b8-a08b-4b75-8ba3-5f4480fc2f65",
	"isDeleted": null,
	"createTime": null,
	"updateTime": null
}, {
	"contactPersonName": "Rajender Prasad",
	"emailAddress": "support42@fretron.com",
	"mobileNumber": "8058262869",
	"organizationName": "Salasar Transport Co.",
	"organizationBillingAddress": "Bhilwara",
	"organizationShippingAddress": "Bhilwara",
	"typeOfCustomer": "fleetOwner",
	"uuid": "542eb379-70c6-4a4e-a7e0-e536b8be7abb",
	"isDeleted": null,
	"createTime": null,
	"updateTime": null
}, {
	"contactPersonName": "Sunil",
	"emailAddress": "test@fretron.com",
	"mobileNumber": "9999999999",
	"organizationName": "Mali transport",
	"organizationBillingAddress": "blah blah blah , blah blah , 32445434",
	"organizationShippingAddress": "blah blah blah , blah blah , 32445434",
	"typeOfCustomer": "TRANSPORTER",
	"uuid": "59010b3d-e570-4135-bc99-1bdd159d26ae",
	"isDeleted": null,
	"createTime": 1502307834152,
	"updateTime": null
}, {
	"contactPersonName": "Mr. Vikram Dalal",
	"emailAddress": "support24@frtron.com",
	"mobileNumber": "9671778010",
	"organizationName": "Mr. Vikram Dalal",
	"organizationBillingAddress": "Bhilwara",
	"organizationShippingAddress": "Bhilwara",
	"typeOfCustomer": "fleetOwner",
	"uuid": "5ac71662-3dda-47c7-815a-528131251021",
	"isDeleted": null,
	"createTime": null,
	"updateTime": null
}, {
	"contactPersonName": "Mr. Satyanarayan Gurjar",
	"emailAddress": "support81@fretron.com",
	"mobileNumber": "8094801441",
	"organizationName": "Mr. Satyanarayan Gurjar",
	"organizationBillingAddress": "Bhilwara",
	"organizationShippingAddress": "Bhilwara",
	"typeOfCustomer": "fleetOwner",
	"uuid": "65d2eab2-491e-4af6-85ad-8016752448ed",
	"isDeleted": null,
	"createTime": null,
	"updateTime": null
}, {
	"contactPersonName": "Niku Sharma",
	"emailAddress": "subhendu.panja@darcl.com",
	"mobileNumber": "7988547707",
	"organizationName": "Darcl DDVS Chandigarh",
	"organizationBillingAddress": "55P DARCL, Secto 44, Gurugram",
	"organizationShippingAddress": "55P DARCL, Secto 44, Gurugram",
	"typeOfCustomer": "transporter",
	"uuid": "698a31a7-f467-45df-a602-659136d92da8",
	"isDeleted": null,
	"createTime": 1503406317767,
	"updateTime": null
}, {
	"contactPersonName": "Mrs. Krishana Devi",
	"emailAddress": "support46@fretron.com",
	"mobileNumber": "9812147095",
	"organizationName": "Mrs. Krishana Devi",
	"organizationBillingAddress": "Bhilwara",
	"organizationShippingAddress": "Bhilwara",
	"typeOfCustomer": "fleetOwner",
	"uuid": "6a09c5ed-3c3e-4040-954e-bd7ff4659a20",
	"isDeleted": null,
	"createTime": null,
	"updateTime": null
}, {
	"contactPersonName": "Bhawar Lal Dhakar",
	"emailAddress": "jdmrl8217@gmail.com",
	"mobileNumber": "9461378217",
	"organizationName": "Dhanop Mata Roadlines",
	"organizationBillingAddress": "W-62, TPT NAGAR,BHILWARA",
	"organizationShippingAddress": "W-62, TPT NAGAR,BHILWARA",
	"typeOfCustomer": "agent",
	"uuid": "6b2921e7-bc2d-4e33-ad83-6bb084035ae0",
	"isDeleted": null,
	"createTime": null,
	"updateTime": null
}, {
	"contactPersonName": "Mr. Raj Kishor",
	"emailAddress": "support21@fretron.com",
	"mobileNumber": "9992344598",
	"organizationName": "Mr. Raj Kishor",
	"organizationBillingAddress": "Bhilwara",
	"organizationShippingAddress": "Bhilwara",
	"typeOfCustomer": "fleetOwner",
	"uuid": "6b6b9bed-fe62-47dc-8391-e2dbfe25c951",
	"isDeleted": null,
	"createTime": null,
	"updateTime": null
}, {
	"contactPersonName": "Mr. Bijender",
	"emailAddress": "support5@fretron.com",
	"mobileNumber": "8901386317",
	"organizationName": "Mr. Bijender",
	"organizationBillingAddress": "Bhilwara",
	"organizationShippingAddress": "Bhilwara",
	"typeOfCustomer": "fleetOwner",
	"uuid": "72249cc8-3d85-4ef4-920a-b01c4d1c044c",
	"isDeleted": null,
	"createTime": null,
	"updateTime": null
}, {
	"contactPersonName": "LALIT MAKKAR",
	"emailAddress": "lalit@fretron.com",
	"mobileNumber": "9971991029",
	"organizationName": "FRETRON LLP",
	"organizationBillingAddress": "FRETRON LLP, 55P SECTOR 44, GURUGRAM",
	"organizationShippingAddress": "FRETRON LLP, 55P SECTOR 44, GURUGRAM",
	"typeOfCustomer": "transporter",
	"uuid": "7585e053-7005-4de4-adfd-5327bf48fd88",
	"isDeleted": null,
	"createTime": 1502368398389,
	"updateTime": null
}, {
	"contactPersonName": "MUKESH SHARMA",
	"emailAddress": "mksharma851@gmail.com",
	"mobileNumber": "9829601613",
	"organizationName": "Mahaveer Logistics",
	"organizationBillingAddress": "Under Overbridge, Bypass, Pur Road, Bhilwara",
	"organizationShippingAddress": "Under Overbridge, Bypass, Pur Road, Bhilwara",
	"typeOfCustomer": "fleetOwner",
	"uuid": "84e67a4f-3e0a-4bf2-83f5-45c641ef747a",
	"isDeleted": null,
	"createTime": 1502364863733,
	"updateTime": 1506394149181
}, {
	"contactPersonName": "Kuldeep Chahal",
	"emailAddress": "kuldeep.chahal@darcl.com",
	"mobileNumber": "9467378801",
	"organizationName": "DARCL - DDVS - KULDEEP CHAHAL",
	"organizationBillingAddress": "Darcl Hisar",
	"organizationShippingAddress": "Panipat",
	"typeOfCustomer": "fleetOwner",
	"uuid": "982e6733-e132-4a9c-9388-4fa4744f8783",
	"isDeleted": null,
	"createTime": 1504164952187,
	"updateTime": null
}, {
	"contactPersonName": "Mr. Virender",
	"emailAddress": "support19@fretron.com",
	"mobileNumber": "9991429476",
	"organizationName": "Mr. Virender",
	"organizationBillingAddress": "Bhilwara",
	"organizationShippingAddress": "Bhilwara",
	"typeOfCustomer": "fleetOwner",
	"uuid": "9ccb66a0-1529-4a43-a2e0-dbe1e9694868",
	"isDeleted": null,
	"createTime": null,
	"updateTime": null
}, {
	"contactPersonName": "Mr. Surender",
	"emailAddress": "support31@fretron.com",
	"mobileNumber": "9212903456",
	"organizationName": "Mr. Surender",
	"organizationBillingAddress": "Bhilwara",
	"organizationShippingAddress": "Bhilwara",
	"typeOfCustomer": "fleetOwner",
	"uuid": "a2f69a90-9f08-4631-9536-2a369f8928e2",
	"isDeleted": null,
	"createTime": null,
	"updateTime": null
}, {
	"contactPersonName": "Mr. Hanuman Shai",
	"emailAddress": "support74@fretron.com",
	"mobileNumber": "9813320979",
	"organizationName": "Mr. Hanuman Shai",
	"organizationBillingAddress": "Bhilwara",
	"organizationShippingAddress": "Bhilwara",
	"typeOfCustomer": "fleetOwner",
	"uuid": "ae626e65-8139-4c8b-84f3-49d6726bb93a",
	"isDeleted": null,
	"createTime": null,
	"updateTime": null
}, {
	"contactPersonName": "Kana Ram Yadav",
	"emailAddress": "krsyap7839@gmail.com",
	"mobileNumber": "9829590298",
	"organizationName": "Yadav Trailer Service",
	"organizationBillingAddress": "Renwal, Rajasthan, India",
	"organizationShippingAddress": "Renwal, Rajasthan, India",
	"typeOfCustomer": "fleetOwner",
	"uuid": "ae812eac-3a54-40dd-b0e4-b31dcfc2959e",
	"isDeleted": null,
	"createTime": 1506411838278,
	"updateTime": null
}, {
	"contactPersonName": "Islam Khan",
	"emailAddress": "islamkhanbagwan@gmail.com",
	"mobileNumber": "9983336287",
	"organizationName": "Ajay Freight Carrier",
	"organizationBillingAddress": "Maja Dam Chauraha, Devnarayan Hotel, Managalpura, Bhilwara",
	"organizationShippingAddress": "Maja Dam Chauraha, Devnarayan Hotel, Managalpura, Bhilwara",
	"typeOfCustomer": "agent",
	"uuid": "bc3aaa07-635a-4d3d-a5a5-7f776e707b9d",
	"isDeleted": null,
	"createTime": null,
	"updateTime": null
}, {
	"contactPersonName": "ASHISH LADDHA",
	"emailAddress": "bhilwararoadwaysbhilwara@gmail.com",
	"mobileNumber": "9828178737",
	"organizationName": "Bhilwara Roadways",
	"organizationBillingAddress": "Near Power House, Beawar Road, Mandal Chouraha, Bhilwara",
	"organizationShippingAddress": "Near Power House, Beawar Road, Mandal Chouraha, Bhilwara",
	"typeOfCustomer": "agent",
	"uuid": "e33cc614-6f72-43e3-9faf-dd244e64909a",
	"isDeleted": null,
	"createTime": 1502364125453,
	"updateTime": 1506393905928
}, {
	"contactPersonName": "Mr. Jitender Singh",
	"emailAddress": "support82@fretron.com",
	"mobileNumber": "7056544190",
	"organizationName": "Mr. Jitender Singh",
	"organizationBillingAddress": "Bhilwara",
	"organizationShippingAddress": "Bhilwara",
	"typeOfCustomer": "fleetOwner",
	"uuid": "e73c6380-eee0-4b8e-9e69-68b608f199fb",
	"isDeleted": null,
	"createTime": null,
	"updateTime": null
}, {
	"contactPersonName": "Kedar Jat",
	"emailAddress": "cblogistics51@gmail.com",
	"mobileNumber": "9602648600",
	"organizationName": "Chharbhuja Trailer Service",
	"organizationBillingAddress": "Jindal road,near yes hotel,Bhilwara",
	"organizationShippingAddress": "Jindal road,near yes hotel,Bhilwara",
	"typeOfCustomer": "fleetOwner",
	"uuid": "e8582007-4cd5-4c1e-99c9-cd227fc00399",
	"isDeleted": null,
	"createTime": null,
	"updateTime": null
}, {
	"contactPersonName": "Bal Krishan",
	"emailAddress": "balkishan.sharma@darcl.com",
	"mobileNumber": "9355844548",
	"organizationName": "DARCL - NBU Fleet",
	"organizationBillingAddress": "DARCL - Hisar",
	"organizationShippingAddress": "DARCL - Hisar",
	"typeOfCustomer": "fleetOwner",
	"uuid": "ed7d582c-9fcc-42de-b2f0-16d079462515",
	"isDeleted": null,
	"createTime": null,
	"updateTime": null
}, {
	"contactPersonName": "Mr. Krishan kumar",
	"emailAddress": "support73@fretron.com",
	"mobileNumber": "9911560028",
	"organizationName": "Mr. Krishan kumar",
	"organizationBillingAddress": "Bhilwara",
	"organizationShippingAddress": "Bhilwara",
	"typeOfCustomer": "fleetOwner",
	"uuid": "ef89e52b-219f-4a74-9f18-c341587525b1",
	"isDeleted": null,
	"createTime": null,
	"updateTime": null
}, {
	"contactPersonName": "Prateek Gupta",
	"emailAddress": "ssfchsr@gmail.com",
	"mobileNumber": "9812036635",
	"organizationName": "Shree Shyam Logistics",
	"organizationBillingAddress": "706, Phase 3, Auto Market, Hisar, Haryana - 125001 ",
	"organizationShippingAddress": "706, Phase 3, Auto Market, Hisar, Haryana - 125001",
	"typeOfCustomer": "fleetOwner",
	"uuid": "0f1c6800-b586-4b58-b064-c1a656f26610",
	"isDeleted": null,
	"createTime": null,
	"updateTime": null
}, {
	"contactPersonName": "Mr. Dharamvir Singh",
	"emailAddress": "support28@fretron.com",
	"mobileNumber": "9896530998",
	"organizationName": "Mr. Dharamvir Singh",
	"organizationBillingAddress": "Bhilwara",
	"organizationShippingAddress": "Bhilwara",
	"typeOfCustomer": "fleetOwner",
	"uuid": "25ba4781-6507-41c1-9482-05bb732d6407",
	"isDeleted": null,
	"createTime": null,
	"updateTime": null
}, {
	"contactPersonName": "Mr. Nand Kishore",
	"emailAddress": "support@fretron.com",
	"mobileNumber": "7027344596",
	"organizationName": "Mr. Nand Kishore",
	"organizationBillingAddress": "Bhilwara",
	"organizationShippingAddress": "Bhilwara",
	"typeOfCustomer": "fleetOwner",
	"uuid": "2a4a689f-d40a-47ba-ba91-40dfce75d7e0",
	"isDeleted": null,
	"createTime": null,
	"updateTime": null
}, {
	"contactPersonName": "Ronit Agarwal",
	"emailAddress": "ronit@fretron.com",
	"mobileNumber": "9555560920",
	"organizationName": "Ronit Agarwal",
	"organizationBillingAddress": "Gurgaon",
	"organizationShippingAddress": "Gurgaon",
	"typeOfCustomer": "transporter",
	"uuid": "30574de1-9d26-4e13-94dd-9fc683482db0",
	"isDeleted": null,
	"createTime": 1504966995507,
	"updateTime": 1505556274279
}, {
	"contactPersonName": "Mr. Bhoop Singh",
	"emailAddress": "support34@fretron.com",
	"mobileNumber": "8741857153",
	"organizationName": "Mr. Bhoop Singh",
	"organizationBillingAddress": "Bhilwara",
	"organizationShippingAddress": "Bhilwara",
	"typeOfCustomer": "fleetOwner",
	"uuid": "49897f54-3e82-41bb-9067-28c329b720a4",
	"isDeleted": null,
	"createTime": null,
	"updateTime": null
}, {
	"contactPersonName": "Mr. Indrasinh Kalubha",
	"emailAddress": "support77@fretron.com",
	"mobileNumber": "9414742255",
	"organizationName": "Mr. Indrasinh Kalubha",
	"organizationBillingAddress": "Bhilwara",
	"organizationShippingAddress": "Bhilwara",
	"typeOfCustomer": "fleetOwner",
	"uuid": "4fe6f894-f43d-43b5-bbb9-8edf3ca96154",
	"isDeleted": null,
	"createTime": null,
	"updateTime": null
}, {
	"contactPersonName": "Mr. Pawan Kumar",
	"emailAddress": "support65@fretron.com",
	"mobileNumber": "9813749613",
	"organizationName": "Mr. Pawan Kumar",
	"organizationBillingAddress": "Bhilwara",
	"organizationShippingAddress": "Bhilwara",
	"typeOfCustomer": "fleetOwner",
	"uuid": "5275b849-3423-4fe1-a6f4-2eadd7c1b334",
	"isDeleted": null,
	"createTime": null,
	"updateTime": null
}, {
	"contactPersonName": "KANHAIYA LAL",
	"emailAddress": "contractbalaji@gmail.com",
	"mobileNumber": "9799986659",
	"organizationName": "Balaji Contractor",
	"organizationBillingAddress": "O 29, Transport Nagar, Bhilwara, Rajasthan",
	"organizationShippingAddress": "O 29, Transport Nagar, Bhilwara, Rajasthan",
	"typeOfCustomer": "fleetOwner",
	"uuid": "62b3b41c-b90b-49a5-8701-2b9330789aa8",
	"isDeleted": null,
	"createTime": 1502364454228,
	"updateTime": 1506394004817
}, {
	"contactPersonName": "Mr. Raj Pal",
	"emailAddress": "support72@fretron.com",
	"mobileNumber": "9467626630",
	"organizationName": "Mr. Raj Pal ",
	"organizationBillingAddress": "Bhilwara",
	"organizationShippingAddress": "Bhilwara",
	"typeOfCustomer": "fleetOwner",
	"uuid": "7ed7be54-fabf-42f6-b425-cf6c59a8669c",
	"isDeleted": null,
	"createTime": null,
	"updateTime": null
}, {
	"contactPersonName": "Mr. Balwan Singh",
	"emailAddress": "support38@fretron.com",
	"mobileNumber": "9950089378",
	"organizationName": "Mr. Balwan Singh",
	"organizationBillingAddress": "Bhilwara",
	"organizationShippingAddress": "Bhilwara",
	"typeOfCustomer": "fleetOwner",
	"uuid": "840e5a0d-79f7-44d2-9eb1-32197329d8dc",
	"isDeleted": null,
	"createTime": null,
	"updateTime": null
}, {
	"contactPersonName": "Mr. Vikas Dagar",
	"emailAddress": "support53@fretron.com",
	"mobileNumber": "9871085096",
	"organizationName": "Mr. Vikas Dagar",
	"organizationBillingAddress": "Bhilwara",
	"organizationShippingAddress": "Bhilwara",
	"typeOfCustomer": "fleetOwner",
	"uuid": "9266b75e-420f-4ef0-9a29-0969369462ab",
	"isDeleted": null,
	"createTime": null,
	"updateTime": null
}, {
	"contactPersonName": "Shiv Raj Choudhary",
	"emailAddress": "support321@fretron.com",
	"mobileNumber": "9413053807",
	"organizationName": "Bala ji Roadline",
	"organizationBillingAddress": "Bhilwara",
	"organizationShippingAddress": "Bhilwara",
	"typeOfCustomer": "fleetOwner",
	"uuid": "9c6877ae-b9d4-4109-9b57-6c743c2c61a0",
	"isDeleted": null,
	"createTime": null,
	"updateTime": null
}, {
	"contactPersonName": "Mr. Parth Singh",
	"emailAddress": "support12@fretron.com",
	"mobileNumber": "9636777273",
	"organizationName": "Mr. Parth Singh",
	"organizationBillingAddress": "Bhilwara",
	"organizationShippingAddress": "Bhilwara",
	"typeOfCustomer": "fleetOwner",
	"uuid": "aa2b40f7-bb5c-4251-acf8-f9ce21652f4a",
	"isDeleted": null,
	"createTime": null,
	"updateTime": null
}, {
	"contactPersonName": "Mr. Anil Kumar",
	"emailAddress": "support44@fretron.com",
	"mobileNumber": "9896132586",
	"organizationName": "Mr. Anil Kumar",
	"organizationBillingAddress": "Bhilwara",
	"organizationShippingAddress": "Bhilwara",
	"typeOfCustomer": "fleetOwner",
	"uuid": "b353376d-21ec-40c1-9171-80236dc8ab9b",
	"isDeleted": null,
	"createTime": null,
	"updateTime": null
}, {
	"contactPersonName": "Mr. Suresh Kumar",
	"emailAddress": "support59@fretron.com",
	"mobileNumber": "9868318392",
	"organizationName": "Mr. Suresh Kumar",
	"organizationBillingAddress": "Bhilwara",
	"organizationShippingAddress": "Bhilwara",
	"typeOfCustomer": "fleetOwner",
	"uuid": "c127a316-3b50-4511-8427-ce5b7da2f91b",
	"isDeleted": null,
	"createTime": null,
	"updateTime": null
}, {
	"contactPersonName": "Mr. Debi Lal Jat",
	"emailAddress": "support78@fretron.com",
	"mobileNumber": "9950908345",
	"organizationName": "Mr. Debi Lal Jat",
	"organizationBillingAddress": "Bhilwara",
	"organizationShippingAddress": "Bhilwara",
	"typeOfCustomer": "fleetOwner",
	"uuid": "c6f9b827-8265-4a3e-b03c-b50b44dfbf3c",
	"isDeleted": null,
	"createTime": null,
	"updateTime": null
}, {
	"contactPersonName": "Mr. Pardeep ",
	"emailAddress": "support26@fretron.com",
	"mobileNumber": "8076982426",
	"organizationName": "Mr. Pardeep ",
	"organizationBillingAddress": "Bhilwara",
	"organizationShippingAddress": "Bhilwara",
	"typeOfCustomer": "fleetOwner",
	"uuid": "d1ca7094-2344-4cc5-a171-01a1d3d9207b",
	"isDeleted": null,
	"createTime": null,
	"updateTime": null
}, {
	"contactPersonName": "Mr. Sunder Singh",
	"emailAddress": "support37@fretron.com",
	"mobileNumber": "9671351108",
	"organizationName": "Mr. Sunder Singh",
	"organizationBillingAddress": "Bhilwara",
	"organizationShippingAddress": "Bhilwara",
	"typeOfCustomer": "fleetOwner",
	"uuid": "ebb78092-52a5-48c4-b1d0-1d88882e3af0",
	"isDeleted": null,
	"createTime": null,
	"updateTime": null
}, {
	"contactPersonName": "TEJ PRAKASH KACHOLIYA",
	"emailAddress": "kacholiya@gmail.com",
	"mobileNumber": "9413357533",
	"organizationName": "Kacholiya Road Carrier",
	"organizationBillingAddress": "73 Transport Nagar, Bhilwara 311001",
	"organizationShippingAddress": "73 Transport Nagar, Bhilwara 311001",
	"typeOfCustomer": "fleetOwner",
	"uuid": "f9ceda67-137e-41c1-87aa-33ef903343c3",
	"isDeleted": null,
	"createTime": 1502363525618,
	"updateTime": 1506393809589
}, {
	"contactPersonName": "Mr. Mukesh Kumar",
	"emailAddress": "support3@fretron.com",
	"mobileNumber": "8295005330",
	"organizationName": "Mr. Mukesh Kumar",
	"organizationBillingAddress": "Bhilwara",
	"organizationShippingAddress": "Bhilwara",
	"typeOfCustomer": "fleetOwner",
	"uuid": "025d4d7c-5aa3-45b1-80f2-eda196a78a19",
	"isDeleted": null,
	"createTime": null,
	"updateTime": null
}, {
	"contactPersonName": "KAILASH DAROGA",
	"emailAddress": "balajitrailortrans@gmail.com",
	"mobileNumber": "9001491635",
	"organizationName": "Balaji Logistics",
	"organizationBillingAddress": "Shop no 2, Near Police Chowki, Mandal Choraha, Bhilwara",
	"organizationShippingAddress": "Shop no 2, Near Police Chowki, Mandal Choraha, Bhilwara",
	"typeOfCustomer": "fleetOwner",
	"uuid": "0e7c10f1-533b-4128-a30c-aea38b8aabd1",
	"isDeleted": null,
	"createTime": 1502362887088,
	"updateTime": 1506393798615
}, {
	"contactPersonName": "Mr. Jai Singh",
	"emailAddress": "support69@fretron.com",
	"mobileNumber": "9467054620",
	"organizationName": "Mr. Jai Singh",
	"organizationBillingAddress": "Bhilwara",
	"organizationShippingAddress": "Bhilwara",
	"typeOfCustomer": "fleetOwner",
	"uuid": "23ef7ca9-3346-493a-b044-0ab3a6180c93",
	"isDeleted": null,
	"createTime": null,
	"updateTime": null
}, {
	"contactPersonName": "Mr. Dinesh Kumar",
	"emailAddress": "support17@fretron.com",
	"mobileNumber": "9968492744",
	"organizationName": "Mr. Dinesh Kumar",
	"organizationBillingAddress": "Bhilwara",
	"organizationShippingAddress": "Bhilwara",
	"typeOfCustomer": "fleetOwner",
	"uuid": "304b5008-590f-4c0c-b89d-3282eb48755c",
	"isDeleted": null,
	"createTime": null,
	"updateTime": null
}, {
	"contactPersonName": "Mr. Sunil kumar",
	"emailAddress": "support80@fretron.com",
	"mobileNumber": "9992146953",
	"organizationName": "Mr. Sunil Kumar",
	"organizationBillingAddress": "Bhilwara",
	"organizationShippingAddress": "Bhilwara",
	"typeOfCustomer": "fleetOwner",
	"uuid": "3c88a88b-785f-4908-b37c-01f78a45493a",
	"isDeleted": null,
	"createTime": null,
	"updateTime": null
}, {
	"contactPersonName": "DEVI LAL",
	"emailAddress": "jcroadlines@gmail.com",
	"mobileNumber": "9667636500",
	"organizationName": "JC Roadlines",
	"organizationBillingAddress": "J.C. Road Lines, Village Bitthalpural Post JOJWA Tehsil MADLGARH, Dist Bhilwara",
	"organizationShippingAddress": "J.C. Road Lines, Village Bitthalpural Post JOJWA Tehsil MADLGARH, Dist Bhilwara",
	"typeOfCustomer": "fleetOwner",
	"uuid": "3ec25675-8490-49ea-9b30-2a4f656fab58",
	"isDeleted": null,
	"createTime": 1502363204334,
	"updateTime": null
}, {
	"contactPersonName": "Mr. Shatrudhan Singh",
	"emailAddress": "support36@fretron.com",
	"mobileNumber": "9212175052",
	"organizationName": "Mr. Shatrudhan Singh",
	"organizationBillingAddress": "Bhilwara",
	"organizationShippingAddress": "Bhilwara",
	"typeOfCustomer": "fleetOwner",
	"uuid": "42f77d4c-9aa1-4f88-8a39-2a4cafb292d2",
	"isDeleted": null,
	"createTime": null,
	"updateTime": null
}, {
	"contactPersonName": "Mr. Ahmed Noor",
	"emailAddress": "support32@fretron.com",
	"mobileNumber": "9829675114",
	"organizationName": "Mastana Transport Co.",
	"organizationBillingAddress": "Bhilwara",
	"organizationShippingAddress": "Bhilwara",
	"typeOfCustomer": "fleetOwner",
	"uuid": "4c6e3cbb-57cb-4465-b458-6ab243d4925a",
	"isDeleted": null,
	"createTime": null,
	"updateTime": null
}, {
	"contactPersonName": "SOHAN MALI",
	"emailAddress": "shreednroadlines2@gmail.com",
	"mobileNumber": "9414616443",
	"organizationName": "Shree DN Roadlines",
	"organizationBillingAddress": "O 29, Transport Nagar, Bhilwara, Rajasthan",
	"organizationShippingAddress": "O 29, Transport Nagar, Bhilwara, Rajasthan",
	"typeOfCustomer": "fleetOwner",
	"uuid": "4f11ddc5-1627-4b95-91c9-bcfdf4d7d2d7",
	"isDeleted": null,
	"createTime": 1502363136156,
	"updateTime": null
}, {
	"contactPersonName": "Mr. Mahender Kumar",
	"emailAddress": "support40@fretron.com",
	"mobileNumber": "9812164924",
	"organizationName": "Mr. Mahender Kumar",
	"organizationBillingAddress": "Bhilwara",
	"organizationShippingAddress": "Bhilwara",
	"typeOfCustomer": "fleetOwner",
	"uuid": "577c335d-688a-4318-8bd5-5226cc2aadd2",
	"isDeleted": null,
	"createTime": null,
	"updateTime": null
}, {
	"contactPersonName": "Mr. Vijay Singh",
	"emailAddress": "support11@fretron.com",
	"mobileNumber": "9530033052",
	"organizationName": "Mr. Vijay Singh",
	"organizationBillingAddress": "Bhilwara",
	"organizationShippingAddress": "Bhilwara",
	"typeOfCustomer": "fleetOwner",
	"uuid": "5e2fa30e-0991-4b89-a49e-28e4660664e8",
	"isDeleted": null,
	"createTime": null,
	"updateTime": null
}, {
	"contactPersonName": "Mr. Satish",
	"emailAddress": "support66@fretron.com",
	"mobileNumber": "9718778928",
	"organizationName": "Mr. Satish",
	"organizationBillingAddress": "Bhilwara",
	"organizationShippingAddress": "Bhilwara",
	"typeOfCustomer": "fleetOwner",
	"uuid": "7c4b9054-7fee-4864-b29f-b357947778fd",
	"isDeleted": null,
	"createTime": null,
	"updateTime": null
}, {
	"contactPersonName": "Mr. Hari Singh",
	"emailAddress": "support48@fretron.com",
	"mobileNumber": "8527919256",
	"organizationName": "Mr. Hari Singh",
	"organizationBillingAddress": "Bhilwara",
	"organizationShippingAddress": "Bhilwara",
	"typeOfCustomer": "fleetOwner",
	"uuid": "835aed5d-7ac7-4ee4-8919-6989f7a6b917",
	"isDeleted": null,
	"createTime": null,
	"updateTime": null
}, {
	"contactPersonName": "Mr. Vinod Kumar",
	"emailAddress": "support6@fretron.com",
	"mobileNumber": "9311346227",
	"organizationName": "Mr. Vinod Kumar",
	"organizationBillingAddress": "Bhilwara",
	"organizationShippingAddress": "Bhilwara",
	"typeOfCustomer": "fleetOwner",
	"uuid": "a02685bd-fa3f-4eb6-b90b-dba892ab7ebf",
	"isDeleted": null,
	"createTime": null,
	"updateTime": null
}, {
	"contactPersonName": "Suresh Kumar",
	"emailAddress": "suresh2.kumar@m.darcl.com",
	"mobileNumber": "9356248640",
	"organizationName": "Darcl DDVS Chandigarh - Suresh Kumar",
	"organizationBillingAddress": "55P, Sector 44, Gurugram, Haryana - 122003",
	"organizationShippingAddress": "55P, Sector 44, Gurugram, Haryana - 122003",
	"typeOfCustomer": "fleetOwner",
	"uuid": "a38afedf-cdb2-4be8-97c0-2872b0921f62",
	"isDeleted": null,
	"createTime": null,
	"updateTime": null
}, {
	"contactPersonName": "Mr. Ashok Kumar",
	"emailAddress": "support58@fretron.com",
	"mobileNumber": "8995192412",
	"organizationName": "Mr. Ashok Kumar",
	"organizationBillingAddress": "Bhilwara",
	"organizationShippingAddress": "Bhilwara",
	"typeOfCustomer": "fleetOwner",
	"uuid": "a77e1a8e-1daf-4ee3-9499-da1f1ea2620c",
	"isDeleted": null,
	"createTime": null,
	"updateTime": null
}, {
	"contactPersonName": "Puneet Agarwal",
	"emailAddress": "puneet@fretron.com",
	"mobileNumber": "9350959999",
	"organizationName": "Fretron LLP",
	"organizationBillingAddress": "7th Floor",
	"organizationShippingAddress": "7th Floor, Plot 55P, Sector 44",
	"typeOfCustomer": "transporter",
	"uuid": "b1c7e57d-97b8-4470-a7c3-2af667c1ae68",
	"isDeleted": null,
	"createTime": null,
	"updateTime": null
}, {
	"contactPersonName": "Mr. Ramkumar Jat",
	"emailAddress": "jatramkumar9@gmail.com",
	"mobileNumber": "9982102933",
	"organizationName": "Mahaluxmi Transport Co.",
	"organizationBillingAddress": "Shop No. 17,pur byepass,Bhilwara",
	"organizationShippingAddress": "Shop No. 17,pur byepass,Bhilwara",
	"typeOfCustomer": "fleetOwner",
	"uuid": "b22c508e-7bcb-437e-9ca1-70d06dcb3b25",
	"isDeleted": null,
	"createTime": null,
	"updateTime": null
}, {
	"contactPersonName": "Abhinav Som",
	"emailAddress": "abhinav.som@fretron.com",
	"mobileNumber": "8447285453",
	"organizationName": "Abhinav Som ",
	"organizationBillingAddress": "fretron office, sector 44, gurugram  haryana",
	"organizationShippingAddress": "fretron office, sector 44, gurugram  haryana",
	"typeOfCustomer": "fleetOwner",
	"uuid": "b7b9052e-cf87-40ce-a9c4-4a7509ecfa9b",
	"isDeleted": null,
	"createTime": 1502366000464,
	"updateTime": 1505451709998
}, {
	"contactPersonName": "Mr. Sunil",
	"emailAddress": "support43@fretron.com",
	"mobileNumber": "9812798197",
	"organizationName": "Mr. Sunil",
	"organizationBillingAddress": "Bhilwara",
	"organizationShippingAddress": "Bhilwara",
	"typeOfCustomer": "fleetOwner",
	"uuid": "bcbd35ad-061d-49bb-b1ee-1be06090ade3",
	"isDeleted": null,
	"createTime": null,
	"updateTime": null
}, {
	"contactPersonName": "Mr. Ishwar Singh",
	"emailAddress": "support1@fretron.com",
	"mobileNumber": "7056271352",
	"organizationName": "Mr. Ishwar Singh",
	"organizationBillingAddress": "Bhilwara",
	"organizationShippingAddress": "Bhilwara",
	"typeOfCustomer": "fleetOwner",
	"uuid": "c8db3af6-3967-4a60-91af-46ad11df4ac8",
	"isDeleted": null,
	"createTime": null,
	"updateTime": null
}, {
	"contactPersonName": "Mohammed Ashraf",
	"emailAddress": "indiatrailortransways86@gmail.com",
	"mobileNumber": "9784200286",
	"organizationName": "India Trailor Transways",
	"organizationBillingAddress": "jindal road,near HP petrol pump,Bhilwara",
	"organizationShippingAddress": "jindal road,near HP petrol pump,Bhilwara",
	"typeOfCustomer": "fleetOwner",
	"uuid": "c8dd3a4f-8dab-47a9-bd52-ac09a68b357d",
	"isDeleted": null,
	"createTime": null,
	"updateTime": null
}, {
	"contactPersonName": "PARKESH CHAND JANGAL",
	"emailAddress": "jangal@gmail.com",
	"mobileNumber": "7733911835",
	"organizationName": "Jangal Transport Company",
	"organizationBillingAddress": "JINDAL ROAD,TIRANGA HILL,BHILWARA",
	"organizationShippingAddress": "JINDAL ROAD,TIRANGA HILL,BHILWARA",
	"typeOfCustomer": "agent",
	"uuid": "cf7d3925-c2ae-436a-af83-e9f149d1e10f",
	"isDeleted": null,
	"createTime": null,
	"updateTime": null
}, {
	"contactPersonName": "Ghanshyam Mali",
	"emailAddress": "ghyanshyammali36@gmail.com",
	"mobileNumber": "7742035485",
	"organizationName": "Shree Balaji Roadlines",
	"organizationBillingAddress": "Jindal road, tiranga hill, Bhilwara",
	"organizationShippingAddress": "Jindal road, tiranga hill, Bhilwara",
	"typeOfCustomer": "fleetOwner",
	"uuid": "da85d37a-9353-449b-8265-09b812dd6078",
	"isDeleted": null,
	"createTime": null,
	"updateTime": null
}, {
	"contactPersonName": "Mr. Phool Singh",
	"emailAddress": "support35@fretron.com",
	"mobileNumber": "9996576615",
	"organizationName": "Mr. Phool Singh",
	"organizationBillingAddress": "Bhilwara",
	"organizationShippingAddress": "Bhilwara",
	"typeOfCustomer": "fleetOwner",
	"uuid": "ee165ddc-3131-4adf-b2ff-fe7932e038da",
	"isDeleted": null,
	"createTime": null,
	"updateTime": null
}, {
	"contactPersonName": "Mr. Dharmvir Singh",
	"emailAddress": "support13@fretron.com",
	"mobileNumber": "9718363414",
	"organizationName": "Mr. Dharmvir Singh",
	"organizationBillingAddress": "Bhilwara",
	"organizationShippingAddress": "Bhilwara",
	"typeOfCustomer": "fleetOwner",
	"uuid": "ee85f8cb-72e3-42be-96d9-a5379d7b9e48",
	"isDeleted": null,
	"createTime": null,
	"updateTime": null
}, {
	"contactPersonName": "Mr. Jagdish",
	"emailAddress": "support4@fretron.com",
	"mobileNumber": "8607361032",
	"organizationName": "Mr. Jagdish",
	"organizationBillingAddress": "Bhilwara",
	"organizationShippingAddress": "Bhilwara",
	"typeOfCustomer": "fleetOwner",
	"uuid": "0924ec9c-a5c8-4bf0-b6ef-9867660c6fed",
	"isDeleted": null,
	"createTime": null,
	"updateTime": null
}, {
	"contactPersonName": "Mr. Balwant Singh",
	"emailAddress": "support75@fretron.com",
	"mobileNumber": "9974044150",
	"organizationName": "Mr. Balwant Singh",
	"organizationBillingAddress": "Bhilwara",
	"organizationShippingAddress": "Bhilwara",
	"typeOfCustomer": "fleetOwner",
	"uuid": "1387cf70-f44d-4497-b522-e5299085df36",
	"isDeleted": null,
	"createTime": null,
	"updateTime": null
}, {
	"contactPersonName": "NARRU MOHAMMED",
	"emailAddress": "rgtc.1999@gmail.com",
	"mobileNumber": "9414109195",
	"organizationName": "Raipur golden transport",
	"organizationBillingAddress": "NH-79 ajmer road mandal chourha, bhilwara",
	"organizationShippingAddress": "NH-79 ajmer road mandal chourha, bhilwara",
	"typeOfCustomer": "fleetOwner",
	"uuid": "212dd9cc-de64-4433-92be-3c5dead0e4df",
	"isDeleted": null,
	"createTime": null,
	"updateTime": null
}, {
	"contactPersonName": "DEEPAK",
	"emailAddress": "yadavdeepak1097@gmail.com",
	"mobileNumber": "9413856665",
	"organizationName": "Baagwan Roadlines",
	"organizationBillingAddress": "Shop No 110, TPT Nagar, Bhilwara, Rajasthan, 311001",
	"organizationShippingAddress": "Shop No 110, TPT Nagar, Bhilwara, Rajasthan, 311001",
	"typeOfCustomer": "agent",
	"uuid": "3acfff20-49d0-4991-8938-4880491fd6a3",
	"isDeleted": null,
	"createTime": 1502364365233,
	"updateTime": 1505451713066
}, {
	"contactPersonName": "Naveen Gupta",
	"emailAddress": "naveen.gupta@fretron.com",
	"mobileNumber": "9654770155",
	"organizationName": "Demo Account",
	"organizationBillingAddress": "Fretron",
	"organizationShippingAddress": "Fretron",
	"typeOfCustomer": "fleetOwner",
	"uuid": "495b8728-c761-4fa7-83fe-db75a7d63221",
	"isDeleted": null,
	"createTime": null,
	"updateTime": null
}, {
	"contactPersonName": "Mr. Rampal",
	"emailAddress": "support10@fretron.com",
	"mobileNumber": "9466459060",
	"organizationName": "Mr. Rampal",
	"organizationBillingAddress": "Bhilwara",
	"organizationShippingAddress": "Bhilwara",
	"typeOfCustomer": "fleetOwner",
	"uuid": "5bf6851e-158a-4faa-a1ef-f182bcd1cb13",
	"isDeleted": null,
	"createTime": null,
	"updateTime": null
}, {
	"contactPersonName": "RAJENDER GODARA",
	"emailAddress": "rajendergodara28@gmail.com",
	"mobileNumber": "9461150561",
	"organizationName": "Shree Ram Logistics",
	"organizationBillingAddress": "Devnarayan Hotel, Bypass road, Hajari Khera, Bhilwara",
	"organizationShippingAddress": "Devnarayan Hotel, Bypass road, Hajari Khera, Bhilwara",
	"typeOfCustomer": "fleetOwner",
	"uuid": "76a10696-e4bc-4869-8030-dcf6374d3f0b",
	"isDeleted": null,
	"createTime": 1502364697425,
	"updateTime": 1506394110543
}, {
	"contactPersonName": "Mr. Umesh Kumar",
	"emailAddress": "support41@fretron.com",
	"mobileNumber": "7339863764",
	"organizationName": "Mr. Umesh Kumar",
	"organizationBillingAddress": "Bhilwara",
	"organizationShippingAddress": "Bhilwara",
	"typeOfCustomer": "fleetOwner",
	"uuid": "7fc132e5-efe5-4323-9f84-5a5531da768f",
	"isDeleted": null,
	"createTime": null,
	"updateTime": null
}, {
	"contactPersonName": "Mr. Ramchndar",
	"emailAddress": "support62@fretron.com",
	"mobileNumber": "9813075286",
	"organizationName": "Mr. Ramchndar",
	"organizationBillingAddress": "Bhilwara",
	"organizationShippingAddress": "Bhilwara",
	"typeOfCustomer": "fleetOwner",
	"uuid": "8b68f5a8-09fc-464f-95db-d4b1af7efa2e",
	"isDeleted": null,
	"createTime": null,
	"updateTime": null
}, {
	"contactPersonName": "MANOJ BHATT",
	"emailAddress": "ashok2.kumar@darcl.com",
	"mobileNumber": "9004399959",
	"organizationName": "DARCL - PROJECT DEPARTMENT",
	"organizationBillingAddress": "55P, 7th Floor DARCL, Sector 44, Gurugram",
	"organizationShippingAddress": "55P, 7th Floor DARCL, Sector 44, Gurugram",
	"typeOfCustomer": "transporter",
	"uuid": "9708d847-9538-46af-a457-59751addd603",
	"isDeleted": null,
	"createTime": 1502423731137,
	"updateTime": 1505451713074
}, {
	"contactPersonName": "Mr. Ishwar",
	"emailAddress": "support22@fretron.com",
	"mobileNumber": "9996009387",
	"organizationName": "Mr. Ishwar",
	"organizationBillingAddress": "Bhilwara",
	"organizationShippingAddress": "Bhilwara",
	"typeOfCustomer": "fleetOwner",
	"uuid": "ab3eb302-6c7a-489f-8a09-ca0a3e882f64",
	"isDeleted": null,
	"createTime": null,
	"updateTime": null
}, {
	"contactPersonName": "SANWAR JAT",
	"emailAddress": "sanwarjat51@gmail.com",
	"mobileNumber": "9928868420",
	"organizationName": "Chharbhuja Logistics",
	"organizationBillingAddress": "Shop No 39, Near Under bridge, By Pass, Pur Road Choraha, Bhilwara",
	"organizationShippingAddress": "Shop No 39, Near Under bridge, By Pass, Pur Road Choraha, Bhilwara",
	"typeOfCustomer": "fleetOwner",
	"uuid": "ac25b789-70e3-4cb9-869e-3bc1bfdc6653",
	"isDeleted": null,
	"createTime": 1502362646128,
	"updateTime": 1506393754660
}, {
	"contactPersonName": "Mr. Anil Kumar",
	"emailAddress": "support57@fretron.com",
	"mobileNumber": "9990448025",
	"organizationName": "Mr. Anil Kumar",
	"organizationBillingAddress": "Bhilwara",
	"organizationShippingAddress": "Bhilwara",
	"typeOfCustomer": "fleetOwner",
	"uuid": "b8cccc63-6826-4357-9772-74966b649c88",
	"isDeleted": null,
	"createTime": null,
	"updateTime": null
}, {
	"contactPersonName": "Mr. Vijay Singh",
	"emailAddress": "support9@fretron.com",
	"mobileNumber": "9416390572",
	"organizationName": "Mr. Vijay Singh",
	"organizationBillingAddress": "Bhilwara",
	"organizationShippingAddress": "Bhilwara",
	"typeOfCustomer": "fleetOwner",
	"uuid": "c02b710f-e2da-4932-9212-18ba2d2c2c87",
	"isDeleted": null,
	"createTime": null,
	"updateTime": null
}, {
	"contactPersonName": "Mr. Ram Bhaj Sharma",
	"emailAddress": "support2@fretron.com",
	"mobileNumber": "8059120778",
	"organizationName": "Mr. Ram Bhaj Sharma",
	"organizationBillingAddress": "Bhilwara",
	"organizationShippingAddress": "Bhilwara",
	"typeOfCustomer": "fleetOwner",
	"uuid": "c1f75e5f-d4d4-4b9e-975d-3fe14bfec1fe",
	"isDeleted": null,
	"createTime": null,
	"updateTime": null
}, {
	"contactPersonName": "Falguni Banerjee",
	"emailAddress": "falguni.banerjee@m.darcl.com",
	"mobileNumber": "9016088084",
	"organizationName": "DARCL - Ahemdabad",
	"organizationBillingAddress": "DARCL",
	"organizationShippingAddress": "DARCL",
	"typeOfCustomer": "transporter",
	"uuid": "c23c4cbd-177e-47b7-929f-34804c9d7815",
	"isDeleted": null,
	"createTime": null,
	"updateTime": null
}, {
	"contactPersonName": "Mr. Vipin Dagar",
	"emailAddress": "support70@fretron.com",
	"mobileNumber": "9896264240",
	"organizationName": "Mr. Vipin Dagar",
	"organizationBillingAddress": "Bhilwara",
	"organizationShippingAddress": "Bhilwara",
	"typeOfCustomer": "fleetOwner",
	"uuid": "d4fabab2-3759-49a3-a0c4-37d9ce78bb75",
	"isDeleted": null,
	"createTime": null,
	"updateTime": null
}, {
	"contactPersonName": "Mr. Vijendra Singh",
	"emailAddress": "support14@fretron.com",
	"mobileNumber": "9728256661",
	"organizationName": "Mr. Vijendra Singh",
	"organizationBillingAddress": "Bhilwara",
	"organizationShippingAddress": "Bhilwara",
	"typeOfCustomer": "fleetOwner",
	"uuid": "d5f15e6e-d929-4ac5-aed2-0b801a0c5a3c",
	"isDeleted": null,
	"createTime": null,
	"updateTime": null
}, {
	"contactPersonName": "Mr. Pardeep",
	"emailAddress": "support20@fretron.com",
	"mobileNumber": "9991625231",
	"organizationName": "Mr. Pardeep",
	"organizationBillingAddress": "Bhilwara",
	"organizationShippingAddress": "Bhilwara",
	"typeOfCustomer": "fleetOwner",
	"uuid": "dc991ecb-b72e-47b4-a5c8-dfc55038b0f8",
	"isDeleted": null,
	"createTime": null,
	"updateTime": null
}, {
	"contactPersonName": "Mr. Balwan",
	"emailAddress": "support79@fretron.com",
	"mobileNumber": "8684878917",
	"organizationName": "Mr. Balwan",
	"organizationBillingAddress": "Bhilwara",
	"organizationShippingAddress": "Bhilwara",
	"typeOfCustomer": "fleetOwner",
	"uuid": "e001fd3b-79f3-43d2-be72-9261f8fdf58d",
	"isDeleted": null,
	"createTime": null,
	"updateTime": null
}, {
	"contactPersonName": "Mr Sarfaraj",
	"emailAddress": "bhilwara@srscarrier.com",
	"mobileNumber": "9460802211",
	"organizationName": "The SRS Carriers",
	"organizationBillingAddress": "M/s The SRS Carriers, Under bridge, By Pass, Pur Road Choraha, Bhilwara",
	"organizationShippingAddress": "M/s The SRS Carriers, Under bridge, By Pass, Pur Road Choraha, Bhilwara",
	"typeOfCustomer": "agent",
	"uuid": "e8639c1e-9407-4690-aef9-e82ca37e1f7e",
	"isDeleted": null,
	"createTime": 1502362765160,
	"updateTime": 1506393782956
}, {
	"contactPersonName": "Mr. Gaje Singh",
	"emailAddress": "support68@fretron.com",
	"mobileNumber": "9509371957",
	"organizationName": "Mr. Gaje Singh",
	"organizationBillingAddress": "Bhilwara",
	"organizationShippingAddress": "Bhilwara",
	"typeOfCustomer": "fleetOwner",
	"uuid": "e87a6396-9caf-4486-9ed4-f4954ba5ec99",
	"isDeleted": null,
	"createTime": null,
	"updateTime": null
}, {
	"contactPersonName": "Sanjay Jain",
	"emailAddress": "sanjayjain1885@gmail.com",
	"mobileNumber": "9414148060",
	"organizationName": " SSP LOGISTICS",
	"organizationBillingAddress": "Shop no. L12 Tpt nagar, Bhilwara",
	"organizationShippingAddress": "Shop no. L12 Tpt nagar, Bhilwara",
	"typeOfCustomer": "fleetOwner",
	"uuid": "f62f70e5-ec8c-40a8-8c9b-1c5dc2cb0b5c",
	"isDeleted": null,
	"createTime": null,
	"updateTime": null
}, {
	"contactPersonName": "Mr. Ravinder Kumar",
	"emailAddress": "support30@fretron.com",
	"mobileNumber": "8278405473",
	"organizationName": "Mr. Ravinder Kumar",
	"organizationBillingAddress": "Bhilwara",
	"organizationShippingAddress": "Bhilwara",
	"typeOfCustomer": "fleetOwner",
	"uuid": "feb646e2-154c-46d4-94f8-9ad9a5c94627",
	"isDeleted": null,
	"createTime": null,
	"updateTime": null
}]
go()
