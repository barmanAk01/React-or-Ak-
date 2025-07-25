// useState :  useState is a built-in React Hook that enables functional components to manage and track state—data that can change over time within Application. 

import  { useState } from 'react'

import './App.css'


function App() {
  /*
  useState(Actual_value) is need to set in a variable and take 2 parameters in a array,
   first one, is the state/who_represents_the_value  and
   second, is the function to update the state.
   So, Here let [state, state_fn()] = useState(Initial_value)  */

  const [counter, setCounter] = useState(5)

  // let counter = 10;
  
  // If I want to accept counter values between 0 - 20, check conditions for this,

  // fn() - to add value
  const addValues = () => {
    // counter = counter + 1; // update value from here is nt recomended.
    
    // condition_1; add values up to 20 the max linmit;
    if(counter < 20){
       setCounter(counter +1 ) // Updating State
    }
 
  }

  // fn() - to remove values
  const removeValues = () => {
 
    // condition_2; remove values up to 0 the min linmit;
    if(counter > 0)
    setCounter(counter - 1);
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
