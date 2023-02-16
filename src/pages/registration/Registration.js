import "./Registration.css";
import { TextField } from "../../components/common/textField/TextField";
import { useNavigate } from "react-router-dom";

export const Registration = () => {
  const sumbitHandler = async () => {};
  const navigate = useNavigate();

  return (
    <>
      <div className="register-heading-container">
        <h1 className="register-heading">Register your account</h1>
        <div className="register-input-container">
          <TextField
            label="Name"
            placeholder="Abd Sha"
            type="text"
            addClass="h-5"
          />
        </div>
        <div className="register-input-container">
          <TextField
            label="Email"
            placeholder="abc@yopmail.com"
            type="text"
            addClass="h-5"
          />
        </div>
        <div className="register-input-container">
          <TextField
            label="Password"
            placeholder="Enter password"
            type="text"
            addClass="h-5"
          />
        </div>
        <div className="register-btn-container">
          <button onClick={sumbitHandler} className="register-btn-class">
            <span>Create account</span>
          </button>
        </div>
        <p class="bottom-link">
          <span
            className="bottom-link-btn"
            onClick={() => navigate("/auth")}
          >
            Already have an account? <u>Sign in</u>
          </span>
        </p>
      </div>
    </>
  );
};
