import React from "react";

const ButtomNavigation = () => {
  return (
    <div className="menubar-footer footer-fixed">
      <ul className="inner">
        <li id="a">
          <a href="/account/">
            <span className="icon-home" /> خانه
          </a>
        </li>
        <li id="b">
          <a href="/account/address/">
            <span className="icon-discovery" /> آدرس ها
          </a>
        </li>
        <li id="c">
          <a href="/account/orders">
            <span className="icon-buy" />
            سفارشات
          </a>
        </li>
        <li id="d">
          <a href="/account/bakeries">
            <span className="icon-heart" />
            نانوایی ها
          </a>
        </li>
        <li id="e">
          <a href="/account/profile">
            <span className="icon-profile" /> پروفایل
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ButtomNavigation;
