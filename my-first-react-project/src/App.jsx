
import './App.css'
// Importing ToDo Component from ToDo.jsx file
import ToDo from './ToDo.jsx'  
// importing Conditional Component from Conditional.jsx file
import Conditional from './Conditional.jsx'
import Actors from './Actors'
import Models from './Models'

function App() {

  const ActorsArray = ["Shakib", "Shah" , "SRK"];
  // create an Object 
  const ActorsObject = [
    {id:1, name:"Md Sabbir Hasan ", Designation: "Web Developer"},
    {id:2, name:"Md Asad Hasan ", Designation: "Web Engineer"},
    {id:3, name:"Md Sayeb Hasan ", Designation: "Web Specialist"}
  ]

  // get the props value as a Variable 
  // const time = 20 ; 

  return (
    <>
      <h1>Hello , Welcome To React!</h1>

      {/* Use Map Array method for Access the Array */}
      {/* {
        ActorsArray.map(actor => <Actors actor = {actor} />)
      } */}

      {/* Use Map Array Method for Access the Object Array */}
      {
        ActorsObject.map(model => <Models key={model.id} model = {model} /> )
      }

    {/* here time also taken as a Variable  */}
      {/* <ToDo task="Buy groceries" isDone ={true} time = {time}/>  
      <ToDo task="Get Shower" isDone ={false}/>  
      <ToDo task="Reading Books" isDone ={false}/>   */}

      {/* For the Conditional Statements  */}
      {/* <Conditional task="Reading Books" isDone ={true} time = {time} />
      <Conditional task="Playing Games " isDone ={false} time = {time} />
      <Conditional task="Thinking about Future" isDone ={false} time = {time} /> */}



      {/* <WelcomeMessage /> */}

      {/* now we works for getting the dynamic Parametter by gettings Props */} 
      {/* <Student name="Md Sabbir Hasan " language="JavaScript" />
      <Student name="Md Asiful Islam " language="Python" />

      <Book name="Paddaja" details= "This is the Book about Paddaja"/>

      <Player name="Sakib" run= "5000" />
      <Player name="Sabbir"  /> */}
    </> 
  )
}

function WelcomeMessage() {
  // here i declare an object for add some css styles
  const CssStyles = {
    color: 'orange',
    fontWeight: 'bold',
    fontSize: '20px'
  }
  return (
    <>
    // these 2 styles will be applied to this paragraph
    <p style={CssStyles}>Welcome to your Vite + React application!</p>
    <h3 style={{color: 'orangered'}}>Hands on the overall details</h3>
    </>
  )
}

function Student (props) {
  console.log(props);
  return (
    <>  
    <div className='student'>
      <h2>Name: {props.name} </h2>
      <h2>Lenguage: {props.language} </h2>
    </div>
    </>
  )
}

// now we are going to use Distructuting for getting props, cause its an othentic choice over use props.
// const props = {
//   name: 'Some Book Name',
//   details: 'Some Book Details'
// }   // this is the object we are going to destructure

// const {name, details} = props ;

// now we can destructure the props directly in the parameter

// const {name, details} = {name: "Paddaja" , details : "This is a book about Paddaja"} ;

// function Book (props) { // we are not use props here , we are using destructuring
function Book ({name, details}) { // by using props we are able to get the single value on it by using the Distructured Variable. 

  return (
    <div className='book'>
      <h3>Book Name : {name}</h3>
      <h4>Book Details : {details}</h4>
    </div>
  )
}

function Player ({name, run = 0}) { // here run = 0 ; is the Default Value if no value is passed from the parent component
  return (
    <div className="player">
      <h2>Player Name : {name}</h2>
      <h3>Runs : {run}</h3>
    </div>
  )
}
export default App
