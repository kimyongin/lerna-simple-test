FROM node:lts-alpine

WORKDIR /usr/src/app
COPY package*.json lerna.json ./
COPY packages/domains ./packages/domains
COPY packages/servers/console ./packages/servers/console

RUN npm install
RUN npx lerna bootstrap --hoist

EXPOSE 80
CMD ["npm", "--prefix", "packages/servers/console", "start"]
