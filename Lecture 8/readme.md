> I am not Lazy & I will repeat it again

> Interviewer's wont be able to confuse you, You will confuse them if they dont know

> You need to take care of every line to make it Scalable 

> When you create a mess you need to clean it also

> You should be fire in interviews  
### Restart Again

- npm install
- npm start

### Class Components

- Now a days it is not used
- these days functional components are used

- class based component is a class which has a render method which returns some piece of JSX
- a class based component extends React.Component
- whenever a class instance is created first the constructor is called

- rendering : mounting, invoking, calling
- loading a class based component means creating a new instance
- Never update state variables directly

###  LifeCycle of React Class Based Component
- when ever the app comes across the class based component it starts mounting it
- first it the constructor is called then render is called

1. Parent Constructor
2. Parent render
3. Child Constructor 
4. Child render 
5. Child Did Mount 
6. Parent Did Mount
   
- componentDidMount is used for API Calls

1. Parent Constructor
2. Parent render
    1. Child1 Constructor 
    2. Child1 render
    3. Child2 Constructor
    4. Child2 render 
     - (DOM Gets Updated In Single Batch)
    5. Child1 Did Mount
    6. Child2 Did Mount 
3. Parent Did Mount
    
<img src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*552z6hbX_b648DjpTLHZNg.png" alt="React Life Cycle" style="width: 600px; height: 400px;">

- Never compare react lifecycle method to functional component
- Component did mount is not equivalent to useEffect

 
