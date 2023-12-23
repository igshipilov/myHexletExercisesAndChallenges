import fs from 'fs';

const filepath = 'JS/-staff/_t4.js';

const watch = (cb) => {
  const checkFile = (id) => {
    fs.stat(filepath, (err, stats) => {
      if (err) {
        clearInterval(id);
        cb(err);
        return;
      }
      // const { mtimeMs } = stats;
      cb(null);
    });
  };
  const id = setInterval(() => checkFile(id), 200);

  return id;
};

watch(() => console.log('wow'));
