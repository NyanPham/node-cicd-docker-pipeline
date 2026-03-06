# Automated CI/CD Pipeline for Node.js API 🚀

[![Continuous Integration](https://github.com/NyanPham/node-cicd-docker-pipeline/actions/workflows/ci.yml/badge.svg)](https://github.com/NyanPham/node-cicd-docker-pipeline/actions/workflows/ci.yml)

A complete, production-ready CI/CD workflow demonstrating automated testing, Docker containerization, and continuous deployment using GitHub Actions.

## 🌍 Live Demo
**Live API endpoint:** [https://nyan-cicd-api.onrender.com](https://nyan-cicd-api.onrender.com)
*(Returns a simple JSON response `{"message":"Hello CI/CD!"}`)*

## 🛠️ Technologies & Tools
* **Backend:** Node.js, Express
* **Testing:** Jest, Supertest
* **CI/CD:** GitHub Actions
* **Containerization:** Docker, Docker Hub
* **Cloud Hosting:** Render

## ⚙️ Pipeline Architecture (How it works)
This repository enforces strict branch protection. No direct pushes to the `main` branch are allowed.

1. **Continuous Integration (CI):**
   * Developer creates a `Pull Request` to `main`.
   * GitHub Actions triggers `ci.yml`.
   * Runs isolated Unit Tests via Jest.
   * If tests **PASS**, the PR can be merged. If **FAIL**, merging is blocked to protect the production code.

2. **Continuous Deployment (CD):**
   * Code is merged into `main`.
   * GitHub Actions triggers `cd.yml`.
   * Authenticates with Docker Hub using encrypted `GitHub Secrets`.
   * Builds the Docker image based on the `Dockerfile`.
   * Pushes the `latest` image to Docker Hub (`nyanpham/code-cicd-docker-pipeline`).
   * Render automatically pulls the new image and deploys it to the live server.

## 💻 Local Development

If you want to run this project on your local machine:

```bash
# Clone the repository
git clone https://github.com/NyanPham/node-cicd-docker-pipeline.git

# Install dependencies
npm install

# Run unit tests
npm test

# Start the server locally (Runs on Port 3169)
npm start