import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Home.module.css";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import Logo from "../UI/Logo";
import Footer from "../shared/Footer";
import Button from "../UI/Button";

const Home = () => {
  const navigate = useNavigate();
  const path = "/list";
  const [input, setInput] = useState("");

  const handleInputClickHandler = () => {
    console.log(input);
  };

  return (
    <Fragment>
      <div className={styles.container}>
        <div className={styles.logo}>
          <Logo location="home" />
          <div className={styles.text}>Rank your favorite to the top</div>
        </div>

        <div className={styles["search_container"]}>
          <div className={styles.search}>
            <div>
              <input
                type="text"
                placeholder="Search Category"
                onChange={(evt) => setInput(evt.target.value)}
              />
            </div>
            <div>
              <button
                type="button"
                className={styles["search_button"]}
                onClick={handleInputClickHandler}
              >
                <SearchOutlinedIcon />
              </button>
            </div>
          </div>
        </div>

        <div className={styles["btn_container"]}>
          <Button onClick={() => navigate(path)} />
        </div>
      </div>

      <Footer />
    </Fragment>
  );
};

export default Home;
