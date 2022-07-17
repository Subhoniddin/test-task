import "./Posts.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import Footer from "../Footer/Footer";
import { getReposte } from "../action/repost";
import Repos from "./Repos";

const Posts = () => {
  const dispatch = useDispatch();
  const { item } = useSelector((state) => state.repos);

  useEffect(() => {
    dispatch(getReposte());
  }, [dispatch]);

  return (
    <div className="main_posts">
      {item.map((repo, index) => (
        <Repos key={index} repo={repo} />
      ))}
      <Footer />
    </div>
  );
};

export default Posts;
