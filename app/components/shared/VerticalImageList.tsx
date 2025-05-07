import React from "react";

const VerticalImageList = () => {
  return (
    <div className="section">
      <div className="title-bar">
        <h2>مجموعه‌ها</h2>
        <a href="#" data-bs-toggle="modal" data-bs-target="#modalRightFull">
          مشاهده همه <i className="icon-left" />
        </a>
      </div>
      <div className="wrap-swiper">
        <div className="swiper drink-swiper">
          <div className="swiper-wrapper pb-30 pt-12">
            <div className="swiper-slide ml-2">
              <div className="box-collections">
                <div className="images">
                  <a href="product-details-1.html">
                    <img src="/images/food/collect-1.jpg" alt="images" />
                  </a>
                </div>
                <div className="content">
                  <h3>
                    <a href="product-details-1.html">قهوه فیلتر</a>
                  </h3>
                  <p>32 محصول</p>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="box-collections">
                <div className="images">
                  <a href="product-details-2.html">
                    <img src="/images/food/collect-2.jpg" alt="images" />
                  </a>
                </div>
                <div className="content">
                  <h3>
                    <a href="product-details-2.html">آمریکانو</a>
                  </h3>
                  <p>32 محصول</p>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="box-collections">
                <div className="images">
                  <a href="product-details-3.html">
                    <img src="/images/food/collect-3.jpg" alt="images" />
                  </a>
                </div>
                <div className="content">
                  <h3>
                    <a href="product-details-3.html">قهوه سفید</a>
                  </h3>
                  <p>32 محصول</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VerticalImageList;
