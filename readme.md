# Requirements
Design and Implement the Phoenix API in either .Net Core or Javascript ES6+ or Typescript
Your API should disintermediate and decouple Phoenix's consumers from any complexity, inconsistencies, flakiness or latency in Leviathan.
You should start by building support for only the Employees entity.  If you have further time it’s considered a bonus to implement Customers and Orders.

Note that data can change / be created in Leviathan outside of your application. Leviathan does not support web hooks so you will have to rely on pulling data to keep items in sync. 


Phoenix should store it’s own data in a data model of your design.  It is often valuable for Phoenix’s customers to have access to IDs from Leviathan.


Be sure to be mindful of the various kinds of errors that Leviathan may throw and to handle them in a logical and appropriate way.  Business rule errors should be forwarded to Phoenix consumers, internal errors or coding errors should not.

Please Include a README with instructions on how to run your submitted code.

Hard Mode / Bonuses
Document anything you don’t like about the Leviathan API and how you would change it in a README.[md|txt] file with your submission
During a Leviathan failure or outage, design Phoenix to remain operational
Implement Customers and Orders
Build a front end application on top of Phoenix in ReactJS
Design a notification framework for letting the frontend know when data is/isn’t in sync with Leviathan


# Steps
First make sure you have <a href="https://nodejs.org/en/">node & npm</a> on your system.

Next npm install should install all dependencies on to your machine but just incase it doesn't we're going to be using the following modules:

<a href="https://www.npmjs.com/package/express">express</a> (npm install express)
<a href="https://www.npmjs.com/package/node-fetch">node-fetch</a> (npm install node-fetch)
<a href="https://www.npmjs.com/package/mongoose">mongoose</a> (npm install mongoose)
<a href="https://www.npmjs.com/package/nodemon">nodemon</a>

We'll also be using <a href="https://docs.mongodb.com/manual/administration/install-community/">mongoDB</a> to act as our "offline" database.

We spin up our local database with npm start in the terminal.

Next in your terminal run node populatedb.js this will do an initial pull of the Leviathan Api to our local MongoDB database.

CRUD functionality can be performed via <a href="https://www.postman.com/">postman</a>
localhost is set to 5000, endpoints are /employee for index/post and /employee/:id for show, update and destroy.

# Observations
Inconsistency between databases, why do employees, customers and orders have overlappying categories but different keys/values? Why is telephone a string?
