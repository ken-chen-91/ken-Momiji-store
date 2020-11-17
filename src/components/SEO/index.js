import React from "react"
import { Helmet } from "react-helmet"

const SEO = () => {
  return (
    <>
      <Helmet>
        <title> Momiji Sushi </title>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Kanit:wght@400;900&display=swap"
          rel="stylesheet"
        ></link>
      </Helmet>
    </>
  )
}

export default SEO
