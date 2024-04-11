> people who code faster they take a lot of time to debug, people who code slower takes very less time to debug or don't require debugging

# Restart Again

- npm install
- npm start

# Monolith

- Single Project for all the services
- services are written mostly in one languauge

# Microservices

- Separate project for separate service
- single responsibility principle
- services interact with each other
- services can be written in different lang also
- sevices has different ports and mapped to domain name

# Fetching data from API (making things dynamic)

- Two ways of fetching
- First way:
- as soon as app/page loads make a call to API
- loads -> API -> render
- need to wait few seconds and suddenly data gets shown

- Second Way:
- loads -> render(skeleton) -> API -> Render
- A skeleton like thing(Skimmer effect) is shown to user
- so that it creates an anticipation to the user that something is about to come
- Better Approach for UX design
- we will be using this way

# Two approches of fetching data from API

# useEffect HOOK

- hook is a normal js function which react give to us which has its own specific usecase
- it has callback function & dependency array
- callback function is called after your component renders
- it would be helpful when API is called
- fetch is given by js engine

# HardCode Data

- remove hardcode data from the folder

# Spinner

- placed before actual

```c++
if (listofRestaurants.length === 0) {
  return <h1>Loading....</h1>;
}
```

# Shimmer UI

- fake skeleton is shown until data is loaded
- it creates an anticipation to the user that something is about to come

## Conditional Rendering

- if you have a condition and you render according to that then it is said to be conditional rendering

```js
if (listofRestaurants.length === 0) {
  return <Shimmer />;
}
```

# State Variable

- when a state variable is created & updated
- updating means again while rendering creating the state variable again and declare it with new value
- again the component renders while rerendering it uses diff algorithm
- whenever state variable update, react triggers a reconciliation cycle (re-renders the component)
