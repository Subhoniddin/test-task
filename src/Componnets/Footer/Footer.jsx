/* eslint-disable jsx-a11y/anchor-is-valid */
import * as React from "react";
import { Stack } from "@mui/material";
import Pagination from "@mui/material/Pagination";
import "./Footer.css";
const Footer = () => {
  return (
    <Stack spacing={2}>
      <Pagination onChange={(e, page) => {console.log(page)}} count={10} color="primary" />
    </Stack>
  );
};

export default Footer;
