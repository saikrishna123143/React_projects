import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addtocart } from "./Store";
import "bootstrap/dist/css/bootstrap.min.css";

function Milk() {
  let milkitems = useSelector(state => state.products.milk);
  let dispatch = useDispatch();
  const [search, setSearch] = useState("");
  const [priceFilter, setPriceFilter] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const filteredItems = milkitems.filter(
    (item) =>
      item.name.toLowerCase().includes(search.toLowerCase()) &&
      (priceFilter === null || (priceFilter === "above100" ? item.price > 100 : item.price <= 100))
  );

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredItems.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Milk Items List</h1>
      
      <div className="d-flex flex-column align-items-center mb-3">
        <input
          type="text"
          className="form-control mb-2"
          style={{ width: "50%" }}
          placeholder="Search for a milk item..."
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
            <div key={index} className="col-md-4 mb-4">
              <div className="card h-100 text-center" style={{ width: "18rem" }}>
                <img src={item.src} alt={item.name} className="card-img-top" style={{ height: "200px", objectFit: "cover" }} />
                <div className="card-body">
                  <h5 className="card-title" style={{ fontSize: "1rem" }}>{item.name}</h5>
                  <p className="card-text" style={{ fontSize: "0.9rem" }}>₹{item.price}</p>
                  <button className="btn btn-success btn-sm" onClick={() => dispatch(addtocart(item))}>
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

export default Milk;
