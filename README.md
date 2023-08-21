# Random GIF Generator with React

This repository contains a simple random GIF generator project built using React. The project allows users to generate random GIFs using the Giphy API. There are two main functionalities: generating a random GIF and generating a random GIF based on a user-entered search term.

## Table of Contents

- [Project Overview](#project-overview)
- [Installation](#installation)
- [Usage](#usage)
- [Live Demo](#live-demo)
- [Dependencies](#dependencies)
- [API Usage](#api-usage)
- [Contributing](#contributing)

## Project Overview

The main functionalities of this random GIF generator project include:

1. **Random GIF**: This part of the application generates a random GIF by making a request to the Giphy API without any specific search term. Users can click a button to get a new random GIF displayed in the first div.

2. **Search-based GIF**: In this part, users can input a search term in an input field and click a button to generate a random GIF related to the entered term. This GIF is then displayed in the second div.

## Installation

To run this project locally, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/SaranshKhandelwal977/Random-Gif-Generator.git
```

2. Navigate to the project directory:

```bash
cd Random-Gif-Generator
```

3. Install the required dependencies:

```bash
npm install
```

## Usage

1. Start the development server:

```bash
npm start
```

2. Open your browser and go to `http://localhost:3000` to access the application.

3. In the first div, click the "Generate Random GIF" button to display a random GIF.

4. In the second div, enter a search term in the input field and click the "Generate GIF" button to display a random GIF related to the entered term.

## Live Demo

Check out the live demo of the project at .


## Dependencies

The project uses the following main dependencies:

- React
- Other necessary packages (installed via `npm install`)

## API Usage

The project uses the Giphy API to fetch random GIFs and search-based GIFs. The API integration code can be found in the relevant components.

## Contributing

Contributions are welcome! If you find any issues or want to add new features, feel free to submit a pull request.

1. Fork the repository.
2. Create a new branch for your feature: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m "Add feature-name"`.
4. Push to the branch: `git push origin feature-name`.
5. Submit a pull request.

