# Use an official Node.js runtime as the base image
FROM node:21 as build

# Set the working directory
WORKDIR /DevOpsfrontend

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install Angular CLI globally
RUN npm install -g @angular/cli


# Copy the rest of the application code from your project directory
COPY . .

# Build the Angular app
RUN npm run build

# Use a smaller image as the final base image
FROM nginx:alpine

# Copy the built app from the previous stage
COPY --from=build /app/dist/DevOpsfrontend /usr/share/nginx/html

# Expose port 80
EXPOSE 8088
