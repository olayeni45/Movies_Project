import React, { Fragment } from "react";
import { Image } from "cloudinary-react";
import { cloudName, logoUrl } from "../../assets";

const Logo = ({ location }) => {
  return (
    <Fragment>
      {location === "home" ? (
        <Image
          cloudName={cloudName}
          publicId={logoUrl}
          width="350"
          height="113"
          crop="scale"
        />
      ) : (
        <Image
          cloudName={cloudName}
          publicId={logoUrl}
          width="200"
          height="65"
          crop="scale"
        />
      )}
    </Fragment>
  );
};

export default Logo;
