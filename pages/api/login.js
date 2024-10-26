import { createClient } from '../../prismicio';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end(); // Only allow POST
  }

  const { username, password } = req.body;

  // Fetch credentials from Prismic CMS or validate from environment variables
  const client = createClient();
  const page = await client.getSingle('reservations', { lang: 'en-ca' });
  const adminUsername = page.data.username;
  const adminPassword = page.data.password;

  if (username === adminUsername && password === adminPassword) {
    // Authentication successful
    return res.status(200).json({ isAuthenticated: true });
  }

  // Authentication failed
  return res.status(401).json({ isAuthenticated: false });
}
