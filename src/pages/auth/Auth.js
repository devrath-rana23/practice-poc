import "./Auth.css";
import { TextField } from "../../components/common/textField/TextField";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const sumbitHandler = async () => {};
  const navigate = useNavigate();

  return (
    <>
      <div className="signin-heading-container">
        <h1 className="signin-heading">Sign in to your account</h1>
        <div className="auth-input-container">
          <TextField
            label="Email"
            placeholder="abc@yopmail.com"
            type="text"
            addClass="h-5"
          />
        </div>
        <div className="auth-input-container">
          <TextField
            label="Password"
            placeholder="Enter password"
            type="text"
            addClass="h-5"
          />
        </div>
        <p class="bottom-link">
          <span
            className="bottom-link-btn"
            onClick={() => navigate("/forgotpassword")}
          >
            <u>forgot password?</u>
          </span>
        </p>
        <div className="auth-btn-container">
          <button onClick={sumbitHandler} className="auth-btn-class">
            <span>Sign in</span>
          </button>
        </div>
        <p class="bottom-link">
          <span
            className="bottom-link-btn"
            onClick={() => navigate("/registration")}
          >
            Don't have an account? <u>Sign up</u>
          </span>
        </p>
      </div>
    </>
  );
};

export { Auth };
