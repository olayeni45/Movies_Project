import React from "react";
import { categorySvg, cloudName } from "../../assets";
import { Image } from "cloudinary-react";
import styles from './css/RankFooter.module.css'

const RankFooter = () => {
  return (
    <footer>
      <div className={styles["footer_svg"]}>
        <Image
          cloudName={cloudName}
          publicId={categorySvg}
          width="1440"
          height="350"
          crop="scale"
        />
      </div>
    </footer>
  );
};

export default RankFooter;
