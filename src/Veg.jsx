import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addtocart } from "./Store";
import "bootstrap/dist/css/bootstrap.min.css";

function Veg() {
  let vegitems = useSelector((state) => state.products.veg);
  let dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [priceFilter, setPriceFilter] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Filtered items based on search and price filter
  const filteredItems = vegitems.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) &&
      (priceFilter === null || (priceFilter === "above100" ? item.price > 100 : item.price <= 100))
  );

  // Pagination logic
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Veg Items List</h1>
      
      {/* Search Bar and Filters Centered */}
      <div className="d-flex flex-column align-items-center mb-3">
        <input
          type="text"
          className="form-control mb-2"
          style={{ width: "50%" }}
          placeholder="Search for a veg item..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="d-flex gap-2">
          <button className={`btn ${priceFilter === "above100" ? "btn-primary" : "btn-outline-primary"}`} onClick={() => setPriceFilter("above100")}>
            Above ₹100
          </button>
          <button className={`btn ${priceFilter === "below100" ? "btn-primary" : "btn-outline-primary"}`} onClick={() => setPriceFilter("below100")}>
            Below ₹100
          </button>
          <button className="btn btn-outline-secondary" onClick={() => setPriceFilter(null)}>
            Reset
          </button>
        </div>
      </div>

      <div className="row">
        {currentItems.length > 0 ? (
          currentItems.map((item, index) => (
            <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4 d-flex justify-content-center">
              <div className="card text-center" style={{ width: "14rem", height: "18rem" }}>
                <div className="card-img-container" style={{ width: "100%", height: "100%", overflow: "hidden" }}>
                  <img src={item.src} alt={item.name} className="card-img-top" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
                <div className="card-body d-flex flex-column justify-content-between" style={{ padding: "10px" }}>
                  <h5 className="card-title" style={{ fontSize: "1rem" }}>{item.name}</h5>
                  <p className="card-text" style={{ fontSize: "0.9rem" }}>₹{item.price}</p>
                  <button
                    className="btn btn-success btn-sm"
                    onClick={() => dispatch(addtocart(item))}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center">No items found.</p>
        )}
      </div>
      
      {/* Pagination Controls */}
      {totalPages > 1 && (
        <nav>
          <ul className="pagination justify-content-center mt-3">
            <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
              <button className="page-link" onClick={() => setCurrentPage(currentPage - 1)}>Previous</button>
            </li>
            {[...Array(totalPages).keys()].map((number) => (
              <li key={number} className={`page-item ${currentPage === number + 1 ? "active" : ""}`}>
                <button className="page-link" onClick={() => setCurrentPage(number + 1)}>{number + 1}</button>
              </li>
            ))}
            <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
              <button className="page-link" onClick={() => setCurrentPage(currentPage + 1)}>Next</button>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
}

export default Veg;