# Use an official Node.js runtime as a base image
FROM node:14-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the Angular application files (assuming dist is already generated)
COPY dist/ .

# Expose the port that http-server will use
EXPOSE 4200

# Start http-server when the container starts
CMD ["npx", "http-server", "dist", "-p", "4200"]
