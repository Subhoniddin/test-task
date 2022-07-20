/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from "react";
import { Stack } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import "./Footer.css";
import { useSelector } from "react-redux";
const Footer = ({ currentPage, onPageChange }) => {
  const postsCount = useSelector((state) => state.repos.totalPostsCount);

  return (
    <Stack spacing={2}>
      <Pagination
        onChange={(e, page) => {
          onPageChange(page);
        }}
        count={postsCount}
        color="primary"
        page={currentPage}
      />
    </Stack>
  );
};

export default Footer;
