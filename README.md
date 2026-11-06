# Dance Portfolio - React

A personal dance portfolio website built with React, Vite and Material UI. It presents my dance career: biography, projects and performances from 2019 onward, a photo gallery and a contact form.

This is the React rewrite of my original [HTML/CSS/jQuery dance portfolio](https://github.com/FarisKarkelja/personal-dance-portfolio).

## Tech Stack

- React 18
- Vite
- Material UI (MUI) and Emotion
- React Router
- ESLint

## Features

- **Home** - landing page with a full-width hero image
- **About** - biography and profile photo
- **Projects** - performances and projects with year, organizers and collaborators, loaded from a JSON data file
- **Gallery** - responsive masonry image grid
- **Contact** - contact form with client-side validation (name, email format, subject, message)
- Responsive navigation with a collapsible mobile menu
- Custom signature font and dark theme

## Project Structure

```
src/
  components/   Header, Footer
  pages/        Home, About, Projects, Gallery, Contact
  assets/       images, fonts, data.json
  App.jsx       routing and MUI theme
  main.jsx      entry point
```

## Getting Started

Requirements: [Node.js](https://nodejs.org/) 18 or newer.

```bash
git clone https://github.com/FarisKarkelja/dance-portfolio-react.git
cd dance-portfolio-react
npm install
npm run dev
```

Then open the address shown in the terminal (usually http://localhost:5173).

Other scripts:

| Command           | Description                          |
| ----------------- | ------------------------------------ |
| `npm run build`   | Production build into `dist/`        |
| `npm run preview` | Serve the production build locally   |
| `npm run lint`    | Run ESLint                           |

## Note

The contact form validates input on the client side only and does not send messages.
