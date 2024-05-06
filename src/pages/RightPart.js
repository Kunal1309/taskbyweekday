import React from 'react';
import myimg from "../Images/myimg.png";
import { FaPencilAlt } from "react-icons/fa";

const RightPart = () => {
  return (
    <div className='rightpart'>
      <div className="rightpart_top_child">
        <img className="profileImg" src={myimg}/>
      </div>
      <FaPencilAlt />
      <p>Edit Profile</p>
    </div>
  )
}

export default RightPart