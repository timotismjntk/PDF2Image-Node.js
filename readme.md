# PDF2Image

PDF2Image is a web application that converts PDF files into images. It takes a URL of a PDF file, a directory path, and a filename as input, and saves the converted images to the specified directory.

## Table of Contents

- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installing](#installing)
- [Running the Application](#running-the-application)
- [Project Structure](#project-structure)
- [Built With](#built-with)
- [License](#license)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have Node.js and npm installed on your machine. This project was built using Node.js v14.15.1 and npm v6.14.8.

### Installing

1. Clone the repository:
    ```bash
    git clone https://github.com/timotismjntk/PDF2Image.git
    ```
2. Navigate into the project directory:
    ```bash
    cd PDF2Image
    ```
3. Install the project dependencies:
    ```bash
    npm install
    ```

## Running the Application

To run the application, you'll need `nodemon`. If you don't have it installed, you can install it globally with:

```bash
npm install -g nodemon
```

Then, start the application with:

```bash
nodemon index.js
```

The application runs on port 3000. Open your browser and visit `http://localhost:3000`

## Project Structure

The project has the following structure:

- `controllers/`
  - `home.js` - Contains the logic for converting PDF to images.
- `routes/`
  - `home.js` - Defines the application routes.
- `views/`
  - `convert.ejs` - The view template for the conversion result.
  - `home.ejs` - The view template for the home page.
- `package.json` - Contains the project dependencies and scripts.
- `index.js` - The entry point for the application.

## Built With

- [Node.js](https://nodejs.org/en/)
- [Express.js](https://expressjs.com/)
- [EJS](https://ejs.co/)
- [pdf-img-convert](https://www.npmjs.com/package/pdf-img-convert)

## License

This project is licensed under the ISC License.