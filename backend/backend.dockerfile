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
CMD [ "java", "-jar", "./app.jar" ]