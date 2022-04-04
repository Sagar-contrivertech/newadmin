import React, { useEffect } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {

  const reload = () => {
    window.location.reload()
  }

  useEffect(() => {
    // reload()
  }, [reload])

  return (
    <>
      {/* BEGIN: Main Menu*/}
      <div
        className="main-menu menu-fixed menu-light menu-accordion menu-shadow"
        data-scroll-to-active="true"
      >
        <div className="navbar-header">
          <ul className="nav navbar-nav flex-row">
            <li className="nav-item me-auto" >
              <Link className="navbar-brand" to="/dahsboard" onClick={() => window.location.reload(false)}>
                <span className="brand-logo">
                  <svg
                    viewBox="0 0 139 95"
                    version="1.1"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    height={24}
                  >
                    <defs>
                      <linearGradient
                        id="linearGradient-1"
                        x1="100%"
                        y1="10.5120544%"
                        x2="50%"
                        y2="89.4879456%"
                      >
                        <stop stopColor="#000000" offset="0%" />
                        <stop stopColor="#FFFFFF" offset="100%" />
                      </linearGradient>
                      <linearGradient
                        id="linearGradient-2"
                        x1="64.0437835%"
                        y1="46.3276743%"
                        x2="37.373316%"
                        y2="100%"
                      >
                        <stop stopColor="#EEEEEE" stopOpacity={0} offset="0%" />
                        <stop stopColor="#FFFFFF" offset="100%" />
                      </linearGradient>
                    </defs>
                    <g
                      id="Page-1"
                      stroke="none"
                      strokeWidth={1}
                      fill="none"
                      fillRule="evenodd"
                    >
                      <g
                        id="Artboard"
                        transform="translate(-400.000000, -178.000000)"
                      >
                        <g
                          id="Group"
                          transform="translate(400.000000, 178.000000)"
                        >
                          <path
                            className="text-primary"
                            id="Path"
                            d="M-5.68434189e-14,2.84217094e-14 L39.1816085,2.84217094e-14 L69.3453773,32.2519224 L101.428699,2.84217094e-14 L138.784583,2.84217094e-14 L138.784199,29.8015838 C137.958931,37.3510206 135.784352,42.5567762 132.260463,45.4188507 C128.736573,48.2809251 112.33867,64.5239941 83.0667527,94.1480575 L56.2750821,94.1480575 L6.71554594,44.4188507 C2.46876683,39.9813776 0.345377275,35.1089553 0.345377275,29.8015838 C0.345377275,24.4942122 0.230251516,14.560351 -5.68434189e-14,2.84217094e-14 Z"
                            style={{ fill: "currentColor" }}
                          />
                          <path
                            id="Path1"
                            d="M69.3453773,32.2519224 L101.428699,1.42108547e-14 L138.784583,1.42108547e-14 L138.784199,29.8015838 C137.958931,37.3510206 135.784352,42.5567762 132.260463,45.4188507 C128.736573,48.2809251 112.33867,64.5239941 83.0667527,94.1480575 L56.2750821,94.1480575 L32.8435758,70.5039241 L69.3453773,32.2519224 Z"
                            fill="url(#linearGradient-1)"
                            opacity="0.2"
                          />
                          <polygon
                            id="Path-2"
                            fill="#000000"
                            opacity="0.049999997"
                            points="69.3922914 32.4202615 32.8435758 70.5039241 54.0490008 16.1851325"
                          />
                          <polygon
                            id="Path-21"
                            fill="#000000"
                            opacity="0.099999994"
                            points="69.3922914 32.4202615 32.8435758 70.5039241 58.3683556 20.7402338"
                          />
                          <polygon
                            id="Path-3"
                            fill="url(#linearGradient-2)"
                            opacity="0.099999994"
                            points="101.428699 0 83.0667527 94.1480575 130.378721 47.0740288"
                          />
                        </g>
                      </g>
                    </g>
                  </svg>
                </span>
                <h2 className="brand-text">Vuexy</h2>
              </Link>
            </li>
            <li className="nav-item nav-toggle">
              <a
                className="nav-link modern-nav-toggle pe-0"
                data-bs-toggle="collapse"
              >
                <i
                  className="d-block d-xl-none text-primary toggle-icon font-medium-4"
                  data-feather="x"
                />
                <i
                  className="d-none d-xl-block collapse-toggle-icon font-medium-4  text-primary"
                  data-feather="disc"
                  data-ticon="disc"
                />
              </a>
            </li>
          </ul>
        </div>
        <div className="shadow-bottom" />
        <div className="main-menu-content">
          <ul
            className="navigation navigation-main"
            id="main-menu-navigation"
            data-menu="menu-navigation"
          >
            <li className=" nav-item" onClick={reload}>
              <Link className="d-flex align-items-center" to="/dashboard">
                <i data-feather="home" />
                <span
                  className="menu-title text-truncate"
                  data-i18n="Dashboards"
                >
                  Dashboards
                </span>

              </Link>
            </li>
            <li className=" nav-item">
              {/* <a className="d-flex align-items-center" href="index.html">
                <i data-feather="home" />
                <span
                  className="menu-title text-truncate"
                  data-i18n="Dashboards"
                >
                  Dashboards
                </span>
                <span className="badge badge-light-warning rounded-pill ms-auto me-1">
                  2
                </span>
              </a> */}
              {/* <ul className="menu-content">
                <li>
                  <a
                    className="d-flex align-items-center"
                    href="dashboard-analytics.html"
                  >
                    <i data-feather="circle" />
                    <span
                      className="menu-item text-truncate"
                      data-i18n="Analytics"
                    >
                      Analytics
                    </span>
                  </a>
                </li>
                <li className="active">
                  <a
                    className="d-flex align-items-center"
                    href="dashboard-ecommerce.html"
                  >
                    <i data-feather="circle" />
                    <span
                      className="menu-item text-truncate"
                      data-i18n="eCommerce"
                    >
                      eCommerce
                    </span>
                  </a>
                </li>
              </ul> */}

            </li>
            {/*  */}



            {/*  */}
            <li className=" navigation-header">
              <span data-i18n="Apps & Pages">Revenue and comssion</span>
              <i data-feather="more-horizontal" />
            </li>
            <li className=" nav-item">
              <a className="d-flex align-items-center" href="app-kanban.html">
                <i data-feather="grid" />
                <span className="menu-title text-truncate" data-i18n="Kanban">
                  Rveune Details
                </span>
              </a>
            </li>

            <li className=" nav-item">
              <a className="d-flex align-items-center" href="app-kanban.html">
                <i data-feather="grid" />
                <span className="menu-title text-truncate" data-i18n="Kanban">
                  promotional
                </span>
              </a>
            </li>

            {/*  */}
            <li className=" navigation-header">
              <span data-i18n="Apps & Pages">Brands</span>
              <i data-feather="more-horizontal" />
            </li>
            {/* brand navi */}
            <li className=" nav-item"><a className="d-flex align-items-center" href="#"><i data-feather="copy" />
              <span className="menu-title text-truncate" data-i18n="Todo">Brand</span></a>
              <ul className="menu-content">
                <li><a className="d-flex align-items-center" href="form-input.html"><i data-feather="circle" />
                  <span className="menu-item text-truncate" data-i18n="Input">New Brands</span></a>
                </li>
                <li><a className="d-flex align-items-center" href="form-input-groups.html"><i data-feather="circle" />
                  <span className="menu-item text-truncate" data-i18n="Input Groups">Brands Details</span></a>
                </li>

              </ul>
            </li>
            {/* end of brand Nav */}
            {/* product nav start */}
            <li className=" navigation-header">
              <span data-i18n="Apps & Pages">Product /Catgeory
                <br />
                subCatgoery
              </span>
              <i data-feather="more-horizontal" />
            </li>
            <li className=" nav-item"><a className="d-flex align-items-center" href="#"><i data-feather="copy" />
              <span className="menu-title text-truncate" data-i18n="Todo">Product</span></a>
              <ul className="menu-content">
                <li onClick={reload}>
                  <Link className="d-flex align-items-center" to="/product">
                    <i data-feather="circle" />
                    <span className="menu-item text-truncate">Add product</span></Link>
                </li>
                <li><a className="d-flex align-items-center" href="form-input-groups.html"><i data-feather="circle" />
                  <span className="menu-item text-truncate" data-i18n="Input Groups">product  Details</span></a>
                </li>
                {/* sub category and category routes */}
                <li className=" nav-item"><a className="d-flex align-items-center" href="#"><i data-feather="copy" />
                  <span className="menu-title text-truncate" data-i18n="Todo">Catgeory</span></a>

                  {/* ul tag for sub category */}
                  <ul className="menu-content">
                    <li><a className="d-flex align-items-center" href="form-input.html"><i data-feather="circle" />
                      <span className="menu-item text-truncate" data-i18n="Input">Add Catgeory</span></a>
                    </li>
                    <li><a className="d-flex align-items-center" href="form-input-groups.html"><i data-feather="circle" />
                      <span className="menu-item text-truncate" data-i18n="Input Groups">category Details</span></a>
                    </li>
                  </ul>
                </li>
              </ul>

            </li>
            {/* product nav end */}

            <li className=" navigation-header">
              <span data-i18n="Apps & Pages">Order</span>
              <i data-feather="more-horizontal" />
            </li>
            <li className=" nav-item">
              <a className="d-flex align-items-center" href="app-kanban.html">
                <i data-feather="grid" />
                <span className="menu-title text-truncate" data-i18n="Kanban">
                  Latest Order
                </span>
              </a>
            </li>
            <li className=" nav-item">
              <a className="d-flex align-items-center" href="app-kanban.html">
                <i data-feather="grid" />
                <span className="menu-title text-truncate" data-i18n="Kanban">
                  Brand Order
                </span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* END: Main Menu*/}
    </>
  );
};

export default Sidebar;
