import React from "react";
import Layout from "../shared/Layout";
import styles from "./Vote.module.css";

const Card = ({ name, image }) => {
  return (
    <div className={styles.card}>
      <div>
        <img className={styles.image} src={image} alt="Voting card" />
      </div>
      <div className={styles["image_name"]}>{name}</div>
    </div>
  );
};

const Vote = (props) => {
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.heading}>Pick your favorite!</div>
          <div className={styles["card_container"]}>
            <Card
              name="Cristiano Ronaldo"
              image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcKQcIT2DDVHHrQsJ6fp48iPP7olFQUos0ZA&usqp=CAU"
            />
            <div className={styles.vs} >vs </div>
            <Card
              name="Neymar jr"
              image="https://media.gettyimages.com/photos/neymar-of-paris-saintgermain-celebrates-after-scoring-his-teams-goal-picture-id1066156238?k=20&m=1066156238&s=612x612&w=0&h=BaqqfoAzJWkrB-DqWIkALgCnjP6uTcXLBCwr-JUgzIA="
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Vote;
