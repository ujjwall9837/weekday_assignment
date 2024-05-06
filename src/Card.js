import React from "react";
import "./Card.css";
import AvatarIcon from "./avatar.svg";
export default function Card({ jd }) {
  const {
    jdLink,
    logoUrl,
    companyName,
    jobDetailsFromCompany,
    jobRole,
    location,
    maxExp,
    maxJdSalary,
    minExp,
    minJdSalary,
    salaryCurrencyCode,
  } = jd;
  return (
    <div style={{ padding: "2rem" }}>
      <div className="card-body">
        <div className="card-body1">
          <div className="posted-header-container">
            <div className="posted-header">
              <p>⏳ Posted a day ago</p>
            </div>
          </div>
        </div>
        <div className="card-body2">
          <div className="company">
            <img src={logoUrl} />
            <div>
              <div className="info-container">
                <h3>{companyName}</h3>
                <h2>{jobRole}</h2>
              </div>
              <p className="cards-sub-text">{location}</p>
            </div>
            <p>
              Estimated Salary: {salaryCurrencyCode}{" "}
              {minJdSalary && maxJdSalary ? `${minJdSalary}-` : minJdSalary}
              {maxJdSalary}
              <span
                aria-label="Estimated by Weekday. Not provided by employer"
                class=""
              >
                {" "}
                ⚠️
              </span>
            </p>
          </div>
          <div className="job-description">
            <div>
              <p>About Company</p>
              <div className="desc">{jobDetailsFromCompany}</div>
              <p></p>
              <div className="desc">description2</div>
            </div>
          </div>
          <div className="show-more-container">
            <h3>Minimum Experience</h3>
            <h2>{minExp}</h2>
          </div>
        </div>
        <div className="status-container">
          <div className="easy-apply-container">
            <button
              id="custom-btn"
              style={{
                width: "100%",
                backgroundColor: "#55EFC4",
                color: "#fff",
                fontWeight: 500,
                padding: "8px 18px",
              }}
            >
              ⚡ Easy Apply
            </button>
          </div>
          <button
            id="custom-btn"
            style={{
              backgroundColor: "#4943DA",
              width: "100%",
              fontWeight: 500,
            }}
          >
            <div className="referral-btn">
              <div className="avatar-container">
                <img src={AvatarIcon} />
              </div>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
