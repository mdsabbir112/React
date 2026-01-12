
import './App.css'
import Counter from './Counter'

function App() {

  // WE always create the event Function before return 

  // Traditional way to create an function 
  function handleEvent()  {
        alert("The Button 1 are clicked there");
  }
  // Use the Arrow Function 
  const handleEvent3 = () => {
    alert ("This button clicked from 3");
  }

  // here use the arrow function with Parametter
  const handleEvent4 = (num) => {
    const result = num + 50 ;
    alert (result)
  }

  return (
    <>
      
      <h2>Vite + React</h2>

    <Counter />









      {/* here we write about the Event Handler  */}

      {/* This is the traditional HTML style to create an onclick event  */}
      {/* <button onclick="handleEvent()">Click Me </button> */}
      
      {/* This is the JSX Process to call an Event Function */}
      {/* <button onClick={handleEvent()}>Click Me</button>  if we call the function like that we are not able to click the button , instade of that it will called out while the page are lode itself.  */}
      <button onClick={handleEvent}>Click Me</button>

      {/* This is the process of set the Event Function directly  */}
      <button onClick={function handleEvent2 (){alert("hey this is click 2 are clicked ")}}>Click Me2</button>
     
     <button onClick={handleEvent3}>Click Me 3</button>

     {/* Wrap the function call with arrow function and able to use the given Parametter  */}
     <button onClick={() => handleEvent4(20)}>Click Me Perametter </button>
      
    </>
  )
}

export default App
