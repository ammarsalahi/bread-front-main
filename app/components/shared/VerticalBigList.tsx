import React from "react";

const VerticalBigList = () => {
  return (
    <div className="section">
      <div className="title-bar">
        <h2>محبوب‌ترین‌ها</h2>
        <a href="#" data-bs-toggle="modal" data-bs-target="#modalRightFull">
          مشاهده همه <i className="icon-left" />
        </a>
      </div>
      <div className="wrap-swiper">
        <div className="swiper drink-swiper">
          <div className="swiper-wrapper pb-30 pt-12">
            <div className="swiper-slide ml-2">
              <div className="tf-box-column lg">
                <a href="product-details-1.html" className="img-box">
                  <img src="/images/food/coffea-lg-1.jpg" alt="img" />
                </a>
                <div className="content-box">
                  <h3>
                    <a href="product-details-1.html">قهوه دالگونا</a>
                  </h3>
                  <ul className="review">
                    <li>
                      <i className="icon-star" />
                      <span>4.8</span>&nbsp; (125)
                    </li>
                    <li className="dot-icon"></li>
                    <li>16 دقیقه</li>
                  </ul>
                  <div className="box-price">
                    <span className="price">10.48 تومان</span>
                    <a href="cart.html" className="btn-add">
                      +
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="tf-box-column lg">
                <a href="product-details-2.html" className="img-box">
                  <img src="/images/food/coffea-lg-2.jpg" alt="img" />
                </a>
                <div className="content-box">
                  <h3>
                    <a href="product-details-2.html">کاپوچینو</a>
                  </h3>
                  <ul className="review">
                    <li>
                      <i className="icon-star" />
                      <span>4.8</span>&nbsp; (125)
                    </li>
                    <li className="dot-icon"></li>
                    <li>16 دقیقه</li>
                  </ul>
                  <div className="box-price">
                    <span className="price">10.48 تومان</span>
                    <a href="cart.html" className="btn-add">
                      +
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="tf-box-column lg">
                <a href="product-details-3.html" className="img-box">
                  <img src="/images/food/coffea-lg-1.jpg" alt="img" />
                </a>
                <div className="content-box">
                  <h3>
                    <a href="product-details-3.html">قهوه دالگونا</a>
                  </h3>
                  <ul className="review">
                    <li>
                      <i className="icon-star" />
                      <span>4.8</span>&nbsp; (125)
                    </li>
                    <li className="dot-icon"></li>
                    <li>16 دقیقه</li>
                  </ul>
                  <div className="box-price">
                    <span className="price">10.48 تومان</span>
                    <a href="cart.html" className="btn-add">
                      +
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerticalBigList;
