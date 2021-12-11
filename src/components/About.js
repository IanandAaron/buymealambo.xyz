import React from 'react';
import { Grid, Container } from '@mui/material';

class About extends React.Component {
    render() {
        return (
            <div className="Home">
                <Container maxWidth="sm">
                    <Grid container spacing={5} rowSpacing={6} alignItems="center" columnSpacing={{ xs: 1, sm: 10, md: 50 }}>
                        <Grid item xs={6}>
                            <img src="Aaron.png" alt="Aaron" />
                        </Grid>
                        <Grid item xs={6}>
                        <img src="Ian.jpeg" alt="Ian" />
                        </Grid>
                        <Grid item xs={6}>
                            <p1>aaron likes to make stuff bla bla bla.</p1>
                        </Grid>
                        <Grid item xs={6}>
                            <p1>Ian Stuff</p1>
                        </Grid>
                    </Grid>
                </Container>

            </div>
        )
    }
}

export default About;
