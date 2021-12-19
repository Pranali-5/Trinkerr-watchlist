import React from "react";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Paper from "@mui/material/Paper";
import CreateNewFolderIcon from "@mui/icons-material/CreateNewFolder";
import Pagination from "@mui/material/Pagination";

export const Footer = () => {
  const [value, setValue] = React.useState(0);
  const [c, setC] = React.useState(1);
  return (
    <div>
      <Paper
        sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
        elevation={2}
      >
        <Pagination
          sx={{ marginLeft: "40%", float: "left" }}
          count={c}
          variant="outlined"
          shape="rounded"
        />
        <BottomNavigation
          sx={{ float: "left" }}
          showLabels
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            label="Create"
            icon={
              <CreateNewFolderIcon
                fontSize="small"
                onClick={() => {
                  setC(c + 1);
                }}
              />
            }
          />
        </BottomNavigation>
      </Paper>
    </div>
  );
};
