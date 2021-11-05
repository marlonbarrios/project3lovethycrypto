# lovethycrypto: 

# a personal cryptocurrency data tracker
(frontend)

![wireframes](src/images/home.png 'home page')

Description:

The cryptocurrency ecosystem is vast, fast growing and can be daunting and disorienting. *lovethycrypto* is a MERN app that offers the users a stream of the main 250 cryptocurrencies sorted by Market Cap. 

After logged in, the user is able to select a set of currencies to a personal list with links to a currency page with more information and external links to global news and Youtube searches about the showcased currency. 

All data is updated dynamically; app was deployed using Google Firebase authentication and consumes a third party API.

The user visits the home page with a list of currencies, signs up and logs in; then chooses one or more cryptpcurrencies listed  by a clicking checkbox that appears (when logged in) in the right of the currency. Then, the user clicks "List" in the navigation bar to be taken to  the a  created list of the selected items. More information about te currency is presented and linked to a currency page. The user can comeback to the list and delete any item.


## Technologies Used
- MERN ( MongoDB, Express, REACT, NodeJS) 
- Google FireBase for authentication
https://firebase.google.com/
- Frontend dependencies: firebase 8.2.3, styled-components 5.3.3.
- - AJAX Asynchronous JavaScript
- Chrome Development Tools.
- Deployment:  backend Heroku 
https://www.heroku.com and frontend Netlify:https://www.netlify.com/
- Postman platform (https://www.postman.com/)
- CoinGecko API (https://www.coingecko.com/en/api)

## Getting Started
See Trello Board here:
https://trello.com/b/Z3sj4ggc/project3love-thy-crypto

See deployed app here:
https://lovethycrypto.netlify.app/

## Unsolved Issues
- Keep the checkmarks state to inform the user which currencies have been selected previously.

## Future Enhancements
- Updating the list with the selected items (checkmark state)
- Add more authentication platforms.
- Alow the user to create, edit and delete anotations for each currency page.
- Change color of the price of currencies  with positive or negative changes.
- Set a notification based on the percentage of price change.
- Connect to exchanges API suchas Coinbase. etc.
- Connect the app to a blockchain API such as Near Protocol and Near Wallets or Metamask in Ethereum.

## Screenshots
![home page](src/images/home.png 'home page')
![login page](src/images/login.png 'login page')
![dashboard page](src/images/dashboard.png 'dashboard page')
![currency page](src/images/show.png 'show page')
![youtube page](src/images/youtube.png 'search results youtube page')

![home page mobile](src/images/mobile_responsive.png 'mobile responsive')
![wiretrames](src/images/wireframes.png 'wireframes')
![erd](src/images/ERD.png 'wireframes')


## The backend lives here
https://github.com/marlonbarrios/project-3-backend

Thanks to the amazing instructors and Challegers cohort classmates of General Asembly Software Engineering Immersive Sept-December 2021
