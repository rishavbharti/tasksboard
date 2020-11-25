import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { useAuth } from "../contexts/AuthContext";
import { useHistory } from "react-router";
import Alert from "@material-ui/lab/Alert";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    margin: "20vh auto",
    textAlign: "center",
  },
  pos: {
    marginBottom: 12,
  },
});

export default function Dashboard() {
  const classes = useStyles();
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    setError("");
    try {
      await logout();
      history.push("/");
    } catch (error) {
      setError(error);
    }
  }

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h5" component="h2">
          Profile
        </Typography>
        <div style={{ margin: "20px" }}>
          {error && <Alert severity="error">{error}</Alert>}
        </div>
        <Typography className={classes.pos} color="textSecondary">
          Email:
          {currentUser && JSON.stringify(currentUser.email)}
        </Typography>
        <Link to="/board">
          <Button>View your TasksBoard</Button>
        </Link>

        {/* <Button variant="outlined" size="small" color="primary">
          <Link to="/update-profile">Update Profile</Link>
        </Button> */}
      </CardContent>
      <Button size="small" onClick={handleLogout}>
        Log Out
      </Button>
    </Card>
  );
}
