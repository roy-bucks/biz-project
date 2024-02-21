import React from "react";

// components

import AdminNavbar from "components/Navbars/AdminNavbar.js";
import Sidebar from "components/Sidebar/Sidebar.js";
import HeaderStats from "components/Headers/HeaderStats.js";
import FooterAdmin from "components/Footers/FooterAdmin.js";

export default function Admin({ children }) {
  return (
    <>
      <Sidebar />
      <div className="flex md:ml-64 flex-col min-h-screen bg-blueGray-100">
        {/* <AdminNavbar /> */}
        {/* Header */}
        {/* <HeaderStats /> */}
        <div className="flex-grow px-4 md:px-10 mx-auto w-full  pt-15">
          {children}
        </div>
        <FooterAdmin />
      </div>

      {/* <div className="relative md:ml-64 bg-blueGray-100">
        <AdminNavbar />
        Header
        <HeaderStats />
        <div className="px-4 md:px-10 mx-auto w-full -mx-24 pt-24 ">
          {children}
          <FooterAdmin />
        </div>
      </div> */}
    </>
  );
}
