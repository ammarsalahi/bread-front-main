import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="header absolute">
        <div className="tf-container">
          <div className="d-flex justify-between mt-15 align-center">
            <a href="#" className="back-btn primary">
              <i className="icon-right" />
            </a>
            <span className="btn-sidebar primary">
              <svg
                width={20}
                height={20}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3 7H21"
                  stroke="#ffffff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M3 12H21"
                  stroke="#ffffff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
                <path
                  d="M3 17H21"
                  stroke="#ffffff"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
      <div className="app">
        <div className="banner-wrapper">
          <img
            src="/images/product-detail/banner2.jpg"
            alt="تصاویر"
            className="banner-img1"
          />
        </div>
        <div className="title-detail-section">
          <div className="tf-container">
            <div className="title-detail st1">
              <div className="content">
                <h2>
                  <a href="#" className="text-primary">
                    قهوه کوه آبی
                  </a>
                </h2>
                <ul className="review">
                  <li className="text">
                    <i className="icon-star" />
                    <span className="text-primary">4.8</span>&nbsp; (125)
                  </li>
                  <li className="dot-icon st1"></li>
                  <li className="text">16 دقیقه</li>
                </ul>
              </div>
              <div className="heart st1 active">
                <svg
                  className="icon-heart"
                  xmlns="http://www.w3.org/2000/svg"
                  width={18}
                  height={18}
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <path
                    d="M3.23853 4.7385C2.92513 5.0519 2.67652 5.42396 2.50691 5.83343C2.3373 6.24291 2.25 6.68178 2.25 7.125C2.25 7.56821 2.3373 8.00709 2.50691 8.41656C2.67652 8.82604 2.92513 9.1981 3.23853 9.5115L9.00003 15.273L14.7615 9.5115C15.3945 8.87856 15.75 8.02011 15.75 7.125C15.75 6.22989 15.3945 5.37144 14.7615 4.7385C14.1286 4.10556 13.2701 3.74998 12.375 3.74998C11.4799 3.74998 10.6215 4.10556 9.98853 4.7385L9.00003 5.727L8.01153 4.7385C7.69813 4.4251 7.32607 4.17649 6.9166 4.00688C6.50712 3.83727 6.06824 3.74997 5.62503 3.74997C5.18181 3.74997 4.74294 3.83727 4.33346 4.00688C3.92399 4.17649 3.55193 4.4251 3.23853 4.7385V4.7385Z"
                    stroke="#033F38"
                    strokeWidth="1.33333"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="section">
          <div className="tf-container">
            <h4 className="pt-24">تعداد</h4>
            <div className="sec-qty mt-12">
              <span className="btn-quantity minus-btn">
                <i className="icon-minus" />
              </span>
              <input type="number" name="number" defaultValue={2} />
              <span className="btn-quantity active plus-btn">
                <i className="icon-plus" />
              </span>
            </div>
            <div className="sec-size mt-30 mb-30">
              <h4 className="mb-12">اندازه *</h4>
              <ul className="mt-12">
                <li className="size-item pb-12">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="checkSize"
                    id="checkSize1"
                  />
                  <label
                    className="form-check-label st2"
                    htmlFor="checkSize1"
                  />
                  <p>کوچک</p>
                  <a href="#" className="text">
                    + ۰ تومان
                  </a>
                </li>
                <li className="size-item pt-12 pb-12">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="checkSize"
                    id="checkSize2"
                    defaultChecked
                  />
                  <label
                    className="form-check-label st2"
                    htmlFor="checkSize2"
                  />
                  <p>متوسط</p>
                  <a href="#">+ ۵ تومان</a>
                </li>
                <li className="size-item pt-12">
                  <input
                    className="form-check-input"
                    type="radio"
                    name="checkSize"
                    id="checkSize3"
                  />
                  <label
                    className="form-check-label st2"
                    htmlFor="checkSize3"
                  />
                  <p>بزرگ</p>
                  <a href="#">+ ۸ تومان</a>
                </li>
              </ul>
            </div>
            <div className="mb-20">
              <a href="cart.html" className="tf-btn large primary">
                <i className="icon-buy" /> افزودن به سفارش (۴۸.۲۵ تومان)
              </a>
            </div>
          </div>
        </div>
        {/* <div class="bottom-fixed bg-white">
    <div class="inner mb-20 box-total">
    </div>
      </div> */}
      </div>
    </div>
  );
}
