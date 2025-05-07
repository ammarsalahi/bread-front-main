import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="header">
        <div className="title-header-bar fixed-top bg-white">
          <a href="#" className="back-btn">
            <i className="icon-right" />
          </a>
          <h1>اسکن کارت</h1>
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
        <div className="scan-section">
          <div className="tf-container">
            <div className="b-success">
              <img src="/images/background/img-4.jpg" alt="تصویر" />
            </div>
            <h1 className="title-success">
              پرداخت با موفقیت انجام شد، سفارش شما تأیید گردید
            </h1>
            <div className="mt-60 mb-20">
              <a href="order-track.html" className="tf-btn large primary mb-15">
                پیگیری سفارش
              </a>
              <a href="index.html" className="tf-btn large white outline">
                بازگشت به خانه
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
