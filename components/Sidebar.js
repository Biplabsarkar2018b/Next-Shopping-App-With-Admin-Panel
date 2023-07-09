import Link from "next/link";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import SettingsIcon from "@mui/icons-material/Settings";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import { useRouter } from "next/router";
const Sidebar = () => {
  const inactiveLink = "flex gap-1 my-4 p-2 rounded-l-lg";
  const activeLink = inactiveLink + " text-blue-900 bg-white";
  const router = useRouter();
  const { pathname } = router;
  return (
    <aside className="ps-3 text-white">
      <Link className="flex gap-1 my-4 mr-5" href={"./"}>
        <AdminPanelSettingsIcon />
        <h1 className="font-bold whitespace-nowrap">Admin Panel</h1>
      </Link>
      <nav>
        <Link className={pathname==='/' ? activeLink : inactiveLink} href={"/"}>
          <HomeIcon />
          <h1>Dashboard</h1>
        </Link>
        <Link
          className={pathname.includes("/products") ? activeLink : inactiveLink}
          href={"/products"}
        >
          <PhoneIphoneIcon />
          Products
        </Link>
        <Link className={pathname.includes("/orders") ? activeLink : inactiveLink} href={"/orders"}>
          <ShoppingCartIcon />
          Orders
        </Link>
        <Link className={pathname.includes("/settings") ? activeLink : inactiveLink} href={"/settings"}>
          <SettingsIcon />
          Settings
        </Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
