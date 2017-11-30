# Node js microservices
This is a sample working application that shows how to build Nodejs microservices application using Node js and Express.

## Requirements
 - Node v6+
 - Npm 3.5+

## Installation
Run *npm install*

## Services
There are 2 services, **user-service and project service** located in the **micro-services** directory of the root directory.

#### Running the services
*npm run start:user-service* - The user service will run at http://localhost:9001
*npm run start:project-service* - The project service will run at http://localhost:9002

## Routes
The express routes are located in the **routes** directory. User and Project routes are exported as modules.

## Running the app
*npm run start*
This will launch the application at http://localhost:8080.
Navigate to *Users* and *Projects* link to view the response from user and project service respectively.

#### Front end 
The front end is based on Jquery, Bootstrap and ejs templates. Any modern frameworks, like Vue, React or Angular can be used instead.
The partials are located in the **views** directory