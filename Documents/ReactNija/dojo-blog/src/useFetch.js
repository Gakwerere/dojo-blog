import { useState, useEffect } from "react";

const useFetch = (url) => {

    const [data, setData] = useState([]);
    const [isPanding ,setIsPending] = useState(true);
    const [error, setError] = useState([]);

    useEffect(() =>{
        const abortCont = new AbortController ();

        setTimeout(()=> {
  
          fetch(url ,{signal : abortCont.signal})
          .then(res => {
              if (!res.ok){
                  throw Error('Could not fecth the data for that resource');
              }
              return res.json();
          })
          .then(data => {
              setData(data);  
              setIsPending(false);
          })
          .catch(err => {
              if(err.name === 'AbortError'){
                  console.log('Fetch Aborted')
              }
              else{
                  // console.log(err.message);
              setError(err.message);
              setIsPending(false);
              }
          })
  
        } , 1000);
        return () => abortCont.abort();
      },[url]);

      return {data , isPanding , error}
}

export default useFetch 