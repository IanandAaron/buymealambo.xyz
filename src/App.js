import React from 'react';
import {Container,Grid,TextField,createTheme,ThemeProvider,CssBaseline} from '@mui/material'
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ResponsiveAppBar from './components/ResponsiveAppBar'
import GenerateButton from './components/GenerateButton';
import './App.css';

class App extends React.Component {
  state = {
    darkState: false,
    setDarkState: false,
    buttonText: ''
  }

  handleChange = (e) => this.setState({
		buttonText: e.target.value
	})
  handleThemeChange = (e) => this.setState({
    darkState: (!this.state.darkState)
  })

  render() {
    const palletType = this.state.darkState ? "dark" : "light";
    const darkTheme = createTheme({
      palette: {
        mode: palletType,
      }
    });
    return (
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <div className="App">
          <ResponsiveAppBar darkChecked={this.state.darkState} handler={this.handleThemeChange}/>
          <div className="CreateButton" ref={el => (this.div = el)}>
            <Container maxWidth="sm">
              <Grid container spacing={0} alignItems="center" style={{ minHeight: '100vh' }}>
                <Grid item xs={2}>
                  <AccountBalanceWalletIcon />
                </Grid>
                <Grid item xs={5}>
                  <TextField id="filled-basic" label="Button Text" variant="filled" onChange={this.handleChange} />
                </Grid>
                <Grid item xs={5}>
                  <GenerateButton buttonText={this.state.buttonText}/>
                </Grid>
              </Grid>
            </Container>
          </div>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
