# React Cinque - Movie & TV Series Search App

## Introduction

React Cinque is a movie and TV series search application built using React and integrated with The Movie Database (TMDb) API. The app allows users to search for movies and TV series, view details, and explore related content. It's designed for film enthusiasts and anyone who wants to discover and keep track of their favorite titles.
![Screen of CinQue app in Chrome browser](pic.jpg)
<br>

## Features

- **Search Functionality**: Users can search for movies, TV shows, and people.
- **Trending Lists**: Displays trending movies and TV shows for the current week.
- **Watchlist**: Users can manage their watchlist for future viewing.


## Contributing

If you would like to contribute to this project, please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature-branch-name`.
3. Make your changes and commit them: `git commit -m 'Add some feature'`.
4. Push to the branch: `git push origin feature-branch-name`.
5. Open a Pull Request.


## Installation

To install the dependencies for this project, run:

```bash
npm install
# or
yarn install
```

## Configuration

### PostCSS Configuration

Create a file named `postcss.config.js` in the root of your project and add the following code:

```javascript
export default {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
}
```

This configuration sets up Tailwind CSS and Autoprefixer to handle your CSS processing.

### Tailwind CSS Configuration

Create a file named `tailwind.config.js` in the root of your project with the following content:

```javascript
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

This configuration enables Tailwind CSS to process your styles based on the specified content files.

## Usage

Once the configurations are set up, you can start developing your application:

```bash
npm run start
# or
yarn start
```

## Project Structure

```

src/
├── api/
|   └── getResults.ts
├── components/
│   ├── MovieTrendCard.tsx
│   ├── Navbar.tsx
│   ├── PersonSearchCard.tsx
│   ├── SearchMovie.tsx
│   ├── MovieSearchCard.tsx
│   └── TVSearchCard.tsx
├── interfaces/
│   ├── changeEvent.tsx
│   ├── tmdbTypes.tsx
├── hooks/
│   └── useModal.ts
├── modals/
│   └── Modal.tsx
├── pages/
│   ├── Que.tsx
│   ├── Search.tsx
    └── Trending.tsx
App.css
App.tsx
index.css
main.tsx

```

<br>

#### Components

- **MovieTrendCard**: Displays trending movies and their details in a card format.
- **Navbar**: Provides navigation links for the main pages of the application.
- **PersonSearchCard**: Displays search results for people.
- **SearchMovie**: A component for handling movie search input and results.
- **MovieSearchCard**: Displays details for individual movies found in search results.
- **TVSearchCard**: Displays details for individual TV shows found in search results.

#### Pages

- **Que**: Displays the user's watchlist.
- **Search**: Allows users to search for movies, TV shows, or people and view the results.
- **Trending**: Displays trending movies and TV shows for the current week.

#### Hooks

- **useModal**: Custom hook for managing modal state and behavior.

#### Modals

- **Modal**: Displays detailed information about the selected movie or TV show in a modal window.

## License

This project is licensed under the [MIT](https://github.com/michalski-marcin/react-cinque-movieapp--in-development/blob/main/LICENSE) License.

## Author

### Marcin Michalski
- [GitHub](https://www.github.com/michalski-marcin)
- [LinkedIn](https://www.linkedin.com/in/michalski-marcin)
- [Webpage](https://www.michalski.pro)
