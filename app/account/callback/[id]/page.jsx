"use client";
import React, { useState, useEffect } from "react";
// import axios from "axios";

import { useSearchParams } from "next/navigation";
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

const load_jsx = (
  <div>
    <div className="header">
      <div className="title-header-bar fixed-top bg-white">
        <h1>نتیجه پرداخت</h1>
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

          <h1 className="title-success">... درحال بررسی نتیجه پرداخت</h1>
        </div>
      </div>
    </div>
  </div>
);
export default function Home({ params }) {
  const urlParams = new useSearchParams();
  const statustext = urlParams.get("Status");
  const authority = urlParams.get("Authority");
  const id = params.id;
  // // console.log(id)
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // when the component is mounted, the alert is displayed for 3 seconds
    setTimeout(() => {
      if (result === "OK") {
        window.location.href = "/account/orders";
      } else if (result === "NOK") {
        window.location.href = "/account/";
      }
    }, 10000);
  }, [result]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await axios.get('https://api.example.com/data');
        const response = await fetch(
          `${apiUrl}/callback/${id}?Authority=${authority}&Status=${statustext}`
        );
        const data = await response.json();
        // setResult(data);
        // if(data.message!="payment_success" || data.message!="schaduled"){
        //   setResult("NOK");
        //   return "NOK";
        // }else{
        //   setResult("OK");
        //   return "OK";
        // }

        if (data.message == "payment_success") {
          setResult("OK");
          return "OK";
        } else if (data.message == "schaduled") {
          setResult("OK");
          return "OK";
        } else {
          setResult("NOK");
          return "NOK";
        }
      } catch (error) {
        setResult("NOK");
        return "NOK";
      } finally {
        setLoading(false);
      }
    };
    if (!result) {
      fetchData();
    }
    // fetchData();
  }, [result]);

  const ok_jsx = (
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
            <p className="text-sm text-gray-500 dark:text-gray-400">
              شناسه تراککنش
            </p>
            <p className="font-medium">{authority}</p>
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

  const error_jsx = (
    <div>
      <div className="header">
        <div className="title-header-bar fixed-top bg-white">
          <h1> پرداخت ناموفق</h1>
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

            <h4 className="title-success">
              متاسفانه مشکلی در روند پراخت شما وجود دارد . لطفا بعدا مجدد تلاش
              نمیایید و یا با پشتیبانی تماس حاصل فرمایید
              <br />
              <br />
              <p className="text-sm text-gray-500 dark:text-gray-400">
                شناسه تراکنش
              </p>
              <p className="font-medium">{authority}</p>
            </h4>
            <div className="mt-60 mb-20">
              <div className="col-span-2 sm:col-span-1">
                <a
                  href="/account/profile"
                  className="tf-btn large primary mb-15"
                >
                  تماس با پشتیبانی
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  if (loading) {
    return load_jsx;
  } else {
    if (result === "OK") {
      return ok_jsx;
    } else if (result === "NOK") {
      return error_jsx;
    } else {
      return load_jsx;
    }
  }
}
