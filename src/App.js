import Landing_Page from "./Landing_Page";
import Registration_Page from "./Registration_Page";
import Login_Page from "./Login_Page";
import Register_Complain_Page from "./Register_Complain_Page";

import ComplainSubmitThanks_Page from "./ComplainSubmitThanks_Page";
import RegisterThanks_Page from "./RegisterThanks_Page";

import { Route, Switch } from "react-router-dom";

export default function App() {
  return (
    <Switch>
      <Route exact path="/" component={Landing_Page} />
      <Route path="/registration" component={Registration_Page} />
      <Route path="/login" component={Login_Page} />
      <Route path="/registercomplain" component={Register_Complain_Page} />
      <Route path="/registerthanks" component={RegisterThanks_Page} />
      <Route
        path="/complainsubmitthanks"
        component={ComplainSubmitThanks_Page}
      />
    </Switch>
  );
}
