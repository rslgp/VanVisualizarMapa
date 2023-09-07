import React, { useEffect, useRef } from 'react';
import { TileLayer, Polyline, Marker } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import markerIconUrl from './marker.png'; // Replace with your marker image file path

const customIcon = L.icon({
  iconUrl: markerIconUrl,
  iconSize: [32, 32], // Width and height of the icon
  iconAnchor: [16, 28], // Icon anchor point (center bottom)
});


const LocationMap = ({ locations }) => {
  const mapRef = useRef(null);

  useEffect(() => {
    // Create a map instance using L.map and set its view
    const map = L.map(mapRef.current).setView([-7.123241, -34.826468], 13);

    // Add the OpenStreetMap tile layer
    L.tileLayer('http://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    // Create an array of LatLng objects from the locations data
    const latLngs = locations.map(location => L.latLng(location.lat, location.lon));

    // Create a Polyline with the LatLngs
    L.polyline(latLngs).addTo(map);

    // Add a Marker for each location
    locations.forEach(location => {
      L.marker([location.lat, location.lon], { icon: customIcon }).addTo(map);
    });

    // Cleanup the map when the component unmounts
    return () => {
      map.remove();
    };
  }, [locations]);

  return <div className="map-container" ref={mapRef} style={{ width: '100%', height: '100vw' }} />;
};

export default LocationMap;
