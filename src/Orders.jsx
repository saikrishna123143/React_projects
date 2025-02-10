import { useSelector } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";

function Orders() {
  let orders = useSelector((state) => state.purchasedetails);

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Your Orders</h1>
      {orders.length > 0 ? (
        <div className="table-responsive">
          <table className="table table-bordered table-hover text-center">
            <thead className="table-dark">
              <tr>
                <th>Date</th>
                <th>Items</th>
                <th>Total Amount</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr key={index}>
                  <td>{order.date}</td>
                  <td>
                    <div className="d-flex flex-wrap justify-content-center">
                      {order.items.map((item, i) => (
                        <div key={i} className="card m-2" style={{ width: "12rem" }}>
                          <img src={item.src} className="card-img-top" alt={item.name} style={{ height: "8rem", objectFit: "cover" }} />
                          <div className="card-body">
                            <h6 className="card-title">{item.name}</h6>
                            <p className="card-text">{item.quantity} x ₹{item.price}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </td>
                  <td className="fw-bold">₹{order.totalamount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-center text-muted">No orders placed yet.</p>
      )}
    </div>
  );
}

export default Orders;
