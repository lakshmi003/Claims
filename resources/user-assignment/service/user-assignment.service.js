(function() {
    'use strict';    
    angular
        .module('claims')
        .service('UserAssignmentService', UserAssignmentService)

    UserAssignmentService.$inject = [];

    function UserAssignmentService() {

        this.getClaimsForUserAssignment = function() {
            return [{
                'claimNo': '456',
                'memberNo': '9562467936',
                'voucherNo': '49228',
                'encounterType': 'Inpatient',
                'documentLink':'Medical Bills',
                'requestRecievedOn': '23 jan 2018',
                'prevRequest': 'NA',
                'payMode': 'Cheque',
                'payDate': '08 Jan 2018',
                'payRefNo': '19212',
                'requestedAmount': '2,23,515',
                'approvedAmount': '1,00,550',
                'currencyCode': 'AED',
                'name': 'Osama Bin',
                'status': 'Rejected',
                'emiratesId': 56787,
                "id" : new Date().getTime() + 1
            }, {
                'claimNo': '3365430',
                'memberNo': '9563569856',
                'voucherNo': '14098',
                'encounterType': 'Inpatient',
                'documentLink':'Medical Policy',
                'requestRecievedOn': '02 jan 2017',
                'prevRequest': 'NA',
                'payMode': 'IBAN',
                'payDate': '02 Jan 2018',
                'payRefNo': '13212',
                'requestedAmount': '2,23,515',
                'approvedAmount': '1,70,530',
                'currencyCode': 'AED',
                'name': 'Rayan',
                'status': 'Approved',
                'emiratesId': 56787,
                "id" : new Date().getTime() + 2
            }, {
                'claimNo': '4388906',
                'memberNo': '95635096312',
                'voucherNo': '39028',
                'encounterType': 'Inpatient',
                'documentLink':'Medical Info',
                'requestRecievedOn': '01 jan 2018',
                'prevRequest': 'NA',
                'payMode': 'Cheque',
                'payDate': '09 Jan 2018',
                'payRefNo': '13072',
                'requestedAmount': '3,23,515',
                'approvedAmount': '1,90,500',
                'currencyCode': 'AED',
                'name': 'Ansar',
                'status': 'Rejected',
                'emiratesId': 56787,
                "id" : new Date().getTime() + 3
            }, {
                'claimNo': '63424531',
                'memberNo': '9563281452',
                'voucherNo': '67248',
                'encounterType': 'Inpatient',
                'documentLink':'Medical Document',
                'requestRecievedOn': '18 jan 2018',
                'prevRequest': 'NA',
                'payMode': 'IBAN',
                'payDate': '07 Jan 2018',
                'payRefNo': '08912',
                'requestedAmount': '4,23,515',
                'approvedAmount': '1,60,900',
                'currencyCode': 'AED',
                'name': 'Mohamed',
                'status': 'Rejected',
                'emiratesId': 56787,
                "id" : new Date().getTime() + 4
            }, {
                'claimNo': '5975210',
                'memberNo': '9509634521',
                'voucherNo': '93521',
                'encounterType': 'Inpatient',
                'documentLink':'Medical Bills',
                'requestRecievedOn': '14 jan 2018',
                'prevRequest': 'NA',
                'payMode': 'Cheque',
                'payDate': '11 Jan 2018',
                'payRefNo': '10212',
                'requestedAmount': '23,515',
                'approvedAmount': '1,80,590',
                'currencyCode': 'AED',
                'name': 'Abdur',
                'status': 'Rejected',
                'emiratesId': 56787,
                "id" : new Date().getTime() + 5
            }, {
                'claimNo': '7221790',
                'memberNo': '9560756432',
                'voucherNo': '90983',
                'encounterType': 'Inpatient',
                'documentLink':'Medicalinfobillsdocs',
                'requestRecievedOn': '19 jan 2018',
                'prevRequest': 'NA',
                'payMode': 'IBAN',
                'payDate': '21` Jan 2018',
                'payRefNo': '188212',
                'requestedAmount': '9,23,515',
                'approvedAmount': '1,40,580',
                'currencyCode': 'AED',
                'name': 'Parveen',
                'status': 'Approved',
                'emiratesId': 56787,
                "id" : new Date().getTime() + 6
            }, {
                'claimNo': '9743210',
                'memberNo': '9563982314',
                'voucherNo': '76721',
                'encounterType': 'Inpatient',
                'documentLink':'MedicalPolicyDoc',
                'requestRecievedOn': '03 jan 2018',
                'prevRequest': 'NA',
                'payMode': 'Cheque',
                'payDate': '10 Jan 2018',
                'payRefNo': '13288',
                'requestedAmount': '23,515',
                'approvedAmount': '1,20,500',
                'currencyCode': 'AED',
                'name': 'Farook',
                'status': 'Rejected',
                'emiratesId': 56787,
                "id" : new Date().getTime() + 7
            }, {
                'claimNo': '8345700',
                'memberNo': '95097865431',
                'voucherNo': '11231',
                'encounterType': 'Inpatient',
                'documentLink':'MedicalInfodoc',
                'requestRecievedOn': '25 jan 2018',
                'prevRequest': 'NA',
                'payMode': 'IBAN',
                'payDate': '08 Jan 2018',
                'payRefNo': '13212',
                'requestedAmount': '1,23,515',
                'approvedAmount': '1,30,700',
                'currencyCode': 'AED',
                'name': 'Hussain',
                'status': 'Waitingforapproval',
                'emiratesId': 56787,
                "id" : new Date().getTime() + 8
            }, {
                'claimNo': '10850',
                'memberNo': '984169856',
                'voucherNo': '98754',
                'encounterType': 'Inpatient',
                'documentLink':'ReimbusrementDoc',
                'requestRecievedOn': '09 jan 2018',
                'prevRequest': 'NA',
                'payMode': 'Cheque',
                'payDate': '14 Jan 2018',
                'payRefNo': '15642',
                'requestedAmount': '7,23,515',
                'approvedAmount': '1,20,600',
                'currencyCode': 'AED',
                'name': 'Banu',
                'status': 'InProgress',
                'emiratesId': 56787,
                "id" : new Date().getTime() + 9
            }, {
                'claimNo': '2345862',
                'memberNo': '9754269856',
                'voucherNo': '87623',
                'encounterType': 'Inpatient',
                'documentLink':'OthersDoc',
                'requestRecievedOn': '23 jan 2018',
                'prevRequest': 'NA',
                'payMode': 'IBAN',
                'payDate': '08 Jan 2018',
                'payRefNo': '13234',
                'requestedAmount': '8,23,515',
                'approvedAmount': '1,50,520',
                'currencyCode': 'AED',
                'name': 'Ashraf',
                'status': 'Waitingforapproval',
                'emiratesId': 56787,
                "id" : new Date().getTime() + 10
            }, {
                'claimNo': '22342230',
                'memberNo': '9209269856',
                'voucherNo': '45628',
                'encounterType': 'Inpatient',
                'documentLink':'ReimbusrementDoc',
                'requestRecievedOn': '30 jan 2018',
                'prevRequest': 'NA',
                'payMode': 'Cheque',
                'payDate': '20 Jan 2018',
                'payRefNo': '10022',
                'requestedAmount': ',23,515',
                'approvedAmount': '1,50,500',
                'currencyCode': 'AED',
                'name': 'Raliya',
                'status': 'Assigned',
                'emiratesId': 56787,
                "id" : new Date().getTime() + 11
            }, {
                'claimNo': '456',
                'memberNo': '9562467936',
                'voucherNo': '49228',
                'encounterType': 'Inpatient',
                'documentLink':'Medical Bills',
                'requestRecievedOn': '23 jan 2018',
                'prevRequest': 'NA',
                'payMode': 'Cheque',
                'payDate': '08 Jan 2018',
                'payRefNo': '19212',
                'requestedAmount': '2,23,515',
                'approvedAmount': '1,00,550',
                'currencyCode': 'AED',
                'name': 'Osama Bin',
                'status': 'New Request',
                'emiratesId': 56787,
                "id" : new Date().getTime() + 12
            }, {
                'claimNo': '3365430',
                'memberNo': '9563569856',
                'voucherNo': '14098',
                'encounterType': 'Inpatient',
                'documentLink':'Medical Policy',
                'requestRecievedOn': '02 jan 2017',
                'prevRequest': 'NA',
                'payMode': 'IBAN',
                'payDate': '02 Jan 2018',
                'payRefNo': '13212',
                'requestedAmount': '2,23,515',
                'approvedAmount': '1,70,530',
                'currencyCode': 'AED',
                'name': 'Rayan',
                'status': 'New Request',
                'emiratesId': 56787,
                "id" : new Date().getTime() + 13
            }, {
                'claimNo': '4388960',
                'memberNo': '9563509632',
                'voucherNo': '39028',
                'encounterType': 'Inpatient',
                'documentLink':'Medical Info',
                'requestRecievedOn': '01 jan 2018',
                'prevRequest': 'NA',
                'payMode': 'Cheque',
                'payDate': '09 Jan 2018',
                'payRefNo': '13072',
                'requestedAmount': '3,23,515',
                'approvedAmount': '1,90,500',
                'currencyCode': 'AED',
                'name': 'Ansar',
                'status': 'New Request',
                'emiratesId': 56787,
                "id" : new Date().getTime() + 14
            }, {
                'claimNo': '63424531',
                'memberNo': '9563281452',
                'voucherNo': '67248',
                'encounterType': 'Inpatient',
                'documentLink':'Medical Document',
                'requestRecievedOn': '18 jan 2018',
                'prevRequest': 'NA',
                'payMode': 'IBAN',
                'payDate': '07 Jan 2018',
                'payRefNo': '08912',
                'requestedAmount': '4,23,515',
                'approvedAmount': '1,60,900',
                'currencyCode': 'AED',
                'name': 'Mohamed',
                'status': 'New Request',
                'emiratesId': 56787,
                "id" : new Date().getTime() + 15
            }, {
                'claimNo': '5975210',
                'memberNo': '9509634521',
                'voucherNo': '93521',
                'encounterType': 'Inpatient',
                'documentLink':'Medical Bills',
                'requestRecievedOn': '14 jan 2018',
                'prevRequest': 'NA',
                'payMode': 'Cheque',
                'payDate': '11 Jan 2018',
                'payRefNo': '10212',
                'requestedAmount': '23,515',
                'approvedAmount': '1,80,590',
                'currencyCode': 'AED',
                'name': 'Abdur',
                'status': 'New Request',
                'emiratesId': 56787,
                "id" : new Date().getTime() + 16
            }, {
                'claimNo': '7221790',
                'memberNo': '9560756432',
                'voucherNo': '90983',
                'encounterType': 'Inpatient',
                'documentLink':'Medicalinfobillsdocs',
                'requestRecievedOn': '19 jan 2018',
                'prevRequest': 'NA',
                'payMode': 'IBAN',
                'payDate': '21` Jan 2018',
                'payRefNo': '188212',
                'requestedAmount': '9,23,515',
                'approvedAmount': '1,40,580',
                'currencyCode': 'AED',
                'name': 'Parveen',
                'status': 'New Request',
                'emiratesId': 56787,
                "id" : new Date().getTime() + 17
            }, {
                'claimNo': '9743210',
                'memberNo': '9563982314',
                'voucherNo': '76721',
                'encounterType': 'Inpatient',
                'documentLink':'MedicalPolicyDoc',
                'requestRecievedOn': '03 jan 2018',
                'prevRequest': 'NA',
                'payMode': 'Cheque',
                'payDate': '10 Jan 2018',
                'payRefNo': '13288',
                'requestedAmount': '23,515',
                'approvedAmount': '1,20,500',
                'currencyCode': 'AED',
                'name': 'Farook',
                'status': 'New Request',
                'emiratesId': 56787,
                "id" : new Date().getTime() + 18
            }, {
                'claimNo': '8345700',
                'memberNo': '95097865431',
                'voucherNo': '11231',
                'encounterType': 'Inpatient',
                'documentLink':'MedicalInfodoc',
                'requestRecievedOn': '25 jan 2018',
                'prevRequest': 'NA',
                'payMode': 'IBAN',
                'payDate': '08 Jan 2018',
                'payRefNo': '13212',
                'requestedAmount': '1,23,515',
                'approvedAmount': '1,30,700',
                'currencyCode': 'AED',
                'name': 'Hussain',
                'status': 'New Request',
                'emiratesId': 56787,
                "id" : new Date().getTime() + 19
            }, {
                'claimNo': '10850',
                'memberNo': '984169856',
                'voucherNo': '98754',
                'encounterType': 'Inpatient',
                'documentLink':'ReimbusrementDoc',
                'requestRecievedOn': '09 jan 2018',
                'prevRequest': 'NA',
                'payMode': 'Cheque',
                'payDate': '14 Jan 2018',
                'payRefNo': '15642',
                'requestedAmount': '7,23,515',
                'approvedAmount': '1,20,600',
                'currencyCode': 'AED',
                'name': 'Banu',
                'status': 'New Request',
                'emiratesId': 56787,
                "id" : new Date().getTime() + 20
            }, {
                'claimNo': '2345862',
                'memberNo': '9754269856',
                'voucherNo': '87623',
                'encounterType': 'Inpatient',
                'documentLink':'OthersDoc',
                'requestRecievedOn': '23 jan 2018',
                'prevRequest': 'NA',
                'payMode': 'IBAN',
                'payDate': '08 Jan 2018',
                'payRefNo': '13234',
                'requestedAmount': '8,23,515',
                'approvedAmount': '1,50,520',
                'currencyCode': 'AED',
                'name': 'Ashraf',
                'status': 'New Request',
                'emiratesId': 56787,
                "id" : new Date().getTime() + 21
            }, {
                'claimNo': '22342230',
                'memberNo': '9209269856',
                'voucherNo': '45628',
                'encounterType': 'Inpatient',
                'documentLink':'ReimbusrementDoc',
                'requestRecievedOn': '30 jan 2018',
                'prevRequest': 'NA',
                'payMode': 'Cheque',
                'payDate': '20 Jan 2018',
                'payRefNo': '10022',
                'requestedAmount': ',23,515',
                'approvedAmount': '1,50,500',
                'currencyCode': 'AED',
                'name': 'Raliya',
                'status': 'New Request',
                'emiratesId': 56787,
                "id" : new Date().getTime() + 22
            }];
        }

        this.getUsers = function() {
            return [{
                'userId': '1234',
                'name': 'Jessica',
                'assigned': 5,
                'pending': 2,
                'claimNo': '2345790',
                'memberNo': '98',
                'voucherNo': '45628',
                'encounterType': 'Inpatient',
                'requestRecievedOn': '23 jan 2018',
                'prevRequest': 'NA',
                'payMode': 'Cheque',
                'payDate': '08 Jan 2018',
                'payRefNo': '13212',
                'requestedAmount': ',23,515',
                'approvedAmount': '1,00,500',
                'currencyCode': 'AED',
                'status': 'Assigned',
                "id" : new Date().getTime() + 1
            }, {
                'userId': '1235',
                'name': 'John wick',
                'assigned': 19,
                'pending': 5,
                'claimNo': '2345790',
                'memberNo': '98',
                'voucherNo': '45628',
                'encounterType': 'Inpatient',
                'requestRecievedOn': '23 jan 2018',
                'prevRequest': 'NA',
                'payMode': 'Cheque',
                'payDate': '08 Jan 2018',
                'payRefNo': '13212',
                'requestedAmount': ',23,515',
                'approvedAmount': '1,00,500',
                'currencyCode': 'AED',
                'status': 'Assigned',
                "id" : new Date().getTime() + 2
            }, {
                'userId': '1236',
                'name': 'Robert andrews',
                'assigned': 12,
                'pending': 8,
                'claimNo': '2345790',
                'memberNo': '98',
                'voucherNo': '45628',
                'encounterType': 'Inpatient',
                'requestRecievedOn': '23 jan 2018',
                'prevRequest': 'NA',
                'payMode': 'Cheque',
                'payDate': '08 Jan 2018',
                'payRefNo': '13212',
                'requestedAmount': ',23,515',
                'approvedAmount': '1,00,500',
                'currencyCode': 'AED',
                'status': 'Assigned',
                "id" : new Date().getTime() + 3
            }, {
                'userId': '1237',
                'name': 'Aaban',
                'assigned': 11,
                'pending': 9,
                'claimNo': '2345790',
                'memberNo': '98',
                'voucherNo': '45628',
                'encounterType': 'Inpatient',
                'requestRecievedOn': '23 jan 2018',
                'prevRequest': 'NA',
                'payMode': 'Cheque',
                'payDate': '08 Jan 2018',
                'payRefNo': '13212',
                'requestedAmount': ',23,515',
                'approvedAmount': '1,00,500',
                'currencyCode': 'AED',
                'status': 'Assigned',
                "id" : new Date().getTime() + 4
            }, {
                'userId': '1238',
                'name': 'Xueli',
                'assigned': 15,
                'pending': 3,
                'claimNo': '2345790',
                'memberNo': '98',
                'voucherNo': '45628',
                'encounterType': 'Inpatient',
                'requestRecievedOn': '23 jan 2018',
                'prevRequest': 'NA',
                'payMode': 'Cheque',
                'payDate': '08 Jan 2018',
                'payRefNo': '13212',
                'requestedAmount': ',23,515',
                'approvedAmount': '1,00,500',
                'currencyCode': 'AED',
                'status': 'Assigned',
                "id" : new Date().getTime() + 5
            },{
                'userId': '1239',
                'name': 'Ashraf',
                'assigned': 7,
                'pending': 1,
                'claimNo': '2345790',
                'memberNo': '98',
                'voucherNo': '45628',
                'encounterType': 'Inpatient',
                'requestRecievedOn': '23 jan 2018',
                'prevRequest': 'NA',
                'payMode': 'Cheque',
                'payDate': '08 Jan 2018',
                'payRefNo': '13212',
                'requestedAmount': ',23,515',
                'approvedAmount': '1,00,500',
                'currencyCode': 'AED',
                'status': 'Assigned',
                "id" : new Date().getTime() + 6
            }];
        }

        this.getSearchFields = function() {
            return [
                { label: 'Member Number', type: 'text', name: 'memberNo'},
                { label: 'Claim Number', type: 'text', name: 'cliamNumber'},
                { label: 'Approved By', type: 'autoSearch', name: 'approvedUser'},
                { label: 'Request Recevied From', type: 'date', name: 'receviedFrom'},
                { label: 'Request Recevied To', type: 'date', name: 'receviedTo'},
                { label: 'Assigned User', type: 'autoSearch', name: 'assignedUser'}
            ];
        }
    }
})();
