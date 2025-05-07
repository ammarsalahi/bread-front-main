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
  quantity?: number;
  bread_name?: string;
  breadshop_name?: string;
  day_name?: string;
  day?: string;
  hour?: string;
  created_at?: string;
  address_name?: string;
  status?: string;
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
        setItems(data.orders || []);
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
  // TODO:: there should be a bug in backend if user manually call the refound
  const statusTexts = {
    not_paid: "پرداخت نشده",
    // paid: "پرداخت شده",
    paid: "ثبت شده",
    // accepted: "پذیرفته شده",
    // rejected: "رد شده",
    // queue: "در صف",
    // sent: "ارسال شده",
    delivered: "تحویل شده",
    // timeout: "پایان زمان",
    // issue: "مشکل",
    cancelled: "لغو شده",
  };

  const handleCancelBTNVisibility = (status: string, id: string) => {
    if (status == "paid") {
      return (
        <div className="cancel-button" onClick={() => handlecancel(id)}>
          لعو این سفارش
        </div>
      );
    } else {
      return "";
    }
  };

  const handlecancel = async (order_id) => {
    try {
      const response = await fetch(`${apiUrl}/me/orders/cancel/${order_id}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await response.json();

      if (response.ok) {
        toast.success("سفارش شما لغو شد", {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
        console.log(data);
        getbakeries();
        console.log(data);
        console.log(data);
      } else {
        //
        toast.error(data.message, {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
        });
      }
    } catch (err) {
      console.error("Error:", err);
    } finally {
      // setIsLoading(false);
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
      <div className="pt-80 pb-70">
        <div className="tf-container">
          {items.length != 0 ? (
            <>
              {/* <div className="img-location text-center pt-17">
                <img src="/images/logo/lo1.png" alt="تصویر" />
              </div> */}
              <h2 className="text-center mt-30">سفارش های من </h2>
              <p className="text-center mt-10 t-paragraph">
                در این قسمت تمام سفارش های خود را مشاهده می نمایید
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
                  {/* <div className="bg-payment">
                    <img src="/images/background/payment.jpg" alt="تصویر" />
                  </div> */}
                  <h2 className="text-center">
                    هنوز هیچ سفارشی ثبت نکرده اید{" "}
                  </h2>
                  <p className="mt-10 text-center">
                    به نظر می‌رسد که هنوز سفارشی ندارید. ابتدا سفارش جدید ثبت
                    کنید
                  </p>
                </div>
              </div>
            </center>
          ) : (
            items.map((address, index) =>
              address.status == "paid" ||
              address.status == "delivered" ||
              address.status == "cancelled" ? (
                <div className="form-check-lo mt-30" key={index}>
                  {/* <div className="icon hidden md:visible">
    <i className="icon-location  hidden md:visible" />
  </div> */}
                  <div className="content-send">
                    <h2>
                      {address.quantity} عدد نان {address.bread_name} از نانوایی{" "}
                      {address.breadshop_name} با شماره سفارش {address.id}
                    </h2>
                    <h4>
                      تاریخ تحویل : {address.day_name} {address.day} در بازه
                      زمانی {address.hour}
                    </h4>
                    <h5>تحویل به آدرس : {address.address_name}</h5>

                    <span>زمان ثبت : {address.created_at} </span>
                    <span>
                      وصعیت :{" "}
                      {statusTexts[
                        address.status as keyof typeof statusTexts
                      ] || "نامشخص"}
                    </span>
                  </div>

                  {handleCancelBTNVisibility(address?.status || "", address.id)}
                  {/* {address.status == "cancelled" ? (
                  ""
                ) : (
                  <div
                    className="cancel-button"
                    onClick={() => handlecancel(address.id)}
                  >
                    لعو این سفارش
                  </div>
                )} */}
                </div>
              ) : (
                ""
              )
            )
          )}
        </div>
      </div>
    </div>
  );
}
