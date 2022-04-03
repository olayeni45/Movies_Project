import React from "react";
import styles from "./css/RankItem.module.css";

const RankItem = ({ name, total }) => {
  return (
    <div className={styles.container}>
      <div>{name}</div>
      <div>{total}</div>
    </div>
  );
};

export default RankItem;
