import React from "react";
import { NavLink } from "react-router-dom";
import { Data } from "../data/Data";

export default function Product() {
  return (
    <>
      <section id="portfolio" className="portfolio sections-bg">
        <div className="container" data-aos="fade-up">
          <div>
            <h1 style={{ textAlign: "center" }}>Books</h1>
          </div>

          <div
            className="portfolio-isotope"
            data-portfolio-filter="*"
            data-portfolio-layout="masonry"
            data-portfolio-sort="original-order"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div>
              <ul className="portfolio-flters">
                <li data-filter="*" className="filter-active">
                  All
                </li>
                <li data-filter=".filter-app">App</li>
                <li data-filter=".filter-product">Product</li>
                <li data-filter=".filter-branding">Branding</li>
                <li data-filter=".filter-books">Books</li>
              </ul>
            </div>

            <div className="row gy-4 portfolio-container">
              {Data.map((item, index) => (
                <div
                  className="col-xl-3 col-md-6 portfolio-item filter-app"
                  key={index}
                >
                  <div className="portfolio-wrap">
                    <NavLink
                      to="/ProductDetail"
                      state={{ id: item.id, data: Data }}
                    >
                      <img src={item.image} className="img-fluid" alt="" width="100%"/>
                    </NavLink>

                    <div className="portfolio-info">
                      <NavLink
                        to="/ProductDetail"
                        state={{ id: item.id, data: Data }}
                      >
                        <h4>
                          <a href="portfolio-details.html" title="More Details">
                            {item.name}
                          </a>
                        </h4>
                      </NavLink>

                      <p>Lorem ipsum, dolor sit amet consectetur</p>

                      <div style={{ marginTop: 10 }}>
                        <div
                          style={{
                            justifyContent: "center",
                            alignItems: "center",
                            display: "flex",
                            borderBlockColor: "white",
                          }}
                        >
                          <NavLink
                            to="/ProductDetail"
                            state={{ id: item.id, data: Data }}
                          >
                            <button
                              style={{
                                width: 150,
                                height: 50,
                                borderRadius: 20,
                                borderColor: "white",
                                backgroundColor: "#008374",
                                color: "white",
                                fontSize: 19,
                              }}
                              title="Buy"
                            >
                              Add to cart
                            </button>
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
