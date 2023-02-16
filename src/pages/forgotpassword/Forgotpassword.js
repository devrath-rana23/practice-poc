import "./Forgotpassword.css";
import { TextField } from "../../components/common/textField/TextField";
import { useNavigate } from "react-router-dom";

export const Forgotpassword = () => {
  const sumbitHandler = async () => {};
  const navigate = useNavigate();

  return (
    <>
      <div className="forgotpass-heading-container">
        <h1 className="forgotpass-heading">Forgot Password</h1>
        <div className="forgotpass-input-container">
          <TextField
            label="Email"
            placeholder="abc@yopmail.com"
            type="text"
            addClass="h-5"
          />
        </div>
        <div className="forgotpass-btn-container">
          <button onClick={sumbitHandler} className="forgotpass-btn-class">
            <span>Send reset link</span>
          </button>
        </div>
        <p class="bottom-link">
          <span className="bottom-link-btn" onClick={() => navigate("/auth")}>
            Already have an account? <u>Sign in</u>
          </span>
        </p>
      </div>
    </>
  );
};
