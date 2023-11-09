# Use an official Node.js runtime as the base image
FROM node:21 as build

# Set the working directory
WORKDIR /app

# Install Angular CLI globally
RUN npm install -g @angular/cli


# Copy the rest of the application code from your project directory
COPY . .

# Build the Angular app
RUN npm run build 

# Use a smaller image as the final base image
FROM httpd:alpine3.15

WORKDIR /usr/local/apache2/htdocs
# Copy the built app from the previous stage
COPY --from=angular /app/dist/summer-workshop-angular .
