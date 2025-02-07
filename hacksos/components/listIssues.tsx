import React, { useEffect, useState } from 'react';
import { Octokit } from '@octokit/rest';

interface Issue {
    id: number;
    title: string;
    body: string | null | undefined;
}

interface ListIssuesProps {
    repoUrl: string;
}

const ListIssues: React.FC<ListIssuesProps> = ({ repoUrl }) => {
    const [issues, setIssues] = useState<Issue[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchIssues = async () => {
            try {
                const octokit = new Octokit();
                const [owner, repo] = repoUrl.split('/');
                const { data } = await octokit.issues.listForRepo({
                    owner,
                    repo,
                });
                setIssues(data.map((issue: any) => ({
                    id: issue.id,
                    title: issue.title,
                    body: issue.body || '',
                })));
                console.log(data);
            } catch (err) {
                setError('Failed to fetch issues');
            } finally {
                setLoading(false);
            }
        };

        fetchIssues();
    }, [repoUrl]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <div>
            <h1>Issues</h1>
            <ul>
                {issues.map(issue => (
                    <li key={issue.id}>
                        <h2>{issue.title}</h2>
                        <p>{issue.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListIssues;