# Node.js Checkpoint — Guided Exercises

This repository contains a set of small Node.js exercises used to learn core concepts: console output, a simple HTTP server, file I/O, password generation, and sending email.

## Contents

- `hello-world.js` — prints "HELLO WORLD" to the console.
- `server.js` — simple HTTP server that responds on port 3000 with `'<h1>Hello Node!!!!</h1>\n'`.
- `createFile.js` — creates `welcome.txt` with the text "Hello Node" and includes a function to read files (reads `hello.txt` if present).
- `password-generator.js` — example password generator using the `generate-password` package.
- `email-sender.js` — example showing how to send an email using `nodemailer` (uses environment variables).
- `package.json` — project manifest and scripts.

## Prerequisites

- Node.js (v14+ recommended). Download and install from https://nodejs.org/
- Internet connection to install npm packages.

## Install

Run from the project root:

```bash
npm install
```

This will install the dependencies declared in `package.json`.

## Quick usage

- Run the HTTP server:

```bash
npm start
```

Then open http://localhost:3000 in your browser. If you get an "address already in use" error, free port 3000 or change the listen address in `server.js`.

- Run the hello script:

```bash
node hello-world.js
```

- Create/read files (will write `welcome.txt` and attempt to read `hello.txt`):

```bash
node createFile.js
```

- Generate a password:

```bash
node password-generator.js
```

- Send a test email (do NOT hardcode credentials). Set the following environment variables before running:

Windows PowerShell example:

```powershell
$env:EMAIL_USER = "you@example.com"
$env:EMAIL_PASS = "your_email_password_or_app_password"
$env:EMAIL_TO = "recipient@example.com"
node email-sender.js
```

## Security & privacy

- Never commit real credentials or personal data. `email-sender.js` is configured to read credentials from environment variables.
- Use an app-specific password (Gmail) or a disposable test account for experiments.

## Notes

- If the server fails to start because port 3000 is already in use, find the process using the port and stop it (for example with `netstat` + `taskkill` on Windows).
- These files are intentionally small and instructional — feel free to extend them for practice.

If you want, I can also: add a `.env` example, change the server port, or create unit tests — which would you prefer next?
