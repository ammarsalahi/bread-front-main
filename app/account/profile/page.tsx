"use client";
import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import { useStore } from "@/store/useStore";
const apiUrl = process.env.NEXT_PUBLIC_API_URL;
export default function Home() {
  const router = useRouter();

  const { mobileNumber, nationalCode, token, userName, balance, setBalance } =
    useStore();
  const [name, setName] = useState("");
  const [mel, setMel] = useState("");
  const getbreads = async () => {
    try {
      const response = await fetch(`${apiUrl}/me/dash`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const data = await response.json();
        setBalance(data.me.balance);
        setMel(data.me.melli);
        setName(data.me.name);
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
      getbreads();
    }
  }, [token, router]);

  const dologout = () => {
    Cookies.remove("token");
    window.location.href = "/auth/login";
    // router.push("/auth/login");
  };
  return (
    <div className="app profile pb-90">
      <div className="title-header-bar fixed-top bg-white">
        <a href="/account/" className="back-btn">
          <i className="icon-right" />
        </a>
        <h1>پروفایل</h1>
      </div>
      <div className="tf-container pt-80">
        <div className="box-profile">
          <div className="img">
            <img src={`https://fakeimg.pl/100x100?text=+`} alt="تصویر" />
          </div>
          <div className="info">
            {/* <h3>الئونور پنا</h3> */}
            <h3>{name} </h3>
            <span>{mel} </span>
          </div>
        </div>

        <ul className="mt-30">
          <li>
            <a className="list-view line pb-16">
              {/* <i className="icon icon-profile" /> */}
              <span> موجودی کیف پول : {balance} تومان</span>
              <br />
              <br />
            </a>
          </li>
          <li>
            <a href="/account/profile/edit" className="list-view line pb-16">
              <i className="icon icon-profile" />
              <span> ویرایش پروفایل</span>
              <i className="icon-left" />
            </a>
          </li>
          <li>
            <a href="tel:+989981984213" className="list-view line pt-16 pb-16">
              <i className="icon icon-card-num" />
              <span> تماس با پشتیبانی</span>
              <i className="icon-left" />
            </a>
          </li>
          <li>
            <a href="/account/about" className="list-view pt-16">
              <i className="icon icon-location" />
              <span>درباره این برنامه</span>
              <i className="icon-left" />
            </a>
          </li>
        </ul>

        <a onClick={() => dologout()} className="list-view mt-50">
          <i className="icon icon-logout" />
          <span> خروج ({mobileNumber})</span>
          {/* <i className="icon-left" /> */}
        </a>
      </div>
    </div>
  );
}
