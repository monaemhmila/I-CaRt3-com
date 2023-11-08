
FROM maven:3.8.3-openjdk-17 AS build

WORKDIR /DevOps_Project
COPY src /home/app/src
COPY pom.xml /home/app
RUN mvn -f /home/app/pom.xml clean package
EXPOSE 8080
EXPOSE 8082
ADD target/DevOps_BackEnd.jar DevOps_BackEnd.jar
ENTRYPOINT ["java", "-jar", "/DevOps_BackEnd.jar"]