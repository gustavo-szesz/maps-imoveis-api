FROM node:18-alpine

WORKDIR /app

# Copy package.json from project root
COPY ../../../package*.json ./

RUN npm install

# Copy all project files from root
COPY ../../../ .

ENV PORT=3001
ENV GOOGLE_MAPS_API_KEY=your_api_key_here

EXPOSE 3001

CMD ["node", "src/maps-service.js"]