import { Modal } from "antd";
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { EditOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { updatedata } from "../Store/cartSlice";

const Edit = ({ user, index }) => {
  // console.log(user);
  const dispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newinputs, newsetInputs] = useState(user);
  const showModal = (e) => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const getValues = (e) => {
    const { name, value } = e.target;
    newsetInputs({
      ...newinputs,
      [name]: value,
    });
  };

  const handleOk = () => {
    dispatch(
      updatedata({
        newinputs,
        index,
      })
    );
    // window.location.reload();
    console.log(newinputs);
  };
  return (
    <>
      <button onClick={showModal} className="st_btn">
        <EditOutlined />
      </button>
      <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel}>
        <div>
          <form className="form-modal">
            <h2>Edit Student</h2>

            <div className="container">
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Name
                </label>
                <input
                  name="name"
                  value={newinputs.name}
                  onChange={getValues}
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Email
                </label>
                <input
                  name="email"
                  value={newinputs.email}
                  onChange={getValues}
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Phone
                </label>
                <input
                  name="phone"
                  value={newinputs.phone}
                  onChange={getValues}
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Enroll Number
                </label>
                <input
                  name="enroll"
                  value={newinputs.enroll}
                  onChange={getValues}
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Date of admission
                </label>
                <input
                  name="date"
                  value={newinputs.date}
                  onChange={getValues}
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default Edit;
