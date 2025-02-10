import { useDispatch, useSelector } from "react-redux";
import { addtopurchase, clearcart, decrement, increment, remove } from "./Store";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Cart() {
  let cartitems = useSelector((state) => state.cart);
  let dispatch = useDispatch();
  let [disc, setDisc] = useState(0);
  let [coup, setCoup] = useState('');
  let [coupper, setCoupper] = useState(0);
  let [showDisc, setShowDisc] = useState(false);
  let [showcoup, setShowcoup] = useState(false);
  
  let totalprice = cartitems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  let discAmount = (totalprice * disc) / 100;
  let couponamt = (totalprice * coupper) / 100;
  let finalAmount = totalprice - discAmount - couponamt;

  let handlecoupper = () => {
    switch (coup.toUpperCase()) {
      case 'RATAN10':
        setCoupper(10);
        setShowcoup(true);
        break;
      case 'RATAN20':
        setCoupper(20);
        setShowcoup(true);
        break;
      case 'RATAN30':
        setCoupper(30);
        setShowcoup(true);
        break;
      default:
        alert("Enter a valid coupon code");
        setCoupper(0);
    }
  }
  
  let handlePurchase = (cartitems, finalprice) => {
    const purchasedate = new Date().toLocaleDateString();
    let purchasedet = { date: purchasedate, items: [...cartitems], totalamount: finalprice };
    dispatch(addtopurchase(purchasedet));
    dispatch(clearcart());
  }
  
  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Cart Items</h1>
      {cartitems.length >= 1 ? (
        <div className="row">
          {cartitems.map((item, index) => (
            <div key={index} className="col-md-4 col-sm-6 mb-3">
              <div className="card h-100 shadow-sm">
                <img src={item.src} className="card-img-top" alt={item.name} style={{ height: "150px", objectFit: "cover" }} />
                <div className="card-body text-center">
                  <h5 className="card-title">{item.name}</h5>
                  <p className="card-text">Price: ₹{item.price}</p>
                  <div className="d-flex justify-content-center align-items-center">
                    <button className="btn btn-sm btn-outline-primary me-2" onClick={() => dispatch(increment(item))}>+</button>
                    <span>{item.quantity}</span>
                    <button className="btn btn-sm btn-outline-danger ms-2" onClick={() => dispatch(decrement(item))}>-</button>
                  </div>
                  <button className="btn btn-sm btn-danger mt-2" onClick={() => dispatch(remove(item))}>Remove</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center">Your cart is empty</p>
      )}

      {cartitems.length >= 1 && (
        <div className="text-center mt-4">
          <h4>Total Price: ₹{totalprice}</h4>
          {showDisc && <p>Discount ({disc}%): -₹{discAmount}</p>}
          {showcoup && <p>Coupon Discount: -₹{couponamt}</p>}
          <h5>Final Amount: ₹{finalAmount}</h5>
          <div className="btn-group mt-3" role="group">
            <button className="btn btn-outline-success" onClick={() => { setDisc(10); setShowDisc(true); }}>10% Off</button>
            <button className="btn btn-outline-success" onClick={() => { setDisc(20); setShowDisc(true); }}>20% Off</button>
            <button className="btn btn-outline-success" onClick={() => { setDisc(30); setShowDisc(true); }}>30% Off</button>
          </div>
          <div className="mt-3">
            <input type="text" className="form-control d-inline w-50" placeholder="Enter coupon code" value={coup} onChange={(e) => setCoup(e.target.value)} />
            <button className="btn btn-primary ms-2" onClick={handlecoupper}>Apply</button>
          </div>
          <button className="btn btn-success mt-3" onClick={() => handlePurchase(cartitems, finalAmount)}>Complete Purchase</button>
        </div>
      )}
    </div>
  );
}

export default Cart;
