module.exports = {
  apps : [
    {
      name: 'config-server',
      script: './config-server/target/config-server-0.0.1-SNAPSHOT.jar',
      interpreter: 'java',
      args: '-Xmx256m', // Optional: Limits RAM to save money on GCP
      out_file: "./log/config-server-out.log",
      error_file: "./log/config-server-error.log",
      merge_logs: true
    },
    {
      name: 'service-registry',
      script: './service-registry/target/eureka-server-0.0.1-SNAPSHOT.jar',
      interpreter: 'java',
      args: '-Xmx256m',
      out_file: "./log/service-registry-out.log",
      error_file: "./log/service-registry-error.log",
      merge_logs: true
    },
    {
      name: 'api-gateway',
      script: './api-gateway/target/api-gateway-0.0.1-SNAPSHOT.jar',
      interpreter: 'java',
      args: '-Xmx256m',
      out_file: "./log/api-gateway-out.log",
      error_file: "./log/api-gateway-error.log",
      merge_logs: true
    }
  ],
};