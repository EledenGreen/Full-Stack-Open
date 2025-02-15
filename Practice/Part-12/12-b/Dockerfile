FROM node:20
WORKDIR /usr/src/app
COPY --chown=node:node . .
RUN npm ci
ENV DEBUG=12-b:*
USER node
CMD npm start