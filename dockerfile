FROM node:alpine
WORKDIR /app
COPY . ./
RUN yarn
EXPOSE 5000
CMD [ "npm", "start" ]
