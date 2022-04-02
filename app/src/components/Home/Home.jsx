import React, { Fragment, useState } from "react";
import styles from "./Home.module.css";
import ReorderOutlinedIcon from "@mui/icons-material/ReorderOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import HorizontalRuleIcon from "@mui/icons-material/HorizontalRule";
import { footerSvg, cloudName } from "../../assets";
import { Image } from "cloudinary-react";
import Logo from "../UI/Logo";

const Home = () => {
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
              <HorizontalRuleIcon className={styles.pipe} />
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

        <div>
          <button
            type="button"
            className={styles["view_button"]}
            onClick={() => console.log("Clicked")}
          >
            <ReorderOutlinedIcon />
            View all categories
          </button>
        </div>
      </div>

      <footer>
        <div className={styles["footer_svg"]}>
          <Image cloudName={cloudName} publicId={footerSvg}></Image>
        </div>
      </footer>
    </Fragment>
  );
};

export default Home;
