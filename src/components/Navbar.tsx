"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, ChevronDown, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetDescription,
  SheetHeader,
} from "@/components/ui/sheet";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";
import logo from "../../public/logo.png";

type MenuItem = {
  title: string;
  href: string;
  submenu?: MenuItem[];
};

const menuItems: MenuItem[] = [
  { title: "Home", href: "/" },
  { title: "Services", href: "/services" },
  { title: "Contact", href: "/contact" },
];

const MenuItemComponent: React.FC<{
  item: MenuItem;
  depth?: number;
  hamburger?: boolean;
  onClick?: () => void;
}> = ({ item, depth = 0, hamburger = false, onClick }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  if (item.submenu) {
    return (
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger asChild>
          <button
            className={cn(
              "flex w-full items-center justify-between py-2 text-lg font-medium transition-colors hover:text-primary",
              depth > 0 && "pl-4"
            )}
          >
            {item.title}
            {isOpen ? (
              <ChevronDown className="h-4 w-4" />
            ) : (
              <ChevronRight className="h-4 w-4" />
            )}
          </button>
        </CollapsibleTrigger>
        <CollapsibleContent>
          {item.submenu.map((subItem) => (
            <MenuItemComponent
              key={subItem.title}
              item={subItem}
              depth={depth + 1}
              onClick={onClick}
            />
          ))}
        </CollapsibleContent>
      </Collapsible>
    );
  }

  return (
    <Link
      href={item.href}
      className={cn(
        `${
          !hamburger && "flex"
        } py-2 text-lg font-medium transition-colors hover:text-primary`,
        depth > 0 && "pl-4",
        item.href === "/" && "text-primary"
      )}
      onClick={onClick}
    >
      {item.title}
    </Link>
  );
};

const NavbarElements: React.FC<{ styling?: String }> = () => {
  return (
    <nav className="hidden md:flex space-x-4">
      {menuItems.map((item) => (
        <MenuItemComponent key={item.title} item={item} />
      ))}
    </nav>
  );
};

const MobileNavbarElements: React.FC<{ onClick: () => void }> = ({
  onClick,
}) => {
  return (
    <nav className="flex flex-col space-y-4">
      {menuItems.map((item) => (
        <MenuItemComponent
          key={item.title}
          item={item}
          hamburger
          onClick={onClick}
        />
      ))}
    </nav>
  );
};

export default function Navbar() {
  const [open, setOpen] = React.useState(false);

  const handleClose = () => setOpen(false);

  return (
    <div className="bg-primary-foreground text-primary pt-4 pb-4 px-8 flex items-center justify-between">
      {/* LOGO AND NAME */}
      <Link className="flex items-center" href={"/"}>
        <Image
          src={logo}
          alt="Morya Corp Logo"
          width={500}
          height={500}
          className="h-10 w-10 mr-3"
        />
        <span className="text-xl font-bold text-gray-800">MORYA CORP</span>
      </Link>
      {/* DESKTOP SECTION */}
      <NavbarElements />
      {/* MOBILE SECTION */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetHeader className="sr-only">
          <SheetDescription>Description goes here</SheetDescription>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[240px] sm:w-[300px]">
          <MobileNavbarElements onClick={handleClose} />
        </SheetContent>
      </Sheet>
    </div>
  );
}
