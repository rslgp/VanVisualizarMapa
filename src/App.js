// src/App.js

import React, { useState } from 'react';
import './App.css';
import LocationMap from './component/LocationMap';

function App() {
  const [locations] = useState([
    {
        "type": "break",
        "lat": -7.123241,
        "lon": -34.826468,
        "side_of_street": "right",
        "original_index": 0
    },
    {
        "type": "break",
        "lat": -7.136651,
        "lon": -34.833437,
        "original_index": 17
    },
    {
        "type": "break",
        "lat": -7.146834,
        "lon": -34.835393,
        "original_index": 14
    },
    {
        "type": "break",
        "lat": -7.151357,
        "lon": -34.831431,
        "original_index": 21
    },
    {
        "type": "break",
        "lat": -7.155147,
        "lon": -34.831615,
        "side_of_street": "left",
        "original_index": 9
    },
    {
        "type": "break",
        "lat": -7.155431,
        "lon": -34.828002,
        "original_index": 6
    },
    {
        "type": "break",
        "lat": -7.150456,
        "lon": -34.816856,
        "original_index": 1
    },
    {
        "type": "break",
        "lat": -7.168728,
        "lon": -34.827241,
        "side_of_street": "right",
        "original_index": 11
    },
    {
        "type": "break",
        "lat": -7.208672,
        "lon": -34.842238,
        "original_index": 24
    },
    {
        "type": "break",
        "lat": -7.184966,
        "lon": -34.866148,
        "original_index": 23
    },
    {
        "type": "break",
        "lat": -7.172322,
        "lon": -34.857911,
        "original_index": 12
    },
    {
        "type": "break",
        "lat": -7.157689,
        "lon": -34.873013,
        "original_index": 18
    },
    {
        "type": "break",
        "lat": -7.13779,
        "lon": -34.882582,
        "side_of_street": "left",
        "original_index": 10
    },
    {
        "type": "break",
        "lat": -7.129824,
        "lon": -34.916505,
        "original_index": 19
    },
    {
        "type": "break",
        "lat": -7.121598,
        "lon": -34.882028,
        "side_of_street": "right",
        "original_index": 16
    },
    {
        "type": "break",
        "lat": -7.121598,
        "lon": -34.882028,
        "side_of_street": "right",
        "original_index": 13
    },
    {
        "type": "break",
        "lat": -7.121598,
        "lon": -34.882028,
        "side_of_street": "right",
        "original_index": 15
    },
    {
        "type": "break",
        "lat": -7.12723,
        "lon": -34.873373,
        "side_of_street": "right",
        "original_index": 20
    },
    {
        "type": "break",
        "lat": -7.147784,
        "lon": -34.845073,
        "original_index": 22
    },
    {
        "type": "break",
        "lat": -7.109808,
        "lon": -34.842432,
        "original_index": 4
    },
    {
        "type": "break",
        "lat": -7.078626,
        "lon": -34.840958,
        "original_index": 8
    },
    {
        "type": "break",
        "lat": -7.074006,
        "lon": -34.835101,
        "original_index": 5
    },
    {
        "type": "break",
        "lat": -7.110266,
        "lon": -34.834331,
        "original_index": 7
    },
    {
        "type": "break",
        "lat": -7.108015,
        "lon": -34.832221,
        "original_index": 3
    },
    {
        "type": "break",
        "lat": -7.111828,
        "lon": -34.826519,
        "side_of_street": "left",
        "original_index": 2
    },
    {
        "type": "break",
        "lat": -7.140351,
        "lon": -34.816996,
        "side_of_street": "left",
        "original_index": 25
    }
]);

  return (
    <div className="App">
      <LocationMap locations={locations} />
    </div>
  );
}

export default App;
