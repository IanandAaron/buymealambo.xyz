import React from 'react';
import { Container,Grid,TextField } from '@mui/material';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import GenerateButton from './GenerateButton';


class Home extends React.Component {
    state = {
        buttonText: ''
    }

    handleChange = (e) => this.setState({
		buttonText: e.target.value
	})

    render() {
        return (
            <div className="Home">
                <div className="CreateButton" ref={el => (this.div = el)}>
                    <Container maxWidth="sm">
                    <Grid container spacing={1} alignItems="center" style={{ minHeight: '100vh' }}>
                        <Grid item xs={2}>
                        <AccountBalanceWalletIcon />
                        </Grid>
                        <Grid item xs={5}>
                        <TextField
                            id="filled-basic"
                            label="Button Text"
                            variant="filled"
                            onChange={this.props.handleChange}
                        />
                        </Grid>
                        <Grid item xs={5}>
                        <GenerateButton buttonText={this.state.buttonText}/>
                        </Grid>
                    </Grid>
                    </Container>
                </div>
            </div>
        )
    }
}

export default Home;