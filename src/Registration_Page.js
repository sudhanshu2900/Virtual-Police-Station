import Common_Page from "./Components/CommonPage";
import FIC from "./Components/FormInternalComp";

import { useHistory } from "react-router"; //used for page redirection

import { Link } from "react-router-dom";

export default function Registration_Page() {
  function sendData(e) {
    e.preventDefault();
    // console.log(e.target.fhead.value);
    fetch("https://vpolice.herokuapp.com/register/", {
      // Adding method type
      method: "POST",

      // Adding body or contents to send
      body: JSON.stringify({
        fhead: e.target.fhead.value,
        membercount: e.target.membercount.value,
        email: e.target.email.value,
        phone: e.target.phone.value,
        password: e.target.password1.value,
        password2: e.target.password2.value
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
        redirect();
      })
      // .then(e.target.reset())
      .catch((error) => console.log(error));
  }

  const history = useHistory();

  const redirect = () => {
    history.push("/registerthanks");
  };

  return (
    <>
      <div id="RP">
        <Common_Page heading="REGISTER" />
        <Common_Page para="Register your family here to avoid any inconvinence or want help from police to anywhere" />
        <Common_Page subHeading="Fill up all the details correctly" />

        <div id="formArea" className="container">
          <form onSubmit={(e) => sendData(e)}>
            <div className="row">
              <FIC first="Family Head Name" second="space" third="fhead" />
              <FIC
                first="Number of Family members"
                second="space"
                third="membercount"
              />
              <FIC
                first="Mobile Number"
                second="space"
                third="phone"
                type="tel"
              />
              <FIC first="Email ID" second="space" third="email" type="email" />
              <FIC
                first="Password"
                second="space"
                third="password1"
                type="password"
              />
              <FIC
                first="Confirm Password"
                second="space"
                third="password2"
                type="password"
              />
            </div>
            <div id="formBtn" className="row">
              <button
                type="submit"
                href="/src/RegisterThanks.js"
                id="btn"
                class="btn btn-primary"
              >
                R E G I S T E R
              </button>
              <Link to="/login">
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
          </form>
        </div>
      </div>
    </>
  );
}
