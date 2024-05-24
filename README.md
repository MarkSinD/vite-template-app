# Project Setup Guide

This guide provides instructions on how to set up and work with this project using various scripts defined in the `package.json` file.

## Prerequisites

Ensure you have Node.js installed on your system. You can check if Node.js is installed by running:

bash node -v


If Node.js is not installed, download and install it from [Node.js official website](https://nodejs.org).

## Installation

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies by running: pnpm install


## Usage

### Development

To start the development server:

pnpm run dev


This command starts the Vite development server, enabling hot module replacement (HMR) during development.

### Building

To build the project for production:

pnpm run build


This script compiles TypeScript files using the TypeScript compiler (`tsc`) and then builds the project using Vite.

### Testing

Run tests with:

pnpm run test


This script runs tests using Vite's testing framework.

### Formatting

To automatically format your code according to ESLint and Prettier rules:

pnpm run format


This script formats JavaScript, TypeScript, and JSON files according to the configured ESLint and Prettier rules.

### Linting

To check for linting errors:

pnpm run lint


This script checks your code against ESLint, Prettier, and TypeScript rules without fixing any issues.

### Generating Components

To generate new components using Vite's component generator:

pnpm run generate


This script generates new Vue components based on the template provided by Vite.

### Cleaning

To clean the `node_modules` directory:

pnpm run clean


This script removes the `node_modules` directory, allowing you to reinstall dependencies.

## Contributing

Contributions are welcome Please follow these steps to contribute:

1. Fork the repository.
2. Create a branch for your feature or fix.
3. Commit your changes following the commit message conventions.
4. Push the branch to your forked repository.
5. Open a pull request.

## License

This project is licensed under the MIT License. See the LICENSE file for details.