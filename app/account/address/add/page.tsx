"use client";
import React, { useState } from "react";
import dynamic from "next/dynamic";
import { useStore } from "@/store/useStore";
import { useRouter } from "next/navigation";
import { z } from "zod";
import { convertToEnglishNumbers } from "@/utils/validators";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

// Define the validation schema
const addressSchema = z.object({
  mobile: z.string().regex(/^\d{11}$/, "شماره موبایل باید ۱۱ عدد باشد"),
  postal_code: z.string().regex(/^\d{10}$/, "کد پستی باید ۱۰ عدد باشد"),
  city: z.string(),
  address1: z.string(),
  address2: z.string().optional(),
  floor: z.string().optional(),
  unit: z.string().optional(),
  plaque: z.string().optional(),
  lat: z.string(),
  lan: z.string(),
});
export default function Home() {
  const [defaultPosition, setDefaultPosition] = useState([51.505, -0.09]); // Default position (latitude, longitude)
  const [addressLine1, setAddressLine1] = useState("");
  const [addressLine2, setAddressLine2] = useState("");
  const [city, setCity] = useState("نوشهر");
  const [postalCode, setPostalCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [floor, setFloor] = useState("");
  const [plaque, setPlaque] = useState("");
  const [unit, setUnit] = useState("");
  const [isChecked, setIsChecked] = useState(true);
  const [errors, setErrors] = useState<any>({});

  const router = useRouter();
  const { token } = useStore();

  const saveData = async (e: any) => {
    e.preventDefault();

    // Create an object with form data
    const formData = {
      mobile: convertToEnglishNumbers(phoneNumber),
      city,
      postal_code: convertToEnglishNumbers(postalCode),
      address1: addressLine1,
      address2: convertToEnglishNumbers(addressLine2),
      floor: convertToEnglishNumbers(floor),
      unit: convertToEnglishNumbers(unit),
      plaque: convertToEnglishNumbers(plaque),
      lat: defaultPosition[0].toString(),
      lan: defaultPosition[1].toString(),
    };

    // Validate the form data
    const result = addressSchema.safeParse(formData);

    if (!result.success) {
      const errorMessages = result.error.errors.reduce(
        (acc: any, error: any) => {
          acc[error.path[0]] = error.message;
          return acc;
        },
        {}
      );
      setErrors(errorMessages);
      console.error("Validation failed:", result.error);
      return;
    }

    setErrors({}); // Clear errors if validation passes

    try {
      const response = await fetch(`${apiUrl}/me/addresses`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        console.log(data);
        // router.push("/account/address");
        const previousUrl = document.referrer;
  if (previousUrl.includes("selectaddress")) {
    router.push("/account/selectaddress");
  } else {
    router.push("/account/address");
  }
      } else {
        console.error("Failed to save address:", data);
      }
    } catch (err) {
      console.error("Error:", err);
    }
  };
  return (
    <div>
      <div className="header">
        <div className="tf-container">
          <div className="title-header-bar pt-20">
            <a href="/account/address" className="back-btn">
              <i className="icon-right" />
            </a>
            <h1>ثبت آدرس جدید</h1>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <div className="tf-container">
          <a className="box-profile col scan" href="#">
            {/* <div className="img">
              <img src="/images/avt/avt-large.png" alt="تصویر" />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={18}
                height={16}
                viewBox="0 0 18 16"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M13.5337 3.197C13.567 3.25527 13.6253 3.29689 13.7003 3.29689C15.7003 3.29689 17.3337 4.92841 17.3337 6.92619V11.8707C17.3337 13.8685 15.7003 15.5 13.7003 15.5H4.30033C2.29199 15.5 0.666992 13.8685 0.666992 11.8707V6.92619C0.666992 4.92841 2.29199 3.29689 4.30033 3.29689C4.36699 3.29689 4.43366 3.2636 4.45866 3.197L4.50866 3.09711C4.53739 3.03665 4.56687 2.97455 4.5968 2.9115C4.80999 2.46246 5.04585 1.96567 5.19199 1.6737C5.57533 0.924528 6.22533 0.508324 7.03366 0.5H10.9587C11.767 0.508324 12.4253 0.924528 12.8087 1.6737C12.9399 1.93592 13.1399 2.35833 13.3326 2.76545C13.3724 2.84942 13.4119 2.93274 13.4503 3.01387L13.5337 3.197ZM12.9253 6.39345C12.9253 6.80966 13.2587 7.14262 13.6753 7.14262C14.092 7.14262 14.4337 6.80966 14.4337 6.39345C14.4337 5.97725 14.092 5.63596 13.6753 5.63596C13.2587 5.63596 12.9253 5.97725 12.9253 6.39345ZM7.55866 7.68368C7.95033 7.29245 8.45866 7.08435 9.00033 7.08435C9.54199 7.08435 10.0503 7.29245 10.4337 7.67536C10.817 8.05827 11.0253 8.56604 11.0253 9.1071C11.017 10.2225 10.117 11.1299 9.00033 11.1299C8.45866 11.1299 7.95033 10.9218 7.56699 10.5388C7.18366 10.1559 6.97533 9.64817 6.97533 9.1071V9.09878C6.96699 8.57436 7.17533 8.06659 7.55866 7.68368ZM11.3087 11.4212C10.717 12.0122 9.90033 12.3785 9.00033 12.3785C8.12533 12.3785 7.30866 12.0372 6.68366 11.4212C6.06699 10.7969 5.72533 9.98113 5.72533 9.1071C5.71699 8.2414 6.05866 7.42564 6.67533 6.80133C7.30033 6.17703 8.12533 5.83574 9.00033 5.83574C9.87533 5.83574 10.7003 6.17703 11.317 6.79301C11.9337 7.41731 12.2753 8.2414 12.2753 9.1071C12.267 10.0144 11.9003 10.8302 11.3087 11.4212Z"
                  fill="white"
                />
              </svg>
            </div> */}
          </a>
          <form onSubmit={saveData} className="mt-30">
            <div className="group-input mb-12">
              <input
                type="text"
                required
                defaultValue=""
                placeholder="آدرس"
                value={addressLine1}
                onChange={(e) => setAddressLine1(e.target.value)}
              />
              {errors.address1 && (
                <p className="text-red-500 text-xs" style={{ color: "red" }}>
                  {errors.address1}
                </p>
              )}
            </div>

            <div className="group-input mb-12">
              <select
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-1 text-sm"
                value={city}
                disabled
                onChange={(e) => setCity(e.target.value)}
              >
                <option>نوشهر</option>
              </select>
              {errors.city && (
                <p className="text-red-500 text-xs" style={{ color: "red" }}>
                  {errors.city}
                </p>
              )}
            </div>
            <div className="group-input mb-12">
              <input
                type="text"
                required
                defaultValue=""
                placeholder=" کد پستی"
                value={postalCode}
                onChange={(e) => setPostalCode(e.target.value)}
              />
              {errors.postal_code && (
                <p className="text-red-500 text-xs" style={{ color: "red" }}>
                  {errors.postal_code}
                </p>
              )}
            </div>
            <div className="group-input mb-12">
              <input
                type="text"
                required
                defaultValue=""
                placeholder="پلاک"
                value={plaque}
                onChange={(e) => setPlaque(e.target.value)}
              />
              {errors.plaque && (
                <p className="text-red-500 text-xs" style={{ color: "red" }}>
                  {errors.plaque}
                </p>
              )}
            </div>
            <div className="group-input mb-12">
              <input
                type="text"
                required
                defaultValue=""
                placeholder="واحد"
                value={unit}
                onChange={(e) => setUnit(e.target.value)}
              />
              {errors.unit && (
                <p className="text-red-500 text-xs" style={{ color: "red" }}>
                  {errors.unit}
                </p>
              )}
            </div>
            <div className="group-input mb-12">
              <input
                type="text"
                required
                defaultValue=""
                placeholder="طبقه"
                value={floor}
                onChange={(e) => setFloor(e.target.value)}
              />
              {errors.floor && (
                <p className="text-red-500 text-xs" style={{ color: "red" }}>
                  {errors.floor}
                </p>
              )}
            </div>
            <div className="group-input mb-12">
              <input
                type="text"
                required
                defaultValue=""
                placeholder="شماره موبایل تحویل گیرنده"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              {errors.mobile && (
                <p className="text-red-500 text-xs" style={{ color: "red" }}>
                  {errors.mobile}
                </p>
              )}
            </div>
            <div className="group-input mb-12">
              <input
                type="text"
                required
                defaultValue=""
                placeholder="  شماره تماس ثابت ( اختیاری )"
                value={addressLine2}
                onChange={(e) => setAddressLine2(e.target.value)}
              />
              {errors.address2 && (
                <p className="text-red-500 text-xs" style={{ color: "red" }}>
                  {errors.address2}
                </p>
              )}
            </div>
            <div className="group-input mb-12">
              <input
                className="ml-2"
                type="checkbox"
                checked={isChecked}
                onChange={() => setIsChecked(!isChecked)}
              />
              <span className="text-xs font-thin">
                متوجه هستم که تنها سفارشاتی که در محدوده بلوار امام رضا نوشهر
                باشد پذیرفته می‌شود و در غیر این صورت سفارش لغو خواهد شد.
              </span>
            </div>

            <div className="bottom-fixed btn-fixed pb">
              <div className="inner">
                <button type="submit" disabled={!isChecked}>
                  {" "}
                  ذخیره آدرس
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
