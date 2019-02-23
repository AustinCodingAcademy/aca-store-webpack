## Intro
We have built a perfectly operational ecommerce web app. Let's try to solve some of the problems we have talked about by using the webpack tool. 
### Setup
* fork, clone, npm i
* All tools are already installed in the package.json.
* All config files are already made.
* change all component files to use ES6 module syntax instead of depending on global variables
* Wherever a global variables is used, make sure to import it
* export all components as default
* change index.js to `import ReactDOM from "react-dom"` and `import React from "react"` and `import App from "./components/App.js"`
* Even though the keyword "React" is not used in the component files, all component files must `import React from "react"`
* Remove all babel script tags from index.html
* Remove proptypes script tag
* Remove all react based script tags from index.html
* Remove all "text/babel" script tags from index.html
* Do a `npm start` to bring up the web page through the webpack dev server
* If everything is working correctly, the page will look exactly the same
* Look at the network tab, how many .js files have been downloaded.
* Do a `npm build`. Deploy these files to your git pages website to see your react app in action.
