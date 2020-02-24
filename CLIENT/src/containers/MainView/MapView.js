import React, { useEffect } from "react";
import { connect } from "react-redux";
import { connectSocket, getMarkers } from "../../actions";
import Map from "../../components/Map";

// when the map socket connects it needs to update it's marker map
const MapView = ({ connectToSocket, getMarkers, history, markers, places }) => {
  useEffect(() => {
    connectToSocket().then(getMarkers());
  }, [connectToSocket, getMarkers]);

  return (
    <div>
      <Map history={history} markers={markers} places={places} />
    </div>
  );
};

const mapStateToProps = state => state.map;
const mapDipstachToProps = dispatch => ({
  connectToSocket: () => dispatch(connectSocket()),
  getMarkers: () => dispatch(getMarkers()),
  dispatch
});

export default connect(mapStateToProps, mapDipstachToProps)(MapView);
