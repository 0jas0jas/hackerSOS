import React from 'react';
import { Octokit } from '@octokit/rest';

interface MakeIssueProps {
    title: string;
    description: string;
    accessToken: string;
}

const MakeIssue: React.FC<MakeIssueProps> = ({ title, description, accessToken }) => {
    const createIssue = async () => {
        const repo = '0jas0jas/hackerSOS'; // Replace with your repository
        const [owner, repoName] = repo.split('/');

        const octokit = new Octokit({
            auth: accessToken,
        });

        try {
            const response = await octokit.request('POST /repos/{owner}/{repo}/issues/', {
                owner,
                repo: repoName,
                title,
                body: description,
                assignees: ['octocat'],
                labels: ['bug'],
                headers: {
                    'X-GitHub-Api-Version': '2022-11-28'
                }
            });

            console.log('Issue created:', response.data);
        } catch (error) {
            if (error instanceof Error) {
                console.error('Error creating issue:', error.message);
            } else {
                console.error('Unknown error:', error);
            }
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