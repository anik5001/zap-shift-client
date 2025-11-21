import React, { useRef } from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useLoaderData, useNavigation } from "react-router";
const Coverage = () => {
  const mapRef = useRef(null);
  const position = [23.810332, 90.412518];
  const serviceCenters = useLoaderData();
  const navigate = useNavigation();
  console.log(serviceCenters);
  const searchLocation = (e) => {
    e.preventDefault();
    const location = e.target.location.value;
    console.log(location);
    const district = serviceCenters.find((dis) =>
      dis.district.toLowerCase().includes(location.toLowerCase())
    );
    if (district) {
      const coord = [district.latitude, district.longitude];
      mapRef.current.flyTo(coord, 13);
      console.log(district);
    }
  };
  if (navigate.state === "loading")
    return (
      <div className="text-center">
        <span className="loading loading-bars loading-xl"></span>
      </div>
    );
  return (
    <div>
      <h2 className="text-5xl font-bold mt-7">
        We are available in 64 districts
      </h2>
      <div className="my-10 text-center">
        {/* search */}
        <form onSubmit={searchLocation} className="relative">
          <label className="input outline-0 border-primary">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              type="search"
              name="location"
              required
              placeholder="Search"
            />
          </label>
          <button className="btn btn-primary text-black rounded-4xl absolute right-118 z-60">
            Search
          </button>
        </form>
      </div>
      <div className="border w-full h-[800px]">
        <MapContainer
          center={position}
          zoom={8}
          scrollWheelZoom={false}
          className="h-[800px]"
          ref={mapRef}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {serviceCenters.map((center, index) => (
            <Marker key={index} position={[center.latitude, center.longitude]}>
              <Popup>
                <strong>{center.district}</strong> <br /> Service Area:{" "}
                {center.covered_area.join(",")}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default Coverage;
