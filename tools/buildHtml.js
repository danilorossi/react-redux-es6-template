import fs from 'fs';
import cheerio from 'cheerio';
import colors from 'colors';

/*eslint-disable no-console*/

// check slingshot for other tools

fs.readFile('src/index.html', 'utf8', (err, markup) => {
  if(err) {
    return console.log(err);
  }
  const $ = cheerio.load(markup);

  // since a separate CSS is only utilized for a production build,
  // need to dynamcally ...
  $('head').prepend('<Link rel="stylesheet" href="styles.css">');

  fs.writeFile('dist/index.html', $.html(), 'utf8', function(err) {
    if(err) {
      return console.log(err);
    }
    console.log('index.html written to /dist'.green);
  });
});


