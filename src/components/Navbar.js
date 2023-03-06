import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, styled, Toolbar, Typography } from '@mui/material';
import React, { useState } from 'react'
import Diversity1RoundedIcon from '@mui/icons-material/Diversity1Rounded';
import { Mail, Notifications } from '@mui/icons-material';
import avatar from "../assets/avatar.jpg"
const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "space-between",

})
const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: "40%"
}))
const Icons = styled(Box)(({ theme }) => ({
    display: "none",
    gap: "20px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {   //if screen size is smaller than sm breakpoint 
        display: "flex"
    }
}))
const UserBox = styled(Box)(({ theme }) => ({
    display: "flex",
    gap: "10px",
    alignItems: "center",
    [theme.breakpoints.up("sm")]: {
        display: "none"
    }
}))
const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <AppBar position='sticky'>
            <StyledToolbar>
                <Typography variant='h6' sx={{ display: { xs: "none", sm: "block" } }}>
                    netFork
                </Typography>
                <Diversity1RoundedIcon sx={{ display: { xs: "block", sm: "none" } }} />
                <Search><InputBase placeholder='Search...' /></Search>
                <Icons>
                    <Badge badgeContent={4} color="error">
                        <Mail />
                    </Badge>
                    <Badge badgeContent={2} color="error">
                        <Notifications />
                    </Badge>
                    <Avatar sx={{ width: "30px", height: "30px" }} src={avatar} onClick={() => setOpen(true)} />
                </Icons>
                <UserBox>
                    <Avatar sx={{ width: "30px", height: "30px" }} src={avatar} onClick={() => setOpen(true)} />
                    <Typography variant='span'>Ali</Typography>
                </UserBox>
            </StyledToolbar>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                open={open}
                onClose={() => setOpen(false)}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <MenuItem>Profile</MenuItem>
                <MenuItem>My account</MenuItem>
                <MenuItem>Logout</MenuItem>
            </Menu>
        </AppBar>
    )
}
export default Navbar;