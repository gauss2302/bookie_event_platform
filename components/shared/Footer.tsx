import React from "react";
import Link from "next/link";
import Image from "next/image";
const Footer = () => {
  return (
    <footer className={"border-t"}>
      <div
        className={
          "flex-center wrapper flex-between flex flex-col gap-2 p-4 text-center sm:flex-row"
        }
      >
        <Link href={"/"}>
          <Image
            src={"/assets/images/logo.svg"}
            alt={"Logo"}
            width={128}
            height={35}
          />
        </Link>
        <p>2024 Evently, All Right reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
