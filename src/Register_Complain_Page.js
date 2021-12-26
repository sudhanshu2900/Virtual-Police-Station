import Common_Page from "./Components/CommonPage";
import FIC from "./Components/FormInternalComp";
import "./Components/ComponentStyle.css";

import { useHistory } from "react-router";

export default function Register_Complain_Page() {
  function sendData(e) {
    e.preventDefault();
    let valueee = JSON.parse(localStorage.getItem("login"));
    // console.log(e.target.doi.value);
    // console.log(valueee.token);
    fetch("https://vpolice.herokuapp.com/complaint/", {
      // Adding method type
      method: "POST",

      // Adding body or contents to send
      body: JSON.stringify({
        doi: e.target.doi.value,
        toi: e.target.toi.value,
        loi: e.target.loi.value,
        vn: e.target.vn.value,
        cs: e.target.cs.value,
        cb: e.target.cb.value
      }),

      // Adding headers to the request
      headers: {
        "Content-type": "application/json",
        Authorization: "Bearer " + valueee.token
      }
    })
      // Converting to JSON
      .then((response) => response.json())

      // Displaying results to console
      .then((json) => console.log(json))
      .then(e.target.reset())
      .then(redirect());
  }

  const history = useHistory();

  const redirect = () => {
    history.push("/complainsubmitthanks");
  };

  return (
    <>
      <div id="RCP">
        <Common_Page heading="REGISTER COMPLAIN" />
        <Common_Page para="Write your complain here correctly otherwise complain will not register" />
        <Common_Page subHeading="Don not write FAKE complains here otherwise you may punish by Police department" />

        <div id="formArea" className="container">
          <form onSubmit={(e) => sendData(e)}>
            <div className="row">
              <FIC
                first="Date of incident"
                second="space"
                third="doi"
                type="text"
              />
              <FIC
                first="Time of incident"
                second="space"
                third="toi"
                type="text"
              />
              <FIC
                first="Location of incident"
                second="space"
                third="loi"
                type="text"
              />
              <FIC first="Victim name" second="space" third="vn" type="text" />
              <FIC
                first="Complain subject"
                second="space"
                third="cs"
                type="text"
              />
              <FIC
                first="Complain body"
                second="space"
                third="cb"
                type="text"
              />
            </div>
            <div id="formBtn" className="row">
              <button
                type="submit"
                href="/src/ComplainSubmitThanks.js"
                id="btn"
                class="btn btn-primary"
              >
                S U B M I T
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
