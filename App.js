import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Passionfruit Streaming Service</h1>
      </header>
      <main>
        <h2>Welcome to my video streaming website</h2>
        <div className="video-container">
          <video controls poster="poster.jpg" width="640" height="360">
            <source src="https://d3sb0u3v1mukig.cloudfront.net/v.mp4" poster type="video/mp4" />
           
          </video>
        </div>
        <div className="video-grid">
          <div className="video-item">The Leftovers E09</div>
          <div className="video-item">Video 2</div>
          <div className="video-item">Video 3</div>
          <div className="video-item">Video 4</div>
        </div>
      </main>
    </div>
  );
}

export default App;