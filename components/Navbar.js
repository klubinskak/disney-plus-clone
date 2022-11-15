import Image from "next/image";
import Link from "next/link";
import logo from "../assets/logo.png";
import avatar from '../assets/avatar.jpeg'
import { AiOutlinePlus, AiOutlineSearch, AiFillStar } from "react-icons/ai";
import { BsFillHouseFill, BsFilm } from "react-icons/bs";
import { BiCameraMovie } from "react-icons/bi";

  

const Navbar = ({}) => {

  return (
    <>
      <div className="sticky w-full h-[10%] top-0 bg-[#04050C] p-2 z-10">
        <div className="flex items-center justify-between">
          <div className="flex gap-10">
            <Link href="/">
              <Image src={logo} alt="logo" className="w-[105px] h-[58px]" />
            </Link>
            <ul className="items-center mt-4 hidden lg:flex text-xs gap-5 lg:text-sm">
              <Link href="/">
                <li className="flex items-center gap-2">
                  {" "}
                  <BsFillHouseFill />
                  HOME
                </li>
              </Link>
              <Link href="">
                <li className="flex items-center gap-1">
                  <AiOutlineSearch />
                  SEARCH
                </li>
              </Link>
              <Link href="">
                <li>⊕ MY LIST</li>
              </Link>
              <Link href="">
                <li className="flex items-center gap-1">
                  <AiFillStar /> ORIGINALS
                </li>
              </Link>
              <Link href="">
                <li className="flex items-center gap-1">
                  <BiCameraMovie /> MOVIES
                </li>
              </Link>
              <Link href="">
                <li className="flex items-center gap-1">
                  <BsFilm /> SERIES
                </li>
              </Link>
            </ul>
          </div>
         
          <div className="dropdown inline-block relative">
            <button className=" text-white font-semibold py-2 px-4 rounded inline-flex items-center gap-3">
              <h5 className="hidden md:block text-white">Anna Smith</h5>
              <Image
                className="w-[58px] h-[58px] rounded-full "
                src= {avatar}
                alt="avatar"
              />
            </button>
            <div>
              <ul className="dropdown-menu absolute top-4/4 -right-20 hidden text-white p-4 md:w-[280px] w-[270px] h-[270px] bg-[#04050C] pr-[50px]">
                <div className="flex items-center gap-2 mb-2">
                <li className="flex items-center gap-3">
                  {" "}
                  <div className="bg-[#383838] rounded-full w-[55px] h-[55px] flex justify-center items-center mb-2">
                    <AiOutlinePlus className="text-3xl" color="white" />
                  </div>
                </li>
                <Link href="">
                  <li className="mb-2">Dodaj profil</li>
                </Link>
                </div>
                <Link href="">
                  <li className="mb-2">Edytuj profile</li>
                </Link>
                <Link href="">
                  <li className="mb-2">Ustawienia aplikacji</li>
                </Link>
                <Link href="">
                  <li className="mb-2">Konto</li>
                </Link>
                <Link href="">
                  <li className="mb-2">Pomoc</li>
                </Link>
                <Link href="">
                  <li className="mb-2">Wyloguj się</li>
                </Link>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
