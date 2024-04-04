> JS is most loved language and if people hate it, its only because they dont understand JS

> With smart students teacher becomes smarter

> At the End of the Day Everything is JS

# Restart Again

- npm install
- npx parcel index.html // creates development build for us

# Scripts

- This shows how to run a project
- starting in dev mode
  "start": "parcel index.html"
  "npm run start" - command used to run
  "npm start" - this only works for start
- starting in production mode
  "build": "parcel build index.html"
  "npm run build" - command used

# JSX

JSX is a js syntax which is easier to react elements
jsx doesnt belong to react (they both are not same)
it is not html inside js it is "html like or XML like syntax"

js is a code that js engine understands it
js engine doesnt understand jsx code
because js engine understands ecma/es6 script

const jsxheading = <h1 id="heading">Heading using JSX 🚀</h1>
this will be given error when you place it inside console
as it cant understand it as it not pure valid js

Then how is the code working : Parcel is doing the job behind the scences
Even before the code goes to js engine it gets transpiled
then transfered so that JS Engine can understand

# Babel

Parcel can able to do this using a thing called "BABEL"
Babel is JS Compiler and helps in converting JSX to ReactElement
Babel makes browsers understand JSX code and even make understandle for older browsers

Explore Various Attributes and camelCasing notations in JSX
If you want to write JSX in multiple lines then add () to JSX code to know start and end of JSX
if its single line it is not required
