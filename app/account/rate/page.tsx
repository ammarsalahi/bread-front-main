import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="header">
        <div className="title-header-bar fixed-top bg-white">
          <a href="#" className="back-btn">
            <i className="icon-right" />
          </a>
          <h1>امتیازدهی</h1>
          <a href="index.html" className="b-home">
            <i className="icon-home" />
          </a>
          <span className="btn-sidebar">
            <svg
              width={20}
              height={20}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 7H21"
                stroke="#033f38"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M3 12H21"
                stroke="#033f38"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
              <path
                d="M3 17H21"
                stroke="#033f38"
                strokeWidth="1.5"
                strokeLinecap="round"
              />
            </svg>
          </span>
        </div>
      </div>
      <div className="app pt-80">
        <div className="tf-container">
          <div className="box-driver line">
            <div className="inner">
              <div className="img">
                <img src="/images/avt/avt-2.png" alt="تصویر" />
              </div>
              <div className="info">
                <h3>
                  <a href="#">الئونور پنا</a>
                </h3>
                <p>راننده - BMW i8</p>
              </div>
            </div>
            <a href="#" className="icon">
              <i className="icon-phone" />
            </a>
          </div>
          <form action="https://themesflat.co/html/coffeemonster/coffeeMonster-drink-app/cart.html">
            <h3 className="mt-30 fw-7 lh-26">امتیازدهی</h3>
            <div className="list-rating rating-driver mt-12">
              <input type="radio" id="star5" name="rate" defaultValue={5} />
              <label htmlFor="star5" className="last" title="متن">
                5
              </label>
              <input
                type="radio"
                id="star4"
                defaultChecked
                name="rate"
                defaultValue={4}
              />
              <label htmlFor="star4" title="متن">
                4
              </label>
              <input type="radio" id="star3" name="rate" defaultValue={3} />
              <label htmlFor="star3" title="متن">
                3
              </label>
              <input type="radio" id="star2" name="rate" defaultValue={2} />
              <label htmlFor="star2" title="متن">
                2
              </label>
              <input type="radio" id="star1" name="rate" defaultValue={1} />
              <label htmlFor="star1" title="متن">
                1
              </label>
            </div>
            <h3 className="mt-30 fw-7 lh-26">نظر</h3>
            <textarea
              placeholder="نظر شما..."
              className="mt-12 suggest_value"
              defaultValue={""}
            />
            <ul className="mt-16 tf-list">
              <li className="suggest rate-suggest">خدمات خوب</li>
              <li className="suggest rate-suggest">سر وقت</li>
              <li className="suggest rate-suggest">تمیز</li>
              <li className="suggest rate-suggest">دقیق</li>
              <li className="suggest rate-suggest">مراقب</li>
              <li className="suggest rate-suggest">سخت‌کوش</li>
            </ul>
            <div className="mt-60 mb-20">
              <a href="rate-coffee.html" className="tf-btn large primary mb-15">
                ادامه
              </a>
              <a href="rate-coffee-02.html" className="tf-btn large outline">
                رد کردن
              </a>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
