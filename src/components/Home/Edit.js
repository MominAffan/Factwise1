import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { data } from "../data/celebrities";
import Accordion from "./Accordion";

function Edit() {
  const [editData, setEditData] = useState("");
  const [allData, setAllData] = useState(data);
  const [DOB, setDOB] = useState("");
  const params = useParams();
  useEffect(() => {
    if (params.id) {
      setEditData(data.find((list) => list.id == params.id));
    }
  }, []);
  // console.log(editData)
  // For Updat DAtA
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditData({
      ...editData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const index = data.findIndex(v=>v.id == params.id);
    const newData = [...data];
    newData.splice(index,index,editData);
    // Here, you can update the user data, e.g., send it to an API or store it in state.
    console.log("Updated user data:", newData);
  };
  return (
    <div>
      <div className="container mt-5">
        <div class="accordion" id="accordionExample">
          <div className="accordion-editData mt-3" key={editData.id}>
            <h2
              className="accordion-header"
              id={`panelsStayOpen-headingTwo${editData.id}`}
            >
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#panelsStayOpen-collapseTwo${editData.id}`}
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseTwo"
              >
                <span>
                  <img src={editData.picture} alt="img" className="acc-img" />
                </span>
                <span className="mx-3">
                  {editData.first}&nbsp; {editData.last}
                </span>
              </button>
            </h2>
            <div
              id={`panelsStayOpen-collapseTwo${editData.id}`}
              className="accordion-collapse collapse show"
              aria-labelledby="panelsStayOpen-headingTwo"
            >
              <div className="accordion-body">
                <div className="d-flex justify-content-between">
                  <div style={{ display: "grid" }}>
                    <span className="text-muted" style={{ fontSize: "13px" }}>
                      Age
                    </span>
                    <span className="" style={{ fontWeight: "500" }}>
                      <input
                        type="text"
                        id="dob"
                        name="dob"
                        value={editData.dob}
                        className="form-control"
                        onChange={handleInputChange}
                      />
                    </span>
                  </div>
                  <div style={{ display: "grid" }}>
                    <span className="text-muted" style={{ fontSize: "13px" }}>
                      Gender
                    </span>
                    <span className="" style={{ fontWeight: "500" }}>
                      <input
                        type="text"
                        className="form-control"
                        id="gender"
                        name="gender"
                        value={editData.gender}
                        onChange={handleInputChange}
                      />
                    </span>
                  </div>
                  <div style={{ display: "grid" }}>
                    <span className="text-muted" style={{ fontSize: "13px" }}>
                      Country
                    </span>
                    <span className="" style={{ fontWeight: "500" }}>
                      <input
                     type="text"
                     className="form-control"
                     id="country"
                     name="country"
                     value={editData.country}
                     onChange={handleInputChange}
                      />
                    </span>
                  </div>
                </div>
                <div>
                  <b>Description</b>
                </div>
                <div>
                  <textarea
                       type="text"
                       className="form-control"
                       id="description"
                       name="description"
                       value={editData.description}
                       onChange={handleInputChange}
                  />
                </div>
                <div style={{ float: "right" }} className="">
                  <Link to="/">
                    <i
                      class="fa-solid fa-xmark mx-2"
                      style={{
                        fontSize: "18px",
                        color: "red",
                        cusrsor: "pointer",
                      }}
                    ></i>
                  </Link>
                  <i
                  type="button"
                  onClick={handleSubmit}
                    class="fa-solid fa-check"
                    style={{
                      fontSize: "18px",
                      color: "#75C84F",
                      cusrsor: "pointer",
                    }}
                  ></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    
    </div>
  );
}

export default Edit;
