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

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonText: "",
      network: "",
      solAmount: "",
      destinationAddress: "",
      buttonStyling: "",
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

  handleStylingChange = (e) => {
    this.setState({
      buttonStyling: e.target.value,
    });
  };

  render() {
    return (
      <div className="Home">
        <div className="CreateButton" ref={(el) => (this.div = el)}>
          <Container maxWidth="md">
            <Stack spacing={2} alignItems="center" padding={20}>
              <TextField
                fullWidth
                id="filled-basic"
                label="Button Text"
                variant="filled"
                size="small"
                onChange={this.handleButtonChange}
              />
              <TextField
                fullWidth
                id="filled-basic"
                label="Destination Wallet Address"
                variant="filled"
                size="small"
                onChange={this.handleDestinationChange}
              />
              <TextField
                fullWidth
                id="filled-basic"
                label="Sol Amount"
                variant="filled"
                size="small"
                onChange={this.handleSolAmountChange}
              />
              <TextField
                fullWidth
                id="filled-basic"
                label="Styling"
                variant="filled"
                size="small"
                onChange={this.handleStylingChange}
              />
              <FormControl fullWidth>
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
                buttonStyling={this.state.buttonStyling}
              />
            </Stack>
          </Container>
        </div>
      </div>
    );
  }
}

export default Home;
