// React
import React from "react";
import ReactDOM from "react-dom";
// CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Redux
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
// import { persistedStore } from "./redux/store";
// App.jsx
import App from "./App";


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      {/* <PersistGate persistor={persistedStore}> */}
        <App />
      {/* </PersistGate> */}
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

/**
  ==> A dashboard for a tech company that makes websites
    => Pages
      // Dashboard
      // Projects
      // Our Clients
      // Client
      // Profile
      // 404 Page
      // Log In

    => Reusable Components
        * Header
          >>> Avatar
          >>> Notification icon
          >>> Notifications icon
        * Side Navbar
        * BaseProjectsTable
        * BaseEmployeesTable
        * Footer
    ------------------------------------------------------------------------------------
      // Dashboard Page ===> Done
        ** Cards State
              >>> Total Projects
              >>> New Clients
              >>> Sales
              >>> Month Projects
          ** Performance Chart
              && Bar Chart With Hover Effect To Show Details
              >>> Horizontal Line --> Months
              >>> Vertical Line   --> Num Of Sales
          ** Projects Chart
              && Line Chart With Hover Effect To Show Details
              >>> Horizontal Line --> Months
              >>> Vertical Line   --> Num Of Projects
          ** Table Of Employees
              >>> Name
              >>> Position
              >>> Age
              >>> Start Date
              >>> Salary
              >>> Status
              >>> Action
                --> Delete Or Change Details
          ** Table Of Current Projects
              >>> Project Name
              >>> Budget
              >>> Team
              >>> Deadline
              >>> Action
                --> Delete Or Change Details
    ------------------------------------------------------------------------------------
      // Projects Page
        * Table Of All Projects
          >>> Project Name
          >>> Client Name
          >>> Budget
          >>> Team
          >>> DeadLine
          >>> Status
          >>> Action
            --> Delete Or Change Details
        * Add New
    ------------------------------------------------------------------------------------
      // Employees Page
       ** Table Of Employees
          >>> Name
          >>> Position
          >>> Age
          >>> Start Date
          >>> Salary
          >>> Status
          >>> Action
            --> Delete Or Change Details
          >>> Add More Button
            --> Form
              /* Name
              /* Position
              /* Age
              /* Start Date
              /* Salary
              /* Status
      ------------------------------------------------------------------------------------
      // Our Clients Page
        * Table
          >>> Client Name
          >>> Num Of Projects
          >>> Total Price
          >>> Paid
          >>> indebtedness
        * Add New
      ------------------------------------------------------------------------------------
      // Client Page
        * Table
          >>> Client Name
          >>> Email
          >>> Phone Number
          >>> Num Of Projects
          >>> Paid Money
          >>> Verified
          >>> Indebtedness
        * Update Info
           --> Form
              /* Client Name
              /* Email
              /* Phone Number
              /* Num Of Projects
              /* Paid Money
              /* Verified
              /* Indebtedness
      ------------------------------------------------------------------------------------
      // Profile Page // For Employees
        * Details Form
          >>> Image
          >>> User Name
          >>> Email
          >>> Phone Number
          >>> Bank Card Number For Money Transfers
          >>> Country
          >>> City
          >>> Street Address
          >>> Postal Code
        * Side Card // Not Editable
          >>> Image
          >>> Position
          >>> Num Of Projects
          >>> Salary
          >>> Start Date
          >>> Status --> Full Time
      ------------------------------------------------------------------------------------
      // 404 Page
        * 404 Page Is Not Found With  Electric Effect & Clip Property
      ------------------------------------------------------------------------------------
      // Log In Pages
        * Form
          >>> Name
          >>> Password
        * Text --> Forget Password. Please, call our support team.
*/
