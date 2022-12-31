
function UserData(props) {
  return (
    <div className="form-container data">

      <ol>

        {props.users.map((item)=>{

          return(
          <li key={item.id}>
            <p>{item.name}</p>
            <p>{item.email}</p>
          </li>

          )
        })}
      </ol>
    </div>
  );
}
export default UserData;
