import React from 'react';
import UserPosts from 'components/UserPost';
import { CssBaseline, Container, Typography } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

const FeedPage = () => {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <Container maxWidth="md">
                <Typography variant="h2" align="center" gutterBottom>
                    My App
                </Typography>
                <UserPosts />
            </Container>
        </ThemeProvider>
    );
};

export default FeedPage;
