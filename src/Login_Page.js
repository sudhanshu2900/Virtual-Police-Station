import Common_Page from "./Components/CommonPage";
import FIC from "./Components/FormInternalComp";

import { useHistory } from "react-router"; //used for page redirection

import { Link } from "react-router-dom";

export default function Login_Page() {
  function sendData(e) {
    e.preventDefault();
    // console.log(e.target.email.value);
    fetch("https://vpolice.herokuapp.com/token/", {
      // Adding method type
      method: "POST",

      // Adding body or contents to send
      body: JSON.stringify({
        email: e.target.email.value,
        password: e.target.password.value
      }),

      // Adding headers to the request
      headers: {
        "Content-type": "application/json"
      }
    })
      // Converting to JSON
      .then((response) => {
        // console.log(response.status);
        if (!response.ok) {
          throw Error(response);
        }
        return response.json();
      })

      // Displaying results to console
      .then((json) => {
        // console.log(json);
        // if (!json.ok) {
        //   throw Error(json);
        // }
        localStorage.setItem(
          "login",
          JSON.stringify({
            login: true,
            token: json.access
          })
        );
        redirect();
      })

      .catch((error) => console.log(error));
  }

  const history = useHistory();

  const redirect = () => {
    history.push("/registercomplain");
  };

  return (
    <>
      <div id="LP">
        <Common_Page heading="LOGIN" />
        <Common_Page para="Want to register your complain or FIR to police department" />
        <Common_Page subHeading="Login with this form and register your complain" />

        <br />
        <div id="formArea" className="container">
          <form onSubmit={(e) => sendData(e)}>
            <div className="row">
              <FIC first="Email" second="space" third="email" type="email" />
              <FIC
                first="Password"
                second="space"
                third="password"
                type="password"
              />
            </div>
            <div id="formBtn" className="row">
              <button
                type="submit"
                href="/src/Register_Complain_Page.js"
                id="btn"
                class="btn btn-primary"
              >
                E N T E R
              </button>
              <Link to="/registration">
                <button type="button" id="btn" className="btn btn-primary">
                  R E G I S T E R
                </button>
              </Link>
            </div>
          </form>
        </div>
        <p id="LP_lastLine">
          You can register your complain or FIR from anywhere any time, police
          department resolve your complain as soon as possible.
        </p>
      </div>
    </>
  );
}
