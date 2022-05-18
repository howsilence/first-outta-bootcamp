// this file can be run with node populatedb.js, it will fetch all employees from the Leviathan API and store them in our mongoDB
const mongoose = require('mongoose');
const Employee = require('./models/employeeModel');
const fetch = require('node-fetch')

let resultData;
let saveCounter = 0;

mongoose.connect("mongodb+srv://Admin:pwd@cluster0.w6lmp.mongodb.net/growflow_challenge?retryWrites=true&w=majority")
.then(() => console.log("mongodb connection success"))
.catch(error => console.log(error));


const Leviathan = "https://leviathan.challenge.growflow.com";
const API_Key = "CHALLENGEKEY";
const API_User = "CHALLENGEUSER";
const URLS = [Leviathan+"/employee/?ApiUser="+API_User+"&ApiKey="+API_Key];


URLS.map(async url => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      resultData = [...json];
  
      for (let i = 0; i < resultData.length; i++) {
        let temp = new Employee({
          firstName: resultData[i].firstName,
          lastName: resultData[i].lastName,
          leviathanId: resultData[i].leviathanId,
          email: resultData[i].email,
          telephone: resultData[i].telephone,
          role: resultData[i].role
        });
  
        temp.save(() => {
          saveCounter++;
          if (saveCounter === resultData.length) {
            mongoose
              .disconnect()
              .then(() => console.log("mongodb disconnected"))
              .catch(error => console.log(error));
          }
        });
      }
    } catch (error) {
      console.log(error);
    }
  });