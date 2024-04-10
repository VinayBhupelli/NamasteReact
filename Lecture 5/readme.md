# Restart Again

- npm install
- npm start

# src

- All the main code(source code) of a react project is kept in src folder
- Its is convention to do that
- Keep the App.js file in the src folder

# Clean the APP.JS file

/\*\*

- Header
- -Logo
- -Nav items
- Body
- -Search
- -Restaurant Container
- -Restro Card
-      -Img
-      -Name of Res
-      -Star Rating
-      -Cusinie
- Footer
- -Copywrights
- -Contact Info
  \*/

# JS & JSX

The differenec doesnt matter much

# Import & Export

- Export first from the component folder
- import the component file to required file
- import doesnt require extension name

# Hard Coded Data

- it is never kept in components folder
- Keep them in Utils, config, constant Folder
- these are utilities can be used anywhere in the app

# Two types of exports

- Default Export (write at the end)
- Named Export (export infront of const)

# onClick

-Takes a Callback Function
<button className="filter-btn" onClick={() => {console.log("Button Clicked");}}>

- When Data changes UI doesnt change automatically
- every framework trying to make UI change when data changes
- React is faster in DOM manipulation

# State Variable

- different from normal variables
- Super powerful variable
- two most important hooks are useState(),useEffect()
- useState() = used to create superpowerful State Variables in react
- import them as named import
- State Variable
  const [listofRestaurants] = useState([]);
- Normal Variable
  let listofRestaurants = [];

- when State changes react rerenders component

# Virtual DOM

- VirtualDOM(JSX Object) is the representation of Actual DOM(normal HTML code)

# Reconciliation (React Fiber)

- Reconciliation Algorithm (React Fiber) is started from react 16
- it is new way of finding the div and updating the DOM

# Diff Algo

- Finding out the difference in two HTML codes is difficult where as it is easier with objects
- React keep track of the code using objects
- React finds difference in virtual DOM & updates the UI
- finds the div(state variable) updates the UI
