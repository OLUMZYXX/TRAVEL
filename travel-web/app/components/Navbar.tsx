import { NAV_LINKS } from "@/constants";
import { link } from "fs";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const Navbar = () => {
  return (
    <nav className=" flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src={"/hilink-logo.svg"} alt="logo" width={74} height={29} />
      </Link>
      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-gray-50 flex-center cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>
      <div className="lg:flexCenter hidden">
        <Button
          type="button"
          title="Log In"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>

      {/* impliment an open logic for the harmburger menu to open up */}
      <Image
        src={"/menu.svg"}
        alt="menu"
        width={32}
        height={32}
        className="inline-block lg:hidden cursor-pointer"
      />
    </nav>
  );
};

export default Navbar;
