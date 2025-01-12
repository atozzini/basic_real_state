import React, { Fragment } from "react";
import Global from "./styles/Global"
import RouterApp from "./routes";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <Fragment>
      <RouterApp />
      <Global />
      <ToastContainer />
    </Fragment>
  );
}

export default App;
