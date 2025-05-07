import React from "react";

const VerticalSmallList = () => {
  return (
    <div className="section">
      <div className="title-bar">
        <h2>
          پیشنهاد ویژه
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={20}
            height={20}
            viewBox="0 0 20 20"
            fill="none"
          >
            <g clipPath="url(#clip0_1105_10859)">
              <path
                d="M19.0808 10.0007L19.9582 7.71211C20.0545 7.45962 19.9795 7.17339 19.7682 7.00216L17.8659 5.45976L17.4809 3.03868C17.4384 2.7712 17.2284 2.56246 16.9609 2.51996L14.5398 2.13499L12.9987 0.231369C12.8287 0.0201334 12.5362 -0.0548614 12.29 0.041382L10.0001 0.920072L7.71155 0.0426319C7.45782 -0.0548614 7.17409 0.0226333 7.00285 0.232619L5.46045 2.13624L3.03937 2.52121C2.77314 2.56371 2.56315 2.7737 2.52065 3.03993L2.13568 5.46101L0.23206 7.00341C0.0220746 7.17339 -0.0541702 7.45962 0.0420732 7.71211L0.919513 10.0007L0.0420732 12.2893C-0.0554201 12.5418 0.0220746 12.828 0.23206 12.998L2.13568 14.5391L2.52065 16.9602C2.56315 17.2277 2.77189 17.4377 3.03937 17.4802L5.46045 17.8652L7.00285 19.7675C7.17409 19.98 7.46032 20.055 7.7128 19.9575L10.0001 19.0813L12.2887 19.9588C12.3612 19.9863 12.4362 20 12.5125 20C12.6962 20 12.8774 19.9188 12.9987 19.7675L14.5398 17.8652L16.9609 17.4802C17.2284 17.4377 17.4384 17.2277 17.4809 16.9602L17.8659 14.5391L19.7682 12.998C19.9795 12.8268 20.0545 12.5418 19.9582 12.2893L19.0808 10.0007Z"
                fill="#FFC700"
              />
              <path
                d="M8.12524 8.75121C7.09156 8.75121 6.25037 7.91002 6.25037 6.87634C6.25037 5.84266 7.09156 5.00146 8.12524 5.00146C9.15892 5.00146 10.0001 5.84266 10.0001 6.87634C10.0001 7.91002 9.15892 8.75121 8.12524 8.75121ZM8.12524 6.25138C7.78026 6.25138 7.50028 6.53136 7.50028 6.87634C7.50028 7.22131 7.78026 7.50129 8.12524 7.50129C8.47021 7.50129 8.7502 7.22131 8.7502 6.87634C8.7502 6.53136 8.47021 6.25138 8.12524 6.25138Z"
                fill="#FAFAFA"
              />
              <path
                d="M11.875 15.0002C10.8413 15.0002 10.0001 14.159 10.0001 13.1254C10.0001 12.0917 10.8413 11.2505 11.875 11.2505C12.9087 11.2505 13.7499 12.0917 13.7499 13.1254C13.7499 14.159 12.9087 15.0002 11.875 15.0002ZM11.875 12.5004C11.5313 12.5004 11.25 12.7816 11.25 13.1254C11.25 13.4691 11.5313 13.7503 11.875 13.7503C12.2187 13.7503 12.5 13.4691 12.5 13.1254C12.5 12.7816 12.2187 12.5004 11.875 12.5004Z"
                fill="#FAFAFA"
              />
              <path
                d="M6.87526 15.0005C6.74901 15.0005 6.62277 14.963 6.51278 14.8843C6.23155 14.683 6.16655 14.293 6.36779 14.0118L12.6174 5.26241C12.8186 4.98118 13.2086 4.91619 13.4898 5.11742C13.771 5.31741 13.8348 5.70863 13.6348 5.98861L7.38522 14.738C7.26148 14.9093 7.07024 15.0005 6.87526 15.0005Z"
                fill="#FAFAFA"
              />
            </g>
            <defs>
              <clipPath id="clip0_1105_10859">
                <rect width={20} height={20} fill="white" />
              </clipPath>
            </defs>
          </svg>
        </h2>
        <a href="#" data-bs-toggle="modal" data-bs-target="#modalRightFull">
          مشاهده همه <i className="icon-left" />
        </a>
      </div>
      <div className="wrap-swiper">
        <div className="swiper drink-swiper">
          <div className="swiper-wrapper pb-30 pt-12">
            <div className="swiper-slide ml-2">
              <div className="tf-box-column md">
                <a href="product-details-1.html" className="img-box">
                  <img src="/images/food/coffea-lg-1.jpg" alt="img" />
                </a>
                <div className="content-box">
                  <h4>
                    <a href="product-details-1.html">کاپوچینو</a>
                  </h4>
                  <ul className="review">
                    <li>
                      <i className="icon-star" />
                      <span>4.8</span>&nbsp; (125)
                    </li>
                    <li className="dot-icon"></li>
                    <li>16 دقیقه</li>
                  </ul>
                  <div className="box-price">
                    <ul className="price">
                      <li className="accent">10.48 تومان</li>
                      <li className="del">12.48 تومان</li>
                    </ul>
                    <a href="cart.html" className="btn-add">
                      +
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="tf-box-column md">
                <a href="product-details-2.html" className="img-box">
                  <img src="/images/food/coffea-lg-1.jpg" alt="img" />
                </a>
                <div className="content-box">
                  <h4>
                    <a href="product-details-2.html">کاپوچینو</a>
                  </h4>
                  <ul className="review">
                    <li>
                      <i className="icon-star" />
                      <span>4.8</span>&nbsp; (125)
                    </li>
                    <li className="dot-icon"></li>
                    <li>16 دقیقه</li>
                  </ul>
                  <div className="box-price">
                    <ul className="price">
                      <li className="accent">10.48 تومان</li>
                      <li className="del">12.48 تومان</li>
                    </ul>
                    <a href="cart.html" className="btn-add">
                      +
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="tf-box-column md">
                <a href="product-details-4.html" className="img-box">
                  <img src="/images/food/coffea-lg-1.jpg" alt="img" />
                </a>
                <div className="content-box">
                  <h4>
                    <a href="product-details-4.html">کاپوچینو</a>
                  </h4>
                  <ul className="review">
                    <li>
                      <i className="icon-star" />
                      <span>4.8</span>&nbsp; (125)
                    </li>
                    <li className="dot-icon"></li>
                    <li>16 دقیقه</li>
                  </ul>
                  <div className="box-price">
                    <ul className="price">
                      <li className="accent">10.48 تومان</li>
                      <li className="del">12.48 تومان</li>
                    </ul>
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

export default VerticalSmallList;
