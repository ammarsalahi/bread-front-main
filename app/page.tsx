import React from "react";

const CenteredLayout = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100 font-sans">
      <div className="flex flex-col md:flex-row w-4/5 max-w-5xl">
        <div className="flex-1 mb-6 md:mb-0 md:mr-10 -mt-10">
          <img src="/images/3.png" alt="تصویر نان" className="w-full" />
        </div>
        <div className="flex-1">
          <div className="mb-5">
            <h3 className="text-2xl font-bold text-gray-800 mb-3 font-[PelakFA]">
              تحویل آنلاین نان تازه
            </h3>
          </div>
          <div className="mb-5">
            <p className="text-base text-gray-600 font-[PelakFA]">
              با صفینو، نان تازه و گرم را به راحتی درب منزل خود تحویل بگیرید.
            </p>
          </div>
          <div>
            <a
              href="/account/"
              className="inline-block bg-teal-500 text-white py-3 px-6 rounded-lg text-sm font-[PelakFA] hover:bg-teal-600 transition"
            >
              ورود به صفینو
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CenteredLayout;
