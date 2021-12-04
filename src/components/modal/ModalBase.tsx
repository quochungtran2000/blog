//@ts-ignore
/* tslint:disable */
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

// import LoginForm from "../form/LoginForm";
export default function ModalBase() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            p: 4,
          }}
        >
          {/* <LoginForm onClose={handleClose} onOpenRegister={}></LoginForm> */}
        </Box>
      </Modal>
    </div>
  );
}
