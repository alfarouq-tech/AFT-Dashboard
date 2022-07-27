import React from 'react';
import LogInForm from '../components/LogInForm';
import businessAnalytics from "../images/business_analytics.svg";

const LogIn = () => {
  return (
    <main className="login container-fluid px-0 ps-md-1">
      <section className="row">
        <div className="d-none col-6 d-md-flex align-items-center">
          <img src={businessAnalytics} alt="Business Analytics Image" className="img-fluid" />
        </div>
        <LogInForm />
      </section>
    </main>
  )
};

export default LogIn;