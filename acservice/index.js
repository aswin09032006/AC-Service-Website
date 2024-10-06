import jsonfile from 'jsonfile';
import moment from 'moment';
import simpleGit from 'simple-git';

const filePath = './data.json';
const git = simpleGit();

// Generate the past 15 days
const past15Days = Array.from({ length: 35 }, (_, i) => moment().subtract(i + 1, 'days').format());

async function commitForPast15Days() {
  for (const dateStr of past15Days) {
    const DATE = moment(dateStr).format(); // Format each date

    // Add data to JSON file with the current date
    const data = { date: DATE };
    await jsonfile.writeFile(filePath, data);

    // Add and commit for the specific date
    await git.add([filePath]);
    await git.commit(`updated on ${DATE}`, { '--date': DATE }); // Set commit date and message
  }

  // Push all the commits after the loop
  await git.push();
}

commitForPast15Days().then(() => {
  console.log('👍');
});
