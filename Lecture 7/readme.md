> The more you write the more it sticks to brain

> Speak while you code

# Restart Again

- npm install
- npm start

# useEffect

- if no dependency array => useEffect is called on every render
- if the dependency array is empty [] then it is only called initial render (just once)
- if the dependency array is not empty then it is only called everytime dependency array changes

- Never create hooks outside the body of a function component
- & Try to create them at the top
- Never create them inside the if else cases

# React Router DOM

- Version : v6.4
- npm i react-router-dom
- whenever we have to create routes we need to create routing configuration inside the App file
- routing configuration: What will happen on a specific route
- it takes a list of paths & elements as object
- it need to returned for rendering for this RouterProvider is used

- rafce : creates the boilerplate of component

- To get the header in all the pages we need to create children routes
- outlet is used to replace the part with its children
- Never use Anchor tag for routing
- Because it refresh the page
- Using react you can navigate to new page without reloading the whole page

# Single Page Application

- no refreshing the page

# Routing in Web Apps

- Two types of routing
- 1st: Client side routing (Components are loaded into the app)
- 2nd: Server side routing (You make a call & you get the html page)

# Dynamic path

- path changes for each page
- starts with :anyID
- path: "/restaurant/:resID"

# Link

- behind the scenes link is using anchor tags
- link is rapper over anchor tag
- react router dom making it anchor keeping it track as link
