import React from "react";
import { Link } from "react-router-dom";
import DetailLayout from "../details/DetailLayout";

const BookCard = ({title ,id,description , image,authors}) => {
    
  return (
    <Link to={`detail/${title}`} state={{id}} className="p-3 flex-1 rounded-lg overflow-hidden shadow-lg hover:scale-110 transition-all cursor-pointer ">

      <div className="img-wrap w-full h-52 rounded-lg overflow-hidden">
        <img
          className="h-full w-full object-cover p-2 bg-blue-200"
          src={image}
          alt=""
        />
      </div>
      <div className="content mt-2 text-center">
        <h1 className="text-sm font-semibold">{title}</h1>
        <h2 className="text-sm my-0.5 font-serif">{authors}</h2>
        <button className="px-6 py-2 mt-8 bg-blue-500 rounded font-semibold text-white">
          View details
        </button>
      </div>
    </Link>
  );
};

export default BookCard; 