FROM node:14 AS build
WORKDIR /build

COPY /frontend/package.json package.json
COPY /frontend/package-lock.json package-lock.json
RUN npm ci

COPY /frontend/public/ public
COPY /frontend/src/ src
RUN npm run build

FROM httpd:alpine
WORKDIR /var/www/html
COPY --from=build /build/build/ .

#
# Build stage Java
#
FROM maven:3.6.0-jdk-11-slim AS build-back
COPY /backend/src /home/app/src
COPY /backend/pom.xml /home/app
RUN mvn -f /home/app/pom.xml clean package

#
# Package stage Java
#
FROM openjdk:11-jre-slim
COPY --from=build-back /home/app/target/integrador-0.0.1-SNAPSHOT.jar /usr/local/lib/app.jar
EXPOSE 8080
CMD ["java", "-jar", "app.jar"]
