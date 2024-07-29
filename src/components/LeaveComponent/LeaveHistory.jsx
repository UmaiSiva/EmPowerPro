import React from "react";
import Header from "../layout/Header";
import "./LeaveHistory.css";
import { FaArrowLeft } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

function LeaveRequestForm() {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/Beneficiary");
  };

  return (
    <div className="leave-request-form-container">
      <Header />
      <hr />

      <div className="leave-tabs">
        <button className="tab my-leaves">My Leaves</button>
        <button className="tab others-leaves active">Others's Leaves</button>
      </div>
      <div className="back-arrow">
        <FaArrowLeft className="back-icon" onClick={handleBackClick} />
      </div>
      <div className="leave-request-card">
        <div className="approved-button">Approved</div>
        <br />

        {/* <div className="status-badge approved">Approved</div> */}
        <div className="profile-pic">
          <img
            src="https://randomuser.me/api/portraits/men/3.jpg"
            className="profile-pic"
          />{" "}
        </div>
        <div className="employee-details">
          <h5>Anne Wotson ( Software Engineer )</h5>
          <br />
          <div className="others-leave-type">Medical Leave</div>
        </div>

        <div className="leave-details">
          <div className="date-detail-row">
            <div>
              <div style={{ width: "12.5%" }}>
                <span className="detail-label">From:</span>
              </div>
              <span className="detail-value">30 / 05 / 2024</span>
            </div>
            <div>
              <div style={{ width: "12.5%" }}>
                <span className="detail-label">To:</span>
              </div>
              <span className="detail-value">02 / 06 / 2024</span>
            </div>
          </div>
          <br />
          <div className="detail-row">
            <div style={{ width: "12.5%" }}>
              <span className="detail-label">Total duration:</span>
            </div>
            <span className="detail-value">4 days</span>
          </div>
          <br />

          <div className="detail-row">
            <div style={{ width: "12.5%" }}>
              {" "}
              <span className="detail-label">Reason</span>
            </div>

            <div className="detail-value" style={{ width: "87.5%" }}>
              I have been experiencing fever which has significantly affected my
              ability to work. After a thorough examination, my doctor has
              recommended that I take time off to undergo treatment and
              recuperation.
            </div>
          </div>
          <br />

          <div className="detail-row">
            <div style={{ width: "12.5%" }}>
              <span className="detail-label">Files:</span>
            </div>
            <span className="detail-value">medicalReport.pdf</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeaveRequestForm;
