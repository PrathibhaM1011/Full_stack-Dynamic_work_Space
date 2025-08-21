import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import video from "../assets/video.mp4";

const VideoBanner = () => {
  const [cities, setCities] = useState([]);
  const [solutions, setSolutions] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedSolution, setSelectedSolution] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:5000/locations")
      .then((res) => setCities(res.data))
      .catch((err) => console.error("Error fetching cities", err));

    axios.get("http://localhost:5000/solutions")
      .then((res) => setSolutions(res.data))
      .catch((err) => console.error("Error fetching solutions", err));
  }, []);

  const handleExplore = () => {
    if (selectedCity && selectedSolution) {
      navigate("/explore", {
        state: {
          selectedCity,
          selectedSolution
        }
      });
    }
  };

  return (
    <div className="video-container">
      <style>{`
        .video-container {
          position: relative;
          width: 100%;
          height: 100vh;
          overflow: hidden;
          z-index: 0;
        }
        .video-bg {
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
          object-fit: cover;
          z-index: 0;
        }
        .overlay {
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
          background: rgba(0,0,0,0.6);
          z-index: 0;
        }
        .center-box {
          position: absolute;
          left: 50%;
          bottom: 10vh;
          transform: translateX(-50%);
          z-index: 2;
          background: white;
          padding: 32px;
          border-radius: 10px;
          max-width: 800px;
          width: 90%;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
        }
        .form-row {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 20px;
        }
        select, button {
          padding: 12px;
          font-size: 16px;
          border: 1px solid #ccc;
          border-radius: 6px;
          outline: none;
        }
        select {
          flex: 1;
        }
        .explore-btn {
          background: #333;
          color: #fff;
          font-weight: bold;
          cursor: pointer;
          transition: 0.2s;
        }
        .explore-btn:hover {
          background: #000;
        }
      `}</style>

      <video className="video-bg" autoPlay loop muted>
        <source src={video} type="video/mp4" />
      </video>

      <div className="overlay"></div>

      <div className="center-box">
        <h2>🏢 Discover Flexible Workspaces</h2>
        <div className="form-row">
          <select value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)}>
            <option value="">Select City</option>
            {cities.map((city) => (
              <option key={city.id} value={city.city}>{city.city}</option>
            ))}
          </select>

          <select value={selectedSolution} onChange={(e) => setSelectedSolution(e.target.value)}>
            <option value="">Choose Solution</option>
            {solutions.map((sol) => (
              <option key={sol.id} value={sol.type}>{sol.type}</option>
            ))}
          </select>

          <button className="explore-btn" onClick={handleExplore}>Explore</button>
        </div>
      </div>
    </div>
  );
};

export default VideoBanner;
