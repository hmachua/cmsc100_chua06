# CMSC 100 - Exercise 06: MongoDB
## Project
* **User Management using Express, Mongoose, Needle, and MongoDB**
## Author
* **Name:** Hanna Myeisha A. Chua
* **Student Number:** 2023-06871

## Code Description
This is a simple User Management web server built using Express.js as the framework, Mongoose as the ODM to connect to MongoDB Compass, and Needle to perform integration testing on the required HTTP endpoints. The program implements the following functionalities based on the specifications:
* Saving a new student to the database (`POST /save-student`)
* Searching an existing student's first name and updating their last name to "Parker" (`POST /update`)
* Removing a specific user using their student number (`POST /remove-user`)
* Cleaning up the entire database by removing all users (`POST /remove-all-user`)
* Querying a specific user via URL parameters (`GET /user?stdnum=...`)
* Retrieving an array of all registered student records (`GET /members`)

## How to Use
1. Install all the necessary project dependencies listed in `package.json` by running:
   ```bash
   npm install
   ```
2. Make sure your local **MongoDB Compass** application is open and running.
3. Start the Express backend server in your first terminal window:
   ```bash
   node index.js
   ```
4. To execute the integration tests and check the database operations, open a second terminal window or tab and run:
   ```bash
   node test.js
   ```
