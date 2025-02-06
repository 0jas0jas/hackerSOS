import React from 'react';

const LoginButton: React.FC = () => {
    console.log(process.env.NEXT_PUBLIC_GHCLIENTID);
    const clientId = process.env.NEXT_PUBLIC_GHCLIENTID; // Replace with your GitHub OAuth App Client ID
    // const redirectUri = 'https://hacker-sos.vercel.app/api/auth/callback'; // Replace with your redirect URI
    const redirectUri = 'http://localhost:3000/api/auth/callback'; // Replace with your redirect URI


    const loginWithGitHub = () => {
        const githubAuthUrl = `https://github.com/login/oauth/authorize?client_id=${clientId}&redirect_uri=${redirectUri}&scope=repo`;
        window.location.href = githubAuthUrl;
    };

    return (
        <button onClick={loginWithGitHub}>
            Login with GitHub
        </button>
    );
};

export default LoginButton;