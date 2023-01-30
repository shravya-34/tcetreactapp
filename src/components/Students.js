import React from 'react'

export default function Students(props) {
    const {name,age,roll_no,city}=props.data
  return (
    <>
        <h1>{name}{roll_no}{age}{city}</h1>
    </>
  )
}
