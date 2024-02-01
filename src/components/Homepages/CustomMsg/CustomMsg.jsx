import React from "react";
import {Input} from "@nextui-org/react";
import { FaInstagram,FaFacebookF  } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

// import {SearchIcon} from "./SearchIcon";
const CustomMsg = () => {
  return <div className="border-8 w-full md:w-56 border-gray-500" >
    <div className="p-6 ">
<h3 className="text-xl text-gray-600 font-semibold">
GET 10% OFF
YOUR FIRST PURCHASE
</h3>
<Input
        label="JOIN"
        isClearable
        radius="lg"
        classNames={{
          label: "text-black/50 dark:text-white/90",
          input: [
            "bg-transparent",
            "text-black/90 dark:text-white/90",
            "placeholder:text-default-700/50 dark:placeholder:text-white/60",
          ],
          innerWrapper: "bg-transparent",
          inputWrapper: [
            "shadow-xl",
            "bg-default-200/50",
            "dark:bg-default/60",
            "backdrop-blur-xl",
            "backdrop-saturate-200",
            "hover:bg-default-200/70",
            "dark:hover:bg-default/70",
            "group-data-[focused=true]:bg-default-200/50",
            "dark:group-data-[focused=true]:bg-default/60",
            "!cursor-text",
          ],
        }}
        placeholder="Your Email A..."
      
      />
    <p className="text-[10px] py-3">
    Subscribe to our newsletter for new products, trends and offers, plus your chance to win a $250 gift card!
    </p>

      <ul className="flex item-center py-2 border-b border-w-20 gap-0">
        <li className="px-1  text-md font-thin rounded-full text-gray-600"><FaFacebookF />
</li>
        <li className="px-1  text-md font-thin rounded-full text-gray-600"><FaInstagram /></li>
        <li className="px-1  text-md font-thin rounded-full text-gray-600"><FaXTwitter/></li>

      </ul>
    </div>
  </div>;
};

export default CustomMsg;
