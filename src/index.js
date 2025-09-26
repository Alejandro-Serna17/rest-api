const express = require('express');
const { randomUUID } = require('crypto');
const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Catch bad JSON -> 400
app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && 'body' in err) {
    return res.status(400).json({ error: 'Invalid JSON' });
  }
  next();
});

// **************************************************************
// Put your implementation here
// If necessary to add imports, please do so in the section above

// Data stored in memory
const users = [];

/**
 * 1. Create a User
 * POST /users
 * Body: { name, email }
 * 201 -> { id, name, email }
 * 400 if name/email missing
 */
app.post('/users', (req, res) => {
  const { name, email } = req.body || {};
  if (!name || !email) {
    return res.status(400).json({ error: 'name and email are required' });
  }
  const user = { id: randomUUID(), name, email };
  users.push(user);
  return res.status(201).json(user);
});

/**
 * 2. Retrieve a User
 * GET /users/:id
 * 200 -> { id, name, email }
 * 404 if not found
 */
app.get('/users/:id', (req, res) => {
  const user = users.find(user => user.id === req.params.id);
  if (!user) return res.status(404).json({ error: 'User not found' });
  return res.status(200).json(user);
});

/**
 * 3. Update a User
 * PUT /users/:id
 * Body: { name, email }
 * 200 -> { id, name, email }
 * 400 if missing fields, 404 if not found
 */
app.put('/users/:id', (req, res) => {
  const { name, email } = req.body || {};
  if (!name || !email) {
    return res.status(400).json({ error: 'name and email are required' });
  }
  const idx = users.findIndex(user => user.id === req.params.id);
  if (idx === -1) return res.status(404).json({ error: 'User not found' });

  users[idx] = { id: users[idx].id, name, email };
  return res.status(200).json(users[idx]);
});

/**
 * 4) Delete a User
 * DELETE /users/:id
 * 204 on success, 404 if not found
 */
app.delete('/users/:id', (req, res) => {
  const idx = users.findIndex(user => user.id === req.params.id);
  if (idx === -1) return res.status(404).json({ error: 'User not found' });
  users.splice(idx, 1);
  return res.status(204).send();
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Do not touch the code below this comment
// **************************************************************

// Start the server (only if not in test mode)
if (process.env.NODE_ENV !== 'test') {
    app.listen(port, () => {
        console.log(`Server running at http://localhost:${port}`);
    });
}

module.exports = app; // Export the app for testing