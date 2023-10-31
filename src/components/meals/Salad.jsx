import React , {useEffect, useState} from 'react'

export default function Salad() {
 let [salad,setSalad]=useState([]);


  const getSalad = async() =>{
    let response = await fetch(`https://forkify-api.herokuapp.com/api/search?q=salad`);    
    let data = await response.json();
    setSalad(data.recipes);
 }  


useEffect(() => { 
      getSalad();  
    },[]);
 



  return (
    <>
    <h1 className='my-5 text-center bg-dark text-white py-5'>Salad</h1>
   <section className='row'>
    {
        salad.map((ele)=>{
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