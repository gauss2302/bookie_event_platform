import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import { Separator } from "@/components/ui/separator";
import NavItems from "@/components/shared/NavItems";

const MobileNav = () => {
  return (
    <nav className={"md:hidden"}>
      <Sheet>
        <SheetTrigger className={"align-middle"}>
          <Image
            src={"/assets/icons/menu.svg"}
            alt={"Menu Icon"}
            width={37}
            height={24}
            className={"cursor-pointer"}
          />
        </SheetTrigger>
        <SheetContent className={"flex flex-col gap-6 bg-white md:hidden"}>
          <Image
            src={"/assets/images/logo.svg"}
            alt={"Logo in menu"}
            height={135}
            width={95}
          />
          <Separator className={"border border-gray-50"} />
          <NavItems></NavItems>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default MobileNav;
