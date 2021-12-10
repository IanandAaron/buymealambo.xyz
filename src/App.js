import React from 'react';
import {createTheme,ThemeProvider,CssBaseline} from '@mui/material';
import {Routes,Route} from 'react-router-dom';
import Brightness3Icon from '@mui/icons-material/Brightness3';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import ResponsiveAppBar from './components/ResponsiveAppBar';
import Home from './components/Home';
import About from './components/About'
import './App.css';

class App extends React.Component {
  state = {
    darkState: false,
    setDarkState: false,
  }

  handleThemeChange = () => this.setState({
    darkState: (!this.state.darkState)
  })

  render() {
    const palletType = this.state.darkState ? "dark" : "light";
    const icon = this.state.darkState ? <Brightness7Icon /> : <Brightness3Icon />;
    const darkTheme = createTheme({
      palette: {
        mode: palletType,
      }
    });
    return (
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <div className="App">
          <ResponsiveAppBar
              darkChecked={this.state.darkState}
              icon={icon}
              handler={this.handleThemeChange}
          />
          <Routes>
            <Route
              exact path="/"
              element={
                <Home
                  icon={icon}
                  darkState={this.state.darkState}
                  handleChange={this.handleChange}
                  handleThemeChange={this.handleThemeChange}
                />
              }>
            </Route>
            <Route
              exact path="/Home"
              element={
                <Home
                  icon={icon}
                  darkState={this.state.darkState}
                  handleChange={this.handleChange}
                  handleThemeChange={this.handleThemeChange}
                />
              }>
            </Route>
            <Route
              path="/About"
              element={
                <About />
              }>
            </Route>
          </Routes>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
