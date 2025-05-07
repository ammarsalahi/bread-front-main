import Image from "next/image";

export default function Home() {
  return (
    <div className="tf-container">
      <ul>
        <li className="tf-box-row style-2 qty mb-12">
          <a href="product-details-1.html" className="img-box">
            <img src="/images/food/coffea-16.jpg" alt="تصویر" />
          </a>
          <div className="content-box">
            <h5>
              <a href="product-details-1.html">قهوه شکلاتی یخ‌زده</a>
            </h5>
            <ul className="review">
              <li>
                <i className="icon-star" />
                <span>4.8</span>&nbsp; (125)
              </li>
              <li className="dot-icon"></li>
              <li>16 دقیقه</li>
            </ul>
            <div className="total-qty">
              <span className="price">10.48 تومان</span>
              <div className="sec-qty">
                <span className="btn-quantity minus-btn">
                  <i className="icon-minus" />
                </span>
                <input type="number" name="number" defaultValue={1} />
                <span className="btn-quantity active plus-btn">
                  <i className="icon-plus" />
                </span>
              </div>
            </div>
          </div>
        </li>
        <li className="tf-box-row style-2 qty mb-12">
          <a href="product-details-2.html" className="img-box">
            <img src="/images/food/coffea-17.jpg" alt="تصویر" />
          </a>
          <div className="content-box">
            <h5>
              <a href="product-details-2.html">قهوه شکلاتی یخ‌زده</a>
            </h5>
            <ul className="review">
              <li>
                <i className="icon-star" />
                <span>4.8</span>&nbsp; (125)
              </li>
              <li className="dot-icon"></li>
              <li>16 دقیقه</li>
            </ul>
            <div className="total-qty">
              <span className="price">10.48 تومان</span>
              <div className="sec-qty">
                <span className="btn-quantity minus-btn">
                  <i className="icon-minus" />
                </span>
                <input type="number" name="number" defaultValue={1} />
                <span className="btn-quantity active plus-btn">
                  <i className="icon-plus" />
                </span>
              </div>
            </div>
          </div>
        </li>
        <li className="tf-box-row style-2 qty mb-30">
          <a href="product-details-3.html" className="img-box">
            <img src="/images/food/coffea-18.jpg" alt="تصویر" />
          </a>
          <div className="content-box">
            <h5>
              <a href="product-details-3.html">قهوه شکلاتی یخ‌زده</a>
            </h5>
            <ul className="review">
              <li>
                <i className="icon-star" />
                <span>4.8</span>&nbsp; (125)
              </li>
              <li className="dot-icon"></li>
              <li>16 دقیقه</li>
            </ul>
            <div className="total-qty">
              <span className="price">10.48 تومان</span>
              <div className="sec-qty">
                <span className="btn-quantity minus-btn">
                  <i className="icon-minus" />
                </span>
                <input type="number" name="number" defaultValue={1} />
                <span className="btn-quantity active plus-btn">
                  <i className="icon-plus" />
                </span>
              </div>
            </div>
          </div>
        </li>
      </ul>
      <div className="mt-30 mb-30">
        <p className="list-order line">
          جمع موقت: <span>10.48 تومان</span>
        </p>
        <p className="mt-15 list-order-total mb-26">
          کل: <span>12.18 تومان</span>
        </p>
        <a href="payment.html" className="tf-btn large primary">
          تسویه حساب
        </a>
      </div>
    </div>
  );
}
