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

const Vote = () => {
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
            <div className={styles.vs}>vs</div>
            <Card
              name="Neymar jr"
              image="https://media.gettyimages.com/photos/neymar-jr-of-brazil-poses-during-the-official-fifa-world-cup-2018-picture-id972647266?k=20&m=972647266&s=612x612&w=0&h=9wYLARZJvMAmKK5rSN02ZsU-1Ug2Qg036UaSrqYEn7E="
            />
          </div>
          <div className={styles["last_heading"]}>Click on card to vote</div>
        </div>
      </div>
    </Layout>
  );
};

export default Vote;
