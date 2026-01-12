import { useState } from "react"


export default function Counter () {

    // Use State :
    // Const [Value, SetValue] = useState(initialValue);

    const [Count , SetCount] = useState(0)

    const handleUser = () => {
        alert ("btn clicked")
        const newValue = Count + 1;
        SetCount(newValue);
    }
    const Style = {
        border : "5px solid orange"
    }

    return (
        <div style={Style}>
            <h3>Count : {Count} </h3>
            <button onClick={handleUser} >ADD</button>
        </div>
    )
 }