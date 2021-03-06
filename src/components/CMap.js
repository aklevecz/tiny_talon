import React, { Fragment, useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";
import { MapContainer, SquareButton } from "../styles/styles";
import RaptorMarker from "../markers/RaptorMarker";
import whiteMap from "../styles/whiteMap.json";
import Smiler from "../graphics/Smiler";
import styled from "styled-components";

const Overlay = styled.div`
  position: absolute;
  top: 0;
  right: 0px;
  background: black;
  color: white;
  z-index: 10;
  width: 120px;
  border: 5px white solid;
  padding: 0.5rem;
  opacity: 67%;

  input {
    width: 90%;
    margin: 4px;
    padding: 2px;
  }
`;

const sf = {
  lat: 37.78126372769892,
  lng: -122.41344338335298,
};

const pewpew = {
  lat: 40.716323,
  lng: -73.989691,
};

const ny = {
  lat: 40.703741,
  lng: -73.931124,
};

const midway = {
  lat: 37.749514,
  lng: -122.386036,
};

const mapCoords = {
  SF: sf,
  NYC: ny,
  MIDWAY: midway,
};

const CMap = ({
  mapCenter,
  mapKey,
  markers,
  series,
  setScene,
  socket,
  getMarkers,
  setSeriesCenter,
}) => {
  const [userLocation, setUserLocation] = useState();
  const [marker, setMarker] = useState([]);
  const [info, setInfo] = useState({
    name: "",
    hash: "",
    details: "",
    markerTypes: [],
  });

  useEffect(() => {
    getMarkers(series);
    navigator.geolocation.getCurrentPosition((p) => {
      const { latitude: lat, longitude: lng } = p.coords;
      setUserLocation({ lat, lng });
    });
    //eslint-disable-next-line
  }, []);

  const handleChange = (e) =>
    setInfo({ ...info, [e.target.name]: e.target.value });

  const submitMarker = () => {
    // info.series = series;
    // info.lat = marker.lat;
    // info.lng = marker.lng;
    const payload = {
      marker: { ...info, lat: marker.lat, lng: marker.lng },
      series,
    };
    socket.emit("create_marker", payload);
    getMarkers(series);
    //createMarker(payload);
  };

  return (
    <MapContainer>
      {!userLocation ? (
        <Smiler id="smiler" style={{ fill: "red" }} />
      ) : (
        <Fragment>
          <Overlay>
            {Object.keys(info).map((i) => {
              return (
                <input
                  key={i}
                  placeholder={i}
                  name={i}
                  onChange={handleChange}
                />
              );
            })}
            <SquareButton onClick={submitMarker}>submit</SquareButton>
            <SquareButton onClick={() => setScene("SERIES")}>back</SquareButton>
          </Overlay>
          <GoogleMapReact
            center={mapCoords[mapCenter]}
            defaultCenter={ny}
            defaultZoom={15}
            bootstrapURLKeys={{ key: mapKey }}
            options={{ styles: whiteMap }}
            onClick={(e) => {
              const marker = {
                key: "frog",
                id: "frog",
                found: false,
                lat: e.lat,
                lng: e.lng,
              };
              setMarker(marker);
              setSeriesCenter({ lat: e.lat, lng: e.lng });
            }}
            onChildClick={(e, p) => {
              console.log(p);
            }}
          >
            {markers.map((marker) => {
              return (
                <RaptorMarker
                  g={200}
                  b={100}
                  key={marker.hash}
                  id={marker.hash}
                  found={marker.found}
                  lat={marker.lat}
                  lng={marker.lng}
                />
              );
            })}
            <RaptorMarker
              key={marker.hash}
              id={marker.hash}
              found={marker.found}
              lat={marker.lat}
              lng={marker.lng}
            />
          </GoogleMapReact>
        </Fragment>
      )}
    </MapContainer>
  );
};

export default CMap;
