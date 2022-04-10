import React from "react";
import Layout from "../shared/Layout";
import RankTable from "./RankTable";
import styles from "./css/RankCategory.module.css";
import { footballersArray } from "../../assets";

const RankCategory = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <RankTable heading="Footballers" array={footballersArray} />
        </div>
      </div>
    </Layout>
  );
};

export default RankCategory;
