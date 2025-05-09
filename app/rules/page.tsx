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
        <a href="/auth/login" className="back-btn">
          <i className="icon-right" />
        </a>
        <h1>قوانین و مقررات</h1>
      </div>
      <div className="tf-container pt-80">
        <div className="box-profile">
          {/* <div className="img">
            <img src="/images/3.png" style={{ width: 100 }} alt="تصویر" />
          </div> */}
          <div className="info">
            <h3> صفینو . نسخه 1.2.0</h3>
            <br />
            <div className="p-4 text-right  leading-relaxed space-y-4">
              <p>
                صفینو با تاکید بر احترامی که برای حریم شخصی کاربران قائل است،
                برای سفارش یا ثبت نظر اطلاعاتی را از کاربران درخواست می‌کند تا
                بتواند خدماتی امن و مطمئن ارائه دهد. برای نمونه می توان به نام،
                نشانی، نشانی الکترونیک (ایمیل)، شماره تلفن و سایر اطلاعاتی که به
                صورت عادی در دسترس عموم مردم نیست اشاره نمود. لازم به ذکر است
                آدرس ایمیل و تلفن‌هایی که مشتری در پروفایل خود ثبت می‌کند، تنها
                آدرس ایمیل و تلفن‌های رسمی و مورد تایید مشتری است و تمام مکاتبات
                و پاسخ‌های شرکت از طریق آنها صورت می‌گیرد. شما با ثبت نام در
                صفینو مشخصات خود از قبیل نام و نام خانوادگی، تلفن تماس و … را در
                اختیار صفینو قرار می دهید. در ادامه برای انجام تراکنش و ثبت
                سفارش نیاز به اضافه کردن مشخصات آدرس خود خواهید داشت. شما پس از
                ثبت نام در اپلیکیشن، به عنوان کاربر صفینو شناخته خواهید شد و
                کلیه اطلاعات مذکور و اطلاعاتی مانند تراکنش ها، پرداخت ها و...
                نیز در اختیار صفینو خواهد بود. طبیعتا مسئولیت هرگونه سوء استفاده
                به شخص یا اشخاص متخلف مربوط بوده و صفینو حق اعتراض و پیگیری را
                از طریق قانونی بنابر صلاحدید خود محفوظ میدارد. شما می توانید
                کلیه اطلاعات شخصی خود را در بخش پروفایل تغییر داده و ویرایش
                کنید. این اطلاعات شامل کلیه اطلاعاتی است که شما در اپلیکیشن
                صفینو وارد کرده اید. صفینو ممکن است نقد و نظرهای ارسالی کاربران
                را در راستای رعایت قوانین وب سایت ویرایش کند. همچنین اگر نظر یا
                پیام ارسال شده توسط کاربر، مشمول مصادیق محتوای مجرمانه باشد،
                صفینو می‌تواند از اطلاعات ثبت شده برای پیگیری قانونی استفاده
                کند. کاربران ضمن استفاده از خدمات اپلیکیشن، حق ویرایش اطلاعات و
                استفاده از آنها را در چارچوب فوق الذکر به صفینو اعطاء نموده و حق
                اعتراض را از خود سلب مینمایند. باید تاکید شود که حفظ و نگهداری
                رمز عبور و نام کاربری بر عهده کاربران است و لذا برای جلوگیری از
                هرگونه سوء استفاده احتمالی، کاربران نباید آن اطلاعات را برای شخص
                دیگری فاش کنند. در صورتی که کاربر شماره همراه خود را به فردی
                دیگر واگذار کرد، جهت جلوگیری از سواستفاده یا مشکلات احتمالی
                کاربران باید شماره موبایل خود را در پروفایل تغییر داده و شماره
                جدیدی ثبت نمایند. مسئولیت هرگونه خسارت احتمالی که ناشی از عدم
                رعایت موارد فوق الذکر توسط کاربر باشد، با خود کاربر بوده وکاربر
                حق هر گونه ادعا علیه صفینو را از خود سلب میکند. صفینو هویت شخصی
                کاربران را محرمانه می‌داند و اطلاعات شخصی آنان را به هیچ شخص یا
                سازمان دیگری منتقل نمی‌کند، مگر اینکه با حکم مقام قضائی یا طبق
                قوانین و مقررات رایج کشور موظف باشد در اختیار مراجع ذی‌صلاح قرار
                دهد.در این موارد هیچ گونه مسئولیت قانونی مبنی بر جبران خسارت
                برای صفینو وجود ندارد و کاربران با اعلام رضایت خود در استفاده از
                خدمات وب سایت ضمنا حق هرگونه اعتراض را از خود سلب نموده اند.
                صفینو برای حفاظت و نگهداری اطلاعات و حریم شخصی کاربران همه توان
                خود را به کار می‌گیرد و امیدواریم که تجربه‌ی سفارشی امن، راحت و
                خوشایند را برای همه کاربران فراهم آوریم.
              </p>

              <p>
                درصورتی که فرایند پرداخت آنلاین شما دچار مشکل شود و وجه کسر شده
                از حساب بانکی شما به سایت پذیرنده (صفینو اَپ) منتقل نشود، یک
                تراکنش یا پرداخت ناموفق صورت گرفته است که این مبلغ کسر شده با
                بررسی توسط درگاه انتخاب شده به حساب شما برگشت می‌خورد. (این
                فرایند نهایتا ۷۲ ساعت کاری زمان می‌برد و درصورتی که بعد از گذشت
                این زمان، وجه به حساب شما برگشت داده نشد، می‌توانید با شماره
                تماسی که پشت کارت بانکی شما درج شده تماس بگیرید و این موضوع را
                بررسی کنید)
              </p>

              <p>
                در صورتی که سفارش شما با موفقیت ثبت شد حداکثر تا دوازده ساعت قبل
                از بازه زمانی دریافت نان مهلت دارید سفارش را لغو کنید و وجه
                پرداختی به اعتبار شما در اپلیکیشن صفینو افزوده می شود.
              </p>

              <p>
                چنانچه پیک صفینو نتوانست در بازه زمانی مقرر، سفارش شما را به محل
                دریافت سفارش برساند، شما می توانید تیم پشتیبانی صفینو را از این
                موضوع مطلع سازید و نسبت به عودت وجه پرداختی اقدام نمایید. این
                وجه در صورت تایید تیم پشتیبانی صفینو به اعتبار حساب شما در
                اپلیکیشن صفینو افزوده خواهد شد.
              </p>
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
