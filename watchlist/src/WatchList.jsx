import React from "react";
import MenuItem from "@mui/material/MenuItem";
import Typography from "@mui/material/Typography";
import ListItemText from "@mui/material/ListItemText";
import DeleteIcon from "@mui/icons-material/Delete";
import { Divider } from "@mui/material";
import Paper from "@mui/material/Paper";
import { Footer } from "./Footer.jsx";
export const WatchList = ({ watchlist, setWatchlist }) => {
  return (
    <div style={{ width: "40%", margin: "auto" }}>
      {watchlist.length > 0 ? (
        <>
          {watchlist.map((option, index) => (
            <>
              <MenuItem
                onMouseEnter={(e) => {
                  let i = document.getElementById(`1${option[0]}`);
                  i.hidden = false;
                }}
                onMouseLeave={(e) => {
                  let i = document.getElementById(`1${option[0]}`);
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
                <Typography hidden={true} id={`1${option[0]}`}>
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
                        {((option[1] - option[2]) / option[2]).toFixed(2) + "%"}
                      </span>
                    </>
                  ) : (
                    <span>No value found</span>
                  )}
                </Typography>
              </MenuItem>
              {index < watchlist.length - 1 ? <Divider></Divider> : ""}
            </>
          ))}
        </>
      ) : (
        ""
      )}
      <Footer></Footer>
    </div>
  );
};
