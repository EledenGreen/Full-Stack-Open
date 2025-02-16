FROM node:20
WORKDIR /ur/src/app
COPY . .
RUN npm ci
RUN npm run build
RUN npm install -g serve
CMD ["serve", "dist"]