#!/usr/bin/env node

const files = process.argv[2] || '.';

const { exec } = require('child_process');

exec('yarn run lint', (error, stdout) => {
  console.log('[ task ] yarn run lint');
  console.log(stdout);

  exec(`git add ${files}`, (error, stdouts) => {
    console.log(error, stdouts);
  });
});
