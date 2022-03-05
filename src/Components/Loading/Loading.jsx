import React from 'react'
import useGlobalContext from '../ContextData';

function Loading() {
    let {  loading } = useGlobalContext();
    return (
        <>
         <div className="loading text-center py-5">
{loading?<>
    <h1>
                 Loading....
             </h1>

</>:<>
<h2>ours tours </h2>
              <div className="underline"></div>


</>}
             </div>   
        </>
    )
}

export default Loading
