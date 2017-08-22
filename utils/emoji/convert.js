const fs = require('fs');
const path = require('path');

const input = JSON.parse(fs.readFileSync(path.join(__dirname, 'input.json'), { encoding: 'utf-8' }));

const output = input
  .sort((a, b) => (a.sort_order > b.sort_order ? 1 : -1))
  .reduce((acc, { unified, short_name, category }) => {
    if (!acc[category]) acc[category] = [];

    acc[category].push({
      //id: short_name,
      unicode: unified,
      displayCode: String.fromCodePoint(...unified.split('-').map(u => `0x${u}`))
    });

    return acc;
  }, {});

fs.writeFile(path.join(__dirname, 'emoji.json'), JSON.stringify(output), (err) => {
  const msg = err ? err : 'Emoji processed';
  console.log(msg);
});
