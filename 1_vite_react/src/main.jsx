import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
// import MyApp from './MyApp.jsx'


 function MyApp (){

     return(
        <div>
          <h1>This is MyApp ! </h1>
        </div>
     )
 }

// This will not work because this syntax is not following the React lib. way .
/* const ReactElement = {   // created the element that will be rendered
    type : "a",
    props : {
        href : 'https://www.google.com/',
        target : "_blank"
    },
    children : 'click here to visit google'
}
*/


// One way to do like this 
// const anotherElement = (
//   <a href="https://www.google.com/" target='_blank'> click here to visit google</a>
// )

// How to use of variable in JSX, if declare globally
const name = 'Go by this Link !'

// Bt, Now we are going to use the React.createElement() function to create the element, which is acceptable by React lib.
const reactElement = React.createElement(
  'a',
  { href : 'https://www.google.com/', target : '_blank' },
  'click here to visit google',
  <br />,
  name
)


createRoot(document.getElementById('root')).render(

    
    // <MyApp/>  // can be render like this 
    // MyApp()   // can be render like this bt it is not recommended

    
    // <StrictMode>
    //   <App/>
    // </StrictMode>,

    // ReactElement
    // anotherElement
    reactElement
  
)
