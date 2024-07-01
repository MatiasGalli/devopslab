FROM node:22-alpine3.19

WORKDIR /usr/src/app

#MISC Files
COPY package*.json ./
COPY tsconfig*.json ./
COPY nest-cli.json ./

#Install
RUN npm install
COPY . .

#Build
RUN npm run build
EXPOSE 3000

#Run executable
CMD ["npm", "run", "start:prod"]
