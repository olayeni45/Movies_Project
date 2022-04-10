import React, { Fragment } from "react";
import styles from "./css/RankTable.module.css";
import RankItem from "./RankItem";
import { rankListArray } from "../../assets";

const RankTable = ({heading}) => {
  return (
    <Fragment>
      <div className={styles.text}>{heading}</div>
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
    </Fragment>
  );
};

export default RankTable;
