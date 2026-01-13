import { use } from "react"
import Friend from "./Friend"

// here FriendsApi are Define as a Props/Perametter
export default function Friends ({FriendsApi}) {

    // here is the implementation of use that is use to Display the API Result 
    const friends = use(FriendsApi);
    // console.log(friends);
    return (
        <div className="Design">
            <h3>Friends Numbers : {friends.length} </h3>
            {
                friends.map(friend => <Friend friend = {friend}></Friend> )
            }
        </div>
    )
}