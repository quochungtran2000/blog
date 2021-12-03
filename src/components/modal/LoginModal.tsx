import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import LoginForm from "../form/LoginForm";

type Props = {
  open: boolean;
  onClose: () => void;
  onOpenRegister: () => void;
};

export default function LoginModal({ open, onClose, onOpenRegister }: Props) {
  return (
    <div>
      <Modal
        open={open}
        onClose={onClose}
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
          <LoginForm
            onClose={onClose}
            onOpenRegister={onOpenRegister}
          ></LoginForm>
        </Box>
      </Modal>
    </div>
  );
}
