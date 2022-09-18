import { Modal } from "antd";
import React, { useState } from "react";
import "./ModalBtn.css";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { add } from "../Store/cartSlice";
const Modalbtn = () => {
  const dispatch = useDispatch();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const initialValues = {
    name: "",
    email: "",
    phone: "",
    enroll: "",
    date: "",
   
  };
  const [inputs, setInputs] = useState(initialValues);
  const showModal = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const getValues = (e) => {
    const { name, value } = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };

  const handleOk = () => {
    //  const save =  JSON.parse(localStorage.getItem("users") || "[]")
    //  save.id = Date.now()
    //  save.push(inputs)
    //  localStorage.setItem("users" , JSON.stringify(save))

    //    window.location.reload();
    // inputs.id = Date.now();
    // inputs.id = uuidv4()
    dispatch(add({
      name : inputs.name,
      email : inputs.email,
      phone : inputs.phone,
      enroll : inputs.enroll,
      date : inputs.date,
      id : uuidv4()
    }));

    console.log(inputs);
    setInputs({
      name: "",
      email: "",
      phone: "",
      enroll: "",
      date: "",
     
    });
  };
  return (
    <>
      <button className="list_btn" type="primary" onClick={showModal}>
        ADD NEW STUDENT
      </button>

      <Modal
        // title="Basic Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div>
          <form className="form-modal">
            <h2>Add Student</h2>

            <div className="container">
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Name
                </label>
                <input
                  name="name"
                  value={inputs.name}
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
                  value={inputs.email}
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
                  value={inputs.phone}
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
                  value={inputs.enroll}
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
                  value={inputs.date}
                  onChange={getValues}
                  className="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              {/* <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                 Student Id
                </label>
                <input
                  name="id"
                  value={inputs.id}
                  onChange={getValues}
                  className="form-control"
                  type="number"
                  id="exampleInputPassword1"
                />
              </div> */}
            </div>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default Modalbtn;
