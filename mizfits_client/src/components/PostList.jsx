import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Card, CardContent, Typography } from '@mui/material';

const PostsList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('http://localhost:3001/');
                const sortedPosts = response.data.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
                setPosts(sortedPosts);
            } catch (error) {
                console.error(error);
            }
        };

        fetchPosts();
    }, []);

    return (
        <Box>
            {posts.map((post) => (
                <Card key={post._id} sx={{ marginBottom: 2, backgroundColor: '#f5f5f5', borderRadius: '5px' }}>
                    <CardContent>
                        <Typography variant="subtitle2" color="textSecondary">
                            {`${post.firstName} ${post.lastName} (${post.email})`}
                        </Typography>
                        <Typography variant="body1" sx={{ marginTop: 1 }}>{post.content}</Typography>
                    </CardContent>
                </Card>
            ))}
        </Box>
    );
};

export default PostsList;
