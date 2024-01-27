import React from "react";

const MiniNavbar = () => {
  return (
    <div className=" py-1 bg-slate-200">
      <div className=" container mx-auto text-[12px]  flex justify-between">
        <h4>*Free delivery for orders over $100.</h4>

        <ul className="flex uppercase gap-4 items-center">
          <li>CALL +8800000000</li>
          <li>COMPANY </li>
          <li>Support </li>
        </ul>
      </div>
    </div>
  );
};

export default MiniNavbar;
