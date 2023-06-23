import React, { useRef, useState } from "react";
import Button from "../Button";
import { useForm } from "react-hook-form";

const 임시데이터 = {
  id: 0,
  imgNums: 1,
  star: 4,
  userName: "골목대장이투더산",
  content:
    "생각보다 정말 재밌었고 그러게요요생각보다 정말 재밌었고 그러게요요생각보다 정말 재밌었고 그러게요요생각보다 정말 재밌었고 그러게요요생각보다 정말 재밌었고 그러게요요생각보다 정말 재밌었고 그러게요요",
};

const Review = () => {
  const [userImg, setUserImg] = useState(1);
  const [starNums, setStarNums] = useState([false, false, false, false, false]);
  const [isReview, setIsReview] = useState(false);
  const btnRef = useRef();

  const { register, handleSubmit, reset } = useForm();

  const onMouseOver = (index) => {
    const newStarNums = [...starNums];

    if (newStarNums[index]) {
      for (let i = 4; i >= index; i--) {
        newStarNums[i] = false;
      }
    } else {
      for (let i = 0; i <= index; i++) {
        newStarNums[i] = true;
      }
    }
    setStarNums(newStarNums);
  };
  const onValid = (data) => {
    console.log(data);
    reset();
    setIsReview(false);
  };
  const handleKeyDown = (e) => {
    if (!e.shiftKey && e.key === "Enter") {
      e.preventDefault();
      btnRef.current.click();
    } else if (e.shiftKey && e.key === "Enter") {
      e.preventDefault();
      const textarea = e.target;
      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const value = textarea.value;
      textarea.value = value.substring(0, start) + "\n" + value.substring(end);
      textarea.selectionStart = textarea.selectionEnd = start + 1;
    }
  };
  return (
    <div className="mx-40 my-2">
      {isReview ? (
        <div className="my-5">
          <div className="flex items-center space-x-3">
            <img
              src={`/img/profileImgs/${userImg}.png`}
              className="w-12 shadow-lg rounded-full"
            />
            <span className="font-bold">{"골목쟁이투더산"}</span>
          </div>
          <div>
            <div className="flex justify-center my-2 space-x-5">
              {Array(5)
                .fill(0)
                .map((a, i) =>
                  starNums[i] ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-10 h-10 text-yellow-300 cursor-pointer"
                      onMouseOver={() => onMouseOver(i)}
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      className="w-10 h-10 text-textAssisColor cursor-pointer"
                      onMouseOver={() => onMouseOver(i)}
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                      />
                    </svg>
                  )
                )}
            </div>
            <form onSubmit={handleSubmit(onValid)}>
              <textarea
                onKeyDown={handleKeyDown}
                {...register("reviewContent")}
                className="border-2 border-mainColor rounded-md h-40 w-full outline-none p-2"
              />
              <button ref={btnRef} className="w-full">
                <Button content={"리뷰올리기"} isPerfect={true} />
              </button>
            </form>
          </div>
        </div>
      ) : (
        <div className="flex flex-col">
          <span className="text-mainColor font-bold">평가 및 리뷰</span>
          <span className="text-textAssisColor text-sm">
            다른 사용자들을 위해 리뷰를 남겨주세요!
          </span>
          <div className="py-2 flex items-center space-x-2">
            <img
              src={`/img/profileImgs/${userImg}.png`}
              className="w-12 shadow-lg rounded-full"
            />
            <div
              className="flex items-center cursor-pointer"
              onMouseOut={() => onMouseOver(0)}
              onClick={() => setIsReview(true)}
            >
              <div className="flex ">
                {Array(5)
                  .fill(0)
                  .map((a, i) =>
                    starNums[i] ? (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        className="w-6 h-6 text-yellow-300"
                        onMouseOver={() => onMouseOver(i)}
                      >
                        <path
                          fill-rule="evenodd"
                          d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    ) : (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        className="w-6 h-6 text-textAssisColor"
                        onMouseOver={() => onMouseOver(i)}
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                        />
                      </svg>
                    )
                  )}
              </div>
            </div>
          </div>
          <div className="px-3 mt-5 space-y-5">
            {Array(3)
              .fill(0)
              .map((i) => (
                <div className=" space-y-2">
                  <div className="flex items-center space-x-5">
                    <div className="flex items-center space-x-2">
                      <img
                        src={`/img/profileImgs/${임시데이터.imgNums}.png`}
                        className="w-8 shadow-xl rounded-full"
                      />
                      <span className="font-bold">{임시데이터.userName}</span>
                    </div>
                    <div className="flex items-center">
                      {Array(임시데이터.star)
                        .fill(0)
                        .map((i) => (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-6 h-6 text-yellow-300"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        ))}
                      {Array(5 - 임시데이터.star)
                        .fill(0)
                        .map((i) => (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke-width="1.5"
                            stroke="currentColor"
                            className="w-6 h-6 text-textAssisColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                            />
                          </svg>
                        ))}
                    </div>
                  </div>
                  <div className="text-textColor text-sm ">
                    {임시데이터.content}
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Review;
