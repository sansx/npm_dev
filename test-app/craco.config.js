/* craco.config.js */
const path = require(`path`);

module.exports = {
  webpack: {
    alias: {
      'gantt-task-react': path.resolve(__dirname, '../gantt-task-react-0.3.9/dist'),
      'gantt-task-react-css': path.resolve(__dirname, '../gantt-task-react-0.3.9/dist/index.css'),
    },
    configure: webpackConfig => {
      const scopePluginIndex = webpackConfig.resolve.plugins.findIndex(
        ({ constructor }) => constructor && constructor.name === 'ModuleScopePlugin'
      );

      webpackConfig.resolve.plugins.splice(scopePluginIndex, 1);
      return webpackConfig;
    }
  },
};