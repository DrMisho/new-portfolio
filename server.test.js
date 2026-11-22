import test from 'node:test';
import assert from 'node:assert/strict';
import http from 'node:http';
import { createApp } from './server.js';

let server;
let baseUrl;

test.before(async () => {
  const app = createApp();
  server = http.createServer(app);
  await new Promise((resolve) => server.listen(0, '127.0.0.1', resolve));
  const { port } = server.address();
  baseUrl = `http://127.0.0.1:${port}`;
});

test.after(async () => {
  await new Promise((resolve, reject) =>
    server.close((err) => (err ? reject(err) : resolve()))
  );
});

test('GET / serves index.html with resume content', async () => {
  const res = await fetch(`${baseUrl}/`);
  assert.equal(res.status, 200);
  assert.match(res.headers.get('content-type') || '', /text\/html/);
  const html = await res.text();
  assert.match(html, /Mustafa/);
  assert.match(html, /Misho/);
  assert.match(html, /id="sideNav"/);
});

test('GET static assets return 200 with expected content types', async () => {
  const assets = [
    ['/css/resume.min.css', /text\/css/],
    ['/js/resume.min.js', /javascript/],
    ['/img/profile.jpg', /image\/jpeg/],
    ['/vendor/bootstrap/css/bootstrap.min.css', /text\/css/],
    ['/vendor/jquery/jquery.min.js', /javascript/],
  ];

  for (const [assetPath, expectedType] of assets) {
    const res = await fetch(`${baseUrl}${assetPath}`);
    assert.equal(res.status, 200, `Expected 200 for ${assetPath}`);
    assert.match(
      res.headers.get('content-type') || '',
      expectedType,
      `Unexpected content-type for ${assetPath}`
    );
  }
});

test('server internals are not exposed publicly', async () => {
  for (const blockedPath of ['/server.js', '/package.json', '/metadata.json']) {
    const res = await fetch(`${baseUrl}${blockedPath}`);
    assert.equal(res.status, 404, `Expected 404 for ${blockedPath}`);
  }
});
