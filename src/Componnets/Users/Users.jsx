import { useDispatch, useSelector } from "react-redux";
import ReUser from "./ReUser";
import "./Users.css";
import { useEffect } from "react";
import { getUser } from "../action/repost";

const Users = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.repos);

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  return (
    <div className="main_posts">
      {user.map((repo, index) => (
        <ReUser key={index} repo={repo} />
      ))}
    </div>
  );
};

export default Users;
