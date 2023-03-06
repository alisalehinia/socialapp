import { FavoriteBorderRounded, FavoriteRounded, MoreVertRounded, ShareRounded } from '@mui/icons-material';
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material';
import avatar from "../assets/avatar.jpg"

const Post = () => {
    return (
        <Card sx={{ margin: 5 }}>
            <CardHeader
                avatar={
                    <Avatar sx={{ bgcolor: "red" }} aria-label="recipe">
                        R
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertRounded />
                    </IconButton>
                }
                title="Shrimp and Chorizo Paella"
                subheader="September 14, 2016"
            />
            <CardMedia
                component="img"
                height="20%"
                image={avatar}
                alt="Paella dish"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    This impressive paella is a perfect party dish and a fun meal to cook
                    together with your guests. Add 1 cup of frozen peas along with the mussels,
                    if you like.
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <Checkbox icon={<FavoriteBorderRounded />} checkedIcon={<FavoriteRounded sx={{ color: "red" }} />} />
                </IconButton>
                <IconButton aria-label="share">
                    <ShareRounded />
                </IconButton>
            </CardActions>
        </Card>
    );
}

export default Post;