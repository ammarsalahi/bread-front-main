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
type Day = {
  date: string;
  name: string;
};
export default function Home() {
  const router = useRouter();

  const {
    token,
    selected_bread,
    selected_bread_type,
    new_selected_bread_shop_name,
    new_selected_bread_shop,
    selected_bread_shop,
    selected_bread_shop_name,
    eachprice,
    selected_qty,
    new_selected_day_name,
    new_selected_day,
  } = useStore();
  const [items, setItems] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [totalPrice, setTotalPrice] = useState(eachprice);
  const [days, setDays] = useState([]);
  const [dayName, setDayName] = useState("");
  const [dayDate, setDayDate] = useState("");

  const checkBakery = async (bakery_id: number, date: string) => {
    try {
      const response = await fetch(
        `${apiUrl}/me/selectbakery/${bakery_id}/${date}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.ok) {
        const data = await response.json();
        if (data.error == true) {
          toast.error(
            data.message || "انتخاب این نانوایی در این روز امکان پذیر نمیباشد",
            {
              position: "top-center",
              autoClose: 3000,
              theme: "colored",
            }
          );
          // router.push("/account/qty");
          setDayDate("");
          setDayName("");
        } else {
          // new_selected_bread_shop(data.bakery_id);
          // new_selected_bread_shop_name(data.bakery_name);
          // router.push("/account/qty");
        }

        // setItems(data?.breadshops || []);
        setItems(
          data?.breadshops.filter(
            (breadshop: any) => breadshop.bread_id === selected_bread_type
          ) || []
        );
      } else {
        console.error(
          "Error response from API:",
          response.status,
          response.statusText
        );
      }
    } catch (err) {
      console.error("Error during check api:", err);
    }
  };
  const handleselectday = (day, name) => {
    // TODO:: check backend for conflict or past time or past the last perios
    setDayDate(day);
    setDayName(name);
    // alert(day);
    checkBakery(selected_bread_shop, day);

    // router.push("/account/daytime");
  };

  const handleClick = () => {
    // TODO:: check backend for conflict or past time or past the last perios
    if (dayDate != "" && dayName != "") {
      new_selected_day(dayDate);
      new_selected_day_name(dayName);
      router.push("/account/daytime");
    } else {
      console.log("no day selected");
      toast.error("خطا: هیچ روزی را انتخاب نکرده اید", {
        position: "top-center",
        autoClose: 3000,
      });
    }
  };

  const getcalendar = async () => {
    try {
      const response = await fetch(`${apiUrl}/calendar2`, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      if (response.ok) {
        setDays(data.items);
      }
    } catch (err) {
      console.error("Error:", err);
    }
  };

  useEffect(() => {
    if (token) {
      getcalendar();
    }
  }, [token]);
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
            <a href="/account/qty" className="back-btn primary">
              <i className="icon-right" />
            </a>
          </div>
        </div>
      </div>
      <div className="app">
        <div className="banner-wrapper  ">
          <img
            src="/images/4.jpg"
            // height="50px"
            alt="تصاویر"
            className="banner-img1 "
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
            <h4 className="pt-24">انتخاب تاریخ دریافت نان</h4>

            <div className="sec-size mt-30 mb-30">
              <ul className="mt-12">
                {days.map((day: Day, index) => (
                  <li
                    className="size-item pb-12"
                    key={index}
                    onClick={() => handleselectday(day.date, day.name)}
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
                      {day.name}
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
                      {day.date}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className=" ">
              <a onClick={() => handleClick()} className="tf-btn large primary">
                <i className="icon-buy" /> تایید انتخاب روز {dayName} {dayDate}{" "}
                و ادامه خرید
              </a>
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
