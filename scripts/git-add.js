#!/usr/bin/env node

const files = process.argv[2] || '.';

const { exec } = require('child_process');

// (async () => {
//   console.log('Running task: ', 'yarn run lint');
//   const { error, stdout } = await exec('yarn run lint');
//   console.log(stdout);
//   console.log('Running task: ', `git add ${files}`);
//   await exec(`git add ${files}`);
// })();

exec('yarn run lint', (error, stdout) => {
  console.log('[ task ] yarn run lint');
  console.log(stdout);

  exec(`git add ${files}`, (error, stdouts) => {
    console.log(error, stdouts);
  });
});
