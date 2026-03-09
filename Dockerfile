FROM node:lts-alpine3.23

WORKDIR /app

COPY package.json package-lock.json .

# RUN npm ci --only=production
# Install ALL dependencies (including devDependencies) for building
RUN npm ci

COPY . .

RUN npm run build

# EXPOSE 3000

CMD ["npm", "start"]
