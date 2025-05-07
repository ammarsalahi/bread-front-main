"use client";
// import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useStore } from "@/store/useStore";
// import { ToastContainer, toast } from "react-toastify";
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

  const handleDelete = async (address_id: any) => {
    try {
      const response = await fetch(`${apiUrl}/me/addresses/${address_id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (response.ok) {
        console.log(data);
        console.log(data);
        console.log(data);
        getbakeries();
        // setAllData(data.addresses)
        // setUserProfile(data);
      } else {
        //
      }
    } catch (err) {
      console.error("Error:", err);
    } finally {
      // setIsLoading(false);
    }
  };

  return (
    <div>
      <div className="pt-80 pb-70">
        <div className="tf-container">
          {items.length != 0 ? (
            <>
              <div className="img-location text-center pt-17">
                <img src="/images/logo/lo1.png" alt="تصویر" />
              </div>
              <h2 className="text-center mt-30">آدرس های من </h2>
              <p className="text-center mt-10 t-paragraph">
                در این قسمت تمام آدرس های خود را مشاهده می نمایید
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
             

<>
<div className="form-check-lo mt-6 md:mt-8 lg:mt-10 p-4 sm:p-6" key={index}>
  <div className="icon mb-2 sm:mb-4">
    <i className="icon-location text-xl sm:text-2xl" />
  </div>
  <div className="content-send">
    <h4 className="text-sm sm:text-base md:text-lg lg:text-xl">
      {address.city} - {address.address1}  
    </h4>
    <span className="text-xs sm:text-sm md:text-base lg:text-lg">
      شماره تحویل گیرنده : {address.mobile} - کد پستی {address.postal_code}
    </span>
  </div>
  <div
    className="absolute left-2 ml-5   bg-red-500 text-white p-1 rounded-lg font-bold cursor-pointer sm:left-10 sm:ml-20 sm:mt-10"
    onClick={() => handleDelete(address.id)}
  >
    حذف    
  </div>
</div>
</>
            ))
          )}

          {items.length != 0 ? (
            <>
              <br />
              <br />

              <div className="mb-15 pt-90">
                <a href="/account/address/add" className="tf-btn large primary">
                  اضافه کردن آدرس جدید
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
