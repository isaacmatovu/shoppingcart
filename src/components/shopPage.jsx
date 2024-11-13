import { useState,useEffect } from "react"
import '../styles/shopPage.css'
import Product from "./product";



export default function Shop(){
    const [products,setProducts] = useState(null);
    const [loading,setLoading] = useState(true)
    const[error,setError] = useState(null)

    
    useEffect(()=>{
        async function getproducts(){
         try{  const response = await fetch('https://fakestoreapi.com/products');
         
         if(!response.ok){
            throw new Error(`HTTP error:Status ${response.status}`);
         }
         const data = await response.json()
      
            setProducts(data)
            setError(null)
        }
        catch(err){
            setError(err.message)
            setProducts(null)

        }
        finally{
            setLoading(false)

        }
        }
       getproducts();
       
    },[])
   


    
    return(
        <>
    
       <div className="shopping">
        {loading && (<p>loading...</p>)}
        {error && <p>{error}</p>}
       {products && !error & !loading && (<div className="loaded-items">
        {products.map((product)=>(
            <Product key={product.id} product={product}/>
        ))}
       </div>)}
        
    </div>
    </>

    )

}