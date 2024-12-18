import React, { useState } from 'react';
import { MdClose } from "react-icons/md";

const WatchModal = ({items, setCheckout, totalPrice, totalItems}) => {


  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/50">
      {
        items.length !== 0 ? (
          <div className="bg-white rounded-lg p-6 w-[80%] max-w-[740px] font-sans">
          <h2 className="text-lg font-bold mb-4">Your Cart</h2>
          {/* ........................ Modal Table ........................... */}
          <div className='overflow-y-auto  max-h-[500px] px-4'>
            <table className="max-md:overflow-x-scroll w-full min-w-[600px]">
              <thead>
                <tr className='border-b-2 text-gray-400'>
                  <th className="text-left py-2">Item</th>
                  <th className='px-4'></th>
                  <th className='px-4 text-center'>Color</th>
                  <th className='px-4 text-center'>Size</th>
                  <th className='px-4 text-center'>Qty</th>
                  <th className='px-4 text-right'>Price</th>
                </tr>
              </thead>
              <tbody className="">
                {
                  items.map((item,i)=>(
                    <tr className='border-b-2 text-sm text-gray-600'>
                      <td className='text-left'>
                        <img src={item.itemImage} alt="Classy Modern Smart Watch" className="w-10 inline-block py-3" />
                      </td>
                      <td className='px-4'>{item.itemName}</td>
                      <td className='px-4 text-center'>{item.itemColor}</td>
                      <td className='px-4 text-center'>{item.itemSize}</td>
                      <td className='px-4 text-center'>{item.itemQnt}</td>
                      <td className='px-4 text-right'>${item.subTotal}</td>
                    </tr>
                  ))
                }
              </tbody>
              <tfoot>
                <tr className=''>
                  <th className='text-left py-3'>Total:</th>
                  <th className='px-4'></th>
                  <th className='px-4'></th>
                  <th className='px-4'></th>
                  <th className='px-4 text-center'>{totalItems}</th>
                  <th className='px-4 text-right'>${totalPrice}</th>
                </tr>
              </tfoot>
            </table>
          </div>
          {/* ........................ Modal Table ........................... */}
        <div className="flex flex-col sml:flex-row sml:justify-end mt-4 gap-3 sml:space-x-4">
          <button className="bg-gray-200 hover:bg-gray-300 text-gray-700 px-4 py-2 rounded">
            Continue Shopping
          </button>
          <button className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded" onClick={()=>setCheckout(false)}>
            Checkout
          </button>
        </div>
      </div>
        ) : (
          <div className="bg-white rounded-lg p-6 max-w-xl font-sans">
            <button className="text-3xl text-red-600 float-right rounded-full bg-gray-100 hover:bg-gray-500 hover:text-white duration-200 p-1" onClick={()=>setCheckout(false)}>
              <MdClose />
            </button>
            <p className='clear-right py-3 text-xl text-gray-600 font-semibold'>Please Add items to you card</p>
          </div>
        )
      }
    </div>
  );
};

export default WatchModal;