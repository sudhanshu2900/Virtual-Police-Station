import "./styles.css";

import { Link } from "react-router-dom";

export default function Landing_Page() {
  return (
    <>
      <div className="LandingPage">
        <div className="container">
          <div id="LP_sec1" className="row">
            <h1>VIRTUAL</h1>
            <h2>POLICE STATION</h2>
          </div>
          <div id="LP_sec2" className="row">
            <div id="LP_sec2_Heading" className="row">
              <h2>Welcome</h2>
              <h3>Department of Indian Police</h3>
            </div>
            <div className="row">
              <p id="LP_sec2_aboutInfo">
                We have created Virtual Police Station (VPS) to let public
                connect to police in fastest way possible. At the time of
                mishaps, people need to connect the police immediately and
                reaching to police station is not always an option. In such
                situations, VPS comes to rescue where people can directly log
                their complaints to nearest police station.
              </p>
            </div>
            <div className="row">
              <br />
              <p id="LP_sec2_warningInfo">
                To get benefit of this service you have to first register your
                family on this portal, otherwise you cannot avail this service.
                It is compulsory process for each and every indian family.
              </p>
            </div>
            <div id="LP_sec2_btnPart" className="row">
              <div id="LP_sec2_left" className="col-lg-6 col-md-6 col-sm-12">
                <h6>Your family not registered?</h6>
                <Link to="/registration">
                  <button type="button" id="btn" className="btn btn-primary">
                    R E G I S T E R
                  </button>
                </Link>
              </div>
              <div id="LP_sec2_right" className="col-lg-6 col-md-6 col-sm-12">
                <h6>Your family alredy registered?</h6>
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
            </div>
          </div>
        </div>
        <br />
      </div>
    </>
  );
}
