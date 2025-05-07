"use client";
import React, { useState, useEffect } from "react";

export default function Home({ params }) {
  useEffect(() => {
    // when the component is mounted, the alert is displayed for 3 seconds
    setTimeout(() => {
      window.location.href = "/account/orders";
    }, 10000);
  }, []);

  return (
    <div>
      <div className="header">
        <div className="title-header-bar fixed-top bg-white">
          <h1> پرداخت موفق</h1>
        </div>
      </div>
      <div className="app pt-80">
        <div className="scan-section">
          <div className="tf-container">
            <center>
              <div className="b-success">
                <img
                  src="/images/background/img-4.jpg"
                  style={{ width: "300px" }}
                  alt="تصویر"
                />
              </div>
            </center>

            <h1 className="title-success">
              پرداخت با موفقیت انجام شد، سفارش شما تأیید گردید
            </h1>

            <div className="mt-60 mb-20">
              <a href="/account/orders" className="tf-btn large primary mb-15">
                پیگیری سفارش
              </a>
              <a href="/account/" className="tf-btn large white outline">
                بازگشت به خانه
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
