import React, { useState } from 'react'
import { FaRegHeart, FaHeart } from "react-icons/fa";
import WatchModal from './WatchModal';
import Stars from './Star';

const WatchCard = ({watchDatas}) => {
  const [thumbnailImage, setThumbnailImage] = useState(watchDatas.images[0]);
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('S');
  const [itemPrice, setItemPrice] = useState(69);
  const [selectedColor, setSelectedColor] = useState('purple');
  const [txtColor, setTxtColor] = useState('text-purple-600');
  const [bgColor, setBgColor] = useState('bg-purple-600');
  const [borderColor, setBorderColor] = useState('border-purple-600');
  const [totalItems, setTotalItems] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [checkout, setCheckout] = useState(false);
  const [isReact,setIsReact] = useState(false);
  const [items, setItems] = useState([]);


  const increaseQuantity = () => setQuantity(quantity + 1);
  const decreaseQuantity = () => {
    if (quantity > 1){
      setQuantity(quantity - 1)
    }else{
      setQuantity(1)
    };
  };

  const handleBandColor = (colorName,txtColor,bgColor,borderColor,thumbImage) => {
    setSelectedColor(colorName);
    setTxtColor(txtColor);
    setBgColor(bgColor);
    setBorderColor(borderColor);
    setThumbnailImage(thumbImage);
  }
  const handleSize = (itemSize, itemPrice) =>{
    setSelectedSize(itemSize);
    setItemPrice(itemPrice);
  }

  const handleAddToCard = () => {
    const singleItem = {
      itemName: watchDatas.title,
      itemImage: thumbnailImage,
      itemColor: selectedColor,
      itemPrice : itemPrice,
      itemSize : selectedSize,
      itemQnt : quantity,
      subTotal: itemPrice * quantity
    };

    items.push(singleItem);

    let sum = 0;
    let totalItems = 0;
    items.map((item)=>totalItems+=item.itemQnt);
    items.map((item)=>sum+=item.subTotal);
    setTotalPrice(sum);
    setTotalItems(totalItems);
  }

  return (
    <div className='w-full py-20'>
      <div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 w-[90%] lg:w-[960px] xl:w-[1020px] xll:w-[1180px] xlll:w-[1320px] mx-auto'>
          <div>
            <img src={thumbnailImage} alt="Smart Watch" />
          </div>
          <div className='flex flex-col justify-center items-start gap-3 xll:gap-5'>
            <h2 className='max-sml:text-2xl max-lg:text-4xl lg:text-2xl xl:text-3xl xll:text-4xl text-gray-700 font-bold font-sans'>{watchDatas.title}</h2>
            <div className='flex'>
              <Stars value={watchDatas.rating} />
              <span className='pl-1 text-gray-500'>{`(${watchDatas.reviews} Reviews)`}</span>
            </div>
            <p>
              <span className='text-sm line-through text-gray-400 font-bold tracking-wider'>${itemPrice+20}.00</span>
              <span className={`pl-2 text-lg tracking-wider font-bold ${txtColor}`}>${itemPrice}.00</span>
            </p>

            {/* ................... Description ................... */}
            <p className='text-gray-400 text-sm font-normal tracking-wider'>
              {watchDatas.des}
            </p>
            <div>
              <p className='text-sm text-gray-400 font-semibold'>
                <span className='inline-block w-[70px]'>Type</span>
                <span>{watchDatas.watchType}</span>
              </p> 
              <p className='text-gray-600 font-bold'>
                <span className='inline-block w-[70px]'>Watch</span>
                <span>{watchDatas.watchModel}</span>
              </p>
            </div>

            {/* ................... Select Color & Image ................... */}
            <div className="flex flex-col items-start space-y-3 pt-1">
              <span className="text-gray-700 font-bold">Band Color</span>
              <span className="flex space-x-3">
                {watchDatas.colors.map((color) => (
                  <span
                    key={color.name}
                    className={`w-6 h-6 rounded-full ${color.hex} ${
                      selectedColor === color.name ? `ring-2 ring-offset-2 ${color.rin}` : ''
                    }`}
                    onClick={() => handleBandColor(color.name, color.txt, color.hex, color.bdr, color.thumbImage,)}
                  />
                ))}
              </span>
            </div>

            {/* ................... Select Size & Price ................... */}
            <div className="flex flex-col space-y-2">
              <span className="text-gray-700 font-semibold">Wrist Size</span>
              <div className="flex space-x-2">
                {watchDatas.sizes.map((size) => (
                  <div
                    key={size.label}
                    className={`cursor-pointer px-4 py-2 border rounded-md flex items-center justify-center space-x-1 ${
                      selectedSize === size.label ? `${borderColor} ring-0 border-2 ${txtColor}` : 'border-gray-300 text-gray-600'
                    }`}
                    onClick={() => handleSize(size.label, size.price)}
                  >
                    <span className="font-bold">{size.label}</span>
                    <span className={`${
                      selectedSize === size.label ? 'text-orange-400' : 'text-gray-600'
                    }`}>${size.price}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* ................... Select Quantity ................... */}
            <div className="flex items-center space-x-4">
              {/* Quantity Selector */}
              <div className="flex items-center border rounded-md">
                <button
                  className="px-3 py-1 text-gray-600 active:bg-gray-100 duration-200"
                  onClick={decreaseQuantity}
                >
                  -
                </button>
                <span className={`px-4 py-1 border-l border-r ${txtColor}`}>
                  {quantity}
                </span>
                <button
                  className="px-3 py-1 text-gray-600 active:bg-gray-100 duration-200"
                  onClick={increaseQuantity}
                >
                  +
                </button>
              </div>

              {/* Add to Cart Button */}
              <button className={`${bgColor} text-white px-6 py-2 rounded-md active:bg-opacity-80 duration-200`} onClick={()=>handleAddToCard()}>
                Add to Cart
              </button>

              {/* Heart Icon */}
              <button className={`${txtColor}`} onClick={()=>setIsReact(!isReact)}>
                {isReact ? <FaHeart /> : <FaRegHeart />}
              </button>
            </div>
          </div>
        </div>

        {/* .......................... Checkout Button ........................... */}
        <div className='flex justify-center items-center pt-20'>
          <button className="bg-orange-400 text-white font-bold py-2 px-3 rounded-full active:bg-opacity-80 duration-100 " onClick={()=>setCheckout(!checkout)}>
            <span className='pr-2'>Checkout</span>
            <span className="bg-white text-orange-400 rounded-full px-2">{items.length}</span>
          </button>
        </div>
      </div>

      {/* .......................... Modal ........................... */}
      <div>
        {checkout && <WatchModal items={items} setCheckout={setCheckout} totalPrice={totalPrice} totalItems={totalItems}/>}
      </div>
    </div>
  )
}

export default WatchCard