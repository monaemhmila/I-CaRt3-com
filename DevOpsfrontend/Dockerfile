# Use an official Node.js runtime as the base image
FROM node:latest as node 

# Set the working directory
WORKDIR /app

# Install Angular CLI globally
RUN npm install -g @angular/cli


# Copy the rest of the application code from your project directory
COPY . .

# Build the Angular app
RUN npm run build --prod

# Use a smaller image as the final base image
FROM nginx:alpine

# Copy the built app from the previous stage
COPY --from=node /app/dist/summer-workshop-angular /usr/share/ngix/html
