import React from "react";
import Logo from "../UI/Logo";
import Back from "../UI/Back";
import styles from "./css/Header.module.css";

const Header = () => {

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.logo}>
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
