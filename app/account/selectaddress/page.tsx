"use client";
// import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useStore } from "@/store/useStore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import BakeryList from "@/app/components/shared/BakeryList";
const apiUrl = process.env.NEXT_PUBLIC_API_URL;
interface Address {
  id: string; // Adjust the type if `id` is a number
  postal_code: string;
  address1: string;
  city?: string; // Optional fields, add as necessary
  address2?: string;
  mobile?: string;
}
export default function Home() {
  const router = useRouter();

  const {
    token,

    selected_bread_type,
    new_selected_bread_shop_name,
    new_selected_bread_shop,
    new_selected_address_id,
    new_selected_address,
    new_selected_post,
  } = useStore();
  const [items, setItems] = useState<Address[]>([]);
  const [postCode, setPostCode] = useState("");
  const [addr, setAddr] = useState(null);
  const [addrName, setAddrName] = useState(null);
  const getbakeries = async () => {
    try {
      const response = await fetch(`${apiUrl}/me/dash`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        // setItems(data?.breadshops || []);
        setItems(data.addresses || []);
      } else {
        console.error(
          "Error response from API:",
          response.status,
          response.statusText
        );
      }
    } catch (err) {
      console.error("Error during fetch:", err);
    }
  };
  useEffect(() => {
    if (token) {
      getbakeries();
    }
  }, [token, router]);

  const handleItemClick = (item: any, post: any, name: any) => {
    // alert(item);
    setAddr(item);
    setPostCode(post);
    setAddrName(name);
  };
  const handleClick = () => {
    if (addr != null) {
      new_selected_address_id(addr);
      new_selected_address(addrName);
      new_selected_post(postCode);
      router.push("/account/checkout");
    } else {
      console.log("errorrrrrrrrrrr");
      toast.error("خطا:  ابتدا یک آدرس را انتخاب کنید", {
        position: "top-center",
        autoClose: 3000,
      });
    }
  };
  return (
    <div>
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
      <div className="header">
        <div className="title-header-bar fixed-top bg-white">
          <a href="/account/hour" className="back-btn">
            <i className="icon-right" />
          </a>
          <h1> آدرس ها</h1>
        </div>
      </div>
      <div className="pt-80 pb-70">
        <div className="tf-container">
          {items.length != 0 ? (
            <>
              <div className="img-location text-center pt-17">
                <img src="/images/logo/lo1.png" alt="تصویر" />
              </div>
              <h2 className="text-center mt-30">انتخاب آدرس تحویل</h2>
              <p className="text-center mt-10 t-paragraph">
                آدرس خود را انتخاب کنید
              </p>
            </>
          ) : (
            ""
          )}

          {/* TODO:: WHY its not brown color ?  */}
          {items.length === 0 ? (
            <center className="mt-16">
              <div className="payment-section mb-30">
                <div className="tf-container">
                  <div className="bg-payment">
                    <img src="/images/background/payment.jpg" alt="تصویر" />
                  </div>
                  <h2 className="text-center">هنوز هیچ آدرسی ندارید</h2>
                  <p className="mt-10 text-center">
                    به نظر می‌رسد که هنوز آدرسی ندارید. لطفاً آدرس های خود را به
                    راحتی اضافه کنید.
                  </p>
                </div>
              </div>
              <div className="bottom-fixed btn-fixed pb">
                <div className="inner">
                  <a
                    href="/account/address/add"
                    className="tf-btn large primary"
                    // data-bs-toggle="modal"
                    // data-bs-target="#addCardActionSheet"
                  >
                    {" "}
                    اضافه کردن آدرس جدید
                  </a>
                </div>
              </div>
            </center>
          ) : (
            items.map((address, index) => (
              <div
                className="form-check-lo mt-30"
                key={index}
                onClick={() =>
                  handleItemClick(
                    address.id,
                    address.postal_code,
                    address.address1
                  )
                }
              >
                <input
                  className="form-check-input check-ip-bg"
                  type="radio"
                  name="radioList"
                  id={`radioList${index}`}
                  // defaultChecked={index === 0}
                  // onClick={() =>
                  //   handleItemClick(
                  //     address.id,
                  //     address.postal_code,
                  //     address.address1
                  //   )
                  // }
                />
                <label
                  className="form-check-label"
                  htmlFor={`radioList${index}`}
                  onClick={() => {
                    const element = document.getElementById(
                      `radioList${index}`
                    );
                    if (element) element.click();
                  }}
                ></label>
                <div
                  className="icon"
                  onClick={() => {
                    const element = document.getElementById(
                      `radioList${index}`
                    );
                    if (element) element.click();
                  }}
                >
                  <i className="icon-location" />
                </div>
                <div
                  className="content-send"
                  onClick={() => {
                    const element = document.getElementById(
                      `radioList${index}`
                    );
                    if (element) element.click();
                  }}
                >
                  <h4
                    onClick={() => {
                      const element = document.getElementById(
                        `radioList${index}`
                      );
                      if (element) element.click();
                    }}
                  >
                    {address.city} - {address.address1} - {address.address2}
                  </h4>
                  <span
                    onClick={() => {
                      const element = document.getElementById(
                        `radioList${index}`
                      );
                      if (element) element.click();
                    }}
                  >
                    {" "}
                    شماره تحویل گیرنده : {address.mobile} - کد پستی{" "}
                    {address.postal_code}
                  </span>
                </div>
              </div>
            ))
          )}

          {items.length != 0 ? (
            <>
              <br />
              <br />
              <a
                href="/account/address/add"
                className="tf-btn large outline-dashed mb-15"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={20}
                  height={20}
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <g clipPath="url(#clip0_1261_17247)">
                    <path
                      d="M19.0813 10.0007L19.9587 7.71211C20.0549 7.45962 19.9799 7.17339 19.7687 7.00216L17.8663 5.45976L17.4814 3.03868C17.4389 2.7712 17.2289 2.56246 16.9614 2.51996L14.5403 2.13499L12.9992 0.231369C12.8292 0.0201334 12.5367 -0.0548614 12.2905 0.041382L10.0006 0.920072L7.71204 0.0426319C7.4583 -0.0548614 7.17457 0.0226333 7.00334 0.232619L5.46094 2.13624L3.03986 2.52121C2.77362 2.56371 2.56364 2.7737 2.52114 3.03993L2.13617 5.46101L0.232549 7.00341C0.0225629 7.17339 -0.0536819 7.45962 0.0425615 7.71211L0.920002 10.0007L0.0425615 12.2893C-0.0549318 12.5418 0.0225629 12.828 0.232549 12.998L2.13617 14.5391L2.52114 16.9602C2.56364 17.2277 2.77237 17.4377 3.03986 17.4802L5.46094 17.8652L7.00334 19.7675C7.17457 19.98 7.4608 20.055 7.71329 19.9575L10.0006 19.0813L12.2892 19.9588C12.3617 19.9863 12.4367 20 12.513 20C12.6967 20 12.8779 19.9188 12.9992 19.7675L14.5403 17.8652L16.9614 17.4802C17.2289 17.4377 17.4389 17.2277 17.4814 16.9602L17.8663 14.5391L19.7687 12.998C19.9799 12.8268 20.0549 12.5418 19.9587 12.2893L19.0813 10.0007Z"
                      fill="#033F38"
                    />
                    <path
                      d="M8.1256 8.7517C7.09192 8.7517 6.25073 7.9105 6.25073 6.87683C6.25073 5.84315 7.09192 5.00195 8.1256 5.00195C9.15928 5.00195 10.0005 5.84315 10.0005 6.87683C10.0005 7.9105 9.15928 8.7517 8.1256 8.7517ZM8.1256 6.25187C7.78063 6.25187 7.50065 6.53185 7.50065 6.87683C7.50065 7.2218 7.78063 7.50178 8.1256 7.50178C8.47058 7.50178 8.75056 7.2218 8.75056 6.87683C8.75056 6.53185 8.47058 6.25187 8.1256 6.25187Z"
                      fill="#FAFAFA"
                    />
                    <path
                      d="M11.8756 15.0007C10.8419 15.0007 10.0007 14.1595 10.0007 13.1258C10.0007 12.0922 10.8419 11.251 11.8756 11.251C12.9093 11.251 13.7505 12.0922 13.7505 13.1258C13.7505 14.1595 12.9093 15.0007 11.8756 15.0007ZM11.8756 12.5009C11.5319 12.5009 11.2506 12.7821 11.2506 13.1258C11.2506 13.4696 11.5319 13.7508 11.8756 13.7508C12.2193 13.7508 12.5006 13.4696 12.5006 13.1258C12.5006 12.7821 12.2193 12.5009 11.8756 12.5009Z"
                      fill="#FAFAFA"
                    />
                    <path
                      d="M6.87538 15.001C6.74914 15.001 6.62289 14.9635 6.5129 14.8847C6.23167 14.6835 6.16667 14.2935 6.36791 14.0123L12.6175 5.2629C12.8187 4.98167 13.2087 4.91668 13.4899 5.11791C13.7712 5.3179 13.8349 5.70912 13.6349 5.9891L7.38534 14.7385C7.2616 14.9097 7.07037 15.001 6.87538 15.001Z"
                      fill="#FAFAFA"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_1261_17247">
                      <rect width={20} height={20} fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                اضافه کردن آدرس جدید
              </a>
              <div className="mb-15 pt-90">
                <a
                  onClick={() => handleClick()}
                  className="tf-btn large primary"
                >
                  {postCode
                    ? `انتخاب آدرس به کدپستی ${postCode} و ادامه خرید`
                    : "انتخاب آدرس و ادامه خرید"}
                </a>
              </div>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
