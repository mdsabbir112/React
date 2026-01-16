import { useState } from "react"

export default function Count () {

    const [Score , SetScore] = useState(0);

    const Add = () => {
        // alert ('Add btn are clicked ')
        const result = Score + 1;
        SetScore(result);

    }

    const Sub = () => {
        // alert ('Sub are clicked ')
        if(Score <= 0){
            alert ('There need a Positive number for Subtract');
        }
        else{
            const result = Score - 1 ;
            SetScore(result);
        }
        // const result = Score - 1;
        

    }

        const Reset = () => {
        // alert ('Sub are clicked ')
        const result = 0;
        SetScore(result);

    }

    return(
        <div className="Design">
            <h3>Score: {Score} </h3>
            <button onClick={Add}>ADD</button>
            <button onClick={Sub}>SUB</button>
            <button onClick={Reset}>RESET</button>
        </div>
    )
}