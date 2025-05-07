"use client";
import React, { useEffect } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useStore } from "@/store/useStore";
const apiUrl = process.env.NEXT_PUBLIC_API_URL;
export default function Home() {
  const router = useRouter();

  const { mobileNumber, nationalCode, token, userName, balance, setBalance } =
    useStore();

  return (
    <div className="app profile pb-90">
      <div className="title-header-bar fixed-top bg-white">
        <a href="/account/profile" className="back-btn">
          <i className="icon-right" />
        </a>
        <h1>درباره این برنامه</h1>
      </div>
      <div className="tf-container pt-80">
        <div className="box-profile">
          {/* <div className="img">
            <img src="/images/3.png" style={{ width: 100 }} alt="تصویر" />
          </div> */}
          <div className="info">
            <h3> صفینو . نسخه 1.2.0</h3>
            <br />
            <p className="text-gray-600 dark:text-gray-400 text-right text-xs font-normal">
              با صفینو، شما می‌توانید انواع نان ایرانی از جمله نان بربری، نان
              سنگک، نان لواش و نان تافتون را به صورت آنلاین سفارش دهید. تنها با
              چند کلیک، نان تازه و داغ درب منزل شما خواهد بود.
            </p>
            <p className="text-gray-600 dark:text-gray-400 text-right text-xs font-normal">
              ویژگی‌های اپلیکیشن صفینو:
              <br />
              سفارش آسان و سریع: با رابط کاربری ساده و دوستانه صفینو، سفارش نان
              هرگز به این راحتی نبوده است.
              <br />
              تنوع در نان‌ها: انواع مختلف نان‌های سنتی ایرانی در دسترس شماست.
              <br />
              تحویل درب منزل: نان‌های سفارش داده شده به سرعت و با کیفیت بالا به
              درب منزل شما تحویل داده می‌شوند.
              <br />
              پشتیبانی 24/7: تیم پشتیبانی صفینو همیشه آماده پاسخگویی به سوالات و
              مشکلات شماست.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
