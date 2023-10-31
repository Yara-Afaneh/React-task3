import React , {useEffect, useState} from 'react'

export default function Onion() {
 let [onion,setOnion]=useState([]);


 const getOnion = async () => {
  
    let response = await fetch(`https://forkify-api.herokuapp.com/api/search?q=onion`);
    
    let data = await response.json();
    setOnion(data.recipes);
 
}
 


 useEffect(() => { 
  getOnion();
}, []);
 
  return (
    <>
    <h1 className='my-5 text-center bg-dark text-white py-5'>Onion</h1>
   <section className='row'>
    {
        onion.map((ele)=>{
            return <div className='col-md-4' key={ele.recipe_id}>
                <h2 className='fs-4 my-5'>{ele.title}</h2>
                <img src={ele.image_url} className='w-100'/>
                  </div>
                 })
    } 
    </section>
    </>
    )
    } 