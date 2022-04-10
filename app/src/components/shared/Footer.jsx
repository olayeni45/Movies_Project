import React from "react";
import { useLocation } from "react-router-dom";
import { cloudName, homeFooterSvg, listSvg, voteSvg } from "../../assets";
import styles from "./css/Footer.module.css";
import { Image } from "cloudinary-react";

const Footer = () => {
  const { pathname } = useLocation();
  return (
    <footer>
      {pathname === "/vote" ? (
        <div className={styles["vote_footer"]}>
          <Image
            cloudName={cloudName}
            publicId={voteSvg}
            width="194"
            height="600"
            crop="scale"
          />
        </div>
      ) : (
        <div className={styles["footer_svg"]}>
          {pathname === "/" ? (
            <Image cloudName={cloudName} publicId={homeFooterSvg} />
          ) : pathname === "/list" || pathname === "/category" ? (
            <Image
              cloudName={cloudName}
              publicId={listSvg}
              width="1440"
              height="350"
              crop="scale"
            />
          ) : null}
        </div>
      )}
    </footer>
  );
};

export default Footer;
