import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import HeaderDesktop from "../../components/layout/headerDesktop/HeaderDesktop";
import HeaderMobile from "../../components/layout/headerMobile/HeaderMobile";
import FooterMobile from "../../components/layout/footerMobile/FooterMobile";

const Layout = () => {
  const [desktopMenu, setDesktopMenu] = useState(false);

  useEffect(() => {
    handleDesktopMenu();

    window.addEventListener("resize", handleDesktopMenu);

    return () => {
      window.removeEventListener("resize", handleDesktopMenu);
    };
  }, []);

  const handleDesktopMenu = () => {
    const windowWidth = window.innerWidth;

    if (windowWidth > 650) {
      setDesktopMenu(true);
    } else {
      setDesktopMenu(false);
    }
  };
  return (
    <main className="layout">
      {desktopMenu && <HeaderDesktop />}
      {!desktopMenu && <HeaderMobile />}
      <Outlet />
      {!desktopMenu && <FooterMobile />}
    </main>
  );
};

export default Layout;
