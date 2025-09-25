import React from "react";
import ReactDOM from "react-dom/client";
import "./Styles.css";
import HeaderComponent from "../components/HeaderComponent";
import BodyComponent from "../components/BodyComponent";
import FooterComponent from "../components/FooterComponent";

const AppComponent = () => {
  return (
    <div id="main-container">
      <HeaderComponent />
      <BodyComponent />
      <FooterComponent />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppComponent />);
// root.render(<ReactComponent></ReactComponent>);