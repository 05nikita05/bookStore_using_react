import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { loadSingleBook } from '../../store/actions/BookActions';
import DOMPurify from 'dompurify';
import { Link } from 'react-router-dom';


const DetailLayout = () => {
    const { id } = useLocation().state;
    const dispatch = useDispatch();

    useEffect(() => {
        if (id) {
            dispatch(loadSingleBook(id));
        }
    }, [dispatch, id]);

    const book = useSelector((store) => store.BookSlice.book);

    if (!book || !book.volumeInfo) {
        return <p>Loading...</p>;
    }

    const { title, imageLinks, description, authors } = book.volumeInfo;
    return (
        <div className='px-20 pt-10 flex items-start gap-8'>
            {/* <div className="img-wrap w-[10vw] "> */}
                <img
                    className='w-max h-[20vw] object-contain'
                    src={imageLinks ? imageLinks.thumbnail : ''}
                    alt={title || 'Book cover'}
                />
            
            <div>
                <h1 className='text-3xl font-bold mt-4 mb-4'>{title}</h1>
                <h3 className='text-xl'>
                    <span className='font-medium'>Authors: </span>
                    {authors ? authors.join(', ') : 'Unknown'}
                </h3>
                <p className='mt-5'dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(description) }}
                  />
                 
                <Link to={book.volumeInfo.previewLink} target='_blank'>

                <button className='mt-8 mb-8 bg-blue-500 px-4 text-xl text-white py-2 rounded'>more</button>
                </Link>
            </div>

        </div>
    );
};

export default DetailLayout;
