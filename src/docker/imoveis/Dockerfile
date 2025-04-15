FROM node:18-alpine

WORKDIR /app

# Copy package.json from project root
COPY ../../../package*.json ./

RUN npm install

# Copy all project files from root
COPY ../../../ .

ENV PORT=3000

EXPOSE 3000

CMD ["node", "src/app.js"]