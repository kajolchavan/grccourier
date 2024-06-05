import { TrashIcon } from '@heroicons/react/24/solid'
import React from 'react'

const OrderForm = ({productList,setProductList,updateOrder,productData,setProductData}) => {
  const handleProductList =() =>{
    if(productData?.name.length===0  || productData?.weight?.length===0 || productData?.height?.length===0 || productData?.length?.length===0 || productData?.productWidth?.length===0){
      alert("Enter Product Details")
    }
    else{
      setProductList((prev)=>[...prev,productData])
      
      
     
      setProductData({
        name:"",
    sku:"123",
    units: 1,
        "selling_price": "900",
        discount: "",
        tax: "",
      hsn: 441122,
        
    weight:"",
    length:"",
    height:"",
    width:""
      })
    }
  }
  return (
    <div className="mt-[70px]  ">
      <div>
        <h4 className="font-[InterBold] text-[1.3rem] ">
         + Add Order Details
        </h4>
        <div className="bg-white h-[390px] overflow-y-scroll px-16 py-6 my-3 rounded-md">
          <div className="mt-6">
            <h4 className="font-[InterMedium] text-gray-800 my-3">
              Add Product
            </h4>
            <div className="flex items-center flex-wrap gap-3 justify-between">
              <input
              value={productData.name}
              onChange={(e) => setProductData({...productData, name: e.target.value})}
                placeholder="Enter Product Name"
                className="border-gray-300 w-[400px] text-[.8rem] rounded-lg border-[1px] bg-transparent outline-none px-3 py-2"
                type="text"
              />
                {/* <input
                value={productData.productPrice}
              onChange={(e) => setProductData({...productData, productPrice: e.target.value})}
                placeholder="Product Price"
                className="border-gray-300 w-[400px] text-[.8rem] rounded-lg border-[1px] bg-transparent outline-none px-3 py-2"
                type="text"
              /> */}
              <input
              value={productData.weight}
              onChange={(e) => setProductData({...productData, weight: e.target.value})}
                placeholder="Enter Weight(kgs)"
                className="border-gray-300 w-[400px] text-[.8rem] rounded-lg border-[1px] bg-transparent outline-none px-3 py-2"
                type="number"
              />
              <input
              value={productData.length}
              onChange={(e) => setProductData({...productData, length: e.target.value})}
                placeholder="Enter Length(cm)"
                className="border-gray-300 w-[400px] text-[.8rem] rounded-lg border-[1px] bg-transparent outline-none px-3 py-2"
                type="text"
              />
              <input
              value={productData.width}
              onChange={(e) => setProductData({...productData, width: e.target.value})}
                placeholder="Enter Width(cm)"
                className="border-gray-300 w-[400px] text-[.8rem] rounded-lg border-[1px] bg-transparent outline-none px-3 py-2"
                type="text"
              />
                <input
                value={productData.height}
              onChange={(e) => setProductData({...productData, height: e.target.value})}
                placeholder="Enter Height(cm)"
                className="border-gray-300 w-[400px] text-[.8rem] rounded-lg border-[1px] bg-transparent outline-none px-3 py-2"
                type="text"
              />
            </div>
            <div className="flex items-center mt-4 justify-end">
            <button onClick={handleProductList} className="bg-[#750E21] font-[InterMedium] text-[.8rem] rounded-md py-2 px-8 text-white ">
             Add Product
            </button>
          </div>
          </div>
          <div className="my-6">
            <h4 className="font-[InterMedium] text-gray-800 my-3">
              Product List
            </h4>
            <div className="my-3 bg-[#750e215f] py-2 px-3 gap-3 grid grid-cols-6 grid-flow-col ">
              <div>
                <p className='font-[InterMedium] text-[.8rem]' >Product Name</p>
              </div>
             
              <div>
                <p className='font-[InterMedium] text-[.8rem]' >Weight</p>
              </div>
                <div>
                <p className='font-[InterMedium] text-[.8rem]' >Width</p>
              </div>
                <div>
                <p className='font-[InterMedium] text-[.8rem]' >Height</p>
              </div>
                <div>
                <p className='font-[InterMedium] text-[.8rem]' >Length</p>
              </div>
                 <div>
                <p className='font-[InterMedium] text-[.8rem]' ></p>
              </div>
            </div>
            <div className='' >
           
          {
            productList?.map((product)=>(
              <div className="my-3 bg-[#9393935f] py-3 px-3 gap-3 grid grid-cols-6 grid-flow-col ">
              <div>
                <p className='font-[InterMedium] text-[.8rem]' >{product.name}</p>
              </div>
             
              <div>
                <p className='font-[InterMedium] text-[.8rem]' >{product.weight} gm</p>
              </div>
                <div>
                <p className='font-[InterMedium] text-[.8rem]' >{product.width}cm</p>
              </div>
                <div>
                <p className='font-[InterMedium] text-[.8rem]' >{product.height}cm</p>
              </div>
                <div>
                <p className='font-[InterMedium] text-[.8rem]' >{product.length}cm</p>
              </div>
                <div>
                <p onClick={()=>{}} className='font-[InterMedium] cursor-pointer text-red-300 w-[20px] text-[.8rem]' ><TrashIcon /> </p>
              </div>
            </div>
            ))
          }
            
            </div>
          </div>
          <div className="flex items-center justify-end">
            <button onClick={updateOrder} className="bg-[#750E21] font-[InterMedium] text-[.8rem] rounded-md py-2 px-8 text-white ">
             Update Order
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderForm