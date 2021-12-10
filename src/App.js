import React from 'react';
import ReactDOMServer from 'react-dom/server'
import {Container,Button,Grid,TextField,Modal,Typography,Box} from '@mui/material'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import CachedIcon from '@mui/icons-material/Cached'
import { CopyBlock, dracula } from "react-code-blocks";
import './App.css';

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
  const code = <script src="https://cdn.jsdelivr.net/gh/isurewould/phantom-wallet-button@main/main.js" buttonText={props.buttonText}></script>
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

class App extends React.Component {
  state = {
    buttonText: ''
  }

  handleChange = (e) => this.setState({
		buttonText: e.target.value
	})

  render() {
    return (
      <div className="App">
        <div className="CreateButton" ref={el => (this.div = el)}>
          <Container maxWidth="sm">
            <Grid container spacing={0} alignItems="center" style={{ minHeight: '100vh' }}>
              <Grid item xs={2}>
                <AccountBalanceWalletIcon />
              </Grid>
              <Grid item xs={5}>
                <TextField id="outlined-basic" label="Button Text" variant="outlined" onChange={this.handleChange} />
              </Grid>
              <Grid item xs={5}>
                <GenerateButton buttonText={this.state.buttonText}/>
              </Grid>
            </Grid>
          </Container>
        </div>
      </div>
    );
  }
}

export default App;
