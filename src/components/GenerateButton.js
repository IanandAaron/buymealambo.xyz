import React from 'react';
import ReactDOMServer from 'react-dom/server'
import {Button,Modal,Typography,Box} from '@mui/material'
import CachedIcon from '@mui/icons-material/Cached'
import { CopyBlock, dracula } from "react-code-blocks";

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

function GenerateButton(props) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const code = <script src="https://cdn.jsdelivr.net/gh/isurewould/phantom-wallet-button@main/main.js" buttontext={props.buttonText}></script>
    return (
        <div>
        <Button variant="contained" startIcon={<CachedIcon />} onClick={handleOpen}>Generate Button</Button>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
                Javascript Snippet
            </Typography>
            <CopyBlock
                text={ReactDOMServer.renderToStaticMarkup(code)}
                language={"javascript"}
                showLineNumbers={false}
                theme={dracula}
                wrapLines
            />
            </Box>
        </Modal>
        </div>
    );
}
export default GenerateButton;