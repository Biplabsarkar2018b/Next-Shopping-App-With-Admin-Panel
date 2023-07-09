import Link from 'next/link'
import React from 'react'

const AddNewProductBtn = () => {
  return (
    <Link href={"/products/new"} className="bg-blue-900 p-3 text-white rounded-2xl">
        Add New Product
      </Link>
  )
}

export default AddNewProductBtn