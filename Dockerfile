# Etapa 1: Construcción
FROM node:18 AS builder

WORKDIR /app
COPY package*.json ./
RUN npm install --force
COPY . .
RUN npm run build

# Etapa 2: Producción
FROM node:18-alpine

WORKDIR /app
COPY --from=builder /app ./
RUN npm install --production --force

EXPOSE 3000
CMD ["npm", "start"]
