
import React, { useState } from "react";
import { HiPlus, HiMinus, HiTrash, HiShoppingCart } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import Image1 from "../../assets/cart/Shoose.png";
import Image2 from "../../assets/cart/sunglasses.png";
import Image3 from "../../assets/cart/Srtwatch.png";
import Image4 from "../../assets/cart/watch.png";
import Image5 from "../../assets/cart/TV.png";
import Image6 from "../../assets/cart/fcWash.png";


const initialProducts = [
  {
    id: 1,
    name: "Colorful Sneakers",
    price: 89.99,
    image: Image1,
  },
  {
    id: 2,
    name: "Designer Sunglasses",
    price: 5.0,
    image: Image2,
  },
  {
    id: 3,
    name: "Smart Watch",
    price: 15.0,
    image: Image3,
  },
  {
    id: 4,
    name: "Normal Styless Watch",
    price: 10.0,
    image: Image4,
  },
  {
    id: 5,
    name: "LED TV 60inc",
    price: 199.99,
    image: Image5,
  },
  {
    id: 6,
    name: "Branded Facwash",
    price: 10.99,
    image: Image6,
  },
];

const CartItem = ({item, onAdd, onRemove, onDelete }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, x: 50 }}
    className="flex items-center justify-between p-3 mb-2 
      dark:bg-gray-700 bg-white hover:shadow-lg rounded-lg 
      shadow-sm transition-shadow"
  >
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-lg overflow-hidden">
        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
      </div>
      <div>
        <h3 className="font-semibold text-sm text-gray-800 dark:text-gray-100">
          {item.name}
        </h3>
        <p className="text-xs text-gray-500 dark:text-gray-300">
          ${item.price.toFixed(2)}
        </p>
      </div>
    </div>

    <div className="flex items-center gap-2">
      <div className="flex items-center dark:bg-gray-600 bg-gray-100 rounded-full">
        <button
          onClick={() => onRemove(item.id)}
          className="p-1 hover:bg-red-100 dark:hover:bg-red-400/20 text-red-500 dark:text-red-400 rounded-full"
        >
          <HiMinus className="w-3 h-3" />
        </button>
        <span className="px-2 text-sm font-bold dark:text-gray-100">
          {item.quantity}
        </span>
        <button
          onClick={() => onAdd(item)}
          className="p-1 hover:bg-green-100 dark:hover:bg-green-400/20 text-green-500 dark:text-green-400 rounded-full"
        >
          <HiPlus className="w-3 h-3" />
        </button>
      </div>
      <button
        onClick={() => onDelete(item.id)}
        className="p-1 hover:bg-gray-200 dark:hover:bg-gray-500 text-gray-500 dark:text-gray-300 rounded-full"
      >
        <HiTrash className="w-4 h-4" />
      </button>
    </div>
  </motion.div>
);

const Cart = React.forwardRef(({handleOrderPopup},ref) => {
  const [cart, setCart] = useState([]);
  const [products] = useState(initialProducts);

  const addToCart = (product) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.id === product.id);
      return existing
        ? prev.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        : [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCart((prev) =>
      prev.reduce((acc, item) => {
        if (item.id === productId) {
          if (item.quantity > 1) {
            acc.push({ ...item, quantity: item.quantity - 1 });
          }
        } else {
          acc.push(item);
        }
        return acc;
      }, [])
    );
  };

  const deleteFromCart = (productId) => {
    setCart((prev) => prev.filter((item) => item.id !== productId));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div
      ref={ref}
      className="min-h-screen bg-slate-300/50 dark:bg-gray-900 p-4 md:p-8 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <HiShoppingCart className="text-blue-500" />
            Shopping Cart
            <span className="text-sm px-2 py-1 rounded-full dark:bg-gray-700 bg-blue-100 text-blue-600">
              {cart.length} items
            </span>
          </h1>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {/* Products Section */}
          <div className="lg:col-span-2">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="p-4 rounded-lg shadow-sm transition-shadow
                    dark:bg-gray-800 bg-white/100 hover:shadow-md"
                >
                  <div className="h-24 rounded-lg flex items-center justify-center mb-3">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-20 h-20 object-contain"
                    />
                  </div>
                  <h3 className="text-sm font-semibold mb-1 dark:text-gray-100 text-gray-800">
                    {product.name}
                  </h3>
                  <p className="text-lg font-bold mb-3 dark:text-blue-400 text-blue-600">
                    ${product.price.toFixed(2)}
                  </p>
                  <button
                    onClick={() => addToCart(product)}
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-md font-medium flex items-center justify-center gap-1"
                  >
                    <HiPlus className="w-4 h-4" />
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Cart Section */}
          <div className="p-4 rounded-lg shadow-lg h-fit sticky top-6 dark:bg-gray-800 bg-white">
            <h2 className="text-xl font-bold mb-4 flex items-center gap-2 dark:text-gray-100">
              <HiShoppingCart className="text-blue-500" />
              Your Cart
            </h2>

            <AnimatePresence>
              {cart.length === 0 ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-6 text-gray-500 dark:text-gray-400"
                >
                  No items in cart
                </motion.div>
              ) : (
                <>
                  <div className="space-y-2 mb-6">
                    <AnimatePresence>
                      {cart.map((item) => (
                        <CartItem
                          key={item.id}
                          item={item}
                          onAdd={addToCart}
                          onRemove={removeFromCart}
                          onDelete={deleteFromCart}
                        />
                      ))}
                    </AnimatePresence>
                  </div>

                  <div className="border-t dark:border-gray-700 border-gray-200 pt-4">
                    <div className="flex justify-between mb-4">
                      <span className="font-bold text-sm dark:text-gray-100 text-gray-800">
                        Total:
                      </span>
                      <span className="font-bold text-lg dark:text-blue-400 text-blue-600">
                        ${total.toFixed(2)}
                      </span>
                    </div>
                    <button onClick={handleOrderPopup} className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-md font-bold text-sm transition-colors">
                      Buy Now
                    </button>
                  </div>
                </>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Cart;