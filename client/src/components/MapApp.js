import React, { Component } from "react";
import { Icon } from "leaflet";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

const opencage = require("opencage-api-client");
//const OCD_API_KEY = process.env.REACT_APP_OCD_API_KEY;
//const OCD_API_KEY = `${process.env.REACT_APP_OCD_API_KEY}`;

const OCD_API_KEY = "c3f27287eeef4dfc803b21c0d95eb9df";

class MapApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //location: "",
      markers: [],
      input: [],
      //input: "",
    };
  }

  // Add a marker to the map, by clicking on it
  addMarker = (e) => {
    const { markers } = this.state;
    markers.push(e.latlng);
    console.log(e.latlng);
    this.setState({ markers });
  };

  updateInput(e) {
    this.setState({
      input: e.target.value,
    });
  }

  // Adds marker to map and flies to it with an animation
  addAddress = () => {
    console.log(OCD_API_KEY);
    opencage
      .geocode({ q: this.props.eventLocation, key: OCD_API_KEY })
      .then((data) => {
        // Found at least one result
        if (data.results.length > 0) {
          console.log("Found: " + data.results[0].formatted);
          const latlng = data.results[0].geometry;
          const { markers } = this.state;
          markers.push(latlng);
          console.log(latlng);
          this.setState({ markers });
          let mapInst = this.refs.map.leafletElement;
          mapInst.flyTo(latlng, 12);
        } else alert("No results found!!");
      })
      .catch((error) => {
        console.log("error", error.message);
      });
  };

  render() {
    return (
      <div className="map mt-3">
        <h1 className="mytitle"></h1>
        <Map
          ref="map"
          center={[41.38879, 2.15899]}
          onClick={this.addMarker}
          zoom={2}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
          {this.state.markers.map((position, idx) => (
            <Marker key={`marker-${idx}`} position={position}>
              <Popup>
                <span>
                  funshare®
                  <br />
                  {this.props.eventLocation}
                </span>
              </Popup>
            </Marker>
          ))}
        </Map>
        <br></br>
        <div className="container">
          <div className="form-inline mb-3">
            <input
              className="form-control flex-primary-1"
              onChange={(e) => this.updateInput(e)}
              value={this.props.eventLocation}
            />

            <button
              className="btn btn-primary ml-2"
              onClick={(e) => this.addAddress()}
            >
              Submit your address
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default MapApp;
