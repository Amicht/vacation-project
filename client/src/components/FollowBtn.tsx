
interface btnI{
    follow:number
};

const FollowBtn = (props:btnI) => {
    
  return (
    <div className="row">
        <span className="col"></span>
        <button style={{borderRadius:"50%",fontWeight:"bolder",borderColor:"black"}} className={props.follow?"btn btn-warning col-2": "btn btn-light col-2"}>f</button>
    </div>
  )
}

export default FollowBtn