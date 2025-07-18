// creating render fn()
function customRender(reactElement, container){

// version_1
/* 
 // create a element for structuring its own dom and select the reactElement type 
 const domElement = document.createElement(reactElement.type);
 
   domElement.innerHTML= reactElement.children
   domElement.setAttribute('href' , reactElement.props.href);
   domElement.setAttribute('target' , reactElement.props.target);
 
 // now just attach to the doc
   container.appendChild(domElement)
   
*/   

// Version_2  (more modular code - refers to the practice of organizing code into smaller, independent, and reusable units )

// This is my custom syntax/Rules how to accept the element for rendering  .
const domElement = document.createElement(reactElement.type);

  domElement.innerHTML = reactElement.children
  for (const prop in reactElement.props) {
     if(prop === 'children') continue;
     domElement.setAttribute(prop, reactElement.props[prop])
  }

  container.appendChild(domElement)
}

// Created Element which will be used to render in the object form  
const reactElement = {   // created the element that will be rendered
    type : "a",
    props : {
        href : 'https://www.google.com/',
        target : "_blank"
    },
    children : 'click here to visit google'
}

const mainContainer = document.querySelector('#root') // this is the container where element will be rendered


customRender(reactElement, mainContainer) // call the function to render the element