
interface FollowCountI{
    follow:number
}
const FollowCount = (props:FollowCountI) => {
  return (
        <span 
        className="text-white btn btn-success col-2 fw-bolder disabled">
          {props.follow}
        </span>
  )
}

export default FollowCount