import { AccountBoxRounded, ArticleRounded, DarkModeRounded, Diversity3Rounded, GroupRounded, HomeRounded, SettingsRounded, StoreRounded } from '@mui/icons-material';
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material';
import React from 'react'

const Sidebar = ({ mode, setMode }) => {
    return (
        <Box flex={1} p={2}
            sx={{ display: { xs: "none", sm: "block" } }}
        >
            <Box position="fixed">
                <List>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#Home">
                            <ListItemIcon>
                                <HomeRounded />
                            </ListItemIcon>
                            <ListItemText primary="HomePage" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#Pages">
                            <ListItemIcon>
                                <ArticleRounded />
                            </ListItemIcon>
                            <ListItemText primary="Pages" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#Groups">
                            <ListItemIcon>
                                <GroupRounded />
                            </ListItemIcon>
                            <ListItemText primary="Groups" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#MarketPlace">
                            <ListItemIcon>
                                <StoreRounded />
                            </ListItemIcon>
                            <ListItemText primary="MarketPlace" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#Friends">
                            <ListItemIcon>
                                <Diversity3Rounded />
                            </ListItemIcon>
                            <ListItemText primary="Friends" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#Settings">
                            <ListItemIcon>
                                <SettingsRounded />
                            </ListItemIcon>
                            <ListItemText primary="Settings" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="a" href="#Profile">
                            <ListItemIcon>
                                <AccountBoxRounded />
                            </ListItemIcon>
                            <ListItemText primary="Profile" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton component="button">
                            <ListItemIcon>
                                <DarkModeRounded />
                            </ListItemIcon>
                            <Switch onChange={() => setMode(mode === "light" ? "dark" : "light")} />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Box>
        </Box>
    )
}
export default Sidebar;
