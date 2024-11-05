# Hello Web App

Sample containerized web app that I use in my demos - Nothing special

- [Introduction](#introduction)
- [Getting Started](#getting-started)
- [Running the Application](#running-the-application)
- [Building and Pushing Docker Image](#building-and-pushing-docker-image)
- [License](#license)

## Getting Started

### Prerequisites

- Node.js (version 14 or later)
- Docker
- GitHub account with repository secrets set for Docker Hub credentials (`DOCKER_USERNAME` and `DOCKER_PASSWORD`)

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/your-username/hello-web-app.git
    cd hello-web-app
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

## Running the Application

1. Start the application:
    ```sh
    node app.js
    ```

2. Open your browser and navigate to `http://localhost:3000` to see the web app.

## Building and Pushing Docker Image

This project uses GitHub Actions to automate the building and pushing of Docker images.

### Workflow

The workflow is defined in [`.github/workflows/docker-publish.yml`](.github/workflows/docker-publish.yml). It triggers on pushes and pull requests to the `main` branch.

### Steps

1. Checkout the repository
2. Set up Docker Buildx
3. Log in to Docker Hub
4. Build and push the Docker image to Docker Hub

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.