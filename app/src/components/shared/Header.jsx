import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Logo from "../UI/Logo";
import Back from "../UI/Back";
import Button from "../UI/Button";
import styles from "./css/Header.module.css";

const Header = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.logo} onClick={() => navigate("/")}>
          <Logo />
        </div>
        <div className={styles.navigation}>
          <Back />
          {pathname === "/rank" && <Button onClick={() => navigate("/vote")} />}
        </div>
      </div>
    </div>
  );
};

export default Header;
