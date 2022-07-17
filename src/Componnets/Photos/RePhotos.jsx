import React from "react";
import AlertDialogSlide from "../Dialog/Dialog";
import "./rePhotos.css";

const RePhotos = (props) => {
  const photo = props.photo;

  return (
    <div className="photos_card">
      <span>
        <AlertDialogSlide photo={photo} />
      </span>
      <div className="main_photos">
        <div className="title_photo">{photo.title}</div>
        <div className="photo">
          <img src={photo.url} alt="img" />
        </div>
      </div>
    </div>
  );
};

export default RePhotos;
