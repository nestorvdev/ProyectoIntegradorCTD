#
# Build React
#
FROM node:14.16.0 as build-deps
WORKDIR /usr/src/app
COPY /frontend/package.json ./
RUN npm install
COPY /frontend/ ./
RUN npm run build

# Serve
FROM httpd:alpine
WORKDIR /var/www/html
COPY --from=build-deps /usr/src/app/build/ .

#
# Build stage
#
FROM maven:3.6.0-jdk-11-slim AS build
COPY /backend/src /home/app/src
COPY /backend/pom.xml /home/app
RUN mvn -f /home/app/pom.xml clean package

#
# Package stage
#
FROM openjdk:11-jre-slim
COPY --from=build /home/app/target/integrador-0.0.1-SNAPSHOT.jar /usr/local/lib/app.jar
EXPOSE 8080
ENTRYPOINT ["java","-jar","/usr/local/lib/app.jar"]
