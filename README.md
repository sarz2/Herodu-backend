# Herodu-Webbshop-backend

This is the backend of a webshop where you can find all the games you desire.

## Table of Contents

- [General Information](#general-information)
- [Getting Started](#getting-started)
- [Goals](#goals)
- [Page and Routes](#[page-and-routes])
- [License](#license)


### General Information

### Live site
[Herodu-backend](https://heroduapp.herokuapp.com/)


### Built with

- [Node](https://nodejs.org/en/)
- [Express](https://expressjs.com/)




## Getting Started

### `npm run build`

1. Clone the depository
2. Run ``` npm install ``` in the root folder
3.Create a .env file in the root of the project:
Add:
MONGO_CONNECTION_STRING <br>
MONGO_DB_NAME<br>
JWT_SECRET

4. Run ```npm run data:import ```to seed the database with the products and temporary users.



5. Start the server with ``` npm run server ```



6. Navigate to http://localhost:5000 where the app will run locally


## Goals

Are you tired of endelssly scrolling through the internet searching for a good website to buy your games? Well look no more, Herodu webshop is the best place for all your game-related purchases.

## Page and Routes

All product routes starts with /api/products<br>
All user routes starts with /api/users



| **Users**<br><br>/<br>/:id<br>/login<br>/signup<br>/profile                           | <br><br>Admin route for get all users<br>Route for updating/deleting/getting one user<br>login<br>signup<br>get users profile                                 |
|---------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Products**<br><br>/<br>/search/keyword<br>/top<br>/:id<br>/:id/reviews<br>/:id/:qty | <br><br>Get all products<br>Search for products<br>Get top products<br>Get on product<br>Create review for product<br>Reduce quantity for product after order |



## Documentation
- [Wireframes](https://www.figma.com/file/pEbz0xOVfCItDweQK0TKKL/Wireframe-Herodu?node-id=0%3A1)
- [Användaranalys](https://docs.google.com/forms/d/1oT3_jQ2dVydGMrW-QuHAQ2BuvFysEnh6YSTY9n9wFio/edit#responses)
- [UX](https://docs.google.com/document/d/1cjwc1nIodN0G51BTffdVfKQokXw5mG_RH2rT1jOLto0/edit)


## License

Distributed under the [MIT](https://choosealicense.com/licenses/mit/) License.
