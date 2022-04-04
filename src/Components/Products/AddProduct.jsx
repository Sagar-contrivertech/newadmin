import React, { useEffect, useState } from "react";
import Footer from "../Home/Footer";
import Nav from "../Home/Nav";
import Sidebar from "../Home/Sidebar";
import axios from "../Axios/axios";
import instance from "../Axios/axios";
import { useHistory } from "react-router-dom";

function AddProduct() {

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [images, setImages] = useState([]);
  const [ratings, setRatings] = useState(0);
  const [category, setCategory] = useState("");
  const [seller, setSeller] = useState("");
  const [stocks, setStocks] = useState(0);
  const [reviews, setReviews] = useState(0);
  const [subCategory, setSubCategory] = useState([])
  const [selectedSubCategory, setSelectedSubCategory] = useState('')
  // console.log('hehehehe',subCategory);
  const [categoryData, setCategoryData] = useState([]);
  const [IsFeature, setIsFeature] = useState(false)
  const user = JSON.parse(localStorage.getItem("token"));
  const username = user.data.user.name;

  const authHeader = () => {
    // return authorization header with basic auth credentials
    if (user && user.data.token) {
      return {
        Authorization: `${user.data.token}`,
        "Content-Type": "application/json",
      };
    } else {
      return {};
    }
  };

  const getCategory = async () => {
    const res = await instance.get("getcategory");
    // console.log('lelelelel',res);
    setCategoryData(res.data.categoryList);
  };

  // get SubCategory
  const getSubCategory = async () => {
    await instance.get('getSubcategory')
      .then((res) => {
        // console.log('lelelelel',res);
        setSubCategory(res.data.subCategoryList);
        //console.log('lelelelel', subCategory);
      })

    console.log(subCategory,'res')
  };

  const formSubmitHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.set("name", name);
    formData.set("price", price);
    formData.set("description", description);
    formData.set("ratings", parseInt(ratings));
    formData.set("category", category);
    formData.set("reviews", parseInt(reviews));
    formData.set('subCategory', selectedSubCategory)
    formData.set("stock", parseInt(stocks));
    formData.set("seller", username);
    formData.set("IsFeature", IsFeature);

    images.forEach(image => {
      formData.append('images', image)
    })

    console.log(images);

    let response = await instance
      .post("/product/new", formData, {
        headers: authHeader(),

      })
      .then((response) => {

        if (response.status == 200) {
          window.location.reload()
        }

        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    console.log(response);
  };

  const onChange = (e) => {
    const files = Array.from(e.target.files)

    setImages([]);

    files.forEach((file) => {
      const reader = new FileReader();

      reader.onload = () => {
        if (reader.readyState === 2) {
          setImages((oldArray) => [...oldArray, reader.result]);
        }
      };

      reader.readAsDataURL(file);
    });

  }

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
    getCategory();
    getSubCategory();
    // getProductList();
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
                          Add Product
                        </h5>
                      </div>
                      <div className="modal-body flex-grow-1">
                        <div className="mb-1">
                          <label
                            className="form-label"
                            htmlFor="basic-icon-default-fullname"
                          >
                            Product Name
                          </label>
                          <input
                            type="text"
                            className="form-control dt-full-name"
                            id="basic-icon-default-fullname"
                            placeholder="price name"
                            name="name"
                            value={name}
                            onChange={(e) => {
                              setName(e.target.value);
                            }}
                          />
                        </div>
                        <div className="mb-1">
                          <label
                            className="form-label"
                            htmlFor="basic-icon-default-uname"
                          >
                            Price
                          </label>
                          <input
                            type="text"
                            id="basic-icon-default-uname"
                            className="form-control dt-uname"
                            placeholder="ex : 2500"
                            name="price"
                            value={price}
                            onChange={(e) => {
                              setPrice(e.target.value);
                            }}
                          />
                        </div>
                        <div className="mb-1">
                          <label
                            className="form-label"
                            htmlFor="basic-icon-default-email"
                          >
                            Description
                          </label>
                          <input
                            type="text"
                            id="basic-icon-default-email"
                            className="form-control dt-email"
                            placeholder="john.doe@example.com"
                            name="description"
                            value={description}
                            onChange={(e) => {
                              setDescription(e.target.value);
                            }}
                          />
                        </div>
                        <div className="mb-1">
                          <label
                            className="form-label"
                            htmlFor="basic-icon-default-contact"
                          >
                            Stocks
                          </label>
                          <input
                            type="text"
                            id="basic-icon-default-contact"
                            className="form-control dt-contact"
                            placeholder="+1 (609) 933-44-22"
                            name="stock"
                            value={stocks}
                            onChange={(e) => {
                              setStocks(e.target.value);
                            }}
                          />
                        </div>
                        <div className="mb-1">
                          <label
                            className="form-label"
                            htmlFor="basic-icon-default-company"
                          >
                            Image
                          </label>
                          <br />
                          <input
                            // type="text"
                            type="file"
                            name="images"
                            multiple
                            onChange={onChange}
                          // value={images}

                          />
                        </div>
                        <div className="mb-1">
                          <label className="form-label" htmlFor="country">
                            Featured
                          </label>
                          <select id="country" className=" form-select"
                            value={IsFeature}
                            onChange={(e) => {
                              setIsFeature(e.target.value)
                            }}
                            label="Featured"
                            name="IsFeatured"
                          >
                            {/* <option value="">none</option> */}
                            <option value={true}>No</option>
                            <option value={false}>Yes</option>

                          </select>
                        </div>
                        <div className="mb-1">
                          <label className="form-label" >
                            Category
                          </label>
                          <select
                            id="Category"
                            className="form-select"
                            name="category"
                            value={category}
                            onChange={(e) => {
                              setCategory(e.target.value);
                            }}
                          >
                            <option hidden>Select</option>
                            {categoryData &&
                              categoryData.map((c) =>
                              (
                                <>
                                  <option value={c._id}>{c.name}</option>
                                </>
                              )
                              )}

                          </select>
                        </div>
                        {/*  */}

                        {/*  */}
                        <div className="mb-1">
                          <label className="form-label">
                            Sub Category
                          </label>
                          <select
                            id="Category"
                            className="form-select"
                            name="selectedSubCategory"
                            value={selectedSubCategory}
                            onChange={(e) => {
                              setSelectedSubCategory(e.target.value);
                              console.log('yooo', selectedSubCategory)
                            }}
                          >
                            <option hidden>Select</option>
                            {subCategory &&
                              subCategory.map((c) => {
                                // console.log(c,'s')
                                return (
                                  <>
                                    <option value={c._id}>{c.name}</option>
                                  </>
                                )
                              }
                              )}

                          </select>
                        </div>
                        {/*  */}
                       
                        <button
                          type="submit"
                          className="btn btn-primary me-1 data-submit"
                          onClick={formSubmitHandler}
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
