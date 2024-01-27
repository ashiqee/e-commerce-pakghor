"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { SlHandbag } from "react-icons/sl";
const Navbar = () => {
  const [pathName] = usePathname();

  const menu = [
    { menuName: "Home", path: "/" },
    { menuName: "Store", path: "/store" },
    { menuName: "Services", path: "/services" },
    { menuName: "Shop", path: "/shop" },
  ];
  return (
    <div className="py-7 font-light uppercase md:h-20">
      <div className="container flex items-center justify-between mx-auto">
        <ul className="flex items-center  gap-4">
          <h2 className="text-3xl pr-10 font-extrabold">LOGO</h2>
          {menu.map((item) => (
            <li
              className={
                pathName === item.path
                  ? "border-b-2 border-black"
                  : "hover:border-b-2 border-black"
              }
            >
              <Link href={item.path}>{item.menuName}</Link>
            </li>
          ))}
        </ul>
        <div>
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered input-sm w-full max-w-xs"
          />
        </div>
        <div className="flex items-center gap-10">
          <div className="flex gap-2">
            <SlHandbag className="text-xl" />
            <span className="indicator-item badge badge-secondary">2</span>
          </div>
          <button className="font-bold">ACCOUNT</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
