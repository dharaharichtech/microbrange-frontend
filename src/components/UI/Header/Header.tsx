"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  X,
  Menu,
  Home,
  Info,
  Package,
  Users,
  Target,
  Briefcase,
  Mail,
} from "lucide-react";
import Whatsapp from "../../../../public/Image/SVG/whatsapp.svg";
import Search from "../../../../public/Image/SVG/search.svg";
import { usePathname } from "next/navigation";

interface NavItem {
  href: string;
  label: string;
  icon: React.ReactNode;
}

const Header: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  const navigationItems: NavItem[] = [
    { href: "/", label: "Home", icon: <Home className="w-5 h-5" /> },
    { href: "/about", label: "About", icon: <Info className="w-5 h-5" /> },
    { href: "/brands", label: "Brands", icon: <Package className="w-5 h-5" /> },
    {
      href: "/collaborations",
      label: "Collaborations",
      icon: <Users className="w-5 h-5" />,
    },
    // { href: "/rd", label: "R & D", icon: <Users className="w-5 h-5" /> },
    {
      href: "/initiatives",
      label: "Our Initiatives",
      icon: <Target className="w-5 h-5" />,
    },
    {
      href: "/career",
      label: "Career",
      icon: <Briefcase className="w-5 h-5" />,
    },
    {
      href: "/contact",
      label: "Contact Us",
      icon: <Mail className="w-5 h-5" />,
    },
  ];

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle body scroll lock when sidebar is open
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isSidebarOpen]);

  const toggleSidebar = (): void => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = (): void => {
    setIsSidebarOpen(false);
  };
  const pathname = usePathname();

  return (
    <>
      {/* Header */}
      <header
        className={`bg-white fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          isScrolled ? "shadow-lg py-4" : "py-4"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-10 lg:h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <Image
                  src="/logo/logo.svg"
                  alt="microbrange"
                  width={120}
                  height={40}
                  className="w-32  lg:w-40 h-auto object-contain"
                />
              </Link>
            </div>

            <nav className="hidden xl:flex items-center space-x-6 border border-[#CECECE] rounded-[40px] px-2">
              {navigationItems.slice(1).map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`text-sm px-6 py-3 rounded-[40px] my-2 font-medium whitespace-nowrap transition-all duration-200 ${
                      isActive
                        ? "text-white bg-[#4BBA72] "
                        : "text-black hover:text-white hover:bg-[#4BBA72]  "
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className="flex items-center space-x-3">
              <div className="hidden sm:flex items-center ">
                <Link
                  href="#"
                  className=" flex items-center justify-center  transition-colors duration-200 group"
                  aria-label="WhatsApp"
                >
                  <Image
                    src={Whatsapp}
                    alt="WhatsApp"
                    width={24}
                    height={24}
                    className="w-20 h-12 object-contain filter  group-hover:scale-110 transition-transform duration-200"
                  />
                </Link>
                <Link
                  href="#"
                  className="  flex items-center justify-center  transition-colors duration-200 group"
                  aria-label="Search"
                >
                  <Image
                    src={Search}
                    alt="Search"
                    width={24}
                    height={24}
                    className="w-20 h-12 object-contain filter  group-hover:scale-110 transition-transform duration-200"
                  />
                </Link>
              </div>

              <button
                onClick={toggleSidebar}
                className="xl:hidden text-gray-700 hover:text-[#4BBA72] focus:outline-none p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                aria-label="Toggle menu"
              >
                <Menu className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Sidebar Overlay */}
      <div
        className={`fixed inset-0 bg-black transition-opacity duration-300 z-50 xl:hidden ${
          isSidebarOpen ? "opacity-50 visible" : "opacity-0 invisible"
        }`}
        onClick={closeSidebar}
      />

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-80 sm:w-96 bg-white shadow-2xl transform transition-all duration-300 ease-out z-50 xl:hidden ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between p-4 sm:p-3 border-b border-gray-200 bg-gray-50">
          <Link href="/" onClick={closeSidebar}>
            <Image
              src="/logo/logo.svg"
              alt="microbrange"
              width={120}
              height={60}
              className="w-32 h-auto object-contain"
            />
          </Link>
          <button
            onClick={closeSidebar}
            className="text-gray-500 hover:text-gray-700 hover:bg-gray-200 p-2 rounded-full transition-colors duration-200"
            aria-label="Close menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Sidebar Navigation */}
        <nav className="py-4 flex-1 overflow-y-auto">
          <div className="px-4 sm:px-6 space-y-1">
            {navigationItems.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeSidebar}
                className={`flex items-center space-x-3 p-3 text-gray-700 hover:bg-[#4BBA72]/10 hover:text-[#4BBA72] rounded-xl transition-all duration-200 transform hover:translate-x-1 ${
                  index === 0 ? "bg-[#4BBA72]/5 text-[#4BBA72]" : ""
                }`}
                style={{
                  animationDelay: `${index * 50}ms`,
                }}
              >
                <span className="transition-transform duration-200 group-hover:scale-110">
                  {item.icon}
                </span>
                <span className="font-medium text-base">{item.label}</span>
              </Link>
            ))}
          </div>
        </nav>

        {/* Sidebar Footer */}
        <div className="border-t h-full border-gray-200 p-4 sm:p-6 bg-gray-50">
          <div className="flex items-center justify-center space-x-4 mb-4">
            <Link
              href="#"
              className="w-24 h-24  flex items-center justify-center hover:bg-[#4BBA72]/90 transition-all duration-200 hover:scale-110"
              aria-label="WhatsApp"
            >
              <Image
                src={Whatsapp}
                alt="WhatsApp"
                width={24}
                height={24}
                className="w-12 h-12 object-contain "
              />
            </Link>
          </div>
          <div className="text-center text-xs text-gray-500 font-medium">
            © 2025 Microbrange
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
