import { AddRounded, DateRangeRounded, EmojiEmotionsRounded, HideImageRounded, PersonAddAlt1Rounded, VideoCameraBackRounded } from "@mui/icons-material";
import { Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, styled, TextField, Tooltip, Typography } from "@mui/material";
import { useState } from "react";
import avatar from "../assets/avatar.jpg";

const StyledModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
})
const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "20px"
})

const Add = () => {
    const [open, setOpen] = useState(false);

    return (
        <>
            <Tooltip title="Delete" sx={{ position: "fixed", bottom: 20, left: { xs: "calc(50% - 25px)", md: 30 } }} onClick={() => setOpen(true)}>
                <Fab color="primary" aria-label="add">
                    <AddRounded />
                </Fab>
            </Tooltip>
            <StyledModal
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box width={400} height={280} bgcolor={"background.default"} color={"text.primary"} p={3} borderRadius={5}>
                    <Typography variant="h6" color="gray" textAlign="center">Create post</Typography>
                    <UserBox>
                        <Avatar src={avatar} sx={{ width: 30, height: 30 }} />
                        <Typography fontWeight={500} variant="span">ali</Typography>
                    </UserBox>
                    <TextField
                        sx={{ width: "100%" }}
                        id="standard-multiline-static"
                        multiline
                        rows={3}
                        placeholder="What's on your mind?"
                        variant="standard"
                    />
                    <Stack direction="row" gap={1} mt={2} mb={3}>
                        <EmojiEmotionsRounded color="primary" />
                        <HideImageRounded color="secondary" />
                        <VideoCameraBackRounded color="success" />
                        <PersonAddAlt1Rounded color="error" />
                    </Stack>
                    <ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group">
                        <Button>Post</Button>
                        <Button sx={{ width: "100px" }}>
                            <DateRangeRounded />
                        </Button>
                    </ButtonGroup>
                </Box>
            </StyledModal>
        </>
    );
}

export default Add;