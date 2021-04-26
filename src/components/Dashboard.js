import React from "react";
import { FirstCard, SecondCard, ThirdCard } from "./Cards";
import { useAuth } from "../auth/Auth";
import UploadData from "./admin/UploadData";

export default function Dashboard() {
  const { userType } = useAuth();
  return (
    <div className="container-fluid dashboard-container">
      <div className="d-flex row justify-content-center">
        {userType && userType != "admin" ? (
          <>
            <div className="d-flex col-xl-4 col-md-6 justify-content-center">
              <FirstCard />
            </div>
            <div className="d-flex col-xl-4 col-md-6 justify-content-center">
              <SecondCard />
            </div>
            <div className="d-flex col-xl-4 col-md-6 justify-content-center">
              <ThirdCard />
            </div>
          </>
        ) : (
          <>
            <UploadData />
          </>
        )}
      </div>
    </div>
  );
}
