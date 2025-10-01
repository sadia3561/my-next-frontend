# 1. Base image
FROM node:18-alpine AS builder

WORKDIR /app

# 2. Install dependencies
COPY package.json package-lock.json* ./
RUN npm install --legacy-peer-deps

# 3. Copy source & build
COPY . .
RUN npm run build

# 4. Production image
FROM node:18-alpine

WORKDIR /app

# Copy only built files
COPY --from=builder /app/package.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public

EXPOSE 3000
CMD ["npm", "start"]
