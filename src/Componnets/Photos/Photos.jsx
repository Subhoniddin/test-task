import { React, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPhotos } from "../action/repost";
import Footer from "../Footer/Footer";
import "./Photos.css";
import RePhotos from "./RePhotos";

const Photos = () => {
  const dispatch = useDispatch();
  const { photos } = useSelector((state) => state.repos);
  useEffect(() => {
    dispatch(getPhotos());
  }, []);

  return (
    <div className="main_photo">
      {photos.map((photo, index) => (
        <RePhotos photo={photo} key={index} />
      ))}
      <div className="pagination">
        <Footer />
      </div>
    </div>
  );
};

export default Photos;
