import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import EditIcon from "@material-ui/icons/Edit";
import { Button } from "@material-ui/core";
import Form from "./Form";
import { CREATE_LIST } from "../constants/listConstants";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 320,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function ListModal(props) {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // const handleSave = (e) => {
  //   handleClose();
  // };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h3 id="modal-title">
        {props.action === CREATE_LIST
          ? "Creating a List"
          : `Updating ${props.list.title}`}
      </h3>
      <Form
        action={props.action}
        onClick={handleClose}
        listId={props.list && props.list._id}
        title={props.list && props.list.title}
        description={props.list && props.list.description}
      />
    </div>
  );

  return (
    <div>
      <Button
        onClick={handleOpen}
        endIcon={
          props.action === CREATE_LIST ? (
            <AddCircleIcon />
          ) : (
            <EditIcon style={{ marginLeft: "50px" }} />
          )
        }
      >
        {props.action === CREATE_LIST && "New List"}
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
