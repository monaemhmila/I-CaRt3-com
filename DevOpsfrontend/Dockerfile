# Use an official Node runtime as a parent image
FROM node:14

# Set the working directory in the container
WORKDIR /usr/src/app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install Angular CLI globally
RUN npm install -g @angular/cli

# Install app dependencies
RUN npm npm install --force

# Copy the application files to the container
COPY . .

# Build the Angular app
RUN npm run build

# Expose the port the app runs on
EXPOSE 4200

# Install http-server globally
RUN npm install -g http-server

# Start the http-server to serve the Angular app
CMD ["http-server", "dist"]
