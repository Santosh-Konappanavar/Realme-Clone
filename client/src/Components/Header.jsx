import { useState } from "react";
import "../Style/Header.css";

export const Header = () => {
  const [navClass, setNavClass] = useState("navigation_bar");
  const [narzoClass, setNarzoClass] = useState("narzo_navigation_bar");
  const [realmeTVClass, setRealmeTVClass] = useState(
    ".realmeTV_navigation_bar"
  );
  const [laptopClass, setLaptopClass] = useState(".laptop_navigation_bar");
  const laptopHandleEnter = () => {
    setLaptopClass("laptop_navigation_bar_active");
  };
  const laptopHandleLeave = () => {
    setLaptopClass("laptop_navigation_bar");
  };
  const handleChange = () => {
    setNavClass("navigation_bar_active");
  };
  const handleLeave = () => {
    setNavClass("navigation_bar");
  };
  const narzoHandleEnter = () => {
    setNarzoClass("narzo_navigation_bar_active");
  };
  const narzoHandleLeave = () => {
    setNarzoClass("narzo_navigation_bar");
  };
  const realmeTVHandleEnter = () => {
    setRealmeTVClass("realmeTV_navigation_bar_active");
  };
  const realmeTVHandleLeave = () => {
    setRealmeTVClass("realmeTV_navigation_bar");
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
              <a
                href=""
                className="tag"
                onMouseEnter={narzoHandleEnter}
                onMouseLeave={narzoHandleLeave}
              >
                narzo Smartphones
              </a>
              <div className={narzoClass}>
                <div className="grid_box_outer">
                  <div className="grid_box_inner">
                    <div>
                      <div>
                        <div className="image_div">
                          <img src="https://image01.realme.net/general/20220223/1645593378506.png" />
                        </div>
                      </div>
                      <div>
                        <div className="details_div">
                          <p className="new_p">NEW</p>
                          <p className="des_p">realme narzo 50</p>
                          <p className="price_p">
                            From ₹<span>24,999</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div>
                        <div className="image_div">
                          <img src="https://image01.realme.net/general/20220223/1645593378506.png" />
                        </div>
                      </div>
                      <div>
                        <div className="details_div">
                          <p className="new_p">NEW</p>
                          <p className="des_p">realme narzo 50</p>
                          <p className="price_p">
                            From ₹<span>12,999</span>
                          </p>
                        </div>
                      </div>
                    </div>
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
                  </div>
                </div>
              </div>
            </li>
            <li className="false">
              <a
                href=""
                className="tag"
                onMouseEnter={realmeTVHandleEnter}
                onMouseLeave={realmeTVHandleLeave}
              >
                realme TV
              </a>
              <div className={realmeTVClass}>
                <div className="grid_box_outer">
                  <div className="grid_box_inner">
                    <div>
                      <div>
                        <div className="image_div">
                          <img src="https://image01.realme.net/general/20211201/1638346373432.jpg" />
                        </div>
                      </div>
                      <div>
                        <div className="details_div">
                          <p className="des_p">
                            realme 4K Smart Google TV Stick
                          </p>
                          <p className="price_p">
                            ₹<span>3,999</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div>
                        <div className="image_div">
                          <img src="https://image01.realme.net/general/20210916/1631776095350.png" />
                        </div>
                      </div>
                      <div>
                        <div className="details_div">
                          <p className="des_p">realme Smart TV Neo 32”</p>
                          <p className="price_p">
                            From ₹<span>13,999</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div>
                        <div className="image_div">
                          <img src="https://image01.realme.net/general/20210624/1624526397083.png" />
                        </div>
                      </div>
                      <div>
                        <div className="details_div">
                          <p className="des_p">
                            realme Smart TV Full HD 80cm(32")
                          </p>
                          <p className="price_p">
                            From ₹<span>17,999</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div>
                        <div className="image_div">
                          <img src="https://image01.realme.net/general/20210531/1622446151388.png" />
                        </div>
                      </div>
                      <div>
                        <div className="details_div">
                          <p className="des_p">
                            realme Smart TV 4K (43'' & 50'')
                          </p>
                          <p className="price_p">
                            ₹<span>28,999</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div>
                        <div className="image_div">
                          <img src="https://image01.realme.net/general/20200930/1601463930406.jpg" />
                        </div>
                      </div>
                      <div>
                        <div className="details_div">
                          <p className="des_p">realme Smart TV SLED 4K</p>
                          <p className="price_p">
                            From ₹<span>48,999</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div>
                        <div className="image_div">
                          <img src="https://image01.realme.net/general/20200630/1593487442773.jpg" />
                        </div>
                      </div>
                      <div>
                        <div className="details_div">
                          <p className="des_p">realme Smart Tv (32'' & 43'')</p>
                          <p className="price_p">
                            From ₹<span>20,999</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div>
                        <div className="image_div">
                          <img src="https://image01.realme.net/general/20201009/1602214787717.jpg" />
                        </div>
                      </div>
                      <div>
                        <div className="details_div">
                          <p className="des_p">realme 100W Soundbar</p>
                          <p className="price_p">
                            From ₹<span>6,999</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="false">
              <a
                href=""
                className="tag"
                onMouseEnter={laptopHandleEnter}
                onMouseLeave={laptopHandleLeave}
              >
                Laptop & Tablet
              </a>
              <div className={laptopClass}>
                <div className="grid_box_outer">
                  <div className="grid_box_inner">
                    <div>
                      <div>
                        <div className="image_div">
                          <img src="https://image01.realme.net/general/20220125/1643110048971.png" />
                        </div>
                      </div>
                      <div>
                        <div className="details_div">
                          <p className="new_p">NEW</p>
                          <p className="des_p">realme TechLife Tablet Cover</p>
                          <p className="price_p">
                            From ₹<span>699</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div>
                        <div className="image_div">
                          <img src="https://image01.realme.net/general/20211229/1640775023516.jpg" />
                        </div>
                      </div>
                      <div>
                        <div className="details_div">
                          <p className="new_p">NEW</p>
                          <p className="des_p">realme Wireless Mouse</p>
                          <p className="price_p">
                            From ₹<span>799</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div>
                        <div className="image_div">
                          <img src="https://image01.realme.net/general/20210907/1630992241023.png" />
                        </div>
                      </div>
                      <div>
                        <div className="details_div">
                          <p className="new_p">NEW</p>
                          <p className="des_p">realme Pad</p>
                          <p className="price_p">
                            From ₹<span>13,999</span>
                          </p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div>
                        <div className="image_div">
                          <img src="https://image01.realme.net/general/20210812/1628766831238.png" />
                        </div>
                      </div>
                      <div>
                        <div className="details_div">
                          <p className="new_p">NEW</p>
                          <p className="des_p">realme Book (Slim)</p>
                          <p className="price_p">
                            From ₹<span>46,999</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  style={{
                    marginBottom: "100px",
                  }}
                ></div>
              </div>
            </li>
            <li className="false">
              <a
                href=""
                className="tag"
                onMouseEnter={handleChange}
                onMouseLeave={handleLeave}
              >
                Audio
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
              <a
                href=""
                className="tag"
                onMouseEnter={handleChange}
                onMouseLeave={handleLeave}
              >
                Smart Life
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
              <a
                href=""
                className="tag"
                onMouseEnter={handleChange}
                onMouseLeave={handleLeave}
              >
                Accessories & Lifestyle
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
          </ul>
        </div>
        <div className="nav-right">
          <a className="nav-search gtag">
            <span className="icon icon-search"></span>
          </a>
        </div>
      </div>
    </div>
  );
};
