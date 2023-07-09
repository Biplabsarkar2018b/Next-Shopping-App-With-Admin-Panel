import Layout from "@/components/Layout";
import ProductInputPage from "@/components/ProductInputPage";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const EditProduct = () => {
  const router = useRouter();
  const { id } = router.query;
  const [productInfo, setproductInfo] = useState(null);
  useEffect(() => {
    if (!id) return;
    axios
      .get("/api/products?id=" + id)
      .then((response) => setproductInfo(response.data));
  }, [id]);

  return (
    <Layout>{productInfo && <ProductInputPage {...productInfo} />}</Layout>
  );
};

export default EditProduct;
