import React, { useState } from "react";
import axios from "axios";
import { Button, TextField, Box, Typography } from "@mui/material";

const PostForm = () => {
    const [post, setPost] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        localStorage.setItem('auth-token', token);
        if (!token) {
            console.error('No token found');
            return;
        }

        try {
            const response = await axios.post('http://localhost:3001/auth/posts', { content: post }, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                },
            });

            console.log('Post created:', response.data);
        } catch (error) {
            console.error('Error creating post:', error);
        }
    };

    const formContainerStyle = {
        backgroundColor: "#ffffff",
        width: "500px",
        maxWidth: "100%",
        borderRadius: "5px",
        padding: "20px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        margin: "20px auto",
    };

    const inputContainerStyle = {
        display: "flex",
        flexDirection: "column",
        marginBottom: "10px",
    };

    const button = {
        backgroundColor: "#000",
    }

    const token = localStorage.getItem("token");
    const user = JSON.parse(atob(token.split('.')[1]));

    return (
        <Box sx={formContainerStyle}>
            <form onSubmit={handleSubmit}>
                <Box sx={inputContainerStyle}>
                    <TextField
                        type="text"
                        value={post}
                        onChange={(e) => setPost(e.target.value)}
                        placeholder="How was your workout?"
                        variant="outlined"
                        fullWidth
                    />
                </Box>
                <Button sx={button} type="submit" variant="contained">
                    Submit
                </Button>
            </form>
        </Box>
    );
};

export default PostForm;
