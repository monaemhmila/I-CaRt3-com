# Use a small Node.js base image
FROM node:14-alpine

# Set the working directory to your project directory
WORKDIR /app

# Expose the port that http-server will run on
EXPOSE 4200

# Command to run http-server on the dist directory
CMD ["http-server", "dist", "-p", "8080"]
