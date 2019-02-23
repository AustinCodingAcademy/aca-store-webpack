## Intro
We have built a perfectly operational ecommerce web app. Let's try to solve some of the problems we have talked about by using the webpack tool.

### Setup
* fork, clone, npm i
* All tools are already in the package.json.
* All config files are already made.
* change all component files to use ES6 module syntax instead of depending on global variables
* change index.js to `import ReactDOM from "react-dom"` and `import React from "react"`
* Even though the keyword "React" is not used in the component files, all component files must `import React from "react"`
* remove all babel script tags from index.html
* remove all react based script tags from index.html
* remove all "text/babel" script tags from index.html
* remove*** props from index.js !!! JON
* I*** JON change reference to jquery and boostrap js