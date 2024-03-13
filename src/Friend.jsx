export default function Friend({Friend}){
    console.log(Friend);
    const {name,email}=Friend
    return(
        <div className="Friends">
            <h3>Friend:{name}</h3>
            <p>Email{email}</p>
        </div>
    )
}