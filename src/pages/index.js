import React from "react"
import Products from "../components/Products"
import Layout from "../layouts/Layout"
import {productData, productDataTwo} from '../components/Products/data'
import Feature from "../components/Feature"

const index = () => {
  return (
    <Layout>
      <Products heading="Choose your favorite" data={productData} /> 
      <Feature /> 
      <Products heading="Sweet Treats for you" data={productDataTwo} /> 
    </Layout>
  ) 
}

export default index
