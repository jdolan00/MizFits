import React, { useState, useEffect } from 'react';
import axios from 'axios';
import jwt_decode from 'jwt-decode';
import { Box, Card, CardContent, Typography } from '@mui/material';

const PostsList = () => {
    const [posts, setPosts] = useState([]);
    const [user, setUser] = useState(null);

    const fetchUser = async (userId, token) => {
        try {
            const response = await fetch(`http://localhost:3001/api/user/${userId}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${token}`,
                },
            });

            const data = await response.json();
            setUser(data);
        } catch (error) {
            console.error("Error fetching user data:", error);
        }
    };

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get('http://localhost:3001/');
                const sortedPosts = response.data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
                setPosts(sortedPosts);

                const token = localStorage.getItem("token");
                const decoded = jwt_decode(token);
                const userId = decoded.id;

                fetchUser(userId, token);
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
                            {user ? `${user.firstName} ${user.lastName} (${user.email})` : 'Loading...'}
                        </Typography>
                        <Typography variant="body1" sx={{ marginTop: 1 }}>{post.content}</Typography>
                    </CardContent>
                </Card>
            ))}
        </Box>
    );
};

export default PostsList;
