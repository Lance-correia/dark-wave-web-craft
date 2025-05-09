# Use Node.js LTS version
FROM node:20-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./
COPY prisma ./prisma/

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Generate Prisma client
RUN npx prisma generate

# Build the frontend
RUN npm run build

# Expose ports for frontend and backend
EXPOSE 3000 3001

# Start both frontend and backend services
CMD ["npm", "run", "dev:all"] 