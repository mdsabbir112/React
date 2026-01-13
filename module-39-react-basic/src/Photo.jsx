export default function Photo ({ photo }) {

    console.log(photo);
    const {title, body} = photo;

    return (
        <div className="Design">
            <h3>Title : {title} </h3>
            <p>Body : {body}</p>
        </div>
    )
}