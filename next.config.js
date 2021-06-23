const withSass = require('@zeit/next-sass');

module.exports = withSass({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 2,
  },
  webpack: config => {
    config.module.rules.forEach(rule => {
      if (rule.test.toString().includes('.scss')) {
        rule.rules = rule.use.map(useRule => {
          if (typeof useRule === 'string') {
            return { loader: useRule };
          }
          if (useRule.loader === 'css-loader') {
            return {
              oneOf: [
                {
                  test: new RegExp('.global.scss$'),
                  loader: useRule.loader,
                  options: {},
                },
                {
                  loader: useRule.loader,
                  options: { modules: true }
                },
              ],
            };
          }
          return useRule;
        });
        delete rule.use;
      }
    });
    return config;
  },
});

module.exports = (phase, { defaultConfig }) => {
    if (phase === PHASE_DEVELOPMENT_SERVER) {
        return {
        /* development only config options here */
        }
    }

    return {
        /* config options for all phases except development here */
    }
}

module.exports = {
    basePath: '',
    target: 'serverless',
    env: {
      customKey: 'my-value',
      baseURL="https://localhost:3000"
    },
    async rewrites() {
        return [
          {
            source: '/test',
            destination: '/about',
          },
        ]
      },
      async redirects() {
        return [
          {
            source: '/test2',
            destination: '/about',
            permanent: true,
          },
        ]
      },
  }