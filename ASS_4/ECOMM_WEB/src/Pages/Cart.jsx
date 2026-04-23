import { useApp } from "../context/AppContext";

export default function Cart() {
  const {
    cart,
    removeFromCart,
    increaseQty,
    decreaseQty,
  } = useApp();

  const totalPrice = cart.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-6 flex flex-col lg:flex-row gap-6">

      {/* LEFT SIDE */}
      <div className="flex-1 space-y-4">

        <h1 className="text-2xl font-bold mb-4">
          Shopping Cart
        </h1>

        {cart.length === 0 ? (
          <div className="bg-white p-4 rounded shadow">
            Cart is empty
          </div>
        ) : (
          cart.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition p-4 flex gap-4 items-center"
            >

              {/* IMAGE */}
              <img
                src={
                  item.image ||
                  "https://via.placeholder.com/100"
                }
                className="h-28 w-28 object-contain bg-gray-50 rounded"
              />

              {/* DETAILS */}
              <div className="flex-1">

                <h2 className="font-medium text-gray-800 line-clamp-2">
                  {item.title}
                </h2>

                <p className="text-green-600 font-bold mt-1">
                  ₹{Math.round(item.price * 80)}
                </p>

                {/* QTY */}
                <div className="flex items-center border rounded w-fit mt-2 overflow-hidden">

                  <button
                    onClick={() => decreaseQty(item.id)}
                    className="px-3 py-1 bg-gray-100 hover:bg-gray-200"
                  >
                    -
                  </button>

                  <span className="px-4">{item.qty}</span>

                  <button
                    onClick={() => increaseQty(item.id)}
                    className="px-3 py-1 bg-gray-100 hover:bg-gray-200"
                  >
                    +
                  </button>

                </div>

              </div>

              {/* REMOVE */}
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:text-red-700 text-sm"
              >
                Remove
              </button>

            </div>
          ))
        )}
      </div>

      {/* RIGHT SIDE */}
      <div className="w-full lg:w-80 bg-white p-5 rounded-xl shadow-sm h-fit sticky top-4">

        <h2 className="text-xl font-bold mb-4">
          Order Summary
        </h2>

        <div className="flex justify-between mb-2">
          <span>Items</span>
          <span>{cart.length}</span>
        </div>

        <div className="flex justify-between font-bold text-lg mb-4">
          <span>Total</span>
          <span>₹{Math.round(totalPrice * 80)}</span>
        </div>

        <button className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800">
          Checkout
        </button>

      </div>
    </div>
  );
}