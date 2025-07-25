
import  { useState } from 'react'

import './App.css'

  function App() {
  
    const [counter, setCounter] = useState(5)

   // fn() - to add value
     const addValues = () => {
     // counter = counter + 1; // update value from here is nt recomended.
     
     /* ## What happen by declaring this statements - setCounter(counter + 1),
           will the counter value change?  
     */
         // setCounter(counter + 1)
         // setCounter(counter + 1)
 
     // -> SO, setCounter(counter + 1) will not increment the counter by 2 .


     // # For that increment we have use like this- setCounter(prevCounter => prevCounter + 1) , this is call back fn().
     setCounter(prevCounter => prevCounter + 1)
     setCounter(prevCounter => prevCounter + 1)
     setCounter(prevCounter => prevCounter + 1)
   
     // now this will increment the counter by 3.
 
  }

   // fn() - to remove values
   const removeValues = () => {
  
   }


  return (
    <>
      <h1> Hey this is  Vite_React part 2 !</h1>
      <h2>Counter Values : {counter}</h2>

      <button onClick ={addValues}
      > Add Values  </button>

      <br /><br />

      <button onClick={removeValues} 
      > Remove Values </button>
    </>
  )

}

export default App
