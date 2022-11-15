import logo from "../assets/logo.png";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
    return (
        <div className="bg-[#04050C] h-[300px] lg:h-[130px] flex flex-col justify-center items-center md:pt-3 mt-10">
            <Image src={logo} alt="logo" className="w-[105px] h-[58px] mt-3" />
            <ul className="grid grid-cols-3 lg:flex gap-5 text-gray-400 text-xs mt-3 mb-2">
                <Link href=""><li>Privacy</li></Link>
                <Link href=""><li>Cookies</li></Link>
                <Link href=""><li>Privacy in UK&EU</li></Link>
                <Link href=""><li>Subscription Agreement</li></Link>
                <Link href=""><li>Help</li></Link>
                <Link href=""><li>Devices</li></Link>
                <Link href=""><li>About Us</li></Link>
                <Link href=""><li>Advertisement</li></Link>
                <Link href=""><li>Manage preferences</li></Link>
            </ul>
            <p className="text-xs text-gray-400 m-3">© Disney. Only for education purpose.</p>
        </div>
    )
}

export default Footer;