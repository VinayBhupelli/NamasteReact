> I dont have a Marketing Team you are my Marketing Team!

### Restart Again

- npm install
- npm start

### Redux
- There is UI layer and data layer 
- redux comes in data layer
- But Redux is not mandatory
- Redux and React are different libraries
- Use Redux wisely when madatory
- Zustand is also another state management library
- Handling data managing store
- Redux Offers easy debugging

### Redux-toolkit
- Installation : Install @reduxjs/toolkit and react-redux
- Build our Store
- Connect our store to APP
- Create a (Cart Slice)
- dispatch(action)
- Selector

```js
onClick={handleAddItem}
onClick={()=>handleAddItem(item)} // callback function
onClick={handleAddItem(item)} // directly calling the function
```
- Vanilla(older) Redux -> Dont mutate your state & returning the newState is mandatory
  
```js
const newState = [...state];
newState.items.push(action.payload);
return newState;
```
- where as Redux Toolkit we have to mutate the state or return a newState
- Redux uses IMMER behind the scenes

- Read About RTK Query