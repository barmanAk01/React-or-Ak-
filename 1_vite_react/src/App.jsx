import Comp01 from "./Comp01"

function App() {

/*  Ok, we understand how to use HTML bt How to use variable in this fn() -
  => for this we have use to use Evaluated Expression like this ->  {variable_Name} , 
     can be inject any where in return method , 

  [description : In React JS, "evaluated expressions" primarily refers to JavaScript 
    expressions embedded within JSX, which are evaluated and rendered as part of the 
    component's output.]
*/
  // Example :
  const name = "Ak";

  return (
    <>
      <h1> Hey this is a Vite-React App  | {name} DevFlows</h1>
      <Comp01/>
    </>
     
  )
}

export default App

  // <Comp01/>