import React from "react";

const FilterIcon = () => {
  return (
    <div className="wrap-swiper">
      <div className="swiper cate-swiper">
        <div className="swiper-wrapper pt-24 pb-30">
          <div className="swiper-slide ml-1">
            <a href="nearby.html" className="box-categories">
              <div className="images">
                <img src="/images/food/coffea-sm-1.png" alt="images" />
              </div>
              <span>همه</span>
            </a>
          </div>
          <div className="swiper-slide">
            <a href="nearby.html" className="box-categories">
              <div className="images">
                <img src="/images/food/coffea-sm-1.png" alt="images" />
              </div>
              <span>محبوب</span>
            </a>
          </div>
          <div className="swiper-slide">
            <a href="nearby.html" className="box-categories">
              <div className="images">
                <img src="/images/food/coffea-sm-1.png" alt="images" />
              </div>
              <span>چای شیری</span>
            </a>
          </div>
          <div className="swiper-slide">
            <a href="nearby.html" className="box-categories">
              <div className="images">
                <img src="/images/food/coffea-sm-1.png" alt="images" />
              </div>
              <span>محبوب</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterIcon;
