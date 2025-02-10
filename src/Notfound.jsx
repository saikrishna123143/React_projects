import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Notfound.css"; // Importing CSS file

function Notfound() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => navigate("/"), 5000);
  }, [navigate]);

  return (
    <div className="notfound-container">
      <h1 className="notfound-heading">404 - Page Not Found</h1>
      <p className="notfound-text">
        Oops! The page you're looking for doesn't exist.
      </p>
      <img
        src="/404_page_cover.jpg"
        alt="404 Not Found"
        className="notfound-image"
      />
      <p className="redirect-text">Redirecting to Home in 5 seconds...</p>
    </div>
  );
}

export default Notfound;
