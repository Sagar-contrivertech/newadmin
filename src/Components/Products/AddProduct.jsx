import React, { useEffect, useState } from "react";
import Footer from "../Home/Footer";
import Nav from "../Home/Nav";
import Sidebar from "../Home/Sidebar";
import axios from "../Axios/axios";

function AddProduct() {
  const [getProduct, setGetProduct] = useState();
  const authHeader = () => {
    // return authorization header with basic auth credentials
    const user = JSON.parse(localStorage.getItem("token"));

    if (user && user.data.token) {
      return { Authorization: `${user.data.token}` };
    } else {
      return {};
    }
  };
  const brandURL = "/products";

  const getProductList = async () => {
    await axios
      .get(brandURL, { headers: authHeader() })
      .then((response) => {
        console.log(response);
        setGetProduct(response.data.products);
        console.log(getProduct)
      })
      .catch((error) => {
        console.log(error);
        // set some error message
      });
  };

  const effect = () => {
    const script = document.createElement("script");

    script.src = "./app-assets/js/scripts/pages/app-user-list.min.js";
    script.async = true;
    console.log("workinng");
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  };
  useEffect(() => {
    effect();
    getProductList();
  }, []);
  return (
    <>
      <Nav />
      <Sidebar />
      <div className="app-content content ">
        <div className="content-overlay" />
        <div className="header-navbar-shadow" />
        <div className="content-wrapper container-xxl p-0">
          <div className="content-header row"></div>
          <div className="content-body">
            {/* users list start */}
            <section className="app-user-list">
              <div className="row">
                <div className="col-lg-3 col-sm-6">
                  <div className="card">
                    <div className="card-body d-flex align-items-center justify-content-between">
                      <div>
                        <h3 className="fw-bolder mb-75">21,459</h3>
                        <span>Total Users</span>
                      </div>
                      <div className="avatar bg-light-primary p-50">
                        <span className="avatar-content">
                          <i data-feather="user" className="font-medium-4" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="card">
                    <div className="card-body d-flex align-items-center justify-content-between">
                      <div>
                        <h3 className="fw-bolder mb-75">4,567</h3>
                        <span>Paid Users</span>
                      </div>
                      <div className="avatar bg-light-danger p-50">
                        <span className="avatar-content">
                          <i
                            data-feather="user-plus"
                            className="font-medium-4"
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="card">
                    <div className="card-body d-flex align-items-center justify-content-between">
                      <div>
                        <h3 className="fw-bolder mb-75">19,860</h3>
                        <span>Active Users</span>
                      </div>
                      <div className="avatar bg-light-success p-50">
                        <span className="avatar-content">
                          <i
                            data-feather="user-check"
                            className="font-medium-4"
                          />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-sm-6">
                  <div className="card">
                    <div className="card-body d-flex align-items-center justify-content-between">
                      <div>
                        <h3 className="fw-bolder mb-75">237</h3>
                        <span>Pending Users</span>
                      </div>
                      <div className="avatar bg-light-warning p-50">
                        <span className="avatar-content">
                          <i data-feather="user-x" className="font-medium-4" />
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* list and filter start */}
              <div className="card">
                <div className="card-body border-bottom">
                  <h4 className="card-title">Search &amp; Filter</h4>
                  <div className="row">
                    <div className="col-md-4 user_role" />
                    <div className="col-md-4 user_plan" />
                    <div className="col-md-4 user_status" />
                  </div>
                </div>
                <div className="card-datatable table-responsive pt-0">
                  <table className="user-list-table table">
                    <thead className="table-light">
                      <tr>
                        <th />
                        <th>Name</th>
                        <th>Role</th>
                        <th>Plan</th>
                        <th>Billing</th>
                        <th>Status</th>
                        <th>Actions</th>
                      </tr>
                    </thead>
                  </table>
                </div>
                {/* Modal to add new user starts*/}
                <div
                  className="modal modal-slide-in new-user-modal fade"
                  id="modals-slide-in"
                >
                  <div className="modal-dialog">
                    <form className="add-new-user modal-content pt-0">
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      >
                        ×
                      </button>
                      <div className="modal-header mb-1">
                        <h5 className="modal-title" id="exampleModalLabel">
                          Add User
                        </h5>
                      </div>
                      <div className="modal-body flex-grow-1">
                        <div className="mb-1">
                          <label
                            className="form-label"
                            htmlFor="basic-icon-default-fullname"
                          >
                            Full Name
                          </label>
                          <input
                            type="text"
                            className="form-control dt-full-name"
                            id="basic-icon-default-fullname"
                            placeholder="John Doe"
                            name="user-fullname"
                          />
                        </div>
                        <div className="mb-1">
                          <label
                            className="form-label"
                            htmlFor="basic-icon-default-uname"
                          >
                            Username
                          </label>
                          <input
                            type="text"
                            id="basic-icon-default-uname"
                            className="form-control dt-uname"
                            placeholder="Web Developer"
                            name="user-name"
                          />
                        </div>
                        <div className="mb-1">
                          <label
                            className="form-label"
                            htmlFor="basic-icon-default-email"
                          >
                            Email
                          </label>
                          <input
                            type="text"
                            id="basic-icon-default-email"
                            className="form-control dt-email"
                            placeholder="john.doe@example.com"
                            name="user-email"
                          />
                        </div>
                        <div className="mb-1">
                          <label
                            className="form-label"
                            htmlFor="basic-icon-default-contact"
                          >
                            Contact
                          </label>
                          <input
                            type="text"
                            id="basic-icon-default-contact"
                            className="form-control dt-contact"
                            placeholder="+1 (609) 933-44-22"
                            name="user-contact"
                          />
                        </div>
                        <div className="mb-1">
                          <label
                            className="form-label"
                            htmlFor="basic-icon-default-company"
                          >
                            Company
                          </label>
                          <input
                            type="text"
                            id="basic-icon-default-company"
                            className="form-control dt-contact"
                            placeholder="PIXINVENT"
                            name="user-company"
                          />
                        </div>
                        <div className="mb-1">
                          <label className="form-label" htmlFor="country">
                            Country
                          </label>
                          <select id="country" className="select2 form-select">
                            <option value="Australia">USA</option>
                            <option value="Bangladesh">Bangladesh</option>
                            <option value="Belarus">Belarus</option>
                            <option value="Brazil">Brazil</option>
                            <option value="Canada">Canada</option>
                            <option value="China">China</option>
                            <option value="France">France</option>
                            <option value="Germany">Germany</option>
                            <option value="India">India</option>
                            <option value="Indonesia">Indonesia</option>
                            <option value="Israel">Israel</option>
                            <option value="Italy">Italy</option>
                            <option value="Japan">Japan</option>
                            <option value="Korea">Korea, Republic of</option>
                            <option value="Mexico">Mexico</option>
                            <option value="Philippines">Philippines</option>
                            <option value="Russia">Russian Federation</option>
                            <option value="South Africa">South Africa</option>
                            <option value="Thailand">Thailand</option>
                            <option value="Turkey">Turkey</option>
                            <option value="Ukraine">Ukraine</option>
                            <option value="United Arab Emirates">
                              United Arab Emirates
                            </option>
                            <option value="United Kingdom">
                              United Kingdom
                            </option>
                            <option value="United States">United States</option>
                          </select>
                        </div>
                        <div className="mb-1">
                          <label className="form-label" htmlFor="user-role">
                            User Role
                          </label>
                          <select
                            id="user-role"
                            className="select2 form-select"
                          >
                            <option value="subscriber">Subscriber</option>
                            <option value="editor">Editor</option>
                            <option value="maintainer">Maintainer</option>
                            <option value="author">Author</option>
                            <option value="admin">Admin</option>
                          </select>
                        </div>
                        <div className="mb-2">
                          <label className="form-label" htmlFor="user-plan">
                            Select Plan
                          </label>
                          <select
                            id="user-plan"
                            className="select2 form-select"
                          >
                            <option value="basic">Basic</option>
                            <option value="enterprise">Enterprise</option>
                            <option value="company">Company</option>
                            <option value="team">Team</option>
                          </select>
                        </div>
                        <button
                          type="submit"
                          className="btn btn-primary me-1 data-submit"
                        >
                          Submit
                        </button>
                        <button
                          type="reset"
                          className="btn btn-outline-secondary"
                          data-bs-dismiss="modal"
                        >
                          Cancel
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                {/* Modal to add new user Ends*/}
              </div>
              {/* list and filter end */}
            </section>
            {/* users list ends */}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AddProduct;
