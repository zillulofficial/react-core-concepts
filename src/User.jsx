export default function User({friend}){
    const {name , email, address}= friend
    return(
        <div className="box">
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Address: {address.street}</p>
        </div>
    )
}