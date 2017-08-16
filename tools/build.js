import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import colors from 'colors';

// this assure the Babel dev config (for hot reloading) doesn't apply
// so no hot reloading code is included in the prod build
process.env.NODE_ENV = 'production';

console.log('Generating minified bundle for production via Webpack. This will take a moment...'.blue);

webpack(webpackConfig).run((err, stats) => {

  if(err) { // fatal error, stop here
    console.log(err.bold.red);
    return 1;
  }

  const jsonStats = stats.toJson();

  if(jsonStates.hasErrors) {
    return jsonStats.errors.map(e => console.log(error.red));
  }

  if(jsonState.hasWarning) {
    console.log(`Webpack generated the following warnings: `.bold.yellow);
    jsonStats.warning.map(w => console.log(w.yellow));
  }

  console.log(`Webpack stats: ${stats}`);

  // build succeded
  console.log('Your app has been compiled in production mode and written to /dist. It\'s ready to roll!'.green);

  return 0;

});
