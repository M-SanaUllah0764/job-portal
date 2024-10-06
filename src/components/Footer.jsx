import React from 'react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <AppBar
            position="static"
            sx={{ backgroundColor: '#FAFAFA', boxShadow: 'none', padding: '5px', mt: 'auto' }}
        >
            <Toolbar sx={{ justifyContent: 'center' }}>
                {/* Footer Links */}
                <Box sx={{ display: 'flex', gap: 3, textAlign: 'center' }}>
                    <Link to="/" style={{ textDecoration: 'none', color: '#000' }}>Home</Link>
                    <Link to="/create-job" style={{ textDecoration: 'none', color: '#000' }}>Create Job</Link>
                </Box>
            </Toolbar>
            <Typography variant="body2" color="textSecondary" align="center" sx={{ py: 1 }}>
                &copy; 2024 Job Portal. All rights reserved.
            </Typography>
        </AppBar>
    );
};

export default Footer;
