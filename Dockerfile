FROM node:20-alpine
WORKDIR /usr/src/app

COPY package-lock.json package.json ./
RUN npm i
COPY . .
RUN npm run build

CMD ["npm","run", "start:prod"]
