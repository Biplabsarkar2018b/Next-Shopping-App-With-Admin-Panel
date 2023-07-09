import Layout from "@/components/Layout";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const DeleteProduct = () => {
    const router = useRouter();
    const [productInfo, setproductInfo] = useState(null);
    const {id} = router.query;
    console.log(id);
    useEffect(() => {
        if(!id) return;
     axios.get('/api/products?id='+id)
     .then((response)=>setproductInfo(response.data));
    }, [id]);

    const goBack = ()=>{
        router.push('/products');
    }
    const deleteProd = async()=>{
        await axios.delete('/api/products?id='+id);
        goBack();
    }
    
  return (
    <Layout>
      Do You really want to delete product {productInfo ? productInfo.title : 'X'} ?
      <div className="flex justify-around my-5">
        <button onClick={deleteProd} className="block bg-blue-900 py-3 rounded-lg px-10 text-white font-bold">Yes</button>
        <button onClick={goBack} className="block bg-blue-900 py-3 rounded-lg px-10 text-white font-bold">No</button>
      </div>
    </Layout>
  );
};

export default DeleteProduct;
