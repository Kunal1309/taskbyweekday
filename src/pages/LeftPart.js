import React from "react";
import { CiUser } from "react-icons/ci";
import { IoSearchSharp } from "react-icons/io5";
import { FaIndianRupeeSign, FaThumbsUp } from "react-icons/fa6";
import { HiOutlineUserAdd } from "react-icons/hi";
import { GoChecklist } from "react-icons/go";
import { FaShareAlt } from "react-icons/fa";
import myimg from "../Images/myimg.png";

const LeftPart = () => {
  return (
    <div className="leftpart">
      {/* WeekDay logo Design */}
      <div className="leftpart_child_1">
        <h2>W</h2>
        <div className="colorSpot"></div>
      </div>


      <div className="leftpart_child_2">
        <p className="getjob">GET JOBS</p>
        <div>
          <CiUser className="icon" />
        </div>
        <div>
          <IoSearchSharp className="icon" />
        </div>
        <div>
          <FaIndianRupeeSign className="icon" />
        </div>
        <div>
          <HiOutlineUserAdd className="icon" />
        </div>
      </div>


      <div className="leftpart_child_3">
        <p className="getjob">REFER</p>
        <div>
          <FaThumbsUp className="icon" />
        </div>
        <div>
          <GoChecklist className="icon" />
        </div>
        <div>
          <FaShareAlt className="icon" />
        </div>
      </div>

      {/* My profile Image */}
      <div className="leftpart_bottom_child">
        <img className="profileImg" src={myimg} />
      </div>
    </div>
  );
};

export default LeftPart;
