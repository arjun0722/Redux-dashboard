import React from "react";
import "./Students.css";
import Modalbtn from "../Modalbtn/Modalbtn";
import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import Header from "../Header/Header";
import { useState } from "react";
import Edit from "../Edit/Edit";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { remove } from "../Store/cartSlice";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
function Students() {
  const history = useNavigate()
  const dispatch = useDispatch();

  const data = useSelector((state) => state.cart);
  
 

  const deleteUser = (id) => {
   
    dispatch(remove(id));
  };

  if (data) {
    return (
      <div>
        <Header />
        <div className="students">
          <div className="student_head">
            <div className="list">Student List</div>
            <div>
              <Modalbtn />
            </div>
          </div>
          <div>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Enroll Number</th>
                  <th scope="col">Date of admission</th>
                  <th scope="col">Student Id</th>

                  <th></th>
                </tr>
              </thead>
              <tbody>
                {data.map((user,index) => {
                  return (
                    <tr key={index}>
                      <td>{user.name}</td>
                      <td>{user.email}</td>
                      <td>{user.phone}</td>
                      <td>{user.enroll}</td>
                      <td>{user.date}</td>
                      <td>{user.id}</td>

                      <td className="icons">
                        <div>
                          <button
                            className="st_btn"
                            onClick={() => deleteUser(user.id)}
                          >
                            <DeleteOutlined />
                          </button>
                        </div>
                        <div>
                         <Edit user ={user} index={index}/>
                        </div>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <Header />
        <div className="students">
          <div className="student_head">
            <div className="list">Student List</div>
            <div>
              <Modalbtn />
            </div>
          </div>
          <div>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Enroll Number</th>
                  <th scope="col">Date of admission</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Arjun rawat</td>
                  <td>arjunrawat0722@gmail.com</td>
                  <td>8298298829</td>
                  <td>8998989</td>
                  <td>22/07/2001</td>
                  <td className="icons">
                    <div>
                      <button className="st_btn">
                        <DeleteOutlined />
                      </button>
                    </div>
                    <div>
                      <button className="st_btn">
                        <EditOutlined />
                      </button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Students;
