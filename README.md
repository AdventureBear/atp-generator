This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# ATP Generator
> Organizing Chaos & Saving Time for Endurance Coaches

ATP Generator takes care of the tedious bulk of a coach's work when setting up a new training plan for an athlete. 

Initial training plan setup is programmatic and algorithmic, even when working on intuation. 

The ATP Generator takes care of this tedious work for you, and lets you spend your precious energy fine tuning the plan. 

The initial inputs are stored in a training plan design object. This way you can track your athletes seasons, changes mid year and updates any time you need to modify a plan midway through. 

## Design
The training plan design object stores all the variables needed to generate a training plan 
```$xslt
{
    start_date: Date Obj,
    event_date: Date Obj,
    event_name: String
    event_distance:  { distance:  5k, 10k, 13.1, 26.2 , units: (km or m) }
    current_long_run: { distance:  , units: (km or m) }
    current_run_frequency: 0-7 days
    doubles: true/false 'two runs in one day
    weekly_run_volume: { distance:  , units: (km or m) }
    best_results: [
        { distance: , units: (m, km or m), time: Date Obj , date: Date Obj},
        { distance: , units: (m, km or m), time: Date Obj , date: Date Obj},
        { distance: , units: (m, km or m), time: Date Obj , date: Date Obj}
        ]
}
```

## Features
* Create basic plans for running & triathlon events
* Save athlete's training plan design
* Track changes to athletes plan by tracking changes in the training plan design object
* Import a list of events from a CSV or TXT file
* Visually track a time line progress to completion
* Dashboard features training volume, duration & variety
* Add associate coaches to your dashboard and mentor them through the app





## Installing / Getting started

### Setup your Mongo Database
You can use mLab or locally hosted mongo setup.  Either option will require 
a connection URL string that looks like one of these: 

    mongodb://username:password@df01326.mlab.com:1512/ducks
    mongodb://localhost/ducks
    
Use the appropriate URL in your .env file 

### Customize your .env file
Environmental variables are used to hide sensitive information from outside eyes
and allow the application to function between users, or let you quickly update your 
port or database for your application. Currently there are two environmental varaibles to set up:
 
Follow these steps to setup your .env file
   - rename sample.env to .env
   - change PORT to appropriate Port value
   - change Mongo URL to appropriate Mongo connection
      

### Install nodemodules with npm and start app.js
  ```
  npm install 
  nodemon app.js
  ```
This will install all the node_modules required for your app to run, and start the Deliberate Duck server on the port you specified in your .env file.


## Seed File Setup
### Getting Started
When you run the application for the first time, and every time
the server is restarted, seeds file will create an admin user:

    username: Fig
    password: password

If you want to view projects you must be logged in. Seeds creates 2 projects 
with existing stories for you to explore. 

You can create a new user with our without admin status. The code for 
creating an admin user is ```secret123```



### Moving to Production

The seeds.js file will run when you start the server using ```nodemon app.js``` or ```node app.js```. 
Use caution as this will overwrite any previous databases using the name in your Mongo URL. 


If you are not in production and assisting with open source development of Deliberate Duck (thank you), you 
can leave the seedsDB() fuction in the app.js file. 

However if you are ready to begin production use, you MUST comment out the seedDB() command in the app.js file 
during the app setup as show here: 

    app.use(bodyParser.urlencoded({extended: true}))
    app.use(express.static(__dirname + "/public"))
    app.use(methodOverride("_method"))
    app.use(flash())
    app.set("view engine", "ejs")
    //seedDB()      <-- comment or remove this line for production use
    

## Contributing

ATP Generator is a fun, useful application ideal for beginning and experienced coaches alike. 

If you'd like to contribute, please fork the repository and use a feature
branch. Pull requests are warmly welcome.

### Style Guide: 
I'm pretty new to this, currently it is written in ES5, but I'm open to ES6 and will 
begin refactoring it ASAP. 

Steel City Endurance coach programmers feel that semi-colons are visual clutter, please don't use them


## Links

- Project homepage: https://your.github.com/awesome-project/
- Repository: https://github.com/your/awesome-project/
- Issue tracker: https://github.com/your/awesome-project/issues
  - In case of sensitive bugs like security vulnerabilities, please contact
    my@email.com directly instead of using issue tracker. We value your effort
    to improve the security and privacy of this project!
- Related projects:
  - Your other project: https://github.com/your/other-project/
  - Someone else's project: https://github.com/someones/awesome-project/


## Licensing

"The code in this project is licensed under MIT license."


## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
