import React from "react";

export default function Navbar() {
  return (
    <div className="container-fluid dashboard-container">
      <div className="row">
        <div className="d-flex col-xl-4 col-md-6 justify-content-center">
          <div className="card components" style={{ width: "18rem" }}>
            <img
              src="https://drive.google.com/uc?id=10H20Zrtm1Csiyo2-dRuJFRi9qqyfJCG0"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title component-name">Your Stats</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn chk-btn">
                Check
              </a>
            </div>
          </div>
        </div>
        <div className="d-flex col-xl-4 col-md-6 justify-content-center">
          <div className="card components" style={{ width: "18rem" }}>
            <img
              src="https://drive.google.com/uc?id=1L2NoH8BpHtEmiG0mncKxDREBxAHZUxbP"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title component-name">Team Report</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn chk-btn">
                Check
              </a>
            </div>
          </div>
        </div>
        <div className="d-flex col-xl-4 col-md-6 justify-content-center">
          <div className="card components" style={{ width: "18rem" }}>
            <img
              src="https://drive.google.com/uc?id=1LqQ0WaxM1n9hRJLVnNbqKHt1ymbbjq3e"
              className="card-img-top"
            />
            <div className="card-body">
              <h5 className="card-title component-name">Match Report</h5>
              <p className="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
              <a href="#" className="btn chk-btn">
                Check
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
