import React , {useEffect, useState} from 'react'

export default function Pizza() {
 let [pizza,setPizza]=useState([]);


 const getPizza = async () => {
  
    let response = await fetch(`https://forkify-api.herokuapp.com/api/search?q=pizza`);
    
    let data = await response.json();
    setPizza(data.recipes);
 
}
 


 useEffect(() => { 
  getPizza();
}, []);
 
  return (
    <>
    <h1 className='my-5 text-center bg-dark text-white py-5'>Pizza</h1>
   <section className='row'>
    {
        pizza.map((ele)=>{
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