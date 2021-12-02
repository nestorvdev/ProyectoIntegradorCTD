# This file is a template, and might need editing before it works on your project.
FROM node:8.11

WORKDIR /frontend/src/index

ARG NODE_ENV
ENV NODE_ENV $NODE_ENV

COPY package.json /frontend/
RUN npm install

COPY . /frontend/src/build

# replace this with your application's default port
EXPOSE 80
CMD [ "npm", "start" ]

FROM adoptopenjdk/openjdk11

ARG JAR_FILE=/backend/target/integrador-0.0.1-SNAPSHOT.jar

COPY ${JAR_FILE} app.jar

ENTRYPOINT ["java", "-jar", "app.jar"]

EXPOSE 8080
