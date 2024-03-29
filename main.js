import { split as spliter } from 'split-khmer';
import express from 'express';


const app = express();
// accept SIGINT signal
process.on('SIGINT', () => {
  console.log('SIGINT signal received: closing HTTP server');
  process.exit(1);
});

app.get("/", (req, res) => {
  return res.status(200).json({ message: 'spliter available at /spliter?q=<YOUR_TEXT>' });
});

app.get("/spliter", (req, res) => {
  const { q } = req.query;
  if (!q) {
    return res.status(400).json({ error: 'Missing required parameter "q"' });
  }
  const result = spliter(q);
  return res.json({ result });
});

// health check
app.get("/health", (req, res) => {
  return res.status(200).json({ message: 'OK' });
});

// return 404 if no route matched
app.use((req, res) => {
  return res.status(404).json({ error: 'Not found' });
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
