import React from "react";
import { useAuth } from "../auth/Auth";
import UploadData from "./admin/UploadData";

export const FirstCard = () => {
  const heading = "Player Stats";
  const body =
    "Check individual player stats such as attacking, defending metrics etc....";
  const btntext = "Check";
  const href = "/playerstats";
  return (
    <>
      <div className="card components" style={{ width: "18rem" }}>
        <img
          src="https://drive.google.com/uc?id=1LqQ0WaxM1n9hRJLVnNbqKHt1ymbbjq3e"
          className="card-img-top"
        />
        <div className="card-body">
          <h5 className="card-title component-name">{heading}</h5>
          <p className="card-text">{body}</p>
          <a href={href} className="btn chk-btn">
            {btntext}
          </a>
        </div>
      </div>
    </>
  );
};

export const SecondCard = () => {
  const heading = "Team Report";
  const body =
    "Check overall team stats such as xG (expected goals), avg.possession, etc.....";
  const btntext = "Check";
  const href = "/teamstats";
  return (
    <>
      <div className="card components" style={{ width: "18rem" }}>
        <img
          src="https://drive.google.com/uc?id=1L2NoH8BpHtEmiG0mncKxDREBxAHZUxbP"
          className="card-img-top"
        />
        <div className="card-body">
          <h5 className="card-title component-name">{heading}</h5>
          <p className="card-text">{body}</p>
          <a href={href} className="btn chk-btn">
            {btntext}
          </a>
        </div>
      </div>
    </>
  );
};

export const ThirdCard = () => {
  const heading = "Match Report";
  const body =
    "Check post match reports pertaining to the lastest completed fixtures in La Liga, UCL and more...";
  const btntext = "Check";
  const href = "/matchreport";
  return (
    <>
      <div className="card components" style={{ width: "18rem" }}>
        <img
          src="https://drive.google.com/uc?id=10H20Zrtm1Csiyo2-dRuJFRi9qqyfJCG0"
          className="card-img-top"
        />
        <div className="card-body">
          <h5 className="card-title component-name">{heading}</h5>
          <p className="card-text">{body}</p>
          <a href={href} className="btn chk-btn">
            {btntext}
          </a>
        </div>
      </div>
    </>
  );
};
