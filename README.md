# Crash Pad

Crash Pad is an online marketplace for indoor and outdoor stays, targeted towards members of the outdoor climbing community. It is inspired by [Hipcamp](https://www.hipcamp.com/en-US).

Try listing or booking a campsite at my live site: [Crash Pad](https://crash-pad-stays.herokuapp.com/).

## Features

## Getting Started
To view and use this application, you can either navigate to the [live hosted site](https://crash-pad-stays.herokuapp.com/) and login as a new or demo user, or download the project locally:
1. Clone this repository ```git clone git@github.com:strewm/Gotta-Latte-Do.git```

2. Install dependencies ```npm install```

3.  Create a .env file based on the .env.example given

4.  Setup a PostgresSQL user + database in the backend folder
    ``` npx sequelize init ```
    ```psql -c "CREATE USER <username> PASSWORD '<password>' CREATEDB"```
    ```npx dotenv sequelize db:create```

5. Migrate and Seed models in the backend folder

    ```npx dotenv sequelize db:migrate``` &&
    ```npx dotenv sequelize db:seed:all```

6. Start the app by running ```npm start``` in both the frontend and backend 

## Overall Structure
### Back End
### Front End
### Libraries Used

## Primary Components

## Future Features

## Technical Implementation
