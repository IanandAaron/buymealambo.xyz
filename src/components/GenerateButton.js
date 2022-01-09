import React from "react";
import {
  Button,
  Modal,
  Typography,
  Box,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import CachedIcon from "@mui/icons-material/Cached";
import { CopyBlock, nord } from "react-code-blocks";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "60%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

function GenerateButton(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const code = `// Phantom Wallet Button
<script src="https://unpkg.com/@solana/web3.js@latest/lib/index.iife.js"></script>
<script
  src="https://cdn.jsdelivr.net/gh/IanandAaron/phantom-wallet-button@latest/main.js"
  id="solButton"
  button-text=${props.buttonText}
  network=${props.network}
  destination-address=${props.destinationAddress}
  sol-amount=${props.solAmount}
></script>`;

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const buttonProps = {
    size: isSmallScreen ? "small" : "large",
  };
  return (
    <div>
      <Button
        {...buttonProps}
        variant="contained"
        startIcon={<CachedIcon />}
        onClick={handleOpen}
      >
        Generate Button
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            HTML Snippet
          </Typography>
          <div className="CodeBlock">
            <CopyBlock
             customStyle={{
                overflowX: 'scroll',
                overflowY: 'scroll',
                borderRadius: '10px',
                boxShadow: '1px 2px 3px rgba(0,0,0,0.35)',
              }}
              text={code}
              language={"html"}
              theme={nord}
              wrapLongLines={true}
            />
          </div>
        </Box>
      </Modal>
    </div>
  );
}
export default GenerateButton;
