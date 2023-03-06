import { Avatar, AvatarGroup, Box, Divider, ImageList, ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import React from 'react'
import postOne from "../assets/postOne.jpg"
import postTwo from "../assets/postTwo.jpg";
import postThree from "../assets/postThree.jpg";
import avatar from "../assets/avatar.jpg"
const Rightbar = () => {
    const latestPhotos = [
        {
            src: postOne,
            alt: "post one"
        },
        {
            src: postTwo,
            alt: "post two"
        },
        {
            src: postThree,
            alt: "post three"
        },
        {
            src: postOne,
            alt: "post one"
        },
        {
            src: postTwo,
            alt: "post two"
        },
        {
            src: postThree,
            alt: "post three"
        }
    ]
    return (
        <Box flex={2} p={2}
            sx={{ display: { xs: "none", sm: "block" } }}
        >
            <Box position="fixed" width={300}>
                <Typography varaint="h6" fontWeight={300}>
                    Online friends
                </Typography>
                <AvatarGroup max={4}>
                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                    <Avatar alt="Travis Howard" src="/static/images/avatar/2.jpg" />
                    <Avatar alt="Cindy Baker" src="/static/images/avatar/3.jpg" />
                    <Avatar alt="Agnes Walker" src="/static/images/avatar/4.jpg" />
                    <Avatar alt="Trevor Henderson" src="/static/images/avatar/5.jpg" />
                </AvatarGroup>
                <Typography varaint="h6" fontWeight={300} mt={2} mb={2}>
                    Latest photos
                </Typography>
                <ImageList sx={{ width: 500, height: 450 }} cols={3} rowHeight={150} gap={5}>
                    {latestPhotos.map((photo => (
                        <ImageListItem key={photo.alt}>
                            <img src={photo.src} alt={photo.alt} loading="lazy" />
                        </ImageListItem>
                    )))}
                </ImageList>
                <Typography varaint="h6" fontWeight={300} mt={2}>
                    Latest conversations
                </Typography>
                <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Remy Sharp" src={avatar} />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Brunch this weekend?"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        Ali Connors
                                    </Typography>
                                    {" — I'll be in your neighborhood doing errands this…"}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                    <ListItem alignItems="flex-start">
                        <ListItemAvatar>
                            <Avatar alt="Remy Sharp" src={avatar} />
                        </ListItemAvatar>
                        <ListItemText
                            primary="Brunch this weekend?"
                            secondary={
                                <React.Fragment>
                                    <Typography
                                        sx={{ display: 'inline' }}
                                        component="span"
                                        variant="body2"
                                        color="text.primary"
                                    >
                                        Ali Connors
                                    </Typography>
                                    {" — I'll be in your neighborhood doing errands this…"}
                                </React.Fragment>
                            }
                        />
                    </ListItem>
                    <Divider variant="inset" component="li" />
                </List>
            </Box>
        </Box>
    )
}
export default Rightbar;