"use client";
// import Link from "next/link";
import React, { useState, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useStore } from "@/store/useStore";
import { useRouter } from "next/navigation";
import { convertToEnglishNumbers } from "@/utils/validators";
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export default function Home() {
  const router = useRouter();

  const {
    token,
    addToken,
    addMobile,
    balance,
    nationalCode,
    isLoggedIn,
    mobileNumber,
  } = useStore();

  const mobileRef = useRef<HTMLInputElement>(null);
  const smscodeRef = useRef(null);

  const [otp, setOtp] = useState("");
  const [mobile, setMobile] = useState<string>("");

  const [smsCode, setSmsCode] = useState(0);
  const [loading, setLoading] = useState(false);

  const sendSms = async (mobile) => {
    setLoading(true);
    addMobile(mobile);
    const res = await fetch(`${apiUrl}/api/v4/smscode`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ mobile }),
    });
    let result = await res.json();
    addMobile(mobile);

    if (res.ok) {
      toast.success("پیامک حاوی کد ورود ارسال شد", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      router.push("/auth/otp");
    }else{
      toast.error("خطا: شماره تماس صحیح را وارد کنید", {
        position: "top-center",
        autoClose: 3000,
      });
      setLoading(false);
    }
  };

  const handleSendSms = () => {
    setLoading(true);
    if (mobileRef.current) {
      let mobile = mobileRef.current.value;
      mobile = convertToEnglishNumbers(mobile); // Convert numbers to English
      setMobile(mobile);
      sendSms(mobile);

    } else {
      toast.error("خطا: فیلد شماره تلفن مقداردهی نشده است", {
        position: "top-center",
        autoClose: 3000,
      });
      setLoading(false);
    }
  };

  return (
    <div
      className="account-area"
      style={{ backgroundImage: 'url("/images/bread1.jpg")' }}
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
            {" "}
            <h2 className="">به صفینو خوش آمدید</h2>
            <h3> لطفاً برای ادامه دادن ابتدا وارد شوید </h3>
          </center>
        </div>
        <div className="acount-box">
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
          <div className="tab-content">
            <div
              className="tab-pane fade show active"
              id="signin"
              role="tabpanel"
            >
              {/* <form
                action="https://themesflat.co/html/coffeemonster/coffeeMonster-drink-app/index.html"
                className="tf-form"
              > */}
              <div className="group-input mb-15">
                <i className="icon icon-phone" />
                <input
                  type="tel"
                  ref={mobileRef}
                  required
                  placeholder="شماره تلفن خود را وارد کنید"
                />
              </div>

              {/* <a href="reset-pass.html" className="forgot-link mb-15">
                  رمز عبور را فراموش کرده‌اید؟
                </a> */}

              {/* {loading ? (
                <button disabled type="submit" onClick={() => handleSendSms()}>
                  ورود
                </button>
              ) : (
                <button type="submit" onClick={() => handleSendSms()}>
                  ورود
                </button>
              )} */}
               <button
      type="submit"
      onClick={handleSendSms}
      disabled={loading}
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
      ورود
    </button>
              {/* </form> */}
              <p className="other mb-20 mt-20">
                با استفاده از صفینو شما قوانین و مقررات صفینو را مطالعه نموده و
                پذیرفته اید
              </p>
              <a href="/rules" className="tf-btn large social mb-15">
                {/* <img src="/images/socials/fb.jpg" alt="تصویر" /> */}
                <span> قوانین استفاده از خدمات </span>
              </a>
              <a href="/privacy" className="tf-btn large social">
                {/* <img src="/images/socials/google.jpg" alt="تصویر" /> */}
                <span> شرایط حریم خصوصی </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
