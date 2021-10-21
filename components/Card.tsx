import React from "react";
import Link from "next/link";

const Card = ({ item }: any) => {
  return (
    <div className="h-100 rounded-lg   max-w-sm shadow-lg     xs:border-2 bg-white  dark:border-white dark:border-2 ">
      <img
        className=" rounded-t-lg  w-full h-48  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-100"
        src={item.image}
        alt=""
      />
      <div className="border-b-2 mx-2">
        <p className="text-indigo-500  text-md font-semibold text-base m-2 pt-2 ">
          {item.course}
        </p>
        <p className=" font-semibold text-xs mx-2  -mt-1  dark:text-black">
          <span>Duration : </span> {item.duration} years
        </p>
        <h1 className="font-normal  h-12 text-gray-500  text-sm  capitalize m-2  ">
          {item.content}
        </h1>
      </div>
      <Link href={`/course/${item.id}`}>
        <button
          className="py-1 px-5  m-4 bg-transparent border-2
                 border-blue-500 text-blue-500 text-lg rounded-lg hover:bg-blue-500 hover:text-gray-100 focus:border-4 focus:border-blue-300"
        >
          Details
        </button>
      </Link>
    </div>
  );
};

export default Card;
