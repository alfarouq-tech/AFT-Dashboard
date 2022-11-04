// React
import React from "react";
import ReactDOM from "react-dom";
// CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Redux
import { Provider } from "react-redux";
import { store } from "./redux/store";
// App.jsx
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

/**
  ==> A dashboard for a tech company that makes websites
    => Pages
      // Dashboard
      // Projects
      // Project (Has more details that you can edit)
      // Teams
      // Employees
      // Employee (Has more details)
      // Our Clients
      // Client
      // Profile
      // Settings
      // 404 Page
      // Sign In
      // Sign Up
      // Reset Password

    => Reusable Components
        * Header
          >>> Avatar
          >>> Notification icon
          >>> Notifications icon
        * Side Navbar
        * BaseProjectsTable
        * BaseEmployeesTable
        * BaseAddForm
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
          ** Table Of ongoing Projects
              >>> Project Name
              >>> Project Manager
              >>> Team
              >>> Deadline
              >>> Action
                --> Delete Or Change Details
    ------------------------------------------------------------------------------------
      // Projects Page
        * Table Of All Projects
          >>> Project Title
          >>> Project Manager
          >>> Budget
          >>> Team
          >>> DeadLine
          >>> Status
          >>> Action
            --> Delete, Change Details, or Open project page
        * Add New
    ------------------------------------------------------------------------------------
      // Project Page
        --- All Details has a pen icon for editing
        >>> Project Title
        >>> Project Manager
        >>> Client Name
        >>> Budget
        >>> Team
        >>> Project Designs
        >>> DeadLine
        >>> Status
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
              >>> Image
              >>> Name
              >>> Position
              >>> Location
              >>> Email
              >>> Phone Number
              >>> Age
              >>> Start Date
              >>> Salary
              >>> Status
              >>> Action
      ------------------------------------------------------------------------------------
        // Employee Page
          --- All Details has a pen icon for editing
          >>> Image
          >>> Name
          >>> Position
          >>> Location
          >>> Email
          >>> Phone Number
          >>> Age
          >>> Start Date
          >>> Salary
          >>> Status
          >>> Action
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
        >>> Client Name
        >>> Email
        >>> Phone Number
        >>> Num Of Projects
        >>> Paid Money
        >>> Verified
        >>> Indebtedness
      ------------------------------------------------------------------------------------
      // Profile Page // For the user
        * Details Form
          >>> Image
          >>> User Name
          >>> Email
          >>> Phone Number
          >>> To do list
      ------------------------------------------------------------------------------------
      // 404 Page
        * 404 Page Is Not Found image
        * "There's nothing here!"
        * A link to the dashboard page
      ------------------------------------------------------------------------------------
      // Sign In Pages
        * Form
          >>> Name
          >>> Password
        * Text --> Forget Password. Please, call our support team.
*/
