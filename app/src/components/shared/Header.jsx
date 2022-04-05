import React from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../UI/Logo";
import Back from "../UI/Back";
import styles from "./css/Header.module.css";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.logo} onClick={() => navigate("/")}>
          <Logo />
        </div>
        <div className={styles.navigation}>
          <Back />
        </div>
      </div>
    </div>
  );
};

export default Header;
