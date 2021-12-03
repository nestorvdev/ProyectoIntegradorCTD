# Build
FROM node:8.11 as build-deps
WORKDIR /usr/src/app
COPY package.json ./
RUN npm install
COPY . ./
RUN npm run build

# Serve
FROM httpd:lastest
COPY /frontend/build /var/www/html
CMD [“/usr/sbin/httpd”, “-D”, “FOREGROUND”]
EXPOSE 8080

FROM maven:lastest
WORKDIR /usr/src/mymaven
COPY pox.xml ./
RUN mvn clean package

FROM adoptopenjdk/openjdk11
ARG JAR_FILE=/backend/target/integrador-0.0.1-SNAPSHOT.jar
COPY ${JAR_FILE} app.jar
ENTRYPOINT ["java", "-jar", "app.jar"]
EXPOSE 8080
