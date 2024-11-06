import { Instance } from "../../utils/Axios";
import { load ,loadBook } from "../reducers/BookSlice";

export const loadBooks = (query,page) => async (dispatch,getState) => {
    try {
      const startIndex = (page - 1) * 20;
      const { data } = await Instance.get(`volumes?q=${query}&startIndex=${startIndex}&maxResults=20`);
        dispatch(load(data.items));
      } catch (error) {
        console.log(error);
      }
};

export const loadSingleBook =(id)=>async(dispatch,getState)=>{
  try{
    const {data} = await Instance.get(`volumes/${id}`);
    dispatch(loadBook(data))
  }
  catch(error){
    console.log(error)
  }
}


