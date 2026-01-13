import { useState } from "react"

export default function Score (){

    // Css Style with object 
    const Styles = {
        border : "5px solid orange"
    }
    const Styles1 = {
        display: "flex",
        gap: "5px",
        margin: "5px"
    }


    // Handle the Events 

       const [Single , SetSingle] = useState(0);
    //    For count the total sixes 
    const [Six , SetSix] = useState(0);
    //    For count the total Four 
    const [Four , SetFour] = useState(0);

    // Single 
    const handleSingle = () => {
        // alert ("clicked here 1")
        const newSingle = Single + 1 ;
        SetSingle(newSingle);
    }
    const handleDouble = () => {
        // alert ("clicked here 2")
        const newSingle = Single + 2 ;
        SetSingle(newSingle);
    }
    const handleTripple = () => {
        // alert ("clicked here 3")
        const newSingle = Single + 3 ;
        SetSingle(newSingle);
    }
    const handleFour = () => {
        // alert ("clicked here 4")
        const newSingle = Single + 4 ;
        const newFour = Four + 1 ;
        SetFour(newFour);
        SetSingle(newSingle);
    }
    const handleFive = () => {
        // alert ("clicked here 5")
        const newSingle = Single + 5 ;
        SetSingle(newSingle);
    }
    const handleSix = () => {
        // alert ("clicked here 6")
        const newSingle = Single + 6 ;

        const newSix = Six + 1 ;
        SetSix(newSix);

        SetSingle(newSingle);
    }


    

    return (
        <div style={Styles}>

            <h3>Score: {Single} </h3>

            <p><small>Total Six : {Six}</small></p>
            <p><small>Total Four : {Four}</small></p>
     {
        Single > 50 && <p>Congratulations !!! You Have Scored 50</p>
     }
     {
        Single > 100 && <p>Congratulations !!! You Have Scored 100</p>
     }
     {
        Single > 150 && <p>Congratulations !!! You Have Scored 150</p>
     }
     {
        Single > 200 && <p>Congratulations !!! You Have Scored 200</p>
     }
            <div style={Styles1}>

            <button onClick={handleSingle}>Single</button>
            <button onClick={handleDouble}>Double</button>
            <button onClick={handleTripple}>Tripple</button>
            <button onClick={handleFour}>Four</button>
            <button onClick={handleFive}>Five</button>
            <button onClick={handleSix}>Six</button>
            </div>
        </div>
    )
}