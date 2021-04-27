import React from "react";
import { useAuth } from "../auth/Auth";
import BackGround from "../images/bg-prof.jpeg";
import Navbar from "./Navbar";
function ProfilePage() {
  const { currentUser, userDetails } = useAuth();
  return (
    <>
      {userDetails && currentUser && (
        <>
          <Navbar />
          <div
            className="profile-container"
            style={{
              backgroundImage: `url(${BackGround})`,
            }}
          >
            <article id="content" className="profile-article">
              <div className="row profile-row">
                <div className="col">
                  <img
                    src={userDetails.photoURL}
                    style={{
                      borderRadius: "300px",
                    }}
                    width={420}
                    height={420}
                    alt={userDetails.Name}
                  />
                </div>
                <div className="d-flex col align-items-center justify-content-center">
                  <br />
                  <table className="profile-table">
                    <tbody>
                      <tr>
                        <th>Name </th> <td> {userDetails.Name}</td>
                      </tr>
                      <tr>
                        <th>Age </th> <td> {userDetails.Age}</td>
                      </tr>
                      <tr>
                        <th>Email </th> <td> {userDetails.Email}</td>
                      </tr>
                      <tr>
                        <th>Gender </th> <td> {userDetails.Gender} </td>
                      </tr>
                      <tr>
                        <th>Nickname </th> <td> {userDetails.Nickname} </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </article>
          </div>
        </>
      )}
    </>
  );
}

export default ProfilePage;
