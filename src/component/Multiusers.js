import React, { useEffect, useState } from 'react';

const Multi =()=>{

    const[data,setData]=useState([])

        
            
        fetch('https://api.github.com/users')
        .then((res) => res.json())
        .then((json) => setData(json))
            
    
    console.log(data);
    return(
    <div>
           {data.map((users)=>{
               return(
                    <ul>
                         <li>{users.login}</li>
                        <li><img src={users.avatar_url} width='200' /></li>
                    </ul>
            )})}
    </div>
    )

}
export default Multi;