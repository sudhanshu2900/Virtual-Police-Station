import CommonThanks_Page from "./Components/CommonThanksPage";
import { Link } from "react-router-dom";

export default function RegisterThanks_Page() {
  const abc = {
    display: "flex",
    justifyContent: "center"
  };

  return (
    <>
      <div>
        <CommonThanks_Page heading="Thanks for registering your family" />
        <CommonThanks_Page para1="Click on below button to login" />
        <div className="container">
          <Link to="/login" style={abc}>
            <button
              type="button"
              href="/src/Login_Page.js"
              id="btn"
              className="btn btn-primary"
            >
              L O G I N
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}
