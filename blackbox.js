//how to block cors property?
// var proxy_url = 'https://cors-anywhere.herokuapp.com/';
// var main_url = 'https://dailymed.nlm.nih.gov/dailymed/services/v2/drugnames.json?drug_name=as';

// fetch(proxy_url + main_url)
//     .then(response => response.json())
//     .then(data => console.log(data));

//how to store json value as object?
// Read accounts.json
"use strict"
const { log } = require('console');
const fs = require('fs');
    const Accounts = fs.readFileSync('Accounts.json', 'utf-8');

    // Check if json file is empty
    if(Accounts.length !== 0){
        console.log(Accounts);
        var ParsedAccounts = JSON.parse(Accounts);
        console.log(ParsedAccounts);
    }
    else{
        ParsedAccounts = [];
    }


    ParsedAccounts.push(Accounts);

    const NewData = JSON.stringify(ParsedAccounts, null, 4);

    // Write new data to accounts.json
    fs.writeFileSync('Accounts1.json', NewData);


