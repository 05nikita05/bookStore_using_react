import React, { useEffect, useMemo, useState } from "react";
import Search from "./Search";
import ShowBooks from "../partials/ShowBooks";
import { useDispatch, useSelector } from "react-redux";
import { loadBooks} from "../../store/actions/BookActions";
// import Pagination from "../partials/Pagination";

const Layout = (boook) => {
  const [query, setquery] = useState(localStorage.getItem("query") || "");
  const [page, setpage] = useState(parseInt(localStorage.getItem('pageValue')) || 1);

  const { books } = useSelector((store) => store.BookSlice);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadBooks(query || 'default', page));  // Pass `query` and `page`
  }, [dispatch, page]); 
 
   // Update query state and localStorage on search
   const handleSearch = (newQuery) => {
    setquery(newQuery);
    setpage(1); // Reset to page 1 on new search
    localStorage.setItem("query", newQuery);
    localStorage.setItem("pageValue", 1); // Reset page to 1 in localStorage
  };

  const handleNextPage = () => {
    const newPage = page + 1;
    setpage(newPage);
    localStorage.setItem("pageValue", newPage);
  };

  const handlePreviousPage = () => {
    if (page > 1) {
      const newPage = page - 1;
      setpage(newPage);
      localStorage.setItem("pageValue", newPage);
    }
  };

  return (
    <div className="h-max w-full">
      <Search query={query} setquery={handleSearch} />
      <ShowBooks books={books||boook} />
      {/* <Pagination/>     */}
      <div className='w-full flex items-center justify-between p-20  '>
      <button onClick={handlePreviousPage} className='px-5 py-3 bg-blue-500 rounded font-semibold text-white' disabled={page === 1}>
          Previous
        </button>
        <button onClick={handleNextPage} className='px-5 py-3 bg-blue-500 rounded font-semibold text-white'>Next</button>
    </div>
      </div>
  );
};

export default Layout;