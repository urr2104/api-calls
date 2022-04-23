import React, { useEffect, useState } from 'react';

const Single =()=>{

    const[data,setData]=useState([])

        
            
        fetch('https://api.github.com/users/mojombo')
        .then((res) => res.json())
        .then((json) => setData(json))
            
    
    console.log(data);
    return(
       <div>
        <b>Id:</b><span>{data.id}</span><br/>
        <b>Name:</b><span>{data.login}</span><br/>
       <b> Node_Id</b><span>{data.node_id}</span><br/>
        <img src={data.avatar_url} width='200' />
         
      
        </div>
    )

}
export default Single;