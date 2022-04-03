import React from "react";
import Layout from "../shared/Layout";
import RankItem from "./RankItem";
import { rankListArray } from "../../assets";
import styles from "./css/RankList.module.css";

const RankList = () => {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.text}>All Categories</div>
          <div className={styles.list}>
            <div>
              <div className={styles["table_heading"]}>
                <div className={styles.heading}>Name</div>
                <div className={styles.heading}>No of Items</div>
              </div>

              {rankListArray.map((item, index) => (
                <RankItem key={index} name={item.name} total={item.total} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default RankList;
