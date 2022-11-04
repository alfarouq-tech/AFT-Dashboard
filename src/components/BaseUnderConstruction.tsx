import React from "react";
import UnderConstruction from "../images/under_constructions.svg";

const BaseUnderConstruction = ({ pageName }: { pageName: string }) => (
  <main className="container-fluid px-0 ps-md-1">
    <div className="d-flex align-items-center justify-content-center mb-5">
      <img
        src={UnderConstruction}
        alt="Business Analytics Image"
        className="img-fluid d-block mx-auto"
        loading="lazy"
      />
    </div>
    <h1 className="text-center text-uppercase text-dark">
      {pageName} page is under construction.
    </h1>
    <p className="text-center main-font-family fs-4 mt-4 text-dark">
      We are working on it, visit us again soon. <br />
      Thanks for your interesting 🖤
    </p>
  </main>
);

export default BaseUnderConstruction;
