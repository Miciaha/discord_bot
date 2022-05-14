FROM node:16
WORKDIR /src

COPY package*.json /src
RUN npm install --silent

ADD . /src

RUN npm run build

CMD ["npm", "start"]