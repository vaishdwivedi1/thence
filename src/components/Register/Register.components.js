import React, { useState } from "react";
import { logo } from "../../constants/CommonConstants";
import { RxCrossCircled } from "react-icons/rx";
import "./Register.css";
import { Link, useHref, useNavigate, useNavigation } from "react-router-dom";
import validateEmail from "../../constants/CommonHelpers";
import { MdError } from "react-icons/md";

const RegisterationHeader = () => {
  const navigation = useHref();
  const isSucessPage = navigation === "/success";
  return (
    <div className="registrationheaderContainer">
      <img src={logo} className="logoImg" />

      {isSucessPage ? null : (
        <Link to="/">
          <RxCrossCircled color="#CACACA" fontSize={"3rem"} />
        </Link>
      )}
    </div>
  );
};
export const RegisterationForm = () => {
  const [data, setData] = useState({
    name: { id: "name", value: "", errorStatus: false, errorMessage: "", placeholder: "Enter your email" },
    email: { id: "email", value: "", errorStatus: false, errorMessage: "", placeholder: "Enter your name" },
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    setData({ ...data, [id]: { ...data[id], value: value, errorStatus: false, errorMessage: "" } });
  };

  const handleSubmit = () => {
    if (!data.name.value) {
      setData({ ...data, name: { ...data.name, errorStatus: true, errorMessage: "Name is mandatory" } });
      return;
    }
    if (!data.email.value || !validateEmail(data.email.value)) {
      setData({ ...data, email: { ...data.email, errorStatus: true, errorMessage: "Enter valid email" } });
      return;
    }
    navigate("/success");
  };
  const isDisabled = !data.email.value || !data.name.value;
  return (
    <div className="registerForm">
      <p className="registerHeading">Registration Form</p>
      <p className="registerSubHeading">
        Start your success <br />
        Journey here!
      </p>

      <div className="inputContainer">
        {Object.keys(data).map((item, index) => (
          <>
            <input key={index} onChange={handleChange} placeholder={data[item].placeholder} id={data[item].id} value={data[item].value} />
            {data[item].errorStatus && (
              <div className="errorContainer">
                <MdError color="red" />
                <p style={{ color: "red" }}>{data[item].errorMessage}</p>
              </div>
            )}
          </>
        ))}
        <button onClick={handleSubmit} style={{ background: isDisabled ? "#C9C9C9" : "black" }} className="submitButton" disabled={isDisabled}>
          Submit
        </button>
      </div>
    </div>
  );
};
export default RegisterationHeader;
