import React from "react";

const refine = (mydata: string) => {
  if (mydata == null) return "نامشخص";
  const cc = mydata.replaceAll(" ", " و ");
  return cc + " هر ماه";
};
const BakeryList = ({ title, items, handleClick }) => {
  return (
    <div className="section">
      <div className="title-bar mb-12">
        <h2>{title}</h2>
        {/* <a href="#" data-bs-toggle="modal" data-bs-target="#modalRightFull">
          مشاهده همه <i className="icon-left" />
        </a> */}
      </div>
      <ul>
        {items?.map((item: any, index: number) => (
          <li className="tf-box-row mb-12" key={index}>
            <a onClick={() => handleClick(item)} className="img-box">
              <img
                src={`https://fakeimg.pl/100x100?text=+`}
                // alt={item.name}
              />
            </a>
            <div className="content-box ">
              <h4>
                <a onClick={() => handleClick(item)}>{item.name}</a>
              </h4>
              <ul className="review">
                {/* <li className="dot-icon"></li> */}

                <li>
                  روزهای تعطیل : <span>{refine(item.description)}</span>&nbsp;
                </li>
                {/* <li>
                  <i className="icon-star" />
                  <span>4.8</span>&nbsp; (125)
                </li> */}
              </ul>
              <div className="box-price">
                <ul className="review">
                  <li>{item.address}</li>
                </ul>
                <a onClick={() => handleClick(item)} className="btn-add">
                  +{/* انتخاب نان */}
                </a>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BakeryList;
