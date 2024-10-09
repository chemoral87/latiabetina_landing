module.exports = {
  apps: [
    {
      name: "Landing",
      exec_mode: "cluster",
      instances: "max", // Or a number of instances
      script: "./node_modules/nuxt/bin/nuxt.js",
      args: "start",
      env: {
        PORT: 3000, // Set the desired port
        NODE_ENV: "production"
      }
    }
  ]
};
