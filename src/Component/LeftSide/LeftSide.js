import React from "react";
import "./LeftSide.css";
import {
  HomeOutlined,
  MediumOutlined,
  FolderOpenOutlined,
  SaveOutlined,
  SettingOutlined,
  UserOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
function LeftSide() {
  const history = useNavigate();
  const onStudents = () => {
    history("/students");
  };
  const onHome=()=>{
    history("/widgets")
  }
  return (
    <div className="navigation">
      <h4>CRUD OPERATION</h4>

      <div className="img-name">
        <img
          src="https://images-platform.99static.com//UUYpXRPoW4zZsS-8aKdYShUzQNk=/0x0:1812x1812/fit-in/590x590/99designs-contests-attachments/132/132674/attachment_132674120"
          className="rounded-circle center"
          alt="Cinque Terre"
        />
        <h5>Karti Madesh</h5>
        <h6>Admin</h6>
      </div>

      <div className="upper_list">
        <ul>
          <li className="flex_li">
            <div>
              <HomeOutlined />
            </div>
            <div className="article" onClick={onHome}>Home</div>
          </li>
          <li className="flex_li">
            <div>
              <FolderOpenOutlined />
            </div>
            <div className="article">Course</div>
          </li>
          <li className="flex_li">
            <div>
              <UserOutlined />
            </div>
            <div className="article" onClick={onStudents}>
              Student
            </div>
          </li>
          <li className="flex_li">
            <div>
              <MediumOutlined />
            </div>
            <div className="article">Payment</div>
          </li>
          <li className="flex_li">
            <div>
              <SaveOutlined />
            </div>
            <div className="article">Report</div>
          </li>
          <li className="flex_li">
            <div>
              <SettingOutlined />
            </div>
            <div className="article">Settings</div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default LeftSide;
