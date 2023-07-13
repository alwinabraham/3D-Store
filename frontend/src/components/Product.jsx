import React from 'react'
import Object from './Object'

const Product = () => {

  const obj = [
    {
      object : "https://prod.spline.design/Lm4jyAvjYQdItEji/scene.splinecode"
    },
    {
      object : "https://prod.spline.design/G1bzxReu6U6QGSie/scene.splinecode"
    },
    {
      object : "https://prod.spline.design/Hf1gQMsfpGiuXumi/scene.splinecode"
    },
    {
      object : "https://prod.spline.design/bxoZjH0nObVbsUXD/scene.splinecode"
    },    
    {
      object : "https://prod.spline.design/Hf1gQMsfpGiuXumi/scene.splinecode"
    },
    {
      object : "https://prod.spline.design/bxoZjH0nObVbsUXD/scene.splinecode"
    },
  ]

  return (
    <div class="grid grid-cols-2 bg-gray-800">
      {obj.map((items)=>(
        <Object link={items.object} />
      ))}
    </div>
  )
}

export default Product

