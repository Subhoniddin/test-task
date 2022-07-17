import * as React from "react";
import "./reUser.css";
import userlogo from "../../img/userlogo.jpeg";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


const ReUser = (props) => {
  const [open, setOpen] = React.useState(false);
  const user = props.repo;

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="card_user">
      <Button variant="outlined" onClick={handleClickOpen}>
        {user.id}
      </Button>
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>{user.name}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            {user.email}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose}>Agree</Button>
        </DialogActions>
      </Dialog>
      <div className="user_img">
        <div className="user_info">
          <span className="name">{user.name}</span>
          <span className="info">{user.username}</span>
          <span className="info">{user.email}</span>
          <span className="info">{user.website}</span>
        </div>
        <img className="user_logo" src={userlogo} alt="" />
      </div>
    </div>
  );
};

export default ReUser;
