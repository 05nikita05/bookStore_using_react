import React, { useEffect } from "react";
import ShowBooks from "../partials/ShowBooks";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loadBooks } from "../../store/actions/BookActions";
import Layout from "../home/Layout";

const SearchLayout = () => {
  const { query } = useParams();
  const dispatch = useDispatch();
  const {books} = useSelector(store=>store.BookSlice);


  useEffect(() => {
    dispatch(loadBooks(query,2));
  }, [query]);

  return (
    <div className="">
      
      {/* <ShowBooks books={books} /> */}
      <Layout books={books}/>
    </div>
  );
};

export default SearchLayout;