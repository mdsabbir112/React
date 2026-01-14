import { useEffect, useState } from "react"

export default function UserState () {

    const [User, SetUser] = useState([]);

    // here we use the concept of UseEffect for Fetch the Api Data (This is Another Process to Fetch the Api )
    // use Effeect mainly works for Cotacting and Effect with the another Component Effect 
  //useEffect(Arrow Function , Dependecies)
    useEffect(() => {
        fetch ('https://jsonplaceholder.typicode.com/posts')
            .then (res => res.json())
            .then (data => SetUser(data))
    } , []) 
console.log(User);


    return (
        <div>
            <h3>Lamiz Name : {User.length}</h3>
        </div>
    )
}