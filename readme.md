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


# Thought process

# Dependancies

# Observations