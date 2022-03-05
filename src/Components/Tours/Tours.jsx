import React, { useEffect } from "react";
import useGlobalContext from "../ContextData";
import Loading from "./../Loading/Loading";
import Tour from './../Tour/Tour';

function Tours() {
  let { getTours, tours ,loading} = useGlobalContext();

  useEffect(() => {
    getTours();
  }, []);
  if(tours.length===0 && !loading){
    return(  <>
    <div className="loading text-center py-5">
        <h2>
        no tours left
        </h2>
        <button className='btnRefresh ' onClick={()=>getTours()}>refresh</button>
    </div>
</>) 
}
  return (
    <>
      <main className="">
 <Loading />
       <div className={loading?'':'container'}>
            <div className={loading?'':'row'}>
    
    {tours.map((tour,index)  => <Tour key={index} {...tour}>
          
          </Tour> )}
            </div>
        </div>
      </main>
    </>
  );
}

export default Tours;
