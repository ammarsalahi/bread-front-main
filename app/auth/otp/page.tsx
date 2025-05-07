"use client";
// import Link from "next/link";
import React, { useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useStore } from "@/store/useStore";
import { useRouter } from "next/navigation";
import { convertToEnglishNumbers } from "@/utils/validators";
import Cookies from "js-cookie";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export default function Home() {
  const router = useRouter();

  const {
    token,
    addToken,
    mobileNumber,
    mobileCode,
    balance,
    nationalCode,
    isLoggedIn,
  } = useStore();

  const mobileRef = useRef(null);
  const smscodeRef = useRef<HTMLInputElement>(null);
  const [loading, setLoading] = useState(false);

  const [otp, setOtp] = useState("");

  const [mobile, setMobile] = useState(0);
  const [smsCode, setSmsCode] = useState(0);

  const login = async (code) => {
    setLoading(true);
    const sms_code = convertToEnglishNumbers(code);

    const res = await fetch(`${apiUrl}/api/v4/smscodeverify`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ sms_code, mobile }),
    });
    let result = await res.json();
    if (!res.ok) {
      toast.error("کد وارد شده اشتباه است", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      setLoading(false);
    } else {
      addToken(
        result.access_token,
        result.profile.mobile,
        result.profile.balance
      );
      Cookies.set("token", result.access_token, { expires: 7 });

      toast.success("با موفقیت وارد شدید ...", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      // await router.push("/account/");
      window.location.href = "/account";
    }

    // return   result
  };
  const handleVerify = () => {
    setLoading(true);
    const code = smscodeRef.current?.value; // بررسی می‌کند که smscodeRef.current مقدار داشته باشد
    if (!code) {
      toast.error("کد فعالسازی نمی‌تواند خالی باشد", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      setLoading(false);
      return; // از اجرای ادامه‌ی کد جلوگیری می‌کند
    }
    login(code);
  };

  return (
    <div
      className="account-area"
      style={{
        // backgroundImage: 'url("/images/4.jpg")',
        backgroundColor: "#543a14",
      }}
    >
      {/* start toast container */}
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
      {/* end toast container */}
      <div className="tf-container">
        <div className="logo-app pt-20">
          <img src="/images/3.png" alt="تصویر لوگو" />
        </div>
        <div className="tf-title pt-16">
          <center>
            <div className="content">
              <h1 className="mt-16 text-white text-center">کد فعالسازی</h1>
              <h3 className="text-white text-center">
                ما کد فعالسازی را به شماره همراه شما ارسال کرده ایم
              </h3>
              <br />
              <a href="/auth/login">
                <span className="num" style={{ color: "white" }}>
                  {mobileNumber} <i className="icon-pen-edit" />
                </span>
              </a>
            </div>
          </center>
        </div>
        <div className="  tf-container">
          {/* <ul className="nav nav-tabs mb-23" id="account-tab" role="tablist">
            <li className="nav-item" role="presentation">
              <a
                className="nav-link active"
                id="auth-tab"
                data-bs-toggle="tab"
                data-bs-target="#signin"
                role="tab"
                aria-controls="signin"
                aria-selected="true"
              >
                ورود
              </a>
            </li>
          </ul> */}
          <div className="tab-content ">
            <div
              className="tab-pane fade show active "
              id="signin"
              role="tabpanel"
            >
              {/* <form
                action="https://themesflat.co/html/coffeemonster/coffeeMonster-drink-app/index.html"
                className="tf-form"
              > */}
              <br /> <br />
              {/* <i className="icon icon-phone" /> */}
              <center>
                <input type="text" placeholder="123456" ref={smscodeRef} />
              </center>
              <br />
              {/* <a href="reset-pass.html" className="forgot-link mb-15">
                  رمز عبور را فراموش کرده‌اید؟
                </a> */}
              

              <button
      type="submit"
      onClick={() => handleVerify()}
      disabled={loading}
      style={{ backgroundColor: "#8EB486" }}
      className="relative flex items-center justify-center"
    >
      {loading && (
        <svg
          className="animate-spin h-5 w-5 mr-3 text-white"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          ></circle>
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
          ></path>
        </svg>
      )}
       تایید و ورود
    </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
