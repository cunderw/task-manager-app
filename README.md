# THIS WAS MADE WITH COPILOT WORKSPACE - THATS WHY THE CODE SMELLS BAD

# Task Management App

This project is a task management application to help users organize their tasks. It includes features like task creation, editing, and deletion, the ability to set deadlines and reminders for tasks, and a progress tracking feature to monitor task completion.

## Setup and Run

To set up and run the project, follow these steps:

1. Clone the repository:
   ```sh
   git clone https://github.com/githubnext/workspace-blank.git
   cd workspace-blank
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Start the development server:
   ```sh
   npm start
   ```

4. Open your browser and navigate to `http://localhost:3000` to see the application running.

## Backend Setup

To set up and run the backend server, follow these steps:

1. Install the necessary dependencies:
   ```sh
   npm install express prisma sqlite3
   ```

2. Initialize Prisma:
   ```sh
   npx prisma init
   ```

3. Update the `prisma/schema.prisma` file to define your data model.

4. Run the Prisma migrations to set up the SQLite database:
   ```sh
   npx prisma migrate dev --name init
   ```

5. Start the backend server:
   ```sh
   npm run start:server
   ```

## Editor

This project uses Quill as the rich text editor for task descriptions. Quill is a modern WYSIWYG editor built for compatibility and extensibility.

## Contributing

We welcome contributions to the project! To contribute, follow these steps:

1. Fork the repository.
2. Create a new branch for your feature or bugfix.
3. Make your changes and commit them with clear and descriptive messages.
4. Push your changes to your forked repository.
5. Open a pull request to the main repository.

Please make sure to follow the code style and include tests for any new features or bugfixes.
