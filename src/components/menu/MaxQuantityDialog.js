import React from "react";
import { Dialog, DialogActions, DialogContent, Button } from "@mui/material";

const MaxQuantityDialog = ({ maxQuantityReached, handleCloseDialog }) => {
  return (
    <Dialog open={maxQuantityReached} onClose={handleCloseDialog}>
      <DialogContent>Maximum quantity reached for this item.</DialogContent>
      <DialogActions>
        <Button onClick={handleCloseDialog} color="primary">
          OK
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default MaxQuantityDialog;
