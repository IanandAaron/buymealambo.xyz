import React from 'react';
import { Container,Grid,Stack,TextField } from '@mui/material';
import GenerateButton from './GenerateButton';


class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            buttonText: '',
            toAddress: '',
            solAmount: ''
        }
    }

    buttonTextChange = (e) => this.setState({
		buttonText: e.target.value
	})

    toAddressChange = (e) => this.setState({
        toAddress: e.target.value
    })

    solAmountChange = (e) => this.setState({
        solAmount: e.target.value
    })
    
    render() {
        return (
            <div className="Home">
                <div className="CreateButton" ref={el => (this.div = el)}>
                    <Container maxWidth="md">
                        <Stack spacing={2} alignItems="center" padding={20}>
                            <TextField
                                fullWidth
                                id="filled-basic"
                                label="Button Text"
                                variant="filled"
                                size="small"
                                onChange={this.buttonTextChange}
                            />
                            <TextField
                                fullWidth
                                id="filled-basic"
                                label="To Address"
                                variant="filled"
                                size="small"
                                onChange={this.toAddressChange}
                            />
                            <TextField
                                fullWidth
                                id="filled-basic"
                                label="SOL Amount"
                                variant="filled"
                                size="small"
                                onChange={this.solAmountChange}
                            />
                            <GenerateButton buttonText={this.state.buttonText} toAddress={this.state.toAddress} solAmount={this.state.solAmount}/>
                        </Stack>
                    </Container>
                </div>
            </div>
        )
    }
}

export default Home;