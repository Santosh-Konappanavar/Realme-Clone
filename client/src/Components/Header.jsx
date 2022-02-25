import { useState } from "react";
import "../Style/Header.css";

export const Header = () => {
  const [navClass, setNavClass] = useState("navigation_bar");
  const handleChange = () => {
    setNavClass("navigation_bar_active");
  };

  const handleLeave = () => {
    setNavClass("navigation_bar");
  };
  return (
    <div className="header_container">
      <div className="mall-plus">
        <div className="header-plus">
          <ul>
            <li>
              <a href="" className="tag">
                realmeow
              </a>
            </li>
            <li>
              <span>|</span>
            </li>
            <li>
              <a href="" className="tag">
                Brand
              </a>
            </li>
            <li>
              <span>|</span>
            </li>
            <li>
              <a href="" className="tag">
                Support
              </a>
            </li>
            <li>
              <span>|</span>
            </li>
            <li>
              <a href="" className="tag">
                Community
              </a>
            </li>
            <li>
              <span>|</span>
            </li>
            <li>
              <a href="" className="tag">
                App
              </a>
            </li>
            <li>
              <span>|</span>
            </li>
            <li>
              <a href="" className="tag">
                Bulk Order
              </a>
            </li>
            <li>
              <span>|</span>
            </li>
            <li>
              <a href="" className="tag">
                UI 3.0
              </a>
            </li>
          </ul>
          <ul>
            <li>
              <a href="" className="tag">
                Login
              </a>
            </li>
            <li>
              <span>|</span>
            </li>
            <li>
              <a href="" className="tag">
                My Order
              </a>
            </li>
            <li>
              <span>|</span>
            </li>
            <li>
              <a href="" className="tag">
                Cart
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="wrapper">
        <div className="nav">
          <ul className="nav-menu">
            <li className="false">
              <div>
                <a href="" className="tag1">
                  realme
                </a>
              </div>
            </li>
            <li className="false">
              <a
                href=""
                className="tag"
                onMouseEnter={handleChange}
                onMouseLeave={handleLeave}
              >
                realme Smartphones
              </a>
              <div className={navClass}>
                <div className="navigation_bar_container">
                  <div className="navigation_flex_box">
                    <div className="flex_child_box">
                      <ul>
                        <li>9 Series</li>
                        <li>GT Series</li>
                        <li>8 Series</li>
                        <li>C Series</li>
                        <li>7 Series</li>
                        <li>X Series</li>
                        <li>6 Series</li>
                        <li>5 Series</li>
                      </ul>
                    </div>
                    <div className="flex_child_box_des">
                      <div className="des_outer">
                        <div>
                          <div>
                            <div className="image_div">
                              <img src="https://image01.realme.net/general/20220131/1643635116029.png" />
                            </div>
                          </div>
                          <div>
                            <div className="details_div">
                              <p className="new_p">NEW</p>
                              <p className="des_p">realme 9 Pro+ 5G</p>
                              <p className="price_p">
                                From ₹<span>24,999</span>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div>
                            <div className="image_div">
                              <img src="https://image01.realme.net/general/20220217/1645105009176.png" />
                            </div>
                          </div>
                          <div>
                            <div className="details_div">
                              <p className="new_p">NEW</p>
                              <p className="des_p">realme 9 Pro 5G</p>
                              <p className="price_p">
                                From ₹<span>17,999</span>
                              </p>
                            </div>
                          </div>
                        </div>
                        <div>
                          <div>
                            <div className="image_div">
                              <img src="https://image01.realme.net/general/20220126/1643190140852.png" />
                            </div>
                          </div>
                          <div>
                            <div className="details_div">
                              <p className="new_p">NEW</p>
                              <p className="des_p">realme 9i</p>
                              <p className="price_p">
                                From ₹<span>13,999</span>
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="false">
              <a href="" className="tag">
                narzo Smartphones
              </a>
            </li>
            <li className="false">
              <a href="" className="tag">
                realme TV
              </a>
            </li>
            <li className="false">
              <a href="" className="tag">
                Laptop & Tablet
              </a>
            </li>
            <li className="false">
              <a href="" className="tag">
                Audio
              </a>
            </li>
            <li className="false">
              <a href="" className="tag">
                Smart Life
              </a>
            </li>
            <li className="false">
              <a href="" className="tag">
                Accessories & Lifestyle
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
