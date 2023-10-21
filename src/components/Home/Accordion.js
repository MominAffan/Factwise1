import React, { useState } from "react";
import { Link } from "react-router-dom";

function Accordion({ data }) {
  const [btnId, setBtnId] = useState("");
  const [jsondata, setJsonData] = useState(data);
  const deleteModal = (id) => {
    // console.log(id);
    setBtnId(id);
  };
  const handleDelete = (id) => {
    const updatedData = data.filter((item) => item.id !== id);
    setJsonData(updatedData);
  };
  console.log(jsondata)
  return (
    <>
      <div className="accordion" id="accordionPanelsStayOpenExample">
        {jsondata.map((item, i) => (
          <div
            className="accordion-item mt-3"
            style={{ borderTop: "1px solid #ddd" }}
            key={item.id}
          >
            <h2
              className="accordion-header"
              id={`panelsStayOpen-headingTwo${item.id}`}
            >
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#panelsStayOpen-collapseTwo${item.id}`}
                aria-expanded="false"
                aria-controls="panelsStayOpen-collapseTwo"
              >
                <span>
                  <img src={item.picture} alt="img" className="acc-img" />
                </span>
                <span className="mx-3">
                  {item.first}&nbsp; {item.last}
                </span>
              </button>
            </h2>
            <div
              id={`panelsStayOpen-collapseTwo${item.id}`}
              className="accordion-collapse collapse"
              aria-labelledby="panelsStayOpen-headingTwo"
            >
              <div className="accordion-body">
                <div className="d-flex justify-content-between">
                  <div style={{ display: "grid" }}>
                    <span className="text-muted" style={{ fontSize: "13px" }}>
                      Age
                    </span>
                    <span className="" style={{ fontWeight: "500" }}>
                      {item.dob}
                    </span>
                  </div>
                  <div style={{ display: "grid" }}>
                    <span className="text-muted" style={{ fontSize: "13px" }}>
                      Gender
                    </span>
                    <span className="" style={{ fontWeight: "500" }}>
                      {item.gender}
                    </span>
                  </div>
                  <div style={{ display: "grid" }}>
                    <span className="text-muted" style={{ fontSize: "13px" }}>
                      Country
                    </span>
                    <span className="" style={{ fontWeight: "500" }}>
                      {item.country}
                    </span>
                  </div>
                </div>
                <div>
                  <b>Description</b>
                </div>
                <div>{item.description}</div>
                <div style={{ float: "right" }} className="">
                  <i
                    class="fa-solid fa-trash mx-2"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    type="button"
                    onClick={(e) => deleteModal(item.id)}
                    style={{
                      fontSize: "18px",
                      color: "red",
                      cusrsor: "pointer",
                    }}
                  ></i>
                  <Link to={`/edit/${item.id}`}>
                    <i
                      class="fa-solid fa-edit"
                      style={{
                        fontSize: "18px",
                        color: "#94C6FF",
                        cusrsor: "pointer",
                      }}
                    ></i>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* DELETE MODAL */}
      <div
        class="modal fade "
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Are you sure you want to delete?
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>

            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
              <button
                type="button"
                class="btn btn-primary"
                id=""
                onClick={(e) => handleDelete(btnId)}
                data-bs-dismiss="modal"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Accordion;
