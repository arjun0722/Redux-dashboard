import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import "@coreui/coreui/dist/css/coreui.min.css";
import LeftSide from "./Component/LeftSide/LeftSide";
import SignIn from "./Component/SignIn/SignIn";
import Widget from "./Component/Widget/Widget";

import Students from "./Component/Students/Students";
import Edit from "./Component/Edit/Edit";
import { Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <SignIn/>
      <div className="App_con">
        <div className="left_bar">
          <LeftSide />
        </div>
        <div className="right_bar">
          <Routes>
            <Route path="/students" element={<Students />} />
            <Route path="/widgets" element={<Widget />} />
            <Route path="/edit" element={<Edit />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
