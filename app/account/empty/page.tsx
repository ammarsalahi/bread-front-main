import Image from "next/image";

export default function Home() {
  return (
    <div>
      <div className="header">
        <div className="title-header-bar fixed-top bg-white">
          <a href="#" className="back-btn">
            <i className="icon-right" />
          </a>
          <h1>روش پرداخت</h1>
        </div>
      </div>
      <div className="pt-80 pb-160">
        {/* بخش اطلاعات پرداخت */}
        <div className="payment-section mb-30">
          <div className="tf-container">
            <div className="bg-payment">
              <img src="/images/background/payment.jpg" alt="تصویر" />
            </div>
            <h2 className="text-center">هیچ کارتی ندارید</h2>
            <p className="mt-10 text-center">
              به نظر می‌رسد که هنوز کارت اعتباری یا دبیت ندارید. لطفاً کارت‌های
              خود را به راحتی اضافه کنید.
            </p>
          </div>
        </div>
        {/* دکمه اضافه کردن کارت */}
        <div className="bottom-fixed btn-fixed pb">
          <div className="inner">
            <a
              href="#"
              className="tf-btn large primary"
              data-bs-toggle="modal"
              data-bs-target="#addCardActionSheet"
            >
              {" "}
              اضافه کردن کارت‌ها
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
