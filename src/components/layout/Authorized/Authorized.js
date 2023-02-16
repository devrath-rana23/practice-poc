import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { Header } from "../../common/header";
import { appStorageService } from "../../../utils/services/storage/Storage";
import { config } from "../../../utils/config/Config";
import "./Authorized.css";

export const Authorized = (props) => {
  const userDetails = appStorageService.local.get(config.appName);
  if (!userDetails) {
    return <Navigate to={"/auth"} replace />;
  }

  return (
    props.children ?? (
      <React.Fragment>
        <div className="authorizedBody">
          <Header />
          <Outlet />
        </div>
      </React.Fragment>
    )
  );
};
