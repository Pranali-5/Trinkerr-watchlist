import React from "react";
import { data } from "../data.js";
import "./search.css";
import { styled } from "@mui/material/styles";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import ListItemText from "@mui/material/ListItemText";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import { Divider } from "@mui/material";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";

import { WatchList } from "./WatchList.jsx";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 600,
  bgcolor: "background.paper",
  boxShadow: 24,
  height: 400,
  borderRadius: 2,
  p: 4,
  overflow: "hidden",
};

const Input = styled("input")(({ theme }) => ({
  width: 200,
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.getContrastText(theme.palette.background.paper),
}));

const Listbox = styled("ul")(({ theme }) => ({
  width: 200,
  margin: 0,
  padding: 0,
  zIndex: 1,
  position: "absolute",
  listStyle: "none",
  backgroundColor: theme.palette.background.paper,
  overflow: "auto",
  maxHeight: 300,
  border: "1px solid rgba(0,0,0,.25)",
}));

export const Search = () => {
  const [stock, setStock] = React.useState([]);
  const [watchlist, setWatchlist] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setStock([]);
    setOpen(false);
  };

  const getSearchItem = (e) => {
    let temp = "";
    let value = e.target.value;

    if (value.length > 1) {
      temp = data.filter(function (e) {
        const i = e;

        const tem = i[0].toLowerCase().includes(value.toLowerCase());
        return tem;
      });
    }

    if (temp.length === 0) {
      setStock([]);
    } else {
      setStock(temp);
    }
  };

  return (
    <div>
      <Input
        style={{
          marginLeft: "30%",
          marginTop: "10px",
          width: "40%",
          height: "30px",
        }}
        placeholder="Search stocks..."
        onClick={handleOpen}
      />

      {watchlist.length === 0 ? (
        <div style={{ marginLeft: "45%", marginTop: "200px" }}>
          <div style={{ marginLeft: "-20px" }}>Add assets to start trading</div>
          <Button variant="contained" onClick={handleOpen}>
            <AddIcon></AddIcon> Add New
          </Button>
        </div>
      ) : (
        ""
      )}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Input
            style={{
              width: "100%",
              height: "30px",
            }}
            placeholder="Search stocks..."
            onChange={getSearchItem}
            className="input"
          />
          {stock.length === 0 ? (
            <img
              src="https://web.trinkerr.com/static/media/search.2876cbc7.png"
              alt="search"
              width="60%"
              className="image"
            ></img>
          ) : (
            ""
          )}
          {stock.length > 0 ? (
            <Listbox style={{ width: "91%" }} id="paper">
              {stock.map((option, index) => (
                <>
                  <MenuItem
                    onMouseEnter={(e) => {
                      let i = document.getElementById(option[0]);
                      i.hidden = false;
                    }}
                    onMouseLeave={(e) => {
                      let i = document.getElementById(option[0]);
                      i.hidden = true;
                    }}
                  >
                    <ListItemText>
                      <span
                        style={
                          option[1] > option[2]
                            ? { color: "#27c5c1" }
                            : { color: "#e7582d" }
                        }
                      >
                        {option[0].split("::")[0]}
                      </span>
                      <br />
                      <span className="stockExchange">
                        {option[0].split("::")[1]}
                      </span>
                    </ListItemText>
                    <br />
                    <Typography hidden={true} id={option[0]}>
                      {!watchlist.includes(option) ? (
                        <Paper sx={{ width: 35 }}>
                          <AddIcon
                            sx={{ fontSize: 25 }}
                            className="add"
                            onClick={(e) => {
                              setWatchlist([...watchlist, option]);
                            }}
                          ></AddIcon>
                        </Paper>
                      ) : (
                        <Paper sx={{ width: 35 }}>
                          <DeleteIcon
                            color="error"
                            sx={{ fontSize: 20 }}
                            className="delete"
                            onClick={(e) => {
                              let items = watchlist.filter(function (e) {
                                return e !== option;
                              });
                              setWatchlist(items);
                            }}
                          ></DeleteIcon>
                        </Paper>
                      )}
                    </Typography>
                    <Typography variant="body2">
                      <span
                        style={
                          option[1] > option[2]
                            ? { color: "#27c5c1" }
                            : { color: "#e7582d" }
                        }
                      >
                        {" "}
                        {option[1]}
                      </span>
                      <br />
                      {option[1] ? (
                        <>
                          {" "}
                          <span
                            style={
                              option[1] > option[2]
                                ? { color: "#27c5c1" }
                                : { color: "#e7582d" }
                            }
                          >
                            {option[1] > option[2] ? "▲" : "▼"}
                          </span>
                          <span>
                            {((option[1] - option[2]) / option[2]).toFixed(2) +
                              "%"}
                          </span>
                        </>
                      ) : (
                        <span>No data found</span>
                      )}
                    </Typography>
                  </MenuItem>
                  {index < stock.length - 1 ? <Divider></Divider> : ""}
                </>
              ))}
            </Listbox>
          ) : null}
          <Divider></Divider>
          <div
            className="modal__buttons"
            style={stock.length > 0 ? { marginTop: "50%" } : {}}
          >
            <br />
            <Button
              variant="outlined"
              onClick={handleClose}
              sx={{ marginRight: "10px" }}
            >
              Cancel
            </Button>
            <Button variant="contained" onClick={handleClose}>
              OK
            </Button>
          </div>
        </Box>
      </Modal>
      <div>
        <WatchList watchlist={watchlist} setWatchlist={setWatchlist} />
      </div>
    </div>
  );
};
