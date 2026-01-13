import { use } from "react"
import Photo from './Photo'

export default function Photos ({FetchUser}) {

    const Photos = use(FetchUser);
    // console.log(Photos);

    return(
        <div className="Design">
            <h3>Total Length of Photos : {Photos.length} </h3>
            {
                Photos.map(photo => <Photo photo = {photo}></Photo>)
            }
        </div>
    )
}