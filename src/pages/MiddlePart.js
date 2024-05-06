import React, { useEffect, useState } from "react";
import handwave from "../Images/handwave.png";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import Role from "./Helper/Role";
import Employee from "./Helper/Employee";
import TechStack from "./Helper/TechStack";
import MinBasePay from "./Helper/MinBasePay";
import Exp from "./Helper/Exp";
import Remote from "./Helper/Remote";
import { FaSquareCheck } from "react-icons/fa6";

const MiddlePart = () => {
  const [data, setData] = useState([]); 
  const [page, setPage] = useState(0); 

  // Effect hook to fetch data
  useEffect(() => {
    async function fetchData() {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");

      const body = JSON.stringify({
        limit: 10,
        offset: page,
      });

      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body,
      };

      const result = await fetch(
        "https://api.weekday.technology/adhoc/getSampleJdJSON",
        requestOptions
      );
      const res = await result.json();

      setData((data) => [...data, ...res.jdList]); // Set fetched data in state
    }

    fetchData(); // Call fetchData function
  }, [page]); // Empty array as dependency means effect runs only once on mount

  // Function for infinite Scroll
  const handleInfiniteScroll = () => {
    console.log(document.documentElement.scrollHeight);
    try {
      if (
        window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight
      ) {
        setPage((prev) => prev + 1);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect Hook for Infinite Scroll
  useEffect(() => {
    window.addEventListener("scroll", handleInfiniteScroll);
    return () => window.removeEventListener("scroll", handleInfiniteScroll)
  }, []);

  return (
    <div className="middlepart">
      <div className="header">
        <div className="header_child_1">
          <img className="handwave" src={handwave} alt="" />
          <h2>Kunal</h2>
        </div>
        <button className="btn">
          <div className="btncore"></div>
        </button>
      </div>
      <div className="mainbody">
        <p className="greet">
          We, at Weekday, are creating a go-to hub for uncovering the real
          issues candidates should be aware of before joining a company.{" "}
          <span
            style={{
              fontWeight: "bold",
              textDecoration: "underline",
              textDecorationColor: "skyblue",
            }}
          >
            {" "}
            Access 150+ company reviews here
          </span>
        </p>
        <div className="jobcategories">
          <p>Applied Jobs</p>
          <p className="searchjob">Search Jobs</p>
        </div>
        <div className="inputs">
          <Role />
          <Employee />
          <Exp />
          <Remote />
          <TechStack />
          <MinBasePay />
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "25ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-basic"
              label="Search Company"
              variant="outlined"
            />
          </Box>
        </div>
        <div className="joblist">
          {data.map((ele, ind) => {
            return (
              <div className="jobdesc" key={ind}>
                <div className="jobdeschead">
                  <img className="companylogo" src={ele.logoUrl} alt="" />
                  <div className="jobdetail">
                    <div className="companyName">{ele.companyName}</div>
                    <div className="jobRole">{ele.jobRole}</div>
                    <div className="location">
                      {" "}
                      {ele.location +
                        "  " +
                        "|" +
                        "  " +
                        "Exp:" +
                        " " +
                        ele.minExp +
                        " " +
                        "-" +
                        ele.maxExp +
                        " " +
                        "Years"}
                    </div>
                  </div>
                </div>
                <div className="salaryblock">
                  <span className="salary">
                    {"Estimated Salary:" +
                      "  " +
                      "$" +
                      ele.minJdSalary +
                      " " +
                      "-" +
                      " " +
                      "$" +
                      ele.maxJdSalary}
                  </span>
                  <span className="greenlogo">
                    <FaSquareCheck />
                  </span>
                </div>
                <div>
                  <p className="comapnyDetail">About Job :</p>
                  <p className="jobdetailbycompany">
                    {ele.jobDetailsFromCompany}
                  </p>
                </div>
                <button className="applybtn">Apply Now</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MiddlePart;
