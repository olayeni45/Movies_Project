import React, { Fragment } from "react";
import { useLocation } from "react-router-dom";
import styles from "./css/RankTable.module.css";

const RankItem = ({ name, total }) => {
  return (
    <div className={styles["list_container"]}>
      <div>{name}</div>
      <div>{total}</div>
    </div>
  );
};

const CategoryItem = ({ rank, name, votes }) => {
  return (
    <div className={styles["list_container"]}>
      <div>{rank}</div>
      <div>{name}</div>
      <div>{votes}</div>
    </div>
  );
};

const RankTable = ({ heading, array }) => {
  const { pathname } = useLocation();

  return (
    <Fragment>
      <div className={styles.text}>{heading}</div>
      {pathname === "/list" ? (
        <div className={styles.list}>
          <div className={styles["table_heading"]}>
            <div className={styles.heading}>Name</div>
            <div className={styles.heading}>No of Items</div>
          </div>

          {array.map((item, index) => (
            <RankItem key={index} name={item.name} total={item.total} />
          ))}
        </div>
      ) : pathname === "/rank" ? (
        <div className={styles["second_list"]}>
          <div className={styles["table_heading"]}>
            <div className={styles.heading}>Rank</div>
            <div className={styles.heading}>Name</div>
            <div className={styles.heading}>Votes</div>
          </div>

          {array.map((item, index) => (
            <CategoryItem
              key={index}
              rank={item.rank}
              name={item.name}
              votes={item.votes}
            />
          ))}
        </div>
      ) : null}
    </Fragment>
  );
};

export default RankTable;
