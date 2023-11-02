"use client";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

type Props = {
  id: number;
  price: number;
  options?: { title: string; additionalPrice: number }[];
};

const Price = ({ price, id, options }: Props) => {
  const [total, setTotal] = useState(price);
  const [quantity, setQuantity] = useState(1);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    setTotal(
      quantity * (options ? price + options[selected].additionalPrice : price)
    );
  }, [quantity, selected, options, price]);
  return (
    <div className="flex flex-col gap-4">
      <h2 className="text-2xl font-bold">${total.toFixed(2)}</h2>
      {/* OPTIONS CONTAINER */}
      <div className="flex gap-4">
        {options?.map((option, index) => (
          <button
            className="min-w-[6rem] p-2 ring-1 ring-orange-500 rounded-md hover:bg-orange-500 hover:text-white transition-all duration-200"
            key={option.title}
            style={{
              background: selected === index ? "rgb(249 115 22)" : "",
              color: selected === index ? "white" : "",
            }}
            onClick={() => setSelected(index)}
          >
            {option.title}
          </button>
        ))}
      </div>
      {/* QUANTITY AND ADD BUTTON CONTAINER */}
      <div className="flex justify-between items-center">
        {/* QUANTITY */}
        <div className="flex justify-between w-full p-3 ring-1 ring-orange-600">
          <span>Quantity</span>
          <div className="flex gap-4 items-center">
            <button
              onClick={() => setQuantity((prev) => (prev > 1 ? prev - 1 : 1))}
            >
              {"<"}
            </button>
            <span>{quantity}</span>
            <button
              onClick={() => setQuantity((prev) => (prev < 9 ? prev + 1 : 9))}
            >
              {">"}
            </button>
          </div>
        </div>
        {/* CART BUTTON */}
        <button
          onClick={() => toast.success("Added to the cart!")}
          className="uppercase w-56 bg-orange-600 text-white p-3 ring-1 ring-orange-600 hover:text-black transition-all duration-200"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Price;
