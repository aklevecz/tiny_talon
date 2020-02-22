import React from "react";
import { Route, Switch } from "react-router-dom";
import Status from "./containers/Status";
import Scan from "./containers/Scan";
import { connect } from "react-redux";
import { newToken, registerDevice } from "./actions";
import MainView from "./containers/MainView";
import Registration from "./containers/Registration";
import { DEVICE_NOT_REGISTERED } from "./statuses";

function App({ error, hash, status, token }) {
  console.log(hash);
  console.log(status);
  if (status === DEVICE_NOT_REGISTERED || !hash || !token) {
    return <Registration hash={hash} token={token} status={status} />;
    // return <Button onClick={registerDevice}>Register Device</Button>;
  }

  // if (!hash) {
  //   return <div>devicing...</div>;
  // }
  // if (!token) {
  //   return (
  //     <div>
  //       <Button onClick={getToken}>Connect</Button>
  //     </div>
  //   );
  // }
  return (
    <>
      {error && <div>{error}</div>}
      <Switch>
        <Route exact path="/" component={MainView} />
        <Route path="/status" component={Status} />
        <Route path="/:code" component={Scan} />
      </Switch>
    </>
  );
}

const mapStateToProps = state => state.device;
const mapDispatchToProps = dispatch => ({
  getToken: () => dispatch(newToken()),
  registerDevice: () => dispatch(registerDevice())
});
export default connect(mapStateToProps, mapDispatchToProps)(App);
