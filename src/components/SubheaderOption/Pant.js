import React from 'react'
import data from "../../Object.js"
import PantComp from './PantComp.js';

export default function Pant() {
  let pantData = data.filter((ele) => ele.type == "pant");


  return (
    <>
      <PantComp  data={pantData} />
    </>
  )
}
