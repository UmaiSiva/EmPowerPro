import React, { useState } from "react";
import "./newvacancy.css";
import { IoMdArrowRoundBack } from "react-icons/io";
import { FaPlusCircle } from "react-icons/fa";
import { createVacancy } from "../../service/ApplyJobService";

function NewVacancy({ setActiveComponent }) {
  const [jobTitle, setJobTitle] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [responsibilities, setResponsibilities] = useState("");
  const [requirements, setRequirements] = useState("");
  const [applicationDeadline, setApplicationDeadline] = useState("");
  const [contactEmail, setContactEmail] = useState("");
  const [employmentType, setEmploymentType] = useState("");
  const [errors, setErrors] = useState({});

  function validateForm() {
    let formValid = true;
    const errorsCopy = {};
    if (!jobTitle.trim()) {
      errorsCopy.jobTitle = "Job Title is required";
      formValid = false;
    }

    if (!jobDescription.trim()) {
      errorsCopy.jobDescription = "Job Description is required";
      formValid = false;
    }
    if (!requirements.trim()) {
      errorsCopy.requirements = "Requirements are required";
      formValid = false;
    }
    if (!employmentType.trim()) {
      errorsCopy.employmentType = "Employment Type is required";
      formValid = false;
    }
    if (!applicationDeadline.trim()) {
      errorsCopy.applicationDeadline = "Application Deadline is required";
      formValid = false;
    }

    if (!responsibilities.trim()) {
      errorsCopy.responsibilities = "Responsibilities are required";
      formValid = false;
    }

    if (!contactEmail.trim()) {
      errorsCopy.contactEmail = "Contact Email is required";
      formValid = false;
    }

    setErrors(errorsCopy);
    return formValid;
  }

  const handleBackArrow = () => {
    setActiveComponent("Job");
  };

  const handleRadioChange = (event) => {
    setEmploymentType(event.target.value);
  };

  function updateOrSaveEmployee(e) {
    e.preventDefault();

    if (validateForm()) {
      const jobVacancy = {
        jobTitle,
        employmentType,
        jobDescription,
        requirements,
        responsibilities,
        applicationDeadline,
        contactEmail,
      };
      console.log(jobVacancy);
      createVacancy(jobVacancy)
        .then((response) => {
          console.log(response.data);
          setActiveComponent("Job");
        
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }

  return (
    <div className="contentbodyall1">
      <IoMdArrowRoundBack
        onClick={handleBackArrow}
        className="backarrow"
        style={{ marginLeft: "-0.8rem" }}
      />{" "}
      <br />
      <div className="newvacancy-additional-rectangle-1">
        <form style={{ width: "100%" }}>
          <label htmlFor="">Job Title:</label>
          <br />
          <input
            type="text"
            // className="inputnewvacancy"
            className={`inputnewvacancy ${errors.jobTitle ? "is-invalid" : ""}`}
            name="jobTitle"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
          />
          {errors.jobTitle && (
            <div className="invalid-feedback">{errors.jobTitle}</div>
          )}
          <br />
          <br />
          <label htmlFor="">Employeement Type:</label>
          <br />
          <div style={{ display: "flex", flexDirection: "row", gap: "1rem" }}>
            <div className="newvacancy-additional-rectangle-3">
              <div className="newvacancy-additional-rectangle-2">
                <input
                  className={`${errors.employmentType ? "is-invalid" : ""}`}
                  type="radio"
                  name="employmentType"
                  id=""
                  value="fullTime"
                  onChange={handleRadioChange}
                />{" "}
                Full Time
              </div>
              <div className="newvacancy-additional-rectangle-2">
                <input
                  className={`${errors.employmentType ? "is-invalid" : ""}`}
                  type="radio"
                  name="employmentType"
                  id=""
                  value="partTime"
                  onChange={handleRadioChange}
                />{" "}
                Part Time
              </div>
            </div>
            <div className="newvacancy-additional-rectangle-3">
              <div className="newvacancy-additional-rectangle-2">
                <input
                  className={`${errors.employmentType ? "is-invalid" : ""}`}
                  type="radio"
                  name="employmentType"
                  id=""
                  value="internship"
                  onChange={handleRadioChange}
                />{" "}
                Internship
              </div>
              <div className="newvacancy-additional-rectangle-2">
                <input
                  className={`${errors.employmentType ? "is-invalid" : ""}`}
                  type="radio"
                  name="employmentType"
                  id=""
                  value="onDemand"
                  onChange={handleRadioChange}
                />{" "}
                On Demand
              </div>
            </div>
          </div>
          {errors.employmentType && (
                <div className="invalid-feedback">{errors.employmentType}</div>
              )}
          <br />
          <label htmlFor="">Job Description</label>
          <br />
          <textarea
            id=""
            className={`inputtext ${errors.jobDescription ? "is-invalid" : ""}`}
            style={{ height: "5rem", width: "50%" }}
            name="jobTitle"
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
          ></textarea>
          {errors.jobDescription && (
            <div className="invalid-feedback">{errors.jobDescription}</div>
          )}
          <br />

          <label htmlFor="">Requirments</label>
          <br />
          <textarea
            id=""
            className={`inputtext ${errors.requirements ? "is-invalid" : ""}`}
            style={{ height: "5rem", width: "50%" }}
            name="requirments"
            value={requirements}
            onChange={(e) => setRequirements(e.target.value)}
          ></textarea>  

          {errors.requirements && (
            <div className="invalid-feedback">{errors.requirements}</div>
          )}

          {/* <div
            style={{ alignItems: "center", display: "flex", cursor: "pointer" }}
            onClick={handleAddRequirement}
          >
            <FaPlusCircle className="me-2" /> Add another
          </div> */}
          <br />

          <label htmlFor="">Responsibilities</label>
          <br />
          <textarea
            id=""
            className={`inputtext ${errors.responsibilities ? "is-invalid" : ""}`}
            style={{ height: "5rem", width: "50%" }}
            name="responsibilities"
            value={responsibilities}
            onChange={(e) => setResponsibilities(e.target.value)}
          ></textarea>
           {errors.responsibilities && (
            <div className="invalid-feedback">{errors.responsibilities}</div>
          )}

          {/* <div
            style={{ alignItems: "center", display: "flex", cursor: "pointer" }}
            onClick={handleAddResponsibility}
          >
            <FaPlusCircle className="me-2" /> Add another
          </div> */}
          <br />
          <label htmlFor="">Application Deadline:</label>
          <br />
          <input
            type="date"
            className={`inputnewvacancy ${errors.applicationDeadline ? "is-invalid" : ""}`}
            name="applicationDeadline"
            value={applicationDeadline}
            onChange={(e) => setApplicationDeadline(e.target.value)}
          />
           {errors.applicationDeadline && (
            <div className="invalid-feedback">{errors.applicationDeadline}</div>
          )}

          <br />
          <br />
          <label htmlFor="">Contact Email:</label>
          <br />
          <input
            type="text"
            className={`inputnewvacancy ${errors.contactEmail ? "is-invalid" : ""}`}
            name="contactEmail"
            value={contactEmail}
            onChange={(e) => setContactEmail(e.target.value)}
          />
          {errors.contactEmail && (
            <div className="invalid-feedback">{errors.contactEmail}</div>
          )}
          <br />
          <br />
          <div
            className="contactus-form-button"
            style={{
              width: "33%",
              marginTop: "0%",
              marginBottom: "1rem",
              marginLeft: "34rem",
              marginRight: "0rem",
            }}
          >
            <button
              className="gradient-blue-btn"
              style={{ color: "white" }}
              onClick={updateOrSaveEmployee}
            >
              <FaPlusCircle className="me-2" />
              Publish
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default NewVacancy;
