FROM node:18-alpine AS builder
WORKDIR /app/

COPY package.json package-lock.json ./
RUN npm ci

COPY . ./
RUN npm run build

FROM node:18-alpine
WORKDIR /app/

RUN npm i http-server

COPY --from=builder /app/dist/ ./

USER node
CMD npx http-server -p 3000 -d false .
