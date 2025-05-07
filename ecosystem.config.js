module.exports = {
    apps: [
      {
        name: "safino",
        cwd: "./",
        script: "npm",
        args: "start ",
        env: {
          NODE_ENV: "production",
          PORT: 9001,
        },
      },
  
    ],
  };



  