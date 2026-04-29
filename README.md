## Terminal-like Web Interface

A beautiful and aesthetic start page for your browser that I made for myself, based on this [aesthetic-startpage](https://github.com/stefan-yas/aesthetic-startpage).

![Start Page Demo](startpage.mp4)

https://github.com/user-attachments/assets/5b2821f3-ddb9-4e37-92c9-7e6d2abc6ab1

## Features

### Interactive Terminal Input
- **Placeholder Typing Effect**: The input field displays a typing effect with example queries.
- **Keyboard Shortcuts**:
  - `Ctrl + C`: Clears the input field.
  - `Arrow Up/Down`: Navigates through command history.
  - `Enter`: Executes the command or query.

- **Special Commands**:
  - `r:<query>`: Searches Reddit via Google.
  - `m:<query>`: Searches MyAnimeList via Google.
  - Direct URL input: Navigates to the entered domain.
  - Anything else: Falls through to a Google search.

### Accessibility and Usability
- **Autofocus**: Automatically focuses the input field when the page loads.
- **Keydown Event**: Refocuses the input when typing on the page body.

## Deployment
Fork this repository and deploy it on any static host (Vercel, Netlify, GitHub Pages, etc.). No environment variables or backend are required.
