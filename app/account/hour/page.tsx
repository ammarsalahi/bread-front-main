"use client";
import HeaderIndex from "@/app/components/shared/HeaderIndex";
import NormalList from "@/app/components/shared/NormalList";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useStore } from "@/store/useStore";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BakeryList from "@/app/components/shared/BakeryList";
const apiUrl = process.env.NEXT_PUBLIC_API_URL;
interface Settings {
  morning_hours?: { value: string };
  evening_hours?: { value: string };
}

interface ApiResponse {
  hours?: string;
}
export default function Home() {
  const router = useRouter();

  const {
    token,
    selected_bread,
    selected_bread_type,
    new_selected_bread_shop_name,
    new_selected_bread_shop,
    selected_bread_shop_name,
    eachprice,
    selected_qty,
    selected_day_name,
    selected_day,
    selected_daytime,
    new_selected_hour,
  } = useStore();
  const [items, setItems] = useState<string[] | string>("");
  const [timeRanges, setTimeRanges] = useState<string[]>([]);
  const [time, setTime] = useState("");
  const [isEmpty, setIsEmpty] = useState(false);
  const getbakeries = async () => {
    try {
      const response = await fetch(
        `${apiUrl}/me/hour/${selected_daytime}/${selected_day}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        // setItems(data?.breadshops || []);
        setItems(data.hours);
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

  useEffect(() => {
    if (items) {
      if (typeof items === "string") {
        const handler = items.split(",");
        setTimeRanges(handler); // Split string into an array
        if (handler.length === 0) {
          setIsEmpty(true);
        }
      } else if (Array.isArray(items)) {
        setTimeRanges(items); // Use array as-is
        if (items?.length === 0) {
          setIsEmpty(true);
        }
      } else {
        setTimeRanges([]); // Default to an empty array for safety
      }
    }
  }, [selected_daytime, items]);

  //
  const handleTime = (timerr) => {
    setTime(timerr);
  };
  const handleClick = () => {
    if (time === "") {
      toast.error("خطا: هیچ ساعتی را انتخاب نکرده اید", {
        position: "top-center",
        autoClose: 3000,
      });
    } else {
      // TODO:: check backend for conflict or past time or past the last perios
      new_selected_hour(time);
      router.push("/account/selectaddress");
    }
  };

  const get_selected_daytime = () => {
    if (selected_daytime == "morning") {
      return "صبح";
    } else if (selected_daytime == "evening") {
      return "عصر";
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
      <div className="header absolute">
        <div className="tf-container">
          <div className="d-flex justify-between mt-15 align-center">
            <a href="/account/daytime" className="back-btn primary">
              <i className="icon-right" />
            </a>
          </div>
        </div>
      </div>
      <div className="app">
        <div className="banner-wrapper">
          <img
            src="/images/4.jpg"
            alt="تصاویر"
            className="banner-img1"
            style={{ height: "200px" }}
          />
        </div>
        <div className="title-detail-section">
          <div className="tf-container">
            <div className="title-detail st1">
              <div className="content">
                <h2>
                  <a href="#" className="text-primary">
                    {selected_bread}
                  </a>
                </h2>
                <ul className="review">
                  <li className="text">
                    {/* <i className="icon-star" /> */}
                    <span className="text-primary">{selected_qty}</span>&nbsp;
                    (عدد)
                  </li>
                  <li className="dot-icon st1"></li>
                  <li className="text"> از {selected_bread_shop_name} </li>
                  <li className="dot-icon st1"></li>
                  <li className="text">
                    {" "}
                    در {selected_day_name} {selected_day}
                  </li>
                  <li className="dot-icon st1"></li>
                  <li className="text"> نوبت {get_selected_daytime()}</li>
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
            <h4 className="pt-24">انتخاب نوبت دریافت نان</h4>

            <div className="sec-size mt-30 mb-30">
              <ul className="mt-12">
                {timeRanges.map((range, index) => (
                  <li
                    className="size-item pb-12"
                    key={index}
                    onClick={() => handleTime(range)}
                  >
                    <input
                      className="form-check-input"
                      type="radio"
                      name="checkSize"
                      id={`checkSize1${index}`}

                      // defaultChecked={index === 1}
                    />
                    <label
                      className="form-check-label st2"
                      htmlFor={`checkSize1${index}`}
                      onClick={() => {
                        const element = document.getElementById(
                          `checkSize1${index}`
                        );
                        if (element) element.click();
                      }}
                    />
                    <p
                      onClick={() => {
                        const element = document.getElementById(
                          `checkSize1${index}`
                        );
                        if (element) element.click();
                      }}
                    >
                      {" "}
                      {range}
                    </p>
                    <a
                      href="#"
                      className="text"
                      onClick={() => {
                        const element = document.getElementById(
                          `checkSize1${index}`
                        );
                        if (element) element.click();
                      }}
                    >
                      {range}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className=" ">
              {isEmpty ? (
                <>
                  <div className="tf-btn large  ">
                    <i className="icon-buy" />
                    تحویل در تاریخ انتخابی شما امکان پذیر نمیباشد
                  </div>
                  <br />
                  <br />
                  <a href="/account/daytime" className="tf-btn large primary">
                    <i className="icon-buy" /> بازگشت
                  </a>
                </>
              ) : (
                <a
                  onClick={() => handleClick()}
                  className="tf-btn large primary"
                >
                  <i className="icon-buy" /> تایید انتخاب بازه زمانی تحویل{" "}
                  {time.replace("-", " الی ")} و ادامه خرید
                </a>
              )}
            </div>
            <br />
            <br />
            <br />
            <br />
            <br />
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
