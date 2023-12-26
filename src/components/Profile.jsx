const Profile = ({firstName,lastName,age,url})=>{
   
    return <div>
        <img src={url} />
        <h1>{firstName}</h1>
        <h2>{lastName}</h2>
        <div>{age}</div>
        </div>
}

export default Profile;

