import "./Posts.css";
import { useDispatch, useSelector } from "react-redux";
import React, { useEffect } from "react";
import Footer from "../Footer/Footer";
import { getReposte } from "../action/repost";
import Repos from "./Repos";

const Posts = () => {
  const dispatch = useDispatch();
  const { item } = useSelector((state) => state.repos);
  const [currentPage, setCurrentPage] = React.useState(1);

  useEffect(() => {
    dispatch(getReposte(currentPage));
  }, [dispatch, currentPage]);

  return (
    <div className="main_posts">
      <Footer
        currentPage={currentPage}
        onPageChange={(page) => setCurrentPage(page)}
      />
      {item.map((repo, index) => (
        <Repos key={index} repo={repo} />
      ))}
    </div>
  );
};

export default Posts;
