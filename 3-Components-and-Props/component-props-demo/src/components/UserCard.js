function UserCard({name , email , role}){
    return(
        <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
            <h3>{name}</h3>
            <p>Email: {email}</p>
            <p>Role: {role}</p>
        </div>
    );
}

export default UserCard;