import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import AddIcon from "@material-ui/icons/Add";
import Typography from "@material-ui/core/Typography";
import { Button, ListSubheader } from "@material-ui/core";
import Form from "./Form";
import { CREATE_TASK, UPDATE_TASK } from "../constants/taskConstants";
import { deleteTask, updateTask } from "../actions/taskActions";
import { useDispatch, useSelector } from "react-redux";
import { deleteList, getList } from "../actions/listActions";
import ListModal from "./ListModal";
import { UPDATE_LIST } from "../constants/listConstants";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
    maxWidth: 360,
    height: "fit-content",
    backgroundColor: "#e2f4fc",
    margin: "10px",
  },
  // #9bdcff
  demo: {
    backgroundColor: theme.palette.background.paper,
  },
  title: {
    margin: theme.spacing(4, 0, 2),
  },
}));

export default function TasksList({ list, setListToBeUpdated }) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [checked, setChecked] = useState([]);
  // const [editing, setEditing] = useState(false);
  const [currentlyEditing, setCurrentlyEditing] = useState(null);
  const [addTask, setAddTask] = useState(false);

  // console.log("Currlist", currlist);
  // const [list, setList] = useState(currlist);
  // const list = useSelector((state) => state.list);
  // console.log(list);

  // useEffect(() => {
  //   dispatch(getList(currlist._id));
  // }, [list, currlist._id, dispatch]);

  const handleToggle = (taskId) => () => {
    const currentIndex = checked.indexOf(taskId);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(taskId);
      dispatch(updateTask(list._id, taskId, { completed: true }));
    } else {
      newChecked.splice(currentIndex, 1);
      dispatch(updateTask(list._id, taskId, { completed: false }));
    }
    // console.log(checked);

    setChecked(newChecked);
  };

  return (
    <>
      <List
        subheader={
          <ListSubheader
            component="div"
            id="nested-list-subheader"
            style={{ backgroundColor: "#9bdcff" }}
          >
            {list.title.toUpperCase()}
            <span style={{ float: "right" }}>
              <ListItemIcon>
                {/* <IconButton edge="end" aria-label="edit"> */}
                <ListModal action={UPDATE_LIST} list={list} />
                {/* </IconButton> */}
                <IconButton edge="end" aria-label="delete">
                  <DeleteIcon onClick={() => dispatch(deleteList(list._id))} />
                </IconButton>
              </ListItemIcon>
            </span>
          </ListSubheader>
        }
        className={classes.root}
      >
        {list.description ? (
          <Typography
            component="p"
            variant="body1"
            style={{ margin: "2px 15px" }}
          >
            {list.description}
          </Typography>
        ) : (
          <></>
        )}
        <Button
          style={{ textTransform: "none", fontWeight: "lighter" }}
          onClick={() => {
            setAddTask(!addTask);
          }}
          startIcon={<AddIcon />}
        >
          Add a Task
        </Button>
        {addTask && (
          <Form
            setAddTask={setAddTask}
            listId={list._id}
            action={CREATE_TASK}
            setListToBeUpdated={setListToBeUpdated}
          />
        )}

        {list.tasks.map((task) => (
          <ListItem key={task._id} role={undefined} dense button>
            <ListItemIcon style={{ minWidth: "36px" }}>
              <Checkbox
                checked={task.completed}
                onChange={handleToggle(task._id)}
                edge="start"
                tabIndex={-1}
                disableRipple
                inputProps={{ "aria-labelledby": task._id }}
              />
            </ListItemIcon>
            {currentlyEditing === task._id ? (
              <Form
                // currentlyEditing={currentlyEditing}
                setCurrentlyEditing={setCurrentlyEditing}
                title={task.title}
                description={task.description}
                deadline={task.deadline}
                listId={list._id}
                taskId={task._id}
                action={UPDATE_TASK}
              />
            ) : (
              <>
                <ListItemText
                  style={{
                    textDecoration: task.completed ? "line-through" : "none",
                  }}
                  primary={task.title}
                  secondary={task.description}
                ></ListItemText>

                {/* {task.deadline ? (
                  <TextField
                    value={task.deadline}
                    variant="outlined"
                    color="secondary"
                    type="Date"
                    readOnly
                  />
                ) : (
                  <></>
                )} */}
                <ListItemIcon>
                  <IconButton edge="end" aria-label="edit">
                    <EditIcon
                      onClick={() => {
                        setCurrentlyEditing(task._id);
                        // setListToBeUpdated(list._id);
                      }}
                    />
                  </IconButton>
                  <IconButton edge="end" aria-label="delete">
                    <DeleteIcon
                      onClick={() => dispatch(deleteTask(list._id, task._id))}
                    />
                  </IconButton>
                </ListItemIcon>
              </>
            )}
          </ListItem>
        ))}
      </List>
    </>
  );
}
