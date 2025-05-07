import React from "react";

const NormalList = ({ title, items, handleClick }) => {
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
                src={`https://cdn.safinoapp.ir/${item.image}`}
                alt={item.name}
              />
            </a>
            <div className="content-box">
              <h4>
                <a onClick={() => handleClick(item)}> {item.name}</a>
              </h4>
              {/* <ul className="review"> */}
              {/* <li> */}
              {/* <i className="icon-star" /> */}
              {/* <span>4.8</span>&nbsp; (125) */}
              {/* &nbsp; تحویل در
                </li> */}
              {/* <li className="dot-icon"></li> */}
              {/* <li>16 الی 30 دقیقه</li> */}
              {/* </ul> */}
              <div className="box-price">
                <ul className="price">
                  <li className="accent mt-4">{item.price} تومان</li>
                  {/* <li className="del">{item.price * 1.6} تومان</li> */}
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

export default NormalList;
