import { NextRequest, NextResponse } from 'next/server';
import axios from 'axios';

export async function GET(req: NextRequest) {
    const { searchParams } = new URL(req.url);
    const code = searchParams.get('code');
    const clientId = process.env.NEXT_PUBLIC_GHCLIENTID; // Replace with your GitHub OAuth App Client ID
    const clientSecret = process.env.NEXT_PUBLIC_GHCLIENTSECRET; // Replace with your GitHub OAuth App Client Secret

    try {
        const response = await axios.post('https://github.com/login/oauth/access_token', {
            client_id: clientId,
            client_secret: clientSecret,
            code: code
        }, {
            headers: {
                'Accept': 'application/json'
            }
        });

        const accessToken = response.data.access_token;
        // Store the access token in a session or cookie
        return NextResponse.redirect(`/makeIssue?access_token=${accessToken}`);
    } catch (error) {
        console.error('Error exchanging code for access token:', error);
        return new NextResponse('Authentication failed', { status: 500 });
    }
}