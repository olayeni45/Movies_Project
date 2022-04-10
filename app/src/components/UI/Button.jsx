import React from "react";
import { useLocation } from "react-router-dom";
import ReorderOutlinedIcon from "@mui/icons-material/ReorderOutlined";
import HowToVoteIcon from "@mui/icons-material/HowToVote";
import styles from "./css/Button.module.css";

const Button = (props) => {
  const { onClick } = props;
  const { pathname } = useLocation();
  return (
    <button type="button" onClick={onClick}>
      {pathname === "/" ? (
        <div className={`${styles["btn"]} ${styles["home"]} `}>
          <ReorderOutlinedIcon />
          View all categories
        </div>
      ) : (
        <div className={`${styles["btn"]} ${styles["rank"]} `}>
          <HowToVoteIcon /> Vote
        </div>
      )}
    </button>
  );
};

export default Button;
