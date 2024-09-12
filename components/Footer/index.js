import React from "react";
import Socials from "../Socials";
import Link from "next/link";
import Button from "../Button";

const Footer = ({}) => {
  return (
    <>
      <div className="mt-5 laptop:mt-40 p-2 laptop:p-0">
        <div>
          <h1 style={{fontSize:"40px", fontWeight:"bold", marginTop:"100px"}} className="text-2xl text-bold">연락처.</h1>
          <div className="mt-10">
            {/* <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
              LET&apos;S WORK
            </h1>
            <h1 className="text-3xl tablet:text-6xl laptop:text-6xl laptopl:text-8xl text-bold">
              TOGETHER
            </h1> */}
            <a href="sms:+821020415761">
              <div
                style={{
                  backgroundColor: "#E0E0E0",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "black",
                  width: "320px",
                  height: "80px",
                  fontSize: "40px",
                  fontWeight: "bold",
                  borderRadius: "15px",
                }}
              >
                010-2041-5761
              </div>
            </a>
            <div className="mt-10">
              <Socials />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
