import { useContext, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';
import { Box } from '@mui/material';
import { AuthContext } from '../context/AuthContext';

const NavBar = () => {
    const { user, logout } = useContext(AuthContext);
    const [anchorEl, setAnchorEl] = useState(null);

    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position="static" sx={{ backgroundColor: '#FAFAFA', boxShadow: 'none', padding: "0px" }}>
            <Toolbar>
                {/* Logo or Title */}
                <Typography variant="h6" sx={{ flexGrow: 1 }}>
                    <Link to="/" style={{ textDecoration: 'none' }}>
                        Job Portal
                    </Link>
                </Typography>

                {/* Menu for large screens */}
                <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                    {user ? (
                        [
                            <MenuItem key="home" style={{ borderRadius: "8px" }} onClick={handleMenuClose}>
                                <Link to="/" style={{ textDecoration: 'none', color: '#000' }}>Home</Link>
                            </MenuItem>,
                            <MenuItem key="create-job" style={{ borderRadius: "8px" }} onClick={handleMenuClose}>
                                <Link to="/create-job" style={{ textDecoration: 'none', color: '#000' }}>Create Job</Link>
                            </MenuItem>,
                            <MenuItem key="logout" style={{ color: '#000', borderRadius: "8px" }} onClick={() => { handleMenuClose(); logout(); }}>Logout</MenuItem>
                        ]
                    ) : (
                        [
                            <MenuItem key="login" style={{ borderRadius: "8px" }} onClick={handleMenuClose}>
                                <Link to="/login" style={{ textDecoration: 'none', color: '#000' }}>Login</Link>
                            </MenuItem>,
                            <MenuItem key="register" style={{ borderRadius: "8px" }} onClick={handleMenuClose}>
                                <Link to="/register" style={{ textDecoration: 'none', color: '#000' }}>Register</Link>
                            </MenuItem>
                        ]
                    )}
                </Box>

                {/* Hamburger Menu for small screens */}
                <IconButton
                    size="large"
                    edge="start"
                    color="inherit"
                    aria-label="menu"
                    sx={{ display: { xs: 'flex', md: 'none', color: '#000' } }}
                    onClick={handleMenuClick}
                >
                    <MenuOpenIcon />
                </IconButton>

                <Menu
                    anchorEl={anchorEl}
                    open={Boolean(anchorEl)}
                    onClose={handleMenuClose}
                    sx={{ display: { xs: 'block', md: 'none' } }}
                >
                    {user ? (
                        [
                            <MenuItem key="home" onClick={handleMenuClose}>
                                <Link to="/" style={{ textDecoration: 'none', color: '#000' }}>Home</Link>
                            </MenuItem>,
                            <MenuItem key="create-job" onClick={handleMenuClose}>
                                <Link to="/create-job" style={{ textDecoration: 'none', color: '#000' }}>Create Job</Link>
                            </MenuItem>,
                            <MenuItem key="logout" onClick={() => { handleMenuClose(); logout(); }}>Logout</MenuItem>
                        ]
                    ) : (
                        [
                            <MenuItem key="login" onClick={handleMenuClose}>
                                <Link to="/login" style={{ textDecoration: 'none', color: '#000' }}>Login</Link>
                            </MenuItem>,
                            <MenuItem key="register" onClick={handleMenuClose}>
                                <Link to="/register" style={{ textDecoration: 'none', color: '#000' }}>Register</Link>
                            </MenuItem>
                        ]
                    )}

                </Menu>
            </Toolbar>
        </AppBar>
    );
};

export default NavBar;
