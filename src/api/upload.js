import { google } from 'googleapis';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { file, parentFolderId } = req.body;

      // Create a new OAuth2 client
      const oauth2Client = new google.auth.OAuth2(
        process.env.GOOGLE_CLIENT_ID,
        process.env.GOOGLE_CLIENT_SECRET,
        'http://localhost:3000/api/upload' // Callback URL
      );

      // Generate the URL for the user to authorize the application
      const authUrl = oauth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: ['https://www.googleapis.com/auth/drive.file'],
      });

      // Redirect the user to the authorization URL
      res.status(200).json({ authUrl });
    } catch (error) {
      console.error('Error uploading file:', error);
      res.status(500).json({ error: 'Error uploading file' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}