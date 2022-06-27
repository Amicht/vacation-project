import { useContext, useState } from "react"
import { useSelector } from "react-redux";
import { SocketCtxt } from "../App"
import UserI from "../interface/UserI";

interface btnI{
    follow:number,
    vacId: number
};

const FollowBtn = (props:btnI) => {
  const user:UserI = useSelector((state:any) => state.user.value);
  const [followBtn, setFollowBtn] = useState(props.follow === 0? false: true)
  const mySocket = useContext(SocketCtxt);

  const onFollowClick = ()=> {    
    if(followBtn){
      setFollowBtn(!followBtn);
      mySocket.unfollow(user, props.vacId);
    }
    else{
      setFollowBtn(!followBtn);
      mySocket.follow(user, props.vacId);
    }
  }
    
  return (
    <div className="row">
        <span className="col"></span>
        <button style={{borderRadius:"50%",fontWeight:"bolder",borderColor:"black"}} 
        className={followBtn?"btn btn-warning col-2": "btn btn-light col-2"}
        onClick={onFollowClick}>f</button>
    </div>
  )
}

export default FollowBtn