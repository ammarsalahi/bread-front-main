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

export default function Home() {
  const router = useRouter();

  const {
    token,

    selected_bread_type,
    new_selected_bread_shop_name,
    new_selected_bread_shop,
  } = useStore();
  const [items, setItems] = useState([]);

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
        setItems(data?.breadshops);
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

  const handleItemClick = (item: any) => {
    console.log("clicked");
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
        <BakeryList
          title={"نانوایی های طرف قرارداد"}
          items={items}
          handleClick={handleItemClick}
        />
      </div>
    </div>
  );
}
