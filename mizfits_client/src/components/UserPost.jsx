import React, { useState } from "react";
import axios from "axios";

const PostForm = () => {
    const [post, setPost] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:3001/posts", { content: post });
            console.log(response.data);
            setPost("");
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={post}
                onChange={(e) => setPost(e.target.value)}
                placeholder="How was your workout?"
            />
            <button type="submit">Submit</button>
        </form>
    );
};

export default PostForm;
