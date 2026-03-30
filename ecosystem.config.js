module.exports = {
  apps : [
      {
        name: 'config-server',
        script: 'java -jar ./config-server/target/Config-Server-0.0.1-SNAPSHOT.jar',
        log_file: "./log/config-server.log"
      },
    {
      name: 'service-registry',
      script: 'java -jar ./service-registry/target/Service-Registry-0.0.1-SNAPSHOT.jar',
      log_file: "./log/service-registry.log"
    },
    {
      name: 'api-gateway',
      script: 'java -jar ./api-gateway/target/Api-Gateway-0.0.1-SNAPSHOT.jar',
      log_file: "./log/api-gateway.log"
    }
  ],
};
