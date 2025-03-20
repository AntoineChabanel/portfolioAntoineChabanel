# Use a Node.js base image
FROM node:alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all application code into the container
COPY . .

# Expose the port the application listens on
EXPOSE 3000

# Command to start the application
CMD ["npm", "run", "prod"]