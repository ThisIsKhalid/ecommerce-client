import React from "react";
import { FaAngleDown, FaSearch } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import cart from "../Assets/images/cart.svg";
import compare from "../Assets/images/compare.svg";
import user from "../Assets/images/user.svg";
import wishlist from "../Assets/images/wishlist.svg";

const Header = () => {
  return (
    <>
      <header className="header-top-strip py-3">
        <div className="container mx-auto grid grid-cols-2">
          <div>
            <p className="text-white mb-0">
              Free Shipping Over $100 & Free Returns
            </p>
          </div>
          <div>
            <p className="text-end text-white mb-0">
              Hotline <a href="tel:+8801891866350"></a>+88 01891866350
            </p>
          </div>
        </div>
      </header>
      {/* 2nd */}
      <header className="header-upper py-3">
        <div className="container mx-auto">
          <div className="grid grid-cols-12 items-center gap-10">
            <div className="col-span-2">
              <h1 className="text-4xl">
                <Link className="text-white">Digitic.</Link>
              </h1>
            </div>
            <div className="col-span-5">
              <div className="form-control">
                <div className="input-group">
                  <input
                    type="text"
                    placeholder="Search…"
                    className="input w-3/4 focus:outline-none"
                  />
                  <button className="px-4 bg-[#febd69]">
                    <FaSearch className="text-lg" />
                  </button>
                </div>
              </div>
            </div>
            <div className="col-span-5">
              <div className="header-upper-links flex items-center justify-between">
                <div>
                  <Link className="flex items-center gap-2 text-white">
                    <img src={compare} alt="compare" />
                    <p className="text-sm">
                      Compare <br /> Products
                    </p>
                  </Link>
                </div>
                <div>
                  <Link className="flex items-center gap-2 text-white">
                    <img src={wishlist} alt="wishlist" />
                    <p className="text-sm">
                      Favourite <br /> Wishlist
                    </p>
                  </Link>
                </div>
                <div>
                  <Link className="flex items-center gap-2 text-white">
                    <img src={user} alt="user" />
                    <p className="text-sm">
                      Log In <br /> My Account
                    </p>
                  </Link>
                </div>
                <div>
                  <Link className="flex items-center gap-2 text-white">
                    <img src={cart} alt="cart" />
                    <div className="flex flex-col">
                      <span className="badge bg-white text-black">0</span>
                      <p className="text-sm">$ 500</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* 3rd */}
      <header className="header-bottom">
        <div className="container mx-auto">
          <div className="menu-bottom flex items-center gap-10">
            <div>
              <div className="dropdown dropdown-hover">
                <button tabIndex={0} className="py-4 flex items-center gap-2">
                  Shop Categories
                  <FaAngleDown />
                </button>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu p-2 shadow bg-[#131921] rounded w-full"
                >
                  <li className="text-white hover:text-[#febd69]">
                    <Link>Item 1</Link>
                  </li>
                  <li className="text-white hover:text-[#febd69]">
                    <Link>Item 2</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="menu-links py-4">
              <div className="flex items-center gap-4">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/">Our Store</NavLink>
                <NavLink to="/">Blogs</NavLink>
                <NavLink to="/">Contact</NavLink>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
