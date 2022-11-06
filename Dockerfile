FROM node:18.12.0
WORKDIR /dock
COPY package.json /dock
RUN yarn install
COPY . /dock
CMD [ "npm", "run", "dev" ]