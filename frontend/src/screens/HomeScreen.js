import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container } from "@material-ui/core";
import { getLists } from "../actions/listActions";
import TasksList from "../components/TasksList";
import ListModal from "../components/ListModal";
import { CREATE_LIST } from "../constants/listConstants";
import Navbar from "../components/Navbar";

const HomeScreen = () => {
  const lists = useSelector((state) => state.lists);
  // console.log(lists);
  // const [listToBeUpdated, setListToBeUpdated] = useState(null);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getLists());
  }, [lists, dispatch]);

  return (
    <Container>
      <Navbar />
      <ListModal action={CREATE_LIST} />
      <div
        style={{
          display: "flex",
          flexFlow: "row wrap",
          justifyContent: "space-between",
        }}
      >
        {lists.map((list) => (
          <TasksList
            list={list}
            key={list._id}
            // setListToBeUpdated={setListToBeUpdated}
          />
        ))}
      </div>
    </Container>
  );
};

export default HomeScreen;
