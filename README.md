# Luxury Homes Gallery

A responsive React application that showcases 12 luxury home images. The project is structured to ensure modularity and reusability with clearly defined components and styling.

## Demo

![Demo](./public/LuxuryHome.gif)

## Project Structure

```plaintext
src
├── assets
│   └── images
│       ├── home1.jpg
│       ├── home2.jpg
│       └── ... (total 12 images)
├── components
│   ├── Header
│   │   ├── Header.jsx
│   │   └── Header.module.css
│   └── Gallery
│       ├── Gallery.jsx
│       ├── Cards.jsx
│       ├── Cards.module.css
│       └── Gallery.module.css
├── App.js
└── App.css
```

### Components Overview

#### `Header`

- **Purpose**: Contains the page title and buttons for navigation or interaction.
- **Files**:
  - `Header.jsx`: Implements the header structure.
  - `Header.module.css`: Styles the header component.

#### `Gallery`

- **Purpose**: Displays a gallery of cards, each representing a luxury home.
- **Files**:
  - `Gallery.jsx`: Manages the layout of the gallery and renders the cards.
  - `Cards.jsx`: Handles the individual card design and imports the images.
  - `Cards.module.css`: Styles for the cards.
  - `Gallery.module.css`: Styles for the gallery layout.

### Assets

All images are stored in the `assets/images` folder. Ensure that the folder contains 12 high-quality images of luxury homes.

## Styling

- Modular CSS is used to scope styles to individual components.
- Global styles are applied via `App.css`.

## Setup Instructions

1. **Clone the Repository**

   ```bash
   git clone <repository-url>
   cd luxury-homes-gallery
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Start the Development Server**

   ```bash
   npm start
   ```

4. **Build for Production**
   ```bash
   npm run build
   ```

## Features

- **Responsive Design**: Adapts to various screen sizes.
- **Modular Components**: Easy to maintain and extend.
- **High-Quality Images**: Showcases 12 luxury homes with optimized loading.

## Technologies Used

- React.js
- CSS Modules
- JavaScript (ES6+)

## Future Enhancements

- Add a lightbox feature to view images in larger detail.
- Implement filters for sorting homes by type, price, or location.
- Integrate a backend to fetch image data dynamically.

## Author

- [Dzelal](https://github.com/Celal-Dzelal)
