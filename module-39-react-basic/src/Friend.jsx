export default function Friend ({friend}) {

    // console.log(friend);
    const {name, username,  email, phone} = friend;

    return (
        <div className="Design">
            <h3>Name: {name} </h3>
            <h4>UserName: {username}</h4>
            <h5>Email: {email}</h5>
            <p>Phone Number: {phone}</p>

        </div>
    )
}