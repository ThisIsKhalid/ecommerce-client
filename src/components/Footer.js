import React from "react";
import newsletterIcon from '../Assets/images/newsletter.png'

const Footer = () => {
  return (
    <>
      <footer className="py-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 items-center">
            <div className="col-span-5">
              <div className="footer-top-data flex items-center gap-7">
                <img src={newsletterIcon} alt="newsletter" />
                <h2 className="text-white text-3xl">Sign Up for Newsletter</h2>
              </div>
            </div>
            <div className="col-span-7">
              <div className="form-control">
                <div className="input-group">
                  <input
                    type="text"
                    placeholder="Enter your email"
                    className="input w-full focus:outline-none"
                  />
                  <button className="px-4 bg-[#febd69] text-base font-medium">
                   Subscribe 
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-3">
        <div className="container mx-auto">
          <div className="grid grid-cols-4">
            <div>
              <h4 className="text-white text-lg">Contact Us</h4>
              <div></div>
            </div>
            <div>
              <h4 className="text-white text-lg">Information</h4>
              <div></div>
            </div>
            <div>
              <h4 className="text-white text-lg">Account</h4>
              <div></div>
            </div>
            <div>
              <h4 className="text-white text-lg">Quick Links</h4>
              <div className="footer-links"></div>
            </div>
          </div>
        </div>
      </footer>
      <footer className="py-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1">
            <p className="text-center text-white text-sm">
              &copy: {new Date().getFullYear()}, powered by tech-bazar
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

// 1.18 https://www.youtube.com/watch?v=eu0rExO_C3A
