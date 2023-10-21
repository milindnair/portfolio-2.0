module.exports = {
    webpack: (config) => {
      config.module.rules.push({
        test: /mozjpeg/,
        use: 'null-loader',
      });
  
      return config;
    },
  };
