import React from 'react';

const BlogContext = React.createContext();

const blogPosts = [
    { title: 'Post One #1' },
    { title: 'Post Two #2' },
    { title: 'Post Three #3' },
];

export const BlogProvider = ({ children }) => (
    <BlogContext.Provider value={blogPosts}>{children}</BlogContext.Provider>
);

export default BlogContext;