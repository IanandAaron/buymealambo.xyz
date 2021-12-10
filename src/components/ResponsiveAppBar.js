import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import { Link } from 'react-router-dom';
import logo from '../static/images/avatar/logo.jpg'

const pages = ['Home','About'];

class ResponsiveAppBar extends React.Component {
    state = {
        anchorElNav: null,
        setAnchorElNav: null,
    }

    handleOpenNavMenu = (e) => this.setState({
        anchorElNav: e.currentTarget
    })
    handleCloseNavMenu = () => this.setState({
        anchorElNav: null
    })

    render() {
        return (
            <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                >
                    <Avatar alt="Logo" src={logo} />
                </Typography>

                <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                    <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={this.handleOpenNavMenu}
                    color="inherit"
                    >
                    <MenuIcon />
                    </IconButton>
                    <Menu
                    id="menu-appbar"
                    anchorEl={this.state.anchorElNav}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    open={Boolean(this.state.anchorElNav)}
                    onClose={this.handleCloseNavMenu}
                    sx={{
                        display: { xs: 'block', md: 'none' },
                    }}
                    >
                    {pages.map((page) => (
                        <MenuItem
                            key={page}
                            onClick={this.handleCloseNavMenu}
                            component={Link}
                            to={page}
                        >
                            <Typography textAlign="center">{page}</Typography>
                        </MenuItem>
                    ))}
                    </Menu>
                </Box>
                <Typography
                    variant="h6"
                    noWrap
                    component="div"
                    sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                >
                    <Avatar alt="Logo" src={logo} />
                </Typography>
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                    {pages.map((page) => (
                        <Button
                            key={page}
                            component={Link}
                            to={page}
                            onClick={this.handleCloseNavMenu}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                        >
                            {page}
                        </Button>
                    ))}
                </Box>

                <Box sx={{ flexGrow: 0 }}>
                    <IconButton
                        edge="end"
                        color="inherit"
                        aria-label="mode"
                        onClick={this.props.handler}
                    >
                        {this.props.icon}
                    </IconButton>
                </Box>
                </Toolbar>
            </Container>
            </AppBar>
        );
    };
};
export default ResponsiveAppBar;
