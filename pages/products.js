import AddNewProductBtn from "@/components/AddNewProductBtn";
import Layout from "@/components/Layout";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const Products = () => {
  const [productsArray, setproductsArray] = useState([]);
  useEffect(() => {
    axios
      .get("/api/products")
      .then((response) => setproductsArray(response.data));
  }, []);

  return (
    <Layout>
      <AddNewProductBtn />
      <table className="w-full">
        <thead>
          <tr>
            <td>Products</td>
            <td></td>
            <td></td>
          </tr>
        </thead>
        <tbody>
          {productsArray.map((item) => (
            <tr>
              <td>{item.title}</td>
              <td>
                <Link href={'/products/edit/'+item._id}>
                <EditIcon className="text-blue-900 cursor-pointer" />
                <span className="font-bold text-blue-900 cursor-pointer">
                  Edit
                </span>
                </Link>
              </td>
              <td>
                <Link href={'/products/delete/'+item._id}>
                <DeleteForeverIcon className="text-red-600 cursor-pointer" />
                <span className="font-bold text-red-600 cursor-pointer">
                  Delete
                </span>
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </Layout>
  );
};

export default Products;
