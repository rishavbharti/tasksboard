import React, { useState } from "react";
import { Button, ButtonGroup, TextField } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import CancelIcon from "@material-ui/icons/Cancel";
import { CREATE_TASK, UPDATE_TASK } from "../constants/taskConstants";
import { useDispatch } from "react-redux";
import { createTask, updateTask } from "../actions/taskActions";
import { CREATE_LIST, UPDATE_LIST } from "../constants/listConstants";
import { createList, updateList } from "../actions/listActions";

const Form = (props) => {
  const dispatch = useDispatch();
  const [data, setData] = useState({
    title: props.title || "",
    description: props.description || "",
    deadline: props.deadline || Date,
  });

  const handleCancel = () => {
    switch (props.action) {
      case UPDATE_TASK:
        props.setCurrentlyEditing(null);
        break;
      case CREATE_TASK:
        props.setAddTask(false);
        break;
      case CREATE_LIST:
        props.onClick();
        break;
      case UPDATE_LIST:
        props.onClick();
        break;
      default:
        break;
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    handleCancel();
    switch (props.action) {
      case CREATE_LIST:
        dispatch(createList(data));
        break;
      case UPDATE_LIST:
        dispatch(updateList(props.listId, data));
        break;
      case CREATE_TASK:
        // props.setListToBeUpdated(props.listId);
        dispatch(createTask(props.listId, data));
        break;
      case UPDATE_TASK:
        dispatch(updateTask(props.listId, props.taskId, data));
        break;
      default:
        return;
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit}
        noValidate
        style={{
          width: "90%",
          margin: "0 auto 30px auto",
        }}
      >
        <TextField
          variant="filled"
          value={data.title}
          onChange={(e) => setData({ ...data, title: e.target.value })}
          required
          fullWidth
          id="title"
          label="Title"
          name="title"
          autoFocus
        />
        <TextField
          variant="outlined"
          value={data.description}
          onChange={(e) => setData({ ...data, description: e.target.value })}
          margin="normal"
          fullWidth
          multiline
          rows={3}
          name="description"
          label="Description"
          id="description"
        />
        <TextField
          variant="standard"
          value={data.deadline}
          onChange={(e) => setData({ ...data, deadline: e.target.value })}
          type="Date"
          label="Deadline"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <ButtonGroup
          size="small"
          aria-label="small outlined button group"
          style={{ float: "right", marginTop: "15px" }}
        >
          <Button>
            <CancelIcon onClick={handleCancel} />
          </Button>
          <Button>
            <SaveIcon onClick={handleSubmit} />
          </Button>
        </ButtonGroup>
      </form>
    </>
  );
};

export default Form;
