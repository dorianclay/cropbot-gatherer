"use client";

import Link from "next/link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [pagesVisible, setPagesVisible] = useState(false);
  const [lock, setLock] = useState(false);

  const handleNav = () => {
    setMenuOpen(!menuOpen);
    setLock(true);
    pagesVisible
      ? setPagesVisible(!pagesVisible)
      : setTimeout(() => {
          setPagesVisible(!pagesVisible);
        }, 500);
  };

  return (
    <>
      <nav
        className={
          menuOpen
            ? `fixed w-full h-48 drop-shadow-2xl bg-white hover:drop-shadow-2xl ease-in-out duration-500 landscape:h-24`
            : "fixed w-full h-24 drop-shadow-lg bg-white hover:drop-shadow-2xl ease-in-out duration-500"
        }
      >
        <div className="flex justify-between flex-col sm:flex-row items-center h-full w-full px-5 2xl:px-16">
          <div className="flex justify-between items-center h-24 w-full">
            <Link href="/">
              <div className="text-3xl hover:underline bg-transparent">
                Cropbot 🚜
              </div>
            </Link>
            <div onClick={handleNav} className="sm:hidden cursor-pointer pl-24">
              {menuOpen ? (
                <AiOutlineClose size={25} />
              ) : (
                <AiOutlineMenu size={25} />
              )}
            </div>
          </div>
          <div
            className={
              pagesVisible
                ? "transition ease-in delay-700 duration-75 h-24"
                : "hidden sm:flex ease-in delay-700 duration-75 h-full"
            }
          >
            <ul className="flex flex-col sm:flex-row h-full sm:h-full justify-evenly">
              <Link href="/gather" className="flex flex-col justify-center">
                <li className="mx-10 lowercase hover:underline text-2xl">
                  Gather
                </li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
      <div className="h-24"></div>
    </>
  );
};

export default Navbar;
