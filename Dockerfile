FROM node:18.16.0

WORKDIR /app

COPY package*.json ./

COPY prisma ./prisma/

COPY .env ./

COPY tsconfig.json ./

COPY . .

RUN yarn install

RUN yarn prisma generate

EXPOSE 3000 4000

CMD ["yarn","dev"]