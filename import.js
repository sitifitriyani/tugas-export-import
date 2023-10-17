

import panggil from './export.js';

function processFriendsData() {
  console.log('Data Teman Node.js:');
  console.log();
  for (let i = 0; i < panggil.name.length; i++) {
    console.log(`Nama: ${panggil.name[i]}`);
    console.log(`NIM: ${panggil.nim[i]}`);
    console.log();
  }
}

processFriendsData();
