# Stage 1: Install npm packages with node
FROM node:latest AS builder

# Set the working directory
WORKDIR /app

# Copy package.json and other relevant files
COPY package.json package-lock.json* ./

# Install dependencies with Bun
RUN npm install

# Copy the rest of your app's source code
COPY . .

# RUN bun run gulp build (or any other command you use to build your project)

# Stage 2: Serve with Nginx
# Use the Nginx image from Docker Hub as the base image for this stage
FROM nginx:alpine

# Set the working directory to nginx asset directory
WORKDIR /usr/share/nginx/html

# Remove the default nginx static assets
RUN rm -rf ./*

# Copy static assets from the builder stage
COPY --from=builder /app .

# Expose port 80 to the outside
EXPOSE 80

# Start Nginx and keep it running in the foreground
CMD ["nginx", "-g", "daemon off;"]
