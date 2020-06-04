import React, { useEffect, useRef } from "react";

const Map = ({ center, zoom }) => {
  const mapRef = useRef();

  useEffect(() => {
    if (!window.google) {
      removeGoogleMapScript();
      const script = document.createElement(`script`);
      script.src = "https://maps.googleapis.com/maps/api/js?key=" + process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
      document.head.append(script);
    } else {
      const map = new window.google.maps.Map(mapRef.current, {
        center: center,
        zoom: zoom
      });

      new window.google.maps.Marker({ position: center, map: map });
    }
  }, [center, zoom]);

  return <div style={{ height: `100%`, width: `100%` }} ref={mapRef} />;
};

function removeGoogleMapScript() {
  console.debug("removing google script...");
  let keywords = ["maps.googleapis"];

  //Remove google from BOM (window object)
  window.google = undefined;

  //Remove google map scripts from DOM
  let scripts = document.head.getElementsByTagName("script");
  for (let i = scripts.length - 1; i >= 0; i--) {
    let scriptSource = scripts[i].getAttribute("src");
    if (scriptSource !== null) {
      if (keywords.filter((item) => scriptSource.includes(item)).length) {
        scripts[i].remove();
        // scripts[i].parentNode.removeChild(scripts[i]);
      }
    }
  }
}

export default Map;
