import { MAP_INIT, MAP_KEY, MARKER_FOUND, NEW_MARKER } from "../actions";

const ppark = {
  lat: 40.66257,
  lng: -73.968564
};

const mapState = {
  places: { ppark },
  mapKey: "",
  markers: [],
  markersFound: []
};

const map = (state = mapState, action) => {
  switch (action.type) {
    case MAP_INIT:
      const {
        markers: { markers, markerMap }
      } = action;
      return { ...state, markers, markersFound: markerMap };
    case MAP_KEY:
      const { mapKey } = action;
      return { ...state, mapKey };
    case MARKER_FOUND:
      const { markersFound } = action;
      return { ...state, markersFound };
    case NEW_MARKER:
      const { newMarker } = action;
      return { ...state, markers: [...state.markers, newMarker] };
    default:
      return state;
  }
};

export default map;
