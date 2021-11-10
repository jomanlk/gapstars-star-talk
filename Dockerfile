FROM node:16-alpine


WORKDIR '/home/node/app'
COPY . .

RUN npm ci

EXPOSE 3000
CMD [ "node", "index.js" ]
