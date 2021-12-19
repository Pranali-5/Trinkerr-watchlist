import React from "react";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import MenuItem from "@mui/material/MenuItem";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  boxShadow: 24,
  height: 200,
  borderRadius: 2,
  p: 4,
  overflow: "hidden",
};
const Input = styled("input")(({ theme }) => ({
  width: 200,
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.getContrastText(theme.palette.background.paper),
}));

export const Navbar = () => {
  const [data, setData] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const [value, setValue] = React.useState("Demo");
  const handleClose = () => {
    setData(value);
    setOpen(false);
  };
  const handleChange = (e) => {
    setData(e.target.value);
  };
  const handleValue = () => {
    setValue(data);
    setOpen(false);
  };
  return (
    <div>
      <Paper sx={{ position: "fixed", width: "40%", left: "30%" }}>
        {/* <div
          style={{ fontWeight: "bold", marginLeft: "20px", marginTop: "2px" }}
        >
          {data}
        </div>
        <div style={{ float: "right" }}>
          {" "}
          <EditIcon></EditIcon>
          <DeleteIcon fontSize="small" color="error" />
        </div> */}
        <MenuItem>
          <ListItemText>{value}</ListItemText>
          <Typography variant="body2" color="text.secondary">
            <EditIcon onClick={handleOpen}></EditIcon>
            <DeleteIcon fontSize="small" color="error" />
          </Typography>
        </MenuItem>
      </Paper>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Edit Watchlist
          </Typography>
          <Divider></Divider>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Name*
          </Typography>
          <Input
            value={data}
            style={{
              width: "100%",
              height: "25px",
            }}
            onChange={handleChange}
          ></Input>
          <div style={{ float: "right", marginTop: "40px" }}>
            <Divider></Divider>
            <Button
              variant="outlined"
              onClick={handleClose}
              sx={{ marginRight: "10px" }}
            >
              Cancel
            </Button>
            <Button variant="contained" onClick={handleValue}>
              Submit
            </Button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};
