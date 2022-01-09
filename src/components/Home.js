import React from "react";
import {
  Container,
  Grid,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@mui/material";
import GenerateButton from "./GenerateButton";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      buttonText: "",
      network: "",
    };
  }

  handleChange = (e) => {
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
          <Container maxWidth="sm">
            <Grid
              container
              spacing={1}
              alignItems="center"
              style={{ minHeight: "100vh" }}
            >
              <Grid item xs={5}>
                <TextField
                  id="filled-basic"
                  label="Button Text"
                  variant="filled"
                  onChange={this.handleChange}
                />
              </Grid>
              <Grid item xs={5}>
                <TextField
                  id="filled-basic"
                  label="Destination Wallet Address"
                  variant="filled"
                  onChange={this.handleDestinationChange}
                />
              </Grid>
              <Grid item xs={5}>
                <TextField
                  id="filled-basic"
                  label="Sol Amount"
                  variant="filled"
                  onChange={this.handleSolAmountChange}
                />
              </Grid>
              <Grid item xs={5}>
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
              </Grid>
              <Grid item xs={5}>
                <GenerateButton
                  buttonText={this.state.buttonText}
                  network={this.state.network}
                  destinationAddress={this.state.destinationAddress}
                  solAmount={this.state.solAmount}
                />
              </Grid>
            </Grid>
          </Container>
        </div>
      </div>
    );
  }
}

export default Home;
