# Interactive Portfolio

An interactive terminal-themed portfolio built with Next.js, React, and Tailwind CSS.

## Tech Stack

![Next.js](https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![TypeScript](https://img.shields.io/badge/typescript-%23007ACC.svg?style=for-the-badge&logo=typescript&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/tailwind%20css-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

- Node.js (v22.x or later)
- npm

### Installation

1. Clone the repo

   ```sh
   git clone https://github.com/cedrugs/interactive-portfolio.git
   ```

2. Install NPM packages

   ```sh
   npm install
   ```

3. Run the development server

   ```sh
   npm run dev
   ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Available Commands

The portfolio supports the following commands:

| Command      | Description                   |
|--------------|-------------------------------|
| `help`       | List all available commands   |
| `about`      | Learn more about me           |
| `experience` | View my work experience       |
| `techstack`  | See my technical skills       |
| `projects`   | Browse my portfolio projects  |
| `contacts`   | Get my contact information    |
| `cv`         | Download my CV/Resume         |
| `clear`      | Clear the terminal screen     |

## Docker Deployment

To deploy this application using Docker, follow these steps:

1. **Build the Docker image:**

    ```sh
    docker build -t interactive-portfolio .
    ```

2. **Run the Docker container:**

    ```sh
    docker run -p 3000:3000 interactive-portfolio
    ```

Alternatively, you can use Docker Compose:

1. **Build and run the services:**

    ```sh
    docker-compose up
    ```

The application will be available at [http://localhost:3000](http://localhost:3000).

## License

Distributed under the MIT License. See `LICENSE` for more information.
