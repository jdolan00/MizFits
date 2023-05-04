import React from 'react';
import UserPosts from 'components/UserPost';
import { CssBaseline, Container, Typography, Box } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import MessageForm from 'components/UserPost';

const theme = createTheme();

const FeedPage = () => {
    return (
        <Box>
            <MessageForm />
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Container maxWidth="md">
                    <Typography variant="h2" align="center" gutterBottom>
                        My App
                    </Typography>
                    <UserPosts />
                </Container>
            </ThemeProvider>

        </Box>

    );
};

export default FeedPage;
