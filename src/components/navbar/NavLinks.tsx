import React from "react";
import { NavItem } from "./NavItem";
import { ResumeButton } from "./ResumeButton";
import { navigationItems } from "./config";

export const NavLinks = () => {
  return (
    <>
      {navigationItems.map((item) => (
        <NavItem key={item.href} {...item} />
      ))}
      <ResumeButton />
    </>
  );
};
