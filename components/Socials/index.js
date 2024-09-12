import React from "react";
import Button from "../Button";

import yourData from "../../data/portfolio.json";

const Socials = ({ className }) => {
  const imgSrcs = ["/images/깃허브.svg", "/images/블로그.svg", "/images/이메일.svg"];
  return (
    <div className={`${className} flex flex-wrap mob:flex-nowrap link`}>
      {yourData.socials.map((social, index) => (
        <Button key={index} onClick={() => window.open(social.link)}>
          <img style={{ marginRight: "8px" }} src={imgSrcs[index]} />
          <div style={{ fontSize: "20px", fontWeight: "bold" }}>{social.title}</div>
        </Button>
      ))}
    </div>
  );
};

export default Socials;
