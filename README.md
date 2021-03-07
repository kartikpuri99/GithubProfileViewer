This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## About the app
A web app that uses github api to fetch the details of the user entered in the search box and show the details of all the repositories in a much more nicer looks with charts.

# Tech Stack

* ReactJS
* GithubAPI
* ChartJS
* BootStrap4

# How to run the file
1. clone the github repo on your local desktop.
2. Run `npm i` in the root folder.
3. In the root folder inside the src folder create a file named `keys.js` and add the following code:
    ```javascript
    export const Client_SECRET="CLIENT_SECRET"
    ```
    ```javascript
    export const Client_ID="CLIENT_ID"
    ```
    where CLIENT_SECRET and CLIENT_ID are your API keys from GithubAPI <br/>
4. Now open the terminal in root folder and run `npm start` to run the app.


