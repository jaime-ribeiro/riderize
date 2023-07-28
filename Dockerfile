FROM node:18.16.0

WORKDIR /app

COPY package*.json ./

COPY .env ./

COPY . .

RUN npm install

EXPOSE 3000

CMD ["npm","run","start:dev"]