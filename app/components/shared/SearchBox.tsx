import React from "react";

const SearchBox = () => {
  return (
    <div className="search-box">
      <a
        href="search-result-02.html"
        className="icon-filter-3"
        data-bs-toggle="modal"
        data-bs-target="#addCardActionSheet2"
      />
      <input type="text" placeholder="قهوه خود را جستجو کنید..." />
      <span style={{ color: "#033f38" }} className="icon icon-search" />
    </div>
  );
};

export default SearchBox;
