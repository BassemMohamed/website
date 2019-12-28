import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { slide as Slide } from "react-burger-menu";
import MainRoutes from "../../../Routes/MainRoutes";

const Menu = () => {
  let { pathname } = useLocation();
  let [open, setOpen] = useState(false);

  const onStateChange = state => {
    setOpen(state.isOpen);
  };

  return (
    <Slide
      isOpen={open}
      onStateChange={onStateChange}
      pageWrapId={"page-wrapper"}
    >
      {MainRoutes.map(route => {
        let className = "";
        className += pathname === route.key ? "active " : "";
        className += route.disabled ? "disabled " : "";
        return (
          <div
            key={route.key}
            className={className}
            onClick={() => setOpen(false)}
          >
            <Link to={route.key}>
              {route.icon}
              {route.name}
              {route.description && <span>- {route.description}</span>}
            </Link>
          </div>
        );
      })}
    </Slide>
  );
};

export default Menu;
