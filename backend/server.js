const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3007;

app.use(cors()); // Enable CORS for all routes
//mock
const users = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
  { id: 2, name: 'Jane Doe', email: 'jane@example.com', role: 'User' },
  { id: 3, name: 'Jali Doe', email: 'jane@example.com', role: 'Admin' },
  { id: 4, name: 'Joli Doe', email: 'jane@example.com', role: 'User' },
  { id: 5, name: 'bola Doe', email: 'jane@example.com', role: 'Admin' },
  { id: 6, name: 'Chris Doe', email: 'chris@example.com', role: 'User' },
  { id: 7, name: 'Eva Doe', email: 'eva@example.com', role: 'Admin' },
//   { id: 8, name: 'Frank Doe', email: 'frank@example.com', role: 'User' },
//   { id: 9, name: 'Grace Doe', email: 'grace@example.com', role: 'Admin' },
//   { id: 10, name: 'Henry Doe', email: 'henry@example.com', role: 'User' },
//   { id: 11, name: 'Ivy Doe', email: 'ivy@example.com', role: 'Admin' },
//   { id: 12, name: 'Jack Doe', email: 'jack@example.com', role: 'User' },
//   { id: 13, name: 'Karen Doe', email: 'karen@example.com', role: 'Admin' },
  { id: 14, name: 'Leo Doe', email: 'leo@example.com', role: 'User' },
  { id: 15, name: 'Mia Doe', email: 'mia@example.com', role: 'Admin' },

];

app.get('/api/users', (req, res) => {
  res.header('Access-Control-Allow-Origin', '*'); // Set CORS headers manually
  res.json(users);
});
// Route to handle the addition of new users (POST request)
app.post('/api/users', (req, res) => {
  const newUser = req.body;

  // Basic server-side validation for the email field
  if (!newUser.email || !newUser.email.match(/^\S+@\S+$/i)) {
    return res.status(400).json({ error: 'Invalid email address' });
  }

  // Add the new user to the list
  users = [...users, { ...newUser, id: users.length + 1 }];

  // Respond with the newly added user
  res.json(users[users.length - 1]);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
