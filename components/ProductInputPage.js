import Layout from "@/components/Layout";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const ProductInputPage = ({
  _id,
  title: existingTitle,
  desc: existingDesc,
  price: existingPrice,
  images,
}) => {
  const [title, settitle] = useState(existingTitle || "");
  const [desc, setdesc] = useState(existingDesc || "");
  const [price, setprice] = useState(existingPrice || "");
  const router = useRouter();
  const [goToProducts, setgoToProducts] = useState(false);
  const onFormSubmit = async (e) => {
    e.preventDefault();
    if (_id) {
      //update the existing product
      const data = { title, desc, price };
      await axios.put("/api/products", { ...data, _id });
    } else {
      // create a new product
      const data = { title, desc, price };
      await axios.post("/api/products", data);
    }

    setgoToProducts(true);
  };
  if (goToProducts) {
    router.push("/products");
  }
  const uploadImages = async (e)=>{
    const f = e.target?.files;
    if(f.length>0){
      const data = new FormData();
      for(const file of f){
        data.append('file',file);
      }
      
      const res = await axios.post('/api/upload',data,
      );
      console.log(res.data);
    }
  }

  return (
    <form onSubmit={onFormSubmit}>
      <h1 className="text-2xl font-bold mb-4 text-blue-900">
        {_id ? "Update Product" : "Create New Product"}
      </h1>
      <input
        value={title}
        onChange={(e) => settitle(e.target.value)}
        type="text"
        placeholder="Product Name"
      />
      <label className="text-2xl font-bold text-blue-900">Photos</label>
      <div className="mb-5">
        <label className="h-24 cursor-pointer rounded-lg w-24 bg-gray-800">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-24 h-24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
          />
        </svg>
        <input type="file" onChange={uploadImages} className="hidden" />
        </label>

        {!images?.length && "No Photos To Show"}
      </div>
      <textarea
        value={desc}
        onChange={(e) => setdesc(e.target.value)}
        placeholder="Description"
      ></textarea>
      <input
        value={price}
        onChange={(e) => setprice(e.target.value)}
        type="number"
        placeholder="Price"
      />
      <button
        type="submit"
        className="bg-blue-900 py-2 px-4 rounded-xl text-white font-bold w-3/5"
      >
        Save
      </button>
    </form>
  );
};

export default ProductInputPage;
