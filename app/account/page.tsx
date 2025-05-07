"use client";
import HeaderIndex from "@/app/components/shared/HeaderIndex";
import NormalList from "@/app/components/shared/NormalList";
import React, { useState, useEffect, useLayoutEffect } from "react";
import { useRouter } from "next/navigation";
import { useStore } from "@/store/useStore";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export default function Home() {
  const router = useRouter();

  const { token, new_selected_bread_type, new_eachprice, new_selected_bread } =
    useStore();
  const [items, setItems] = useState([]);

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
        setItems(data?.breads || []);
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

  const handleItemClick = (item: any) => {
    new_eachprice(item.price);
    new_selected_bread_type(item.id);
    new_selected_bread(item.name);
    router.push("/account/bakery", {});
  };
  return (
    <div className="app home-1">
      <HeaderIndex />
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
      <div className="tf-container pt-100 pb-70">
        {/* <SearchBox /> */}
        {/* <FilterIcon /> */}
        {/* <VerticalBigList /> */}
        {/* <VerticalSmallList /> */}
        {/* <VerticalImageList /> */}
        <NormalList
          title={"نان خود را انتخاب کنید"}
          items={items}
          handleClick={handleItemClick}
        />
      </div>
    </div>
  );
}
