import React, { Component } from 'react';
import Globe from 'worldwind-react-globe';
import './App.css';

class App extends Component {
  render () {
    const layers = [
      'eox-sentinal2-labels',
      'coordinates',
      'view-controls',
      'stars',
      'atmosphere-day-night'
    ];
    return (
      <div className = 'fullscreen'>
        <Globe
          ref = { this.globeRef }
          layers = { layers }
          latitude = { 34.2 }
          longitude = { -119.2 }
          altitude = { 30e6 }
        />
      </div>
    );
  }
}

export default App;
