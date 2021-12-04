import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import RegisterForm from "../form/RegisterForm";

type Props = {
  open: boolean;
  onClose: () => void;
  onOpenLogin: () => void;
};

export default function RegisterModal({ open, onClose, onOpenLogin }: Props) {
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
          <RegisterForm
            onClose={onClose}
            onOpenLogin={onOpenLogin}
          ></RegisterForm>
        </Box>
      </Modal>
    </div>
  );
}
