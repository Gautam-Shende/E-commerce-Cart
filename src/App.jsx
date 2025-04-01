import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import AOS from "aos";
import "aos/dist/aos.css";
import TopProducts from "./components/TopProducts/TopProducts";
import Banner from "./components/Banner/Banner";
import Subscribe from "./components/Subscribe/Subscribe";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";
import Popup from "./components/Popup/Popup";
import Cart from "./components/Cart/Cart"
import LoginPage from "./components/LoginPage/LoginPage"
import { useRef } from 'react';



const App = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const cartRef = useRef(null);

  const scrollToCart = () => {
    if (cartRef.current) {
      const startTime = Date.now();
      const headerHeight = 0; 
      const startPosition = window.scrollY;
      const targetPosition = cartRef.current.offsetTop - headerHeight;
      const distance = targetPosition - startPosition;
      const duration = 1000; 
  
      const easeInOutQuad = (t) => {
        return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
      };
  
      const animateScroll = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        window.scrollTo(0, startPosition + distance * easeInOutQuad(progress));
  
        if (progress < 1) {
          requestAnimationFrame(animateScroll);
        }
      };
  
      requestAnimationFrame(animateScroll);
    }
  };

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };
  const [LoginPopup, setLoginPopup] = React.useState(false);

  const LoginPagePopup = () => {
    setLoginPopup(!LoginPopup);
  };

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
     <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Navbar LoginPagePopup={LoginPagePopup} scrollToCart={scrollToCart} />
      <Hero />
      <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
      <Banner />
      <Products />
      <TopProducts handleOrderPopup={handleOrderPopup} />
      <Cart ref={cartRef} handleOrderPopup={handleOrderPopup} />
      <Testimonials />
      <LoginPage LoginPopup={LoginPopup} setLoginPopup={setLoginPopup}/>
      <Subscribe />
      <Footer />
    </div>
  );
};
export default App;
