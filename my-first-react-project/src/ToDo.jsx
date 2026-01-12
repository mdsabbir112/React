// here we need to know how to Export and Import Component from one file to another file

// export default function todo ({task, isDone}) {
//     return (
//         <div className="book">
//             <h4 style={{textAlign: 'center', color: 'blue'}}>This is ToDo Component</h4>

//             <h3>Task : {task} </h3>
//             <h3>Done: </h3>
        
//         </div>
//     )
// }


export default function ToDo ({task, isDone, time}) {
    // use the Conditional Rendering on there 

    if(isDone) {
        return (
            <div className="student">
                <h3>Done: {task} | Needs : {time} minutes</h3>
            </div>
        )
    }
    
    // else{
    //     return (
    //         <div className="book">
    //             <h3>Pending: {task} </h3>
    //         </div>
    //     )
    // }

    // we are not using else on there , we are just using return after the if condition
    return <div className="book"><h3>Pending : {task} </h3></div>

}