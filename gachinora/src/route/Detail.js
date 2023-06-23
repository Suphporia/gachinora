import React from "react";
import Bar, { Layout } from "../components/Bar";
import img from "../playgroundImg/playground1.jpg";
import tw from "tailwind-styled-components";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import Review from "../components/detailComponents/Review";
import Map from "../components/detailComponents/Map";
import Picture from "../components/detailComponents/Picture";
import Chat from "../components/detailComponents/Chat";
import { cls } from "../lib/utils";

const Item = tw.div`
p-3
border-l
w-full
text-center
hover:text-mainColor 
cursor-pointer font-bold text-textAssisColor 
`;
const Detail = () => {
  const location = useLocation();
  const match = location.pathname.split("/")[3];
  return (
    <Layout>
      <Bar />
      <div className="text-textColor shadow-lg">
        <img src={img} className="w-full h-80  object-cover " />
        <div className="px-44 bg-bgColor w-full pt-2 pb-5">
          <div className="flex justify-between">
            <span className="text-xl font-bold ">
              서울시 송파구 송파 2동 놀이터
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1"
              stroke="currentColor"
              className="w-5 h-5 md:w-10 md:h-10 text-mainColor hover:fill-mainColor cursor-pointer"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>
          </div>
          <div className="text-textAssisColo flex space-x-2 text-textAssisColor">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 "
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>
            <span>서울시 송파구 송파2동 잠실대로 11길 1</span>
          </div>
          <div className="mt-3 flex space-x-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              class="w-6 h-6 text-yellow-300 "
            >
              <path
                fill-rule="evenodd"
                d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                clip-rule="evenodd"
              />
            </svg>
            <div>
              <span>4.86</span>
              <span>/5</span>
            </div>
          </div>
        </div>
        <div className="px-44 bg-white rounded-t-lg flex justify-between ">
          <Item className={cls(match === "review" ? "text-mainColor" : "")}>
            <Link to="review">리뷰</Link>
          </Item>
          <Item className={cls(match === "map" ? "text-mainColor" : "")}>
            <Link to="map">지도</Link>
          </Item>
          <Item className={cls(match === "picture" ? "text-mainColor" : "")}>
            <Link to="picture">사진</Link>
          </Item>
          <Item
            className={cls(
              "border-r",
              match === "chat" ? "text-mainColor" : ""
            )}
          >
            <Link to="chat">채팅</Link>
          </Item>
        </div>
      </div>
      <Routes>
        <Route path="/review" element={<Review />} />
        <Route path="/map" element={<Map />} />
        <Route path="/picture" element={<Picture />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </Layout>
  );
};

export default Detail;
