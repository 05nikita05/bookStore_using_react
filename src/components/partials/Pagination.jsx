import React, { useState } from 'react'

const Pagination = () => {

    const [page, setpage] = useState(parseInt(localStorage.getItem('pageValue')) || 1);
    console.log(page);

    const savePageValue = ()=>{
        setpage(page+1);
        localStorage.setItem('pageValue',page+1)
    }
     // Pagination functions
  const handleNextPage = () =>{
    setpage((prevPage) => prevPage + 1);
    localStorage.setItem('pageValue',page+1)

  } 
  const handlePreviousPage = () => {
    if (page > 1) {
      setpage((prevPage) => prevPage - 1);
      localStorage.setItem('pageValue',page+1)

    }
  };

  return (
    <div className='w-full flex items-center justify-between p-20  '>
      <button onClick={handlePreviousPage} className='px-5 py-3 bg-blue-500 rounded font-semibold text-white' disabled={page === 1}>
          Previous
        </button>
        <button onClick={handleNextPage} className='px-5 py-3 bg-blue-500 rounded font-semibold text-white'>Next</button>
        {/* <button onClick={savePageValue} className='px-5 py-3 bg-blue-500 font-semibold text-white'>Next</button> */}
    </div>
  )
}

export default Pagination