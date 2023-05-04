import React from 'react';
import { CssBaseline, Container, Typography, Box } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PostForm from 'components/UserPost';
import PostsList from 'components/PostList';

const theme = createTheme();

const FeedPage = () => {
    const headerContainerStyle = {
        backgroundColor: "#000",
        paddingTop: "20px",
        paddingBottom: "20px",
        marginBottom: "20px",
    };

    const headerTextStyle = {
        color: "#ffffff",
    };

    return (
        <Box>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Box sx={headerContainerStyle}>
                    <Container maxWidth="md">
                        <Typography variant="h2" align="center" gutterBottom sx={headerTextStyle}>
                            MizFit
                        </Typography>
                    </Container>
                </Box>
                <Container maxWidth="md">
                    <PostForm />
                    <PostsList />
                </Container>
            </ThemeProvider>
        </Box>
    );
};

export default FeedPage;
