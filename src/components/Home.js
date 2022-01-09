import React from "react";
import {
  Container,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Stack,
} from "@mui/material";
import GenerateButton from "./GenerateButton";

const style = {
  width: {
    xs: 300, // theme.breakpoints.up('xs')
  },
}

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonText: "",
      network: "",
      solAmount: "",
      destinationAddress: "",
    };
  }

  handleButtonChange = (e) => {
    this.setState({
      buttonText: e.target.value,
    });
  };

  handleDestinationChange = (e) => {
    this.setState({
      destinationAddress: e.target.value,
    });
  };

  handleSolAmountChange = (e) => {
    this.setState({
      solAmount: e.target.value,
    });
  };

  handleNetworkChange = (e) => {
    this.setState({
      network: e.target.value,
    });
  };

  render() {
    return (
      <div className="Home">
        <div className="CreateButton" ref={(el) => (this.div = el)}>
          <Container maxWidth="md">
            <Stack 
              direction="column"
              spacing={2}
              justifyContent="center"
              alignItems="center"
              padding={20}
            >
              <TextField
                sx={style}
                id="filled-basic"
                label="Button Text"
                variant="filled"
                size="small"
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={this.handleButtonChange}
              />
              <TextField
                sx={style}
                id="filled-basic"
                label="Destination Wallet Address"
                variant="filled"
                size="small"
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={this.handleDestinationChange}
              />
              <TextField
                sx={style}
                id="filled-basic"
                label="Sol Amount"
                type="number"
                variant="filled"
                size="small"
                InputLabelProps={{
                  shrink: true,
                }}
                onChange={this.handleSolAmountChange}
              />
              <FormControl
                sx={style}
              >
                <InputLabel id="network-select-label">Network</InputLabel>
                <Select
                  labelId="network-select-label"
                  id="demo-simple-select"
                  label="Network"
                  value={this.state.network}
                  onChange={this.handleNetworkChange}
                >
                  <MenuItem value="testnet">testnet</MenuItem>
                  <MenuItem value="devnet">devnet</MenuItem>
                  <MenuItem value="mainnet-beta">mainnet-beta</MenuItem>
                </Select>
              </FormControl>
              <GenerateButton
                buttonText={this.state.buttonText}
                network={this.state.network}
                destinationAddress={this.state.destinationAddress}
                solAmount={this.state.solAmount}
              />
            </Stack>
          </Container>
        </div>
      </div>
    );
  }
}

export default Home;
