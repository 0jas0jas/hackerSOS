import React from 'react';
import axios from 'axios';

interface MakeIssueProps {
    title: string;
    description: string;
    accessToken: string;
}

const MakeIssue: React.FC<MakeIssueProps> = ({ title, description, accessToken }) => {
    const createIssue = async () => {
        const repo = '0jas0jas/hackerSOS'; // Replace with your repository

        const issueData = {
            title: title,
            body: description,
            labels: ["bug", "help wanted"]
        };

        try {
            const response = await axios.post(`https://api.github.com/repos/${repo}/issues`, issueData, {
                headers: {
                    'Authorization': `token ${accessToken}`,
                    'Accept': 'application/vnd.github.v3+json'
                }
            });
            console.log('Issue created:', response.data);
        } catch (error) {
            console.error('Error creating issue:', error);
        }
    };

    return (
        <div>
            <h1>Create a New Issue</h1>
            <button onClick={createIssue}>
                Create Issue
            </button>
        </div>
    );
};

export default MakeIssue;