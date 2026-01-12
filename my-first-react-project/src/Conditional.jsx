// here we know about the Different Conditional Rendering in REact Components 


export default function Conditional ({task , isDone , time}) {
    // using Ternery Operator For Conditional Rendering 
    // Condition ? true : false

    // Conditional Task : 1 (Basic Ternary Operator)
//    return (
//      isDone ? <h3 className="player">Done: {task} | Needs : {time} minutes</h3> :
//     <h3 className="student">Pending: {task}</h3>
//    )


// Conditional Task : 2 (Using &&  , for Select just ones, which is True  )

    // return (
    //     isDone && <h3 className="student">Done: {task} | Time : {time}</h3>
    // )


    // Conditional Task : 3 (Using ||  , for Select just ones which is False )

    //    return (
    //          isDone || <h3 className="player"> Pending : {task} | Time : {time}</h3>
    //    )


    // Conditional Task : 4 (using Variable and use the return keyword just one time over if else condition)
    let itemSets ;

    if(isDone) {
        itemSets = <h3 className="player"> Done: {task} | Time : {time}</h3>
    }
    else {
        itemSets= <h3 className="student"> Pending : {task} | Time : {time}</h3>
    }

    // here the Return statement are using just one time , by using the Variable 
    return itemSets ;
}