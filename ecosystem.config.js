module.exports = {
  apps : [
    {
      name: "config-server",
      script: "./config-server/target/Config-Server-0.0.1-SNAPSHOT.jar",
      args: "",
      interpreter: "java",
      interpreter_args: "-jar",
      log_file: "./log/config-server.log"
    },
    {
      name: "service-registry",
      script: "./service-registry/target/Service-Registry-0.0.1-SNAPSHOT.jar",
      interpreter: "java",
      interpreter_args: "-jar",
      log_file: "./log/service-registry.log"
    },
    {
      name: "api-gateway",
      script: "./api-gateway/target/Api-Gateway-0.0.1-SNAPSHOT.jar",
      interpreter: "java",
      interpreter_args: "-jar",
      log_file: "./log/api-gateway.log"
    }
  ],
};