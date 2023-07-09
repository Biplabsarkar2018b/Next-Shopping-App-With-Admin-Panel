import Layout from "@/components/Layout";
import ProductInputPage from "@/components/ProductInputPage";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";

const NewProduct = () => {
 return(
  <Layout>
    <ProductInputPage/>
  </Layout>
 ); 
}
export default NewProduct;
