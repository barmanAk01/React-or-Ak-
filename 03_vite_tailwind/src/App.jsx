import { useState } from "react";
import Card1 from "./components/Card1";
import Card2 from "./components/Card2";


import "./App.css";


function App() {
 const [count, setCount] = useState(0);

//  let myObj = {
//   name: "John",
//   age: 30,
//  }

//  let myArr = ["AK", 1, 2]

  return (
    <>
      <h1 className="text-3xl font-bold  bg-white text-black rounded-lg mb-3">
        Hey this Vite with Tailwind !
      </h1>

      {/* <br /> */}

      <Card1 cityName = "Jamtara" btnTxt= "click Me" />
      <Card1 cityName = "Deoghar"  />
      <Card1 cityName = "Dhanbad" btnTxt= "click Me" />
      <Card1 cityName = "Gomo"    btnTxt= "click Me" />

      {/* <Card2 project = "Vite_3" /> */}


    </>
  );
}

export default App;
