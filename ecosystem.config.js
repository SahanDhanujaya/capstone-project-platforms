module.exports = {
  apps : [
    {
      name: "config-server",
      script: "./config-server/target/config-server-0.0.1-SNAPSHOT.jar",
      args: "",
      interpreter: "java",
      interpreter_args: "-jar",
      log_file: "./log/config-server.log"
    },
    {
      name: "service-registry",
      script: "./service-registry/target/eureka-server-0.0.1-SNAPSHOT.jar",
      interpreter: "java",
      interpreter_args: "-jar",
      log_file: "./log/service-registry.log"
    },
    {
      name: "api-gateway",
      script: "./api-gateway/target/api-gateway-0.0.1-SNAPSHOT.jar",
      interpreter: "java",
      interpreter_args: "-jar",
      log_file: "./log/api-gateway.log"
    }
  ],
};