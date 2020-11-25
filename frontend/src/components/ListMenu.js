import React, { useState } from "react";
import IconButton from "@material-ui/core/IconButton";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { useDispatch } from "react-redux";
import { deleteList } from "../actions/listActions";
import ListModal from "./ListModal";
import { UPDATE_LIST } from "../constants/listConstants";

const options = ["Edit", "Delete"];

const ITEM_HEIGHT = 48;

export default function ListMenu(props) {
  const [anchorEl, setAnchorEl] = useState(null);
  const dispatch = useDispatch();
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (option) => {
    // console.log(option);
    switch (option) {
      case "Edit":
        break;
      case "Delete":
        dispatch(deleteList(props.list._id));
        break;
      default:
        break;
    }
    setAnchorEl(null);
  };

  return (
    <>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: "20ch",
          },
        }}
      >
        {options.map((option) => (
          <MenuItem key={option} onClick={() => handleClose(option)}>
            {option === "Edit" && (
              <ListModal
                action={UPDATE_LIST}
                list={props.list}
              />
            )}
            {option === "Delete" && "Delete"}
          </MenuItem>
        ))}
      </Menu>
    </>
  );
}
