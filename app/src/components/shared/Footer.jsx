import React from "react";
import { useLocation } from "react-router-dom";
import { cloudName, homeFooterSvg, listSvg, voteSvg } from "../../assets";
import styles from "./css/Footer.module.css";
import { Image } from "cloudinary-react";

const Footer = (props) => {
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <footer>
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
        ) : pathname === "/vote" ? (
          <Image
            cloudName={cloudName}
            publicId={voteSvg}
            width="330"
            height="1023"
            crop="scale"
          />
        ) : null}
      </div>
    </footer>
  );
};

export default Footer;
