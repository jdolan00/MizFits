import React from 'react';
import { CssBaseline, Container, Typography, Box } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PostForm from 'components/UserPost';
import PostsList from 'components/PostList';
import { theme } from '../../theme';

const FeedPage = () => {
    const headerContainerStyle = {
        paddingTop: "20px",
        paddingBottom: "20px",
        marginBottom: "20px",
    };

    return (
        <Box>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Box sx={headerContainerStyle}>
                    <Container maxWidth="md">
                        <Typography variant="h2" align="center" gutterBottom>
                            Social feed
                        </Typography>
                    </Container>
                </Box>
                <Container maxWidth="md">
                    <PostsList />
                </Container>
            </ThemeProvider>
        </Box>
    );
};

export default FeedPage;
