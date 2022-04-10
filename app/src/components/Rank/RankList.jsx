import React from "react";
import Layout from "../shared/Layout";
import RankTable from "./RankTable";
import styles from "./css/RankList.module.css";

const RankList = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <RankTable heading="All Category"/>
        </div>
      </div>
    </Layout>
  );
};

export default RankList;
