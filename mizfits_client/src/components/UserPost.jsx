import React, { useState, useEffect } from 'react';
import { Container, Grid, Typography, Card, CardContent } from '@mui/material';

const UserPosts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts');
            const data = await response.json();
            setPosts(data);
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
    };

    return (
        <Container maxWidth="md">
            <Typography variant="h4" align="center" gutterBottom>
                User Posts
            </Typography>
            <Grid container spacing={3}>
                {posts.map((post) => (
                    <Grid key={post.id} item xs={12} sm={6} md={4}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6" gutterBottom>
                                    {post.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {post.body}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </Container>
    );
};

export default UserPosts;