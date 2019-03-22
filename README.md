# SOGsV2
Group Project V2

Modified project structure to separate client and server

Note app is now client and server
You will need to create a build for the client to connect the server
-> client folder
ng build
This creates a dist folder which is your build and can be accessed with 
http://localhost:8080

To run your development server:
cd client
ng serve -o
open Chrome http://localhost:4200

So we have production build vs live development server
need to have terminal with mongod running for database
mongod
Can check contents of database through "mongo" in terminal
    Or use Robo3T for GUI version
    Our db is SOGs

