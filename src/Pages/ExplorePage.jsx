import React, { useEffect, useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import noDataImg from "../assets/no-data.avif"; // adjust path based on your file structure


const ExplorePage = () => {
  const location = useLocation();
  const { selectedCity, selectedSolution } = location.state || {};

  const [workspaces, setWorkspaces] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5000/workspaces")
      .then((res) => {
        const all = res.data;
        setWorkspaces(all);
        setFiltered(
          all.filter(
            (item) =>
              item.subcity &&
              item.city &&
              item.city === selectedCity &&
              item.workspaceTypes.some((type) =>
                type.typeName.includes(selectedSolution)
              )
          )
        );
        setIsLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching workspaces:", err);
        setIsLoading(false);
      });
  }, [selectedCity, selectedSolution]);

 return (
    <div style={styles.page}>
      <h2 style={styles.title}>Explore Workspaces</h2>

      {isLoading ? (
        <p>Loading workspaces...</p>
      ) : filtered.length > 0 ? (
        <div style={styles.grid}>
          {/* workspace cards here */}
        </div>
      ) : (
        <div style={styles.noData}>
          <img
            src={noDataImg}
            alt="No data"
            style={styles.noDataImg}
          />
          <p>No workspaces found for selected options.</p>
        </div>
      )}
    </div>
  );
};

const styles = {
  page: {
    padding: "40px 20px",
    backgroundColor: "#f9f9f9",
    minHeight: "100vh",
    color: "#333"
  },
  title: {
    fontSize: "26px",
    marginBottom: "20px",
    textAlign: "center"
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "24px"
  },
  card: {
    background: "#fff",
    borderRadius: "10px",
    padding: "16px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.08)",
    textAlign: "left"
  },
  image: {
    width: "100%",
    height: "140px",
    objectFit: "cover",
    borderRadius: "8px"
  },
  name: {
    fontSize: "18px",
    fontWeight: "bold",
    margin: "12px 0 6px"
  },
  location: {
    fontSize: "14px",
    color: "#777"
  },
  tagline: {
    fontSize: "14px",
    marginTop: "6px"
  },
  noData: {
    textAlign: "center",
    marginTop: "40px"
  },
  noDataImg: {
    width: "220px",
    marginBottom: "20px"
  }
};

export default ExplorePage;
