import { useContext } from "react"
import { SocketCtxt, UserCtxt } from "../App"

interface btnI{
    follow:number,
    vacId: number
};


const FollowBtn = (props:btnI) => {
  const {user} = useContext(UserCtxt);
  const mySocket = useContext(SocketCtxt);

  const onFollowClick = ()=> {
    if(props.follow){
      mySocket.unfollow(user, props.vacId);
    }
    else{
      mySocket.follow(user, props.vacId);
    }
  }
    
  return (
    <div className="row">
        <span className="col"></span>
        <button style={{borderRadius:"50%",fontWeight:"bolder",borderColor:"black"}} 
        className={props.follow?"btn btn-warning col-2": "btn btn-light col-2"}
        onClick={onFollowClick}>f</button>
    </div>
  )
}

export default FollowBtn