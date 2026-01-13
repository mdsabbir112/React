import { use } from "react"
// here fetchApi are Define as a Props/Perametter
export default function Api ({ fetchApi }) {

    const Users = use(fetchApi)
    // console.log(Users);

    return (
        <div className="Design">
            <h3>Length : {Users.length}  </h3>
        </div>
    )
}