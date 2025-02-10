import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Cart from "./Cart";
import ContactUs from "./ContactUs";
import Home from "./Home";
import NonVeg from "./NonVeg";
import Orders from "./Orders";
import Veg from "./Veg";
import Milk from "./Milk";
import NotFound from "./Notfound";
import Login from "./Login";
import { logout } from "./Store";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  let cartItems = useSelector(state => state.cart);
  let totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  let { isAuthenticated, user } = useSelector(state => state.auth);
  let dispatch = useDispatch();

  return (
    <BrowserRouter>
      <div className="container-fluid d-flex flex-column min-vh-100" style={{ fontFamily: 'Poppins, sans-serif', backgroundColor: '#f5f5f5' }}>
        {/* Header Section */}
        <header className="text-white text-center py-4 shadow-sm" style={{ backgroundColor: '#343a40', fontSize: '2rem', fontWeight: 'bold' }}>
          <h1>🛒 Terminator Super Market</h1>
        </header>

        {/* Navigation Bar */}
        <nav className="navbar navbar-expand-lg navbar-light bg-light py-3 shadow-sm">
          <div className="container">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-lg-center" id="navbarNav">
              <ul className="navbar-nav text-center text-lg-start gap-lg-3 mx-auto">
                <li className="nav-item"><Link to="/" className="nav-link text-dark fw-semibold">Home</Link></li>
                <li className="nav-item"><Link to="/VegItems" className="nav-link text-dark fw-semibold">Veg Items</Link></li>
                <li className="nav-item"><Link to="/NonVegItems" className="nav-link text-dark fw-semibold">Non-Veg Items</Link></li>
                <li className="nav-item"><Link to="/MilkItems" className="nav-link text-dark fw-semibold">Milk Items</Link></li>
                <li className="nav-item"><Link to="/Cart" className="nav-link text-dark fw-semibold">Cart ({totalItems})</Link></li>
                <li className="nav-item"><Link to="/Orders" className="nav-link text-dark fw-semibold">Orders</Link></li>
                <li className="nav-item"><Link to="/contact" className="nav-link text-dark fw-semibold">Contact</Link></li>
              </ul>
              <ul className="navbar-nav ms-lg-4 text-center">
                {isAuthenticated ? (
                  <li className="nav-item d-flex flex-column flex-lg-row align-items-center">
                    <span className="text-dark fw-semibold me-lg-3 mb-2 mb-lg-0">Welcome, {user}</span>
                    <button className="btn btn-outline-danger btn-sm" onClick={() => dispatch(logout())}>Logout</button>
                  </li>
                ) : (
                  <li className="nav-item"><Link to="/Login" className="nav-link text-dark fw-semibold">Login</Link></li>
                )}
              </ul>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="container flex-grow-1 p-4 rounded shadow-sm bg-white d-flex align-items-center justify-content-center">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/VegItems" element={<Veg />} />
            <Route path="/NonVegItems" element={<NonVeg />} />
            <Route path="/MilkItems" element={<Milk />} />
            <Route path="/Cart" element={<div className="w-100"><Cart /></div>} />
            <Route path="/Orders" element={<div className="w-100"><Orders /></div>} />
            <Route path="/Login" element={<div className="w-100"><Login /></div>} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="text-white text-center py-3 mt-auto" style={{ backgroundColor: '#343a40' }}>
          <p>&copy; 2025 Terminator Super Market. All Rights Reserved.</p>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
