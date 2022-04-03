import React from "react";
import { useNavigate } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import styles from "./css/Back.module.css";

const Back = (props) => {
  const navigate = useNavigate();

  const handleNavigationClickHandler = () => {
    navigate(-1);
  };

  return (
    <button
      type="button"
      onClick={handleNavigationClickHandler}
      className={styles["back_button"]}
    >
      <ArrowBackIosIcon />
      <div className={styles.text}>back</div>
    </button>
  );
};

export default Back;
