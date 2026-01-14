
import './App.css'
import Counter from './Counter'
import Score from './Score'
import Api from './Api'
import { Suspense } from 'react';
import Loading from './Loading';
import Friends from './Friends';
import Photos from './Photos';
import UserState from './UserState';

// Api always Call after the import sections 

const fetchApi = fetch('https://jsonplaceholder.typicode.com/users')
    .then (res => res.json())

    //Call an Api using the concept of async and await 
    const fetchFriend = async() => {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      return res.json();
    }

    // Call an API using the concept of Async and Await for Photo.jsx
    const fetchUsers  = async() => {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts');
      return res.json();
    }

function App() {

  //insert a Function into an Variable 
  const FriendsApi = fetchFriend();
  //insert a Function into an Variable 
  const FetchUser = fetchUsers();
  

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

      <UserState/>

      <Suspense fallback= {<Loading />}>
        <Photos FetchUser= {FetchUser}></Photos>
      </Suspense>

      <Suspense fallback={<Loading />}>
      {/* Api er Vhitore fetchApi namer Variable ke props and its Value hishebe Pathaia dice 
      jeno API JSX ai props ta ke recive kore (Distructure Hishebe , Formate : ({name})) use korte pare  */}
        <Api fetchApi={fetchApi}></Api>
      </Suspense>

      <Suspense fallback= {<Loading/>}>
        <Friends FriendsApi={FriendsApi} />
      </Suspense>

      

    {/* <Counter /> */}
    <Score />









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
